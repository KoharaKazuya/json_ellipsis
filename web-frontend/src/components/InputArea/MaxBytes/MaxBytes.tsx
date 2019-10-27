import { h } from "preact";
import "preact-material-components/Slider/style.css";
import "preact-material-components/TextField/style.css";
import Slider from "preact-material-components/ts/Slider";
import TextField from "preact-material-components/ts/TextField";
import style from "./MaxBytes.css";

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

export default function MaxBytes({ value, onChange = () => {} }: Props) {
  return (
    <div className={style.container}>
      <TextField
        className={style.text}
        label="Max Bytes"
        type="number"
        value={String(value)}
        onInput={(event: any) => {
          const n = Number(event.target.value);
          console.log(n);
          if (!Number.isNaN(n)) onChange(n);
        }}
      />
      <Slider
        className={style.slider}
        min={0}
        max={30}
        step={1}
        value={Math.round(Math.log(value) / Math.log(2))}
        onInput={(event: any) => onChange(2 ** event.detail.value)}
      />
    </div>
  );
}
