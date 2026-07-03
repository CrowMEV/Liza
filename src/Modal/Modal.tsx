import "./modal.css";
import { useState } from "react";

type ModalProps = {
  text: string;
  danger?: boolean;
};
function Modal({ text, danger }: ModalProps) {
  const modalClass = danger ? "danger" : "default";
  return <div className={`modal ${modalClass}`}>{text}</div>;
}

export function PopUp() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {open && <Modal text="Hello" danger />}
      <button onClick={() => setOpen((old) => !old)}>Open</button>
    </>
  );
}
