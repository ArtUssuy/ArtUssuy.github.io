import React from 'react';
import { Container, Background, Info }  from "./styles";

const Card = ({bike}) => {

    return (
        <Container>
            <Background style={{backgroundImage: `url(${bike.photo})`}} />
            <Info>
                <ul>
                    <li>{bike.frame}</li>
                </ul>
            </Info>
        </Container>

    )
}

export default Card;
