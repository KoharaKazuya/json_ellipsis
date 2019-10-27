import "highlight.js/styles/github.css";
import { h } from "preact";
import "preact-material-components/Elevation/style.css";
import Elevation from "preact-material-components/ts/Elevation";
import { AbortableAsyncResult } from "../../hooks/useLatestAsync";
import AreaTitle from "../AreaTitle/AreaTitle";
import style from "./PreviewArea.css";

type Props = {
  value: AbortableAsyncResult<string>;
};

export default function PreviewArea({ value }: Props) {
  const __html =
    value.state === "pending"
      ? "Loading..."
      : value.state === "resolved"
      ? value.result
      : `Error!\n${value.error}`;
  return (
    <div>
      <AreaTitle>Output</AreaTitle>
      <Elevation
        className={[style.viewArea, style[value.state]].join(" ")}
        z={4}
      >
        <pre class={style.code}>
          <code dangerouslySetInnerHTML={{ __html }} />
        </pre>
      </Elevation>
    </div>
  );
}
