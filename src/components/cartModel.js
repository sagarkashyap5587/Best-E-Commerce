import React, { useEffect, useState } from 'react'
import "../styling/cartModel.css";
import { images } from '../assests';
import Mock from "../mock.json";
import { Link, useNavigate } from 'react-router-dom';
import Button from "./button";
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveCartItem } from '../utils/handleCart';
import { addToCart, removeToQuantity } from '../redux/action';


const mockdata = [...Mock.imageData, ...Mock.imageData3];

const handleCheckOut = () => {}

export const CartModel = ({ isModalOpen, setIsModalOpen }) => {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.product.data)
  const addToCartData = mockdata.filter(cartItem =>
    cartData.some(mockItem => mockItem.id === cartItem.id)
  );

  const navigate = useNavigate();

  const handleCart = () => {
    navigate('/cart')
    setIsModalOpen(null)
  }

  const handleRemove = (id) => {
    handleRemoveCartItem(id, dispatch)
  }

  const updateQuantity = (id) => {
    dispatch(addToCart({id:id}))
  }

  const decreaseQuantity = (id) => {
    dispatch(removeToQuantity({id: id}))
  }
  const handleContinueShopping = () => {
    navigate('/shop')
    setIsModalOpen(null)
  }
  useEffect(() => {
    const totalPrice = addToCartData.reduce((acc, item) => {
      const cartItem = cartData.find(cartItem => cartItem.id === item.id);
      const totalItemQuantity = cartItem ? cartItem.quantity : 1;
      return acc + totalItemQuantity * item.price;
    }, 0);
    setPrice(totalPrice);
  }, [addToCartData, cartData]);
  return (
    <>
      {
        isModalOpen && (
          <div className='cart-model-overlay'>
            <div className='cart-model'>
              <div>
                <div className='shopping-heading3'>
                  <h3>Shopping</h3>
                  <Link><p onClick={() => setIsModalOpen(null)}>{images.cross}</p></Link>
                </div>
                <div className='line4'></div>
                <div className='cart-items-container'>
                  {
                    addToCartData.map((item, index) => {
                      const cartItem = cartData.find(cartItem => cartItem.id === item.id);
                      const itemQuantity = cartItem ? cartItem.quantity : 1;
                      return (
                        <div>
                          <div key={index} className='cart-item'>
                            <img src={item.image} />
                            <div>
                              <h3>{item.name}</h3>
                              <button onClick={() => decreaseQuantity(item.id)}>-</button>
                              <input type='text' value={itemQuantity}></input>
                              <button onClick={() => updateQuantity(item.id)}>+</button>
                            </div>
                            <div className='remove-cart-item'>
                              <Link><p onClick={() => handleRemove(item.id)}>{images.cross}</p></Link>
                              <h3>${item.price}.00</h3>
                            </div>

                          </div>
                          <div className='line5'></div>
                        </div>

                      )
                    })

                  }
                </div>
                {
                  addToCartData.length <= 0 ? (
                    <div className='continue-shopping'>
                      <Button buttonText={"CONTINUE SHOPPING"} onClick={handleContinueShopping} ></Button>
                    </div>
                  ) : <div>
                    <div className='line6'></div>
                    <div className='subtotal'>
                      <h3>Subtotal</h3>
                      <p>{price}</p>
                    </div>
                    <div className='line7'></div>
                    <div className='view-cart'><Button buttonText={"VIEW CART"} onClick={handleCart}></Button></div>
                    <div className='checkout'><Button buttonText={"CHECKOUT"} onClick={handleCheckOut}></Button></div>
                  </div>
                }

              </div>
            </div>

          </div>
        )
      }

    </>
  )
}


