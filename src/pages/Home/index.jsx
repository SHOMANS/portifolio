import * as S from "./style";
import { useState, useEffect } from "react";
import Btns from "../../components/Btns";
import Sides from "../../components/Sides";
import { Back } from "../../components/BackSide/style";

export default function Home() {
  const [inside, setInside] = useState(false);
  const [counter, setCounter] = useState(0);
  const [verticalanimetion, setVerticalAnimetion] = useState(0);
  const [horizentalanimetion, setHorizentalAnimetion] = useState(0);
  const [dinmentinalanimetion, setDinmentinalAnimetion] = useState(0);
  const [animetion, setAnimetion] = useState("");
  const [rotating, setRotating] = useState(
    "rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
  );
  const sideClick = () => {
    // setSide(e.target.name);
    // console.log("side " + side);
    console.log("object");
    setInside(true);
  };

  const handleClick = (e) => {
    const animetionBtn = e.target.name;
    setAnimetion(animetionBtn);
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log(rotating);
    if (animetion === "left") {
      console.log("left");
      if (
        horizentalanimetion / 180 === 1 ||
        horizentalanimetion / 180 === -1 ||
        horizentalanimetion === 0
      ) {
        setVerticalAnimetion(verticalanimetion + 90);
      } else {
        setDinmentinalAnimetion(dinmentinalanimetion - 90);
      }
    }

    if (animetion === "left") {
      // console.log("right");
      console.log(Math.sin((horizentalanimetion * Math.PI) / 180));
      // console.log(horizentalanimetion);
      if (Math.cos((horizentalanimetion * Math.PI) / 180) === 1) {
        console.log("0--360");
        setVerticalAnimetion(verticalanimetion + 90);
      } else if (Math.cos((horizentalanimetion * Math.PI) / 180) === -1) {
        setVerticalAnimetion(verticalanimetion - 90);
        console.log("180");
        // 180
      } else if (Math.sin((horizentalanimetion * Math.PI) / 180) === 1) {
        console.log("90");
        setDinmentinalAnimetion(dinmentinalanimetion - 90);
        // 90
      } else if (Math.sin((horizentalanimetion * Math.PI) / 180) === -1) {
        console.log("270");
        setDinmentinalAnimetion(dinmentinalanimetion + 90);
      }
    }
    if (animetion === "right") {
      // console.log("right");
      console.log(Math.sin((horizentalanimetion * Math.PI) / 180));
      // console.log(horizentalanimetion);
      if (Math.cos((horizentalanimetion * Math.PI) / 180) === 1) {
        console.log("0--360");
        setVerticalAnimetion(verticalanimetion - 90);
      } else if (Math.cos((horizentalanimetion * Math.PI) / 180) === -1) {
        setVerticalAnimetion(verticalanimetion + 90);
        console.log("180");
        // 180
      } else if (Math.sin((horizentalanimetion * Math.PI) / 180) === 1) {
        console.log("90");
        setDinmentinalAnimetion(dinmentinalanimetion + 90);
        // 90
      } else if (Math.sin((horizentalanimetion * Math.PI) / 180) === -1) {
        console.log("270");
        setDinmentinalAnimetion(dinmentinalanimetion - 90);
      }
    }
    if (animetion === "up") {
      setHorizentalAnimetion(horizentalanimetion - 90);
    }
    if (animetion === "down") {
      setHorizentalAnimetion(horizentalanimetion + 90);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animetion, counter]);

  useEffect(() => {
    setRotating(
      "rotateX(" +
        horizentalanimetion +
        "deg) rotateY(" +
        verticalanimetion +
        "deg) rotateZ(" +
        dinmentinalanimetion +
        "deg)"
    );
    // console.log(rotating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verticalanimetion, horizentalanimetion, dinmentinalanimetion]);

  return (
    <>
      <Btns handleClick={handleClick} />
      <S.Wrapper rotating={rotating} inside={inside}>
        <div>
          <Sides
            id="front"
            className="front"
            handleClick={handleClick}
            sideClick={sideClick}
          >
            <h1>Shoman</h1>
            <p>We will let you be intirested when you want to know us</p>
          </Sides>
          <Back
            id="front"
            className="front"
            handleClick={handleClick}
            sideClick={sideClick}
          ></Back>
          <Sides
            id="right"
            className="right"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Sides>
          <Back
            id="right"
            className="right"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Back>
          <Sides
            id="back"
            className="back"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Sides>
          <Back
            id="back"
            className="back"
            // handleClick={handleClick}
            // sideClick={sideClick}
          >
            {" "}
            <div>
              <h3></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                officiis nesciunt itaque architecto sapiente numquam odio
                tempora quas quidem fugit nulla ullam esse consectetur et amet,
                dolor ex neque pariatur.
              </p>
            </div>
          </Back>
          <Sides
            id="left"
            className="left"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Sides>
          <Back
            id="left"
            className="left"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Back>
          <Sides
            id="top"
            className="top"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Sides>
          <Back
            id="top"
            className="top"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Back>
          <Sides
            id="bottom"
            className="bottom"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Sides>
          <Back
            id="bottom"
            className="bottom"
            // handleClick={handleClick}
            // sideClick={sideClick}
          ></Back>
        </div>
      </S.Wrapper>
    </>
  );
}
