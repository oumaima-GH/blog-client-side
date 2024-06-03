import React from 'react';
import logo from '../assets/blogLogo.png'; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="first-row">
          <div className="first-col">
            <img src={logo} alt="blog logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis nemo maiores eligendi quisquam exercitationem.
            </p>
            <div className="social-media">
              <i className="fa-brands fa-facebook-f fb"></i>
              <i className="fa-brands fa-twitter x"></i>
              <i className="fa-brands fa-google-plus-g gp"></i>
              <i className="fa-brands fa-instagram insta"></i>
            </div>
          </div>
          <div className="third-col">
            <h4 className="title-footer">CATEGORIES</h4>
            <button>SOCIAL</button>
            <button>LIFESTYLE</button>
            {/* <button>BLOG</button> */}
            <button>TRAVEL</button>
            <button>TECHNOLOGY</button>
            <button>NEWS</button>
            {/* <button>FASHION</button>
            <button>LIFE</button>
           
            <button>MAGAZINE</button>
            <button>FOOD</button> */}
            <button>HEALTH</button>
          </div>
          <div className="fourth-col">
            <div className="newsletter">
              <h4 className="title-footer">NEWSLETTER</h4>
              <div className="input">
                <p>Nec feugiat nisl pretium fusce id velit ut tortor pretium.</p>
                <input type="email" placeholder="Enter Your Email" />
                <a href="#">SUBSCRIBE</a>
              </div>
              <i className="fa-regular fa-envelope"></i>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="copyright">
            <p className="copyright-section">
              Copyright &copy; 2024 All rights reserved | This template is made
              with by Colorlib
            </p>
            <div className="link-section">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
