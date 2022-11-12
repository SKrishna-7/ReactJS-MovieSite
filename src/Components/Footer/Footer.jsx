import React from 'react';

import './Footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';


const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        {/* <img src={} alt="" /> */}
                        <Link to="/">SureshKrishna</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Movies</Link>
                        <Link to="/">Series</Link>
                        <Link to="/">Contact Me</Link>
                    </div>
                    <div className="footer__content__menu">
                    </div>
                    <div className="footer__content__menu">
                        <Link to="https://www.instagram.com/sureshkrish2005/" target='/blank'><i class='bx bxl-instagram'></i> Instagram</Link>
                        <Link to="https://github.com/SKrishna-7" target='/blank'><i class='bx bxl-github' ></i> Github</Link>
                        <Link to="https://www.linkedin.com/in/suresh-krishna-329156243/" target='/blank'><i class='bx bxl-linkedin-square' ></i> LinkedIn</Link>
                        <Link to='https://twitter.com/SureshKrish2005' target='/blank'><i class='bx bxl-twitter'></i> Twitter</Link>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Footer;