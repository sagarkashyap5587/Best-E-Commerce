import React from 'react';
import "./footer1.css"

const paymentMethods = [
    'American Express', 'Apple Pay', 'Diners Club', 'Discover', 
    'Google Pay', 'Maestro', 'Mastercard', 'Shop Pay', 'Union Pay'
  ];

const Footer2 = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Vince.</h2>
          <p>Email: info@ecomposershop.com</p>
          <p>Phone: (212) 555-1234</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Affiliate</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms of use</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resource</h3>
            <ul>
              <li><a href="#">Return policy</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Legal & Privacy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Visit Our Store</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Account</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


<lfooter className='lastfooter'>
      <div className='containers'>
        <div className='contents'>
          <p className='copyright'>
            © 2024 EComposer Store. All Rights Reserved.
          </p>
          <div className='paymentMethods'>
            {/* {paymentMethods.map((method) => (
              <div key={method} className='paymentIcon'>
              
                <div className='placeholderIcon'></div>
              </div>
            ))}   */}
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892" alt="ashihs" className='placeholder'/>
          </div>
        </div>
      </div>
    </lfooter>
    </>
  );
};

export default Footer2;