import React from "react";


function Stores(props) {

    return <stores>
        <h1>
            {props.city}
        </h1>
        <img src={props.img} alt="LoungeArea" />
        <p>{props.branch}</p>

        <button>Book Now</button>
    </stores >
}
export default Stores;