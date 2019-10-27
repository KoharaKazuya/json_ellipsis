use json_ellipsis::{self, Options};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run(json: &str, max_bytes: usize, ellipsis: &str) -> Result<String, JsValue> {
    let output = json_ellipsis::run(
        json,
        Options {
            max_bytes,
            ellipsis,
        },
    )
    .map_err(|e| format!("json-ellipsis error: {:?}", e))?;

    Ok(output.json)
}
