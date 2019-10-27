use either::Either;
use indexmap::IndexMap;
use serde_json::{self, Value};
use std::{
    fmt::{self, Display},
    iter::empty,
};

#[derive(Debug, Clone)]
pub struct Node<'a> {
    json: &'a serde_json::Value,
    ellipsis: &'a serde_json::Value,
    children: Option<IndexMap<String, Node<'a>>>,
}

impl<'a> Node<'a> {
    pub fn new(json: &'a serde_json::Value, ellipsis: &'a serde_json::Value) -> Node<'a> {
        Node {
            json,
            ellipsis,
            children: None,
        }
    }

    pub fn open(&mut self) {
        if self.children.is_some() {
            return;
        }

        let mut children = IndexMap::new();
        match self.json {
            Value::Object(map) => {
                for (k, v) in map {
                    children.insert(k.clone(), Node::new(v, self.ellipsis));
                }
            }
            Value::Array(list) => {
                for (i, elem) in list.iter().enumerate() {
                    children.insert(i.to_string(), Node::new(elem, self.ellipsis));
                }
            }
            _ => {}
        }
        self.children = Some(children);
    }

    pub fn children(
        &mut self,
    ) -> Either<
        ::indexmap::map::IterMut<String, Node<'a>>,
        ::std::iter::Empty<(&'a String, &'a mut Node<'a>)>,
    > {
        match self.children {
            Some(ref mut children) => Either::Left(children.iter_mut()),
            None => Either::Right(empty()),
        }
    }
}

impl Display for Node<'_> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.children {
            Some(ref children) => match self.json {
                Value::Object(_) => {
                    write!(f, "{{")?;
                    for (i, (k, v)) in children.iter().enumerate() {
                        if i > 0 {
                            write!(f, ",")?;
                        }
                        write!(f, "{}:{}", Value::String(k.clone()), v)?;
                    }
                    write!(f, "}}")
                }
                Value::Array(_) => {
                    write!(f, "[")?;
                    for (i, (_, v)) in children.iter().enumerate() {
                        if i > 0 {
                            write!(f, ",")?;
                        }
                        write!(f, "{}", v)?;
                    }
                    write!(f, "]")
                }
                x => write!(f, "{}", x),
            },
            None => write!(f, "{}", self.ellipsis),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    #[test]
    fn it_works() {
        let data = json!({"a":1,"b":true});
        let ellipsis = json!("...");
        Node::new(&data, &ellipsis);
    }

    #[test]
    fn it_is_converted_into_ellipsis() {
        let data = json!({"a":1});
        let ellipsis = json!("...");
        let node = Node::new(&data, &ellipsis);
        assert_eq!(&node.to_string(), r#""...""#);
    }

    #[test]
    fn it_is_opened_and_converted_into_json() {
        let data = json!({"a":1,"b":2});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        node.open();
        assert_eq!(&node.to_string(), r#"{"a":"...","b":"..."}"#);
    }

    #[test]
    fn it_doesnt_open_array_recursively() {
        let data = json!([1, {"a":1}]);
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        node.open();
        assert_eq!(&node.to_string(), r#"["...","..."]"#);
    }

    #[test]
    fn it_has_children() {
        let data = json!({"a":1});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        node.open();
        let children = node.children();
        assert_eq!(children.count(), 1);
    }

    #[test]
    fn it_can_convert_from_no_child_to_string() {
        let data = json!({});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        node.open();
        assert_eq!(&node.to_string(), "{}");
    }
}
