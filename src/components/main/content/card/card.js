import React from 'react';
import { Container, Background, Info }  from "./styles";

const Card = ({bike}) => {

    return (
        <Container>
            <Background style={{backgroundImage: `url(${bike.photo})`}} />
            <Info>
                <ul>
                    <li>Frame: {bike.frame}</li>
                    <li>Fork: {bike.fork}</li>
                    <li>Rims: {bike.rims}</li>
                    <li>Hubs: {bike.hubs}</li>
                </ul>
            </Info>
        </Container>

    )
}

export default Card;
