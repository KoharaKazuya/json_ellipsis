import { h } from "preact";
import "preact-material-components/TextField/style.css";
import TextField from "preact-material-components/ts/TextField";
import style from "./Ellipsis.css";

type Props = {
  value: string;
  onChange?: (value: string) => void;
};

export default function Ellipsis({ value, onChange = () => {} }: Props) {
  return (
    <TextField
      className={style.field}
      label="Ellipsis"
      value={value}
      onInput={(event: any) => onChange(event.currentTarget.value)}
    />
  );
}
