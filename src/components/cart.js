import React, { useEffect, useState } from 'react'
import "../styling/cart.css";
import { images } from '../assests/index';
import { Link } from 'react-router-dom';
import Mock from "../mock.json";
import Button from "./button";
import { addToCart, removeToQuantity , removeToCart} from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
const mockdata = [...Mock.imageData, ...Mock.imageData3];

const Cart = () => {
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.product.data)
    const addToCartData = mockdata.filter(cartItem =>
        cartData.some(mockItem => mockItem.id === cartItem.id)
    );

    const handleCheckout = () => {
        
    }

    function handleUpdateQuantity(id) {
        dispatch(addToCart({ id: id }))
    }

    function handleRemoveQuantity(id) {
        dispatch(removeToQuantity({ id: id }))
    }

    function handleRemoveItem(id) {
        dispatch(removeToCart({id: id}))
    }

    useEffect(() => {
        const totalPrice = addToCartData.reduce((acc, item) => {
            const cartItemData = cartData.find(cartItem => cartItem.id === item.id)
            const totalItemQuantity = cartItemData ? cartItemData.quantity : 1;
            return acc + totalItemQuantity * item.price
        }, 0);
        setPrice(totalPrice);
    }, [addToCartData, cartData])

    return (
        <>
            <div>
                <div className='line9'></div>
                <div className='cart-detail-display'>
                    <Link className='cart-detail-display'>
                        <p className='one'>1</p>
                        <p>SHOPPING CART</p>
                        <p>{images.next}</p>
                    </Link>
                    <Link className='cart-detail-display'>
                        <p className='one'>2</p>
                        <p>CHECKOUT DETAILS</p>
                        <p>{images.next}</p>
                    </Link>
                    <div className='cart-detail-display'>
                        <p className='one'>3</p>
                        <p>ORDER COMPLETE</p>
                        <p>{images.next}</p>
                    </div>
                </div>
                <h1 className='cart-main-heading'>Cart</h1>
                <div className='cart-item-detail-show'>
                    <table className='table-content'>
                        <thead>
                            <tr>

                                <th></th>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        {
                            addToCartData.map((item, index) => {
                                const cartItem = cartData.find(cartItem => cartItem.id === item.id);
                                const itemQuantity = cartItem ? cartItem.quantity : 1;
                                // Mock.imageData.map((item, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td onClick={() => handleRemoveItem(item.id)}>{images.cross} </td>
                                            <td><img src={item.image} alt={item.name} className="product-image" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="quantity-btn" onClick={() => handleRemoveQuantity(item.id)}>-</button>
                                                <input className='cart-quatity-detail' type='text' value={itemQuantity} />
                                                <button className="quantity-btn" onClick={() => handleUpdateQuantity(item.id)}>+</button>
                                            </td>
                                            <td>{itemQuantity * item.price}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>

                    <table className='table-content2'>
                        <thead>
                            <tr>
                                <th>Cart Totals</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <div className='price-quantity-details'>
                                    <p>Subtotal</p>
                                    <p>{price}</p>
                                </div>
                                <div className='price-quantity-details'>
                                    <p>Total</p>
                                    <p>{price}</p>
                                </div>
                                <div className='coupon-heading'>
                                    <p>Have a coupon ?</p>
                                </div>
                                <div className='proceed-button'>
                                    <Button buttonText={"PROCEED TO CHECKOUT"} onClick={handleCheckout}></Button>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cart