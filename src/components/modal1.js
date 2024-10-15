import ReactSlider from 'react-slider';
import { images } from '../assests';
import { Link } from 'react-router-dom';
import "../styling/modal.css"
import { useState } from 'react';
import Mock from "../mock.json";

const data = [...Mock.imageData, ...Mock.imageData3];

const cacti = data.filter((item => item.type === 'Cacti'))
const plants = data.filter((item => item.type === 'Plants'))


const PriceFilterModal = ({ isModalOpen, setIsModalOpen, setPrice }) => {
  const [price, setPrice1] = useState(100);

  const handlePriceChange = (e) => {
    e.preventDefault()
    setPrice1(e.target.value)
    setPrice(e.target.value)
  }

  return (
    isModalOpen &&
    <div className='modal-overlay'>
      <div className='modal1'>
        <div className='modal1-div'>
          <div className='cross'><Link className='cross-button' onClick={() => setIsModalOpen(null)}>{images.cross}</Link></div>
          <input type='text' placeholder='Search products...' /><Link className='next-icon'>{images.next}</Link>
          <h1>Filter By Price</h1>
          <input
            type="range"
            min="10"
            max="100"
            value={price}
            onChange={handlePriceChange}
            className="price-slider"
          />
          <div className='range-show'>
            <input type='text' value={10} min={10} readOnly />
            <input type='text' value={price} readOnly />
          </div>

          <div className='categories-heading'>Categories</div>
          <div className='cacti-pants'>
            <img src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/cat-02-300x300.jpg' />
            <span className='cacti-count'>Cacti ({cacti.length})</span>
          </div>

          <div className='plants-pants'>
            <img src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/cat-01-300x300.jpg' />
            <span>Plants ({plants.length})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilterModal;
