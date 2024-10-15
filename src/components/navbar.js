import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styling/navbar.css";
import { images } from '../assests';
import { CartModel } from './cartModel';

const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(null);

    const handleCartModel = () => {
        setIsModalOpen(1)
    }

    return (
        <>
            <div className='navbar'>
                <ul>
                    <Link to={'/'} className='nav-link'><li><img className='logo-img' src='https://websitedemos.net/egrow-plants-04/wp-content/uploads/sites/1114/2022/07/logo-regular.png' /></li></Link>
                    <Link to={'/shop'} className='nav-link'><li>SHOP ALL</li></Link>
                    <Link to={'/plants'} className='nav-link'><li>PLANTS</li></Link>
                    <Link to={'/cacti'} className='nav-link'><li>CACTI</li></Link><span className='navbar-space'></span>
                    <Link to={'/blog'} className='nav-link'><li>BLOG LISTEN</li></Link>
                    <Link to={'/contact'} className='nav-link'><li>CONTACT US</li></Link>
                    <Link className='nav-link'><li onClick={handleCartModel}>{images.cart}</li></Link>
                    <Link className='nav-link'><li>{images.admin}</li></Link>
                </ul>
            </div>
            <CartModel isModalOpen={isModalOpen} setIsModalOpen = {setIsModalOpen}/>
        </>
    )
}

export default Navbar;