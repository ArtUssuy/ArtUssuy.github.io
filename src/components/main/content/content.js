import React from "react";

import Card from "./card/card";
import "./styles.scss";

const Content = () => {

    const images = [
        "https://i.pinimg.com/564x/e0/51/f4/e051f4e77ac0d18819c5c6f79cc10624.jpg",
        "https://i.pinimg.com/564x/a7/05/4b/a7054bd9645248186f3d7784bc18cd37.jpg",
        "https://i.pinimg.com/564x/6b/b6/1f/6bb61f48a5d46a08abe3d0f37945b569.jpg"
    ];

    return (
        <main className="main">
            {
                images.map((image, index) => <Card image={image} key={index}/>)
            }
        </main>
    )
}

export default Content;
