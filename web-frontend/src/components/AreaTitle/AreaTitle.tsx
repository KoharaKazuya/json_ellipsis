import { ComponentChildren, h } from "preact";
import Typography from "preact-material-components/ts/Typography";
import "preact-material-components/Typography/style.css";
import style from "./AreaTitle.css";

type Props = {
  children: ComponentChildren;
};

export default function AreaTitle({ children }: Props) {
  return (
    <div className={style.title}>
      <Typography headline3>{children}</Typography>
    </div>
  );
}
