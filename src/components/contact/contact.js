import React, { useState } from "react";
import "./contact.css"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom'
import Footer2 from "../footer/footer";
import Navbar from "../navbar";

const ContactMethod = ({ icon, title, info }) => {
    return (
        <div className="contact-method">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
};

const data = [
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573", heading: 'Order Tracking', para: 'Log in to Check the status of your Order', button: 'Track your Order' },
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681", heading: 'Return and Exchange', para: 'We make it easy to return and exchange styles.', button: 'Start a return' }
];

const boxdata = [
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135", heading: 'Size Guide', paragraph: 'Ensure your customers get the right fit', link: 'View More' },
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185", heading: 'Loyalty Program', paragraph: 'Offer exclusive reward', link: 'View More' },
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203", heading: 'Order & Shipping', paragraph: 'Looking for your order status', link: 'View More' },
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203", heading: 'Payment & Gift Cards', paragraph: 'Wondering what payment we accept?', link: 'View More' },
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338", heading: 'Discount Codes', paragraph: 'Have a discount you’d like to use?', link: 'View More' },
    { img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383", heading: 'Store Location', paragraph: 'Want to find a store near you?', link: 'View More' },
];

const questions = [
    {
        question: "How do I join the affiliate program?",
        answer: "Simply sign up through our affiliate program page by filling out the registration form. Once approved, you'll receive a unique affiliate link to start promoting our products."
    },
    {
        question: "What commission rates do you offer?",
        answer: "We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners."
    },
    {
        question: "How and when do I get paid?",
        answer: "For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family."
    },
    {
        question: "What marketing resources are available to affiliates?",
        answer: "Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI."
    }
];

const ContactUsHeader = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [query, setQuery] = useState('');
    const handleSearch = () => { }
    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <>
            <Navbar/>
            <div className="main-contactUsHeader">
                <div className="heading-content">
                    <h2>Help Center</h2>
                    <p>Lets us Know how we may help you?</p>
                </div>
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for answer..."
                        className="search-input"
                    />
                    <button onClick={handleSearch} className="search-button">
                        Search
                    </button>
                </div>
            </div>

            <div className='box-container'>
                {data.map((item, index) => (
                    <div key={index} className='main-box'>
                        <img src={item.img} alt="image" className='main-box-image' />
                        <h2>{item.heading}</h2>
                        <p>{item.para}</p>
                        <Link to="/collection"><button className="button">{item.button}</button></Link>
                    </div>
                ))}
            </div>

            <div className="helpDesk-Container">
                <h3>Browse our Help Desk</h3>
                <div className="box-containers">
                    {boxdata.map((box, index) => (
                        <div className="size-guide-box" key={index}>
                            <img src={box.img} alt="Box" className="box-image" />
                            <h2>{box.heading}</h2>
                            <p>{box.paragraph}</p>
                            <p>
                                <a href="link-to-view-more">{box.link}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="popular-search-questions">
                <div className="container">
                    <h2 className="title">Popular Searched Questions</h2>
                    <div className="questions-container">
                        {questions.map((item, index) => (
                            <div key={index} className="question-item">
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="question-button"
                                >
                                    <span>{item.question}</span>
                                    {activeQuestion === index ? (
                                        <ChevronUp className="icon" />
                                    ) : (
                                        <ChevronDown className="icon" />
                                    )}
                                </button>
                                {activeQuestion === index && (
                                    <div className="answer">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="contact-info">
                <h2>Any other questions?</h2>
                <p className="subtext">
                    We're here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.
                </p>
                <div className="contact-methods">
                    <ContactMethod icon="☎️" title="Call" info="012-345-6789" />
                    <ContactMethod icon="✉️" title="Email" info="Contact Us" />
                    <ContactMethod icon="💬" title="Chat" info="Chat Now" />
                    <ContactMethod icon="📱" title="Message" info="Support Now" />
                </div>
            </div>
            <Footer2 />
        </>
    );
};

export default ContactUsHeader;