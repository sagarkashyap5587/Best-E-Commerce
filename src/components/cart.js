import React from 'react'
import "../styling/cart.css";
import { images } from '../assests/index';
import { Link } from 'react-router-dom';
import Mock from "../mock.json";
import Button from "./button";
const Cart = () => {

    const handleCheckout = () => {

    }
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
                            Mock.imageData.map((item, index) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{images.cross}</td>
                                            <td><img src={item.image} alt={item.name} className="product-image" /></td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>
                                                <button className="quantity-btn">-</button>
                                                <input className='cart-quatity-detail' type='text' value={1} />
                                                <button className="quantity-btn">+</button>
                                            </td>
                                            <td>500</td>
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
                                    <p>400</p>
                                </div>
                                <div className='price-quantity-details'>
                                    <p>Total</p>
                                    <p>120</p>
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