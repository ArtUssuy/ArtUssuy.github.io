import React from "react";
import { Container, Background, Info, Anchor, List, ListItem } from "./styles";

const Card = ({ content }) => {
  return (
    <Container>
      <Background style={{ backgroundImage: `url(${content.photo})` }} />
      <Info>
        <List>
          <ListItem>
            {content.description.url ? (
              <Anchor href={content.description.url} target="_blank"></Anchor>
            ) : (
              content.name
            )}
          </ListItem>
        </List>
      </Info>
    </Container>
  );
};

export default Card;
