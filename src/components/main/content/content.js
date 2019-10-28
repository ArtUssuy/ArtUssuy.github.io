import React from "react";

import Card from "./../../card/card";
import "./styles.scss";

const Content = () => {

    const bikes = [
        {
            photo: "https://i.pinimg.com/564x/e0/51/f4/e051f4e77ac0d18819c5c6f79cc10624.jpg",
            frame: "Langster Street",
            fork: "Factory Carbon",
            rims: "Mavic Open Sport",
            hubs: "Grancompe",
        },
        {
            photo: "https://i.pinimg.com/564x/a7/05/4b/a7054bd9645248186f3d7784bc18cd37.jpg",
            frame: "Colossi All Colossione",
            fork: "Factory Carbon",
            rims: "Mavic Open Sport",
            hubs: "Grancompe",
        },
        {
            photo: "https://i.pinimg.com/564x/ca/0f/c7/ca0fc777134eb7e051d465f2e4711d23.jpg",
            frame: "Airwalk Vintage",
            fork: "Airwalk Hi-ten",
            rims: "Vzan Spin",
            hubs: "Quanta",
        },
        {
            photo: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/74230406_10222231352075961_5748497624692948992_n.jpg?_nc_cat=100&_nc_oc=AQnPmGJF0FwOzhRgvkGkgt4eIPEs2RmO27O9NRUcrAesAa64j0xIN7OhkY70WDAJpBrVMWDt2G5JG3ZPogNnKHky&_nc_ht=scontent.fcgh7-1.fna&oh=02b16aecd0e84d87cc294e0839588e2a&oe=5E23420A",
            frame: "Colnago Track",
            fork: "Colnago Fork",
            rins: "Colnago Rim",
            hubs: "Colnago Hubs",
        },


    ]

    return (
        <div className="main-wrapper">
            <main className="main">
                {
                    bikes.map((bike, index) => <Card bike={bike} key={index}/>)
                }
            </main>
        </div>
    )
}

export default Content;
