import styled from "styled-components";

export const Back = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border: 2px solid black;
  line-height: 600px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  border-radius: 5px;
  transition: transform 1s ease-in-out;
  overflow: hidden;
  ${(props) =>
    props.openBox
      ? "transform: rotateX(-70deg) translateZ(300px) !important;  transform-origin: bottom center;"
      : ""};
  /* backface-visibility: hidden; */
  transform: translateZ(300px);
  pointer-events: none;
`;
