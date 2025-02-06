import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="dashboard-footer">
            <div className="footer-left">
                <p>&copy; 2025 Detector Zone</p>
            </div>
            <div className="footer-center">
                
                <Link to="/nosotros" className="footer-link">Nosotros</Link>
                <Link to="/contacto" className="footer-link">Contacto</Link>
                <Link to="/terminos" className="footer-link">Términos y Condiciones</Link>
                <Link to="/privacy-policy" className="footer-link">Política de Privacidad</Link>
            </div>
            <div className="footer-right">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
        </footer>
    );
};

export default Footer;