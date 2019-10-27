import { h } from "preact";
import "preact-material-components/TextField/style.css";
import TextField from "preact-material-components/ts/TextField";
import style from "./Input.css";

type Props = {
  value: string;
  onChange?: (value: string) => void;
};

export default function Input({ value, onChange = () => {} }: Props) {
  return (
    <TextField
      className={style.mdc}
      label="JSON"
      textarea
      value={value}
      onInput={(event: any) => onChange(event.currentTarget.value)}
    />
  );
}
