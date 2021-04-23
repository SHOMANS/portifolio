import * as S from "./style";
// import { useState, useEffect } from "react";
import Icons from "../Icons";

export default function Btns({ handleClick }) {
  return (
    <S.BtnsWrapper>
      <div>
        <button className="up" name="up" onClick={handleClick}>
          <Icons iconName="caret-up" />
        </button>
      </div>
      <div>
        <button className="left" name="left" onClick={handleClick}>
          <Icons iconName="caret-left" />
        </button>
        <button className="right" name="right" onClick={handleClick}>
          <Icons iconName="caret-right" />
        </button>
      </div>
      <div>
        <button className="down" name="down" onClick={handleClick}>
          <Icons iconName="caret-down" />
        </button>
      </div>
    </S.BtnsWrapper>
  );
}
