import React, { useEffect, useState, useRef } from 'react';
import "../styling/shop.css"
import { Link, useLocation } from 'react-router-dom';
import { images } from '../assests/index';
import Mock from "../mock.json";
import { CartIcon, EyeIcon } from './cartButton';
import PriceFilterModal from './modal1';
import { SortingModal } from './sortingModal';
import { useDispatch, useSelector } from 'react-redux';
import { handleCartItem } from '../utils/handleCart';

const data = [...Mock.imageData, ...Mock.imageData3];


let star = [];
for (var i = 0; i < 5; i++) {
  star.push(images.star)
}

const Shop = () => {

  // Redux
  const cartData2 = useSelector((state) => state.product.data)

  const dispatch = useDispatch();

  const handleCart = (id) => {
    handleCartItem(id, cartData2, dispatch);
  }
  // end Redux

  const sortingModalRef = useRef(null);
  const [price, setPrice] = useState(100);
  const location = useLocation()
  const [isModalOpen, setIsModalOpen] = useState(null);

  const [isSortingModalOpen, setIsSortingModalOpen] = useState(null);

  const filterPriceItem = data.filter((item) => item.price <= price)

  // Filter Image Type
  const filterImageType = filterPriceItem.filter((item) =>
    item.type.toLowerCase() === location.pathname.toLowerCase().replace('/', '')
  );
  const newData = location.pathname === '/shop' ? filterPriceItem : filterImageType;
  // End


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortingModalRef.current && !sortingModalRef.current.contains(event.target)) {
        setIsSortingModalOpen(null);
      }
    };
    if (isSortingModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortingModalOpen]);

  return (
    <>
      <div className='line1'></div>
      <div className='fixsize'>
        <div className='shop-heading'><Link to={'/'} className='home-heading'>Home</Link>{location.pathname}</div>
        <div className='filter'>
          <Link className='filter-text' onClick={() => setIsModalOpen(1)} >{images.filter} Filter</Link>
          <Link className='sorting-text' onClick={() => setIsSortingModalOpen(1)}>Default Sorting  {images.carat} </Link>
        </div>

        <div className='image-data-shop'>
          {
            newData.map((item, index) => {
              return (
                <div key={index} >
                  <Link className='mock-json-image-shop'><img src={item.image} alt={item.name} />
                    <CartIcon onClick={() => handleCart(item.id)} />
                    <EyeIcon />
                  </Link>
                  <div className='image-text-shop'>
                    <h5>{item.type}</h5>
                    <Link className='item-name-shop'>{item.name}</Link>
                    <p>{star}</p>
                    <p>${item.price}.00</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <PriceFilterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setPrice={setPrice} />
      <div ref={sortingModalRef}>
        <SortingModal isSortingModalOpen={isSortingModalOpen} />
      </div>


    </>
  )
}

export default Shop