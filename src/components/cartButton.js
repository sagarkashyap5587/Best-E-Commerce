import React from "react";
import { images } from "../assests";
import "../styling/home.css"

export const CartIcon = ({onClick}) => {
    return (
        <div className="cart-button-hover" onClick= {onClick}>{images.cart}
        </div>
    )
}


export const EyeIcon = () => {
    return (
        <div className="eye-button-hover">{images.eye}</div>
    )
}


