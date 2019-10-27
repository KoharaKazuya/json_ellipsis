import { h } from "preact";
import { useState } from "preact/hooks";
import useJsonEllipsis from "../hooks/useJsonEllipsis";
import Header from "./Header/Header";
import HomeLayout from "./HomeLayout/HomeLayout";
import InputArea from "./InputArea/InputArea";
import PreviewArea from "./PreviewArea/PreviewArea";

const initialJSON = JSON.stringify({
  id: 1,
  author: "KoharaKazuya <reflect.results@gmail.com>",
  title: "json-ellipsis",
  repository: "https://github.com/KoharaKazuya/json_ellipsis",
  tags: [
    "json",
    {
      type: "technology",
      items: ["typescript", "rust", "wasm-bidngen", "webworkers", "preact"]
    }
  ]
});
const initialMaxBytes = 128;
const initialEllipsis = JSON.stringify("...");

export default function App() {
  const [input, setInput] = useState(initialJSON);
  const [maxBytes, setMaxBytes] = useState(initialMaxBytes);
  const [ellipsis, setEllipsis] = useState(initialEllipsis);
  const output = useJsonEllipsis(input, maxBytes, ellipsis);

  return (
    <HomeLayout
      header={<Header />}
      left={
        <InputArea
          ellipsis={ellipsis}
          onEllipsisChange={setEllipsis}
          value={input}
          onChange={setInput}
          maxBytes={maxBytes}
          onMaxBytesChange={setMaxBytes}
        />
      }
      right={<PreviewArea value={output} />}
    />
  );
}
