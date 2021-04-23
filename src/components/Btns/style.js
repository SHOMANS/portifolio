import styled from "styled-components";

export const BtnsWrapper = styled.div`
  /* z-index: -1; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 50px;
  transform: scale(0.001);
  animation: btns 2s ease-in-out 1 forwards;
  animation-delay: 3s;
  & > div {
    display: flex;
    justify-content: center;
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }

  & button {
    /* position: fixed; */
    background: inherit;
    color: aquamarine;
    width: 80px;
    height: 80px;
    border: none;
    z-index: 9999;
    padding: 15px;
    font-size: 50px;
    animation: btns 500ms ease-in-out 12 forwards;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    &:hover {
      opacity: 1;
      border: 1px solid aquamarine;
    }
    & svg {
      pointer-events: none;
    }
  }
  .up {
    top: 50px;
  }
  .down {
    bottom: 50px;
  }
  .right {
    right: 100px;
  }
  .left {
    left: 100px;
  }

  @keyframes btns {
    0% {
      transform: scale(0.001);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes shaking {
    0% {
      transform: scale(0.99);
    }
    100% {
      transform: scale(1);
    }
  }
`;
