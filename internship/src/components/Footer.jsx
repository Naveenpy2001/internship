import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../css/Footer.css';
import { SiWhatsapp } from "react-icons/si";

const FooterComponent = () => {
  return (
    <>
    <div className="contaner-whatsapp">
     <p className='wame'><a href="https://wa.me/919491301258" target='_blank'><SiWhatsapp className='iconsWaMe'/> <span className='waMeTxt'>Message Us</span></a></p>
    </div>
    <footer className="internship-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-about">
            <h3 className="footer-logo">TSAR - IT PVT LTD</h3>
            <p className="footer-description">
              Bridging the gap between education and industry with our comprehensive internship programs.
              We help students gain real-world experience and kickstart their careers.
            </p>
            
            <br /><br /> 
            <div className="links-column" style={{marginTop:'18px'}}>
              <h4 className="links-title">Support</h4>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
                <li><a href="/refund-policy">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h4 className="links-title">Programs</h4>
              <ul>
                <li><a href="/java">Java Internship</a></li>
                <li><a href="/python">Python Internship</a></li>
                <li><a href="/java/fullstack">Full-Stack Development</a></li>
                <li><a href="/data-science">Data Science</a></li>
                <li><a href="/dev-ops">Cloud Computing</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h4 className="links-title">Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="/become-partner">Become Partner</a></li>
                <li><a href="/our-team">Our Team</a></li>
                <li><a href="/partners">Partners</a></li>
              </ul>
            </div>

            
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Contact Info</h4>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>12-203/745, CHURCH STREET, NAKKABANDA, Punganur, Madanapalle, Chittoor- 517247, Andhra Pradesh</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span><a href="mailto:tsarit@tsaritservices.com" className='email-to'>tsarit@tsaritservices.com</a></span>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 94913 01258</span>
            </div>
            <div className="newsletter">
              <h5 className='links-title'>Subscribe to our Newsletter</h5>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
              <br /><br />
              <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={28} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={28} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={28} /></a>
              <a href="#" aria-label="YouTube"><FaYoutube size={28} /></a>
            </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} TSAR-IT PVT LTD. All rights reserved.
          </div>
          <div className="footer-legal">
            {/* <a href="#">Privacy Policy</a>
            <span> | </span>
            <a href="#">Terms of Service</a> */}
            <span> | </span>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default FooterComponent;