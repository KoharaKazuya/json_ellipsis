mod node;
mod opener;

use node::Node;
use opener::Opener;
use serde_json;
use std::{
    default::Default,
    error,
    fmt::{self, Display},
};

#[derive(Debug)]
pub struct Options<'a> {
    pub max_bytes: usize,
    pub ellipsis: &'a str,
}

impl Default for Options<'_> {
    fn default() -> Self {
        Options {
            max_bytes: 100 * 1024,
            ellipsis: r#""...""#,
        }
    }
}

#[derive(Debug)]
pub struct Output {
    pub json: String,
}

#[derive(Debug)]
pub enum Error {
    JsonParseError(serde_json::Error),
    EllipsisParseError(serde_json::Error),
}

impl Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

impl error::Error for Error {}

pub fn run(input: &str, options: Options) -> Result<Output, Error> {
    let json = serde_json::from_str(input).map_err(Error::JsonParseError)?;
    let ellipsis = serde_json::from_str(options.ellipsis).map_err(Error::EllipsisParseError)?;
    let mut root = Node::new(&json, &ellipsis);

    let opener = Opener::new(options.max_bytes);
    opener.open_tree(&mut root);

    Ok(Output {
        json: root.to_string(),
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_consumes_string() {
        run(r#""test""#, Options::default()).unwrap();
    }

    #[test]
    fn it_replaces_with_ellipsis_to_omit_big_property_value() {
        let input = r#"{ "test": "012345678901234567890123456789" }"#;
        let output = run(
            input,
            Options {
                max_bytes: 30,
                ellipsis: r#""...""#,
            },
        )
        .unwrap();
        assert_eq!(&output.json, r#"{"test":"..."}"#);
    }
}
