import React from 'react';
import { Container }  from "./styles";

const Card = ({image}) => {

    return (
        <Container className="card" style={{backgroundImage: `url(${image})`}} />
    )
}

export default Card;
