import React from 'react';
import "../styling/button.css";

const Button = ({buttonText, onClick}) => {
  return (
    <button className='custom-button' onClick={onClick}>{buttonText}</button>
  )
}

export default Button