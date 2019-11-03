import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 50%;
  min-width: 400px;
  height: 400px;
  cursor: pointer;
  :hover div,
  div div {
    transform: scale(1.2);
    opacity: 1;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: all 0.5s;
`;

export const Anchor = styled.a`
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 25px;
`;

export const ListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const List = styled.li`
  display: block;
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 25px;
  font-family: "Calibri Regular";
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.8s;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    li {
      font-size: 40px;
      color: #fff;
      font-family: "Calibri Regular";
    }
  }
`;
