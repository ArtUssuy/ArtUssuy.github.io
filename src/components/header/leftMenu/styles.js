import styled from "styled-components";

export const OpacScreen = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: -10000px;
  left: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 1s;
`;
