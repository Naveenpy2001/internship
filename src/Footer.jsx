import React from 'react';
import './css/footer.css';

import TSARIT from './media/TSAR-IT.png';

import EMPEROR from './media/emperor-of-it-Logo.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col-1">
          <div className="logos">
            
            <h4 className="footer-brands" style={{ fontSize: '12px', margin: '0 25px' }}>
              Our brands
            </h4><br />
            {/* <div className="div-logo" style={{ width: '30%' }}> */}
              <img
                src={TSARIT}
                alt="TSAR-IT Logo"
                className="footer-logo"
                style={{ margin: '10px 0', width: '30%' }}
              /> <br />
            {/* </div> */}
            <img
              src={EMPEROR}
              alt="Emperor of IT Logo"
              className="footer-brand-logo"
              style={{ marginTop: '10px', width: '120px', height: '120px' }}
            />
          </div>
        </div>
        <div className="footer-col-2">
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#" className="footer-services">Insights</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Industries</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Services</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Careers</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">News</a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-services">About Us</a>
            </li>
            <li className="footer-list-item">
              <a href="/contact" className="footer-services">Contact Us</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Investors</a>
            </li>
          </ul>
        </div>
        <div className="footer-col-3">
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/accessbility" className="footer-services">Accessbility</a>
            </li>
            <li className="footer-list-item">
              <a href="/coockiesPolicy" className="footer-services">Cookie Policy</a>
            </li>
            <li className="footer-list-item">
              <a href="/privacypolicy" className="footer-services">Privacy Notes</a>
            </li>
            <li className="footer-list-item">
              <a href="/securityNotifications" className="footer-services">Partners with Us</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Press Release</a>
            </li>
            <li className="footer-list-item">
              <a href="/TermsUse" className="footer-services">Terms of use</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Tenders</a>
            </li>
            <li className="footer-list-item">
              <a href="#" className="footer-services">Vendors</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-icons">
        <div className="footer-copy-rights">
          <p>© TSAR IT, 2024 All rights reserved</p>
        </div>
        <div className="social-icons">
          <h2 className="footer-follow-us" style={{ fontSize: '18px' }}>
            Follow us on -
            <a href="https://www.instagram.com/tsarit1/" className="icons">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557389195263" className="icons">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/tsar-it-7924632bb/" className="icons">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@TsarITServices" className="icons">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://twitter.com/tsar_it" className="icons">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
