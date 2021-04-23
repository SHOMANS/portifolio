import * as S from "./style";
// import { useState } from "react";

export default function Sides({ id, className, children, sideClick }) {
  // const [openBox, setOpenBox] = useState(false);
  // const handleClick = () => {
  //   console.log("object");
  //   setOpenBox(!openBox);
  // };
  return <S.Back className={className}>{children}</S.Back>;
}
