import { h } from "preact";
import style from "./ConversionSign.css";

type Props = {};

export default function ConversionSign({  }: Props) {
  return (
    <div className={style.container}>
      <span className={style.sign}>&gt;&gt;</span>
    </div>
  );
}
