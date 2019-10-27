import { ComponentChild, h } from "preact";
import "preact-material-components/LayoutGrid/style.css";
import LayoutGrid from "preact-material-components/ts/LayoutGrid";
import ConversionSign from "./ConversionSign/ConversionSign";

type Props = {
  header: ComponentChild;
  left: ComponentChild;
  right: ComponentChild;
};

export default function HomeLayout({ header, left, right }: Props) {
  return (
    <div>
      {header}
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols={5}>{left}</LayoutGrid.Cell>
          <LayoutGrid.Cell cols={2}>
            <ConversionSign />
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols={5}>{right}</LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    </div>
  );
}
