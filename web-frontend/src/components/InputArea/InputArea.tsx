import { h } from "preact";
import AreaTitle from "../AreaTitle/AreaTitle";
import Ellipsis from "./Ellipsis/Ellipsis";
import Input from "./Input/Input";
import style from "./InputArea.css";
import MaxBytes from "./MaxBytes/MaxBytes";

type Props = {
  ellipsis: string;
  onEllipsisChange?: (ellipsis: string) => void;
  value: string;
  onChange?: (input: string) => void;
  maxBytes: number;
  onMaxBytesChange?: (maxBytes: number) => void;
};

export default function InputArea({
  ellipsis,
  onEllipsisChange = () => {},
  value,
  onChange = () => {},
  maxBytes,
  onMaxBytesChange = () => {}
}: Props) {
  return (
    <div className={style.formGroups}>
      <AreaTitle>Input</AreaTitle>
      <Ellipsis value={ellipsis} onChange={onEllipsisChange} />
      <MaxBytes value={maxBytes} onChange={onMaxBytesChange} />
      <Input value={value} onChange={onChange} />
    </div>
  );
}
