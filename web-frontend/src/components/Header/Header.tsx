import { h } from "preact";
import "preact-material-components/TopAppBar/style.css";
import TopAppBar from "preact-material-components/ts/TopAppBar";

type Props = {};

export default function Header({  }: Props) {
  return (
    <TopAppBar onNav={() => {}} style={{ position: "static" }}>
      <TopAppBar.Row>
        <TopAppBar.Section>
          <TopAppBar.Title>json-ellipsis</TopAppBar.Title>
        </TopAppBar.Section>
      </TopAppBar.Row>
    </TopAppBar>
  );
}
