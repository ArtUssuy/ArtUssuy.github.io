import React from "react";
import { Container, Background, Info } from "./styles";

const Card = ({ content }) => {
  return (
    <Container>
      <Background style={{ backgroundImage: `url(${content.photo})` }} />
      <Info>
        <ul>
          <li>{content.name}</li>
        </ul>
      </Info>
    </Container>
  );
};

export default Card;
