use super::node::Node;
use std::collections::VecDeque;

pub struct Opener {
    max_bytes: usize,
}

impl Opener {
    pub fn new(max_bytes: usize) -> Self {
        Opener { max_bytes }
    }

    pub fn open_tree(&self, root: &mut Node) {
        let mut size = current_size(root);
        let mut wait_list = WaitList::new();
        let root_size = (current_size(root), opened_size(root));
        wait_list.push((root, root_size.0, root_size.1));

        while let Some((node, cs, os)) = wait_list.pop() {
            if os > cs && size + os - cs > self.max_bytes {
                break;
            }

            node.open();
            size = size + os - cs; // calculate in order to negative overflow

            for (_, v) in node.children() {
                let node_size = (current_size(v), opened_size(v));
                wait_list.push((v, node_size.0, node_size.1));
            }
        }
    }
}

fn current_size(node: &Node) -> usize {
    node.to_string().bytes().count()
}

fn opened_size(node: &Node) -> usize {
    let mut cloned = node.clone();
    cloned.open();
    current_size(&cloned)
}

#[derive(Debug)]
struct WaitList<'a, 'b>(VecDeque<(&'a mut Node<'b>, usize, usize)>);

impl<'a, 'b> WaitList<'a, 'b> {
    fn new() -> Self {
        WaitList(VecDeque::new())
    }

    fn push(&mut self, value: (&'a mut Node<'b>, usize, usize)) {
        for (i, x) in self.0.iter().enumerate() {
            if value.2 < x.2 {
                self.0.insert(i, value);
                return;
            }
        }
        self.0.push_back(value);
    }

    fn pop(&mut self) -> Option<(&'a mut Node<'b>, usize, usize)> {
        self.0.pop_front()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_json::json;

    #[test]
    fn it_opens_node() {
        let opener = Opener::new(::std::usize::MAX);
        let data = json!("abcdef");
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        opener.open_tree(&mut node);
        assert_eq!(node.to_string(), r#""abcdef""#);
    }

    #[test]
    fn it_opens_node_recursively() {
        let opener = Opener::new(::std::usize::MAX);
        let data = json!({"a":1});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        opener.open_tree(&mut node);
        assert_eq!(node.to_string(), r#"{"a":1}"#);
    }

    #[test]
    fn it_doesnt_open_node_beyond_max() {
        let opener = Opener::new(20);
        let data = json!({"a":"01234567890123456789"});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        opener.open_tree(&mut node);
        assert_eq!(node.to_string(), r#"{"a":"..."}"#);
    }

    #[test]
    fn it_opens_too_small_node() {
        let opener = Opener::new(::std::usize::MAX);
        let data = json!({});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        opener.open_tree(&mut node);
        assert_eq!(node.to_string(), "{}");
    }

    #[test]
    fn it_keeps_opening_up_to_the_limit() {
        let opener = Opener::new(34);
        let data = json!({"a":"0123","b":"01234","c":"012345"});
        let ellipsis = json!("...");
        let mut node = Node::new(&data, &ellipsis);
        opener.open_tree(&mut node);
        assert_eq!(node.to_string(), r#"{"a":"0123","b":"01234","c":"..."}"#);
    }
}
