import React from 'react'
import { addToCart, removeToCart } from '../../redux/action';

export const handleCartItem = (id, data, dispatch) => {

    const existingItem = data.find(item => item.id===id);
    if(existingItem) {
     dispatch(addToCart({id:id}))
     alert("Item Updated Successfully")   
    } else {
        dispatch(addToCart({id:id}))
        alert("Item Added Successfully")
    }
}


export const handleRemoveCartItem = (id, dispatch) => {
    dispatch(removeToCart({id:id}));
}

