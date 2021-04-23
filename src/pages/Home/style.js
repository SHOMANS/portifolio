import styled from "styled-components";

export const Wrapper = styled.div`
  height: 600px;
  width: 600px;
  margin: auto;
  margin-top: 190px;
  border: none;
  perspective: 1400px;
  /* perspective-origin: center; */
  & > div {
    perspective: 14000px;
    border: none;
    width: 600px;
    height: 600px;
    position: relative;
    /* transform-origin: center center 300px; */
    transform-style: preserve-3d;
    animation: spinCube 5s 1 ease;
    transition: all 1s ease-in-out;
    /* transform-origin: center; */
    ${(props) => props.inside && "perspective: 900px;"}
    transform: ${(props) =>
      props.rotating || "translateZ(0) rotateX(0deg) rotateY(0deg)"};
    ${(props) => props.inside && "animation: goIn 2s ease-in-out 1 forwards;"}
    .front {
      transform: rotateY(0deg) translateZ(300px);
      background: #116677cc;
    }
    .right {
      transform: rotateY(90deg) translateZ(300px);
      background: #445566cc;
    }
    .back {
      transform: rotateY(180deg) translateZ(300px);
      background: #116677cc;
    }
    .left {
      transform: rotateY(-90deg) translateZ(300px);
      background: #445566cc;
    }
    .left:nth-of-type(2) {
      transform: rotateY(-90deg) translateZ(300px) scaleX(-1);
      background: #445566cc;
    }
    .top {
      transform: rotateX(90deg) translateZ(300px);
      background: #115599cc;
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(300px);
      background: #115599cc;
    }
  }

  @keyframes spinCube {
    0% {
      left: -17000px;
      top: -4000px;
      transform: translateZ(-9999px) rotateX(1440deg) rotateY(2880deg);
    }
    50% {
      left: 2000px;
      top: 1000px;
    }
    100% {
      top: 0;
      left: 0;
      transform: translateZ(0) rotateX(0deg) rotateY(0deg);
    }
  }

  @keyframes goIn {
    0% {
      transform: rotateX(0) translateZ(0, 0, 0);
    }
    100% {
      transform: rotateX(0) translate3d(0, 0, 900px);
    }
  }
`;
