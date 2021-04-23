import * as S from "./style";
import { useState } from "react";

export default function Sides({ id, className, children, sideClick }) {
  const [openBox, setOpenBox] = useState(false);
  const handleClick = () => {
    console.log("object");
    setOpenBox(!openBox);
  };
  return (
    <>
      <S.Front
        id={id}
        className={className}
        openBox={openBox}
        onClick={() => {
          handleClick();
          sideClick();
        }}
      >
        {children}
      </S.Front>
    </>
  );
}
