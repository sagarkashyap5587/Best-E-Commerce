import React from 'react'
import "../styling/home.css";
import { Link } from 'react-router-dom';
import Button from './button';
import { images } from '../assests';
import { CartIcon } from './cartButton';
import { EyeIcon } from './cartButton';
import Mock from "../mock.json";
import { useDispatch, useSelector } from 'react-redux';
import { handleCartItem } from '../utils/handleCart';

let star = [];
for (var i = 0; i < 5; i++) {
  star.push(images.star)
}


const Home = () => {

  const cartItems = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const Image1 = Mock.imageData[0];

  const handleCart = (id) => {
    handleCartItem(id, cartItems, dispatch); 
  }

  // redux

  const handleReadMore = () => {}
  const handleButton = () => {}

  return (
    <>
      <div className='main-background-color'>
        <div className='complete-width'>
          <div className='divide-width1'>
            <div className='main-text'>
              <h4>Plants</h4>
              <h1>Bird of Paradise Plant</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris effictur elementum.</h3>
              <div className='price-button'>
                <span>$65.00</span> $50.00
                <Button buttonText={"ADD TO CART"} onClick={() => handleCart(2)}></Button>
              </div>
            </div>
          </div>
          <div className='divide-width2'>
            <Link><img src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/12/hero.png' /></Link>
          </div>
        </div>
      </div>

      <div className='main-heading2'>
        <h4>Special Offers</h4>
        <h1>Unique deals & offers every single day</h1>
      </div>

      <div className='special-offer-image'>
        <div className='aloe-juvenna-plant-image1'><img src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/12/plant-img.jpg' alt='Plant1' /></div>

        <div className='aloe-juveena-name'>
          <Link className='aloe-juvenna-plant-image2 img'>
            <img src={Image1.image} alt='Plant2' />
            <CartIcon onClick={() => handleCart(Image1.id)} />
            <EyeIcon />
          </Link>
          <h4>{Image1.type}</h4>
          <Link className='aloe-name-heading1'><h2>{Image1.name}</h2></Link>
          <p>{star}</p>
          <p>${Image1.price}</p>
        </div>
      </div>

      <div className='main-heading2'>
        <h4>Shop</h4>
        <h1>Most Popular Plant</h1>
      </div>

      <div className='image-data1'>
        {
          Mock.imageData.map((item, index) => {
            return (
              <div key={index} >
                <Link className='mock-json-image'><img src={item.image} alt={item.name} />
                  <CartIcon onClick={() => handleCart(item.id)} />
                  <EyeIcon />
                </Link>
                <div className='image-text1'>
                  <h5>{item.type}</h5>
                  <Link className='item-name'>{item.name}</Link>
                  <p>{star}</p>
                  <p>${item.price}.00</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='main-heading3'>
        <h4>Our Story</h4>
        <h1>We are a family owned, retail and wholesale plant nursery, located in New York.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        <Button buttonText={"READ MORE"} onClick={handleReadMore}></Button>
      </div>

      <div className='image-data2'>
        {
          Mock.ImageData2.map((item, index) => {
            return (
              <div key={index} >
                <Link to={item.name2 === 'Cacti' ? '/cacti' : '/plants'} className='mock-json-image2'><img src={item.image2} alt={item.name2} />
                  <div className='item-name2'>{item.name2}</div>
                  <div className='item-name2'>4 Products</div>
                </Link>
              </div>
            )
          })
        }
      </div>

      <div className='main-heading4'>
        <h4>Maria Oliver</h4>
      </div>

      <div className='main-background-color2'>
        <div className='complete-width'>
          <div className='divide-width1'>
            <div className='main-text2'>
              <img src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/12/testimonial-07-free-img.jpg' alt='Girls' />
              <h4>“ Really good service and good quality plants, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”</h4>
              <h1>Give the Gift of Plants</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum. Donec mollis eleifend ex vitae vulputate. Nam sodales, lorem ac tempus lorem ipsum dolor si amet.</h3>
              <div className='gift-card-button'>
                <Button buttonText={"BUY GIFT CARD"} onClick={handleButton}></Button>
              </div>
            </div>
          </div>
          <div className='divide-width2'>
            <Link><img src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/12/gift-card-img.jpg' /></Link>
          </div>
        </div>
      </div>

      <div className='benefits'>
        <div>
          <p>{images.delivery}</p>
          <h1>Fast Delivery</h1>
          <h4>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</h4>
        </div>
        <div>
          <p>{images.location}</p>
          <h1>Order Tracking</h1>
          <h4>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</h4>
        </div>
        <div>
          <p>{images.securePayment}</p>
          <h1>Secure Payment</h1>
          <h4>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</h4>
        </div>
        <div>
          <p>{images.discount}</p>
          <h1>Big Discounts</h1>
          <h4>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor consectetur</h4>
        </div>
      </div>
    </>
  )
}

export default Home