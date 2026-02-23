import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/img/logo_no_bg_tiny.png" alt="Troi Furniture" />
            <p>
              Kombinojmë dizajnin modern me elegancën e përjetshme. Çdo copë mobilie është një vepër arti.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-col-title">Shërbimet</p>
            <ul className="footer-links">
              <li><Link to="/gallery?cat=kitchens">Kuzhina</Link></li>
              <li><Link to="/gallery?cat=bedrooms">Dhoma Gjumi</Link></li>
              <li><Link to="/gallery?cat=wardrobes">Garderoba</Link></li>
              <li><Link to="/gallery?cat=tvstands">TV Stands</Link></li>
              <li><Link to="/gallery?cat=misc">Të Tjera</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Kontakti</p>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>Peja, Kosovë</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>+383 48 884 220</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <span>info@troifurniture.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Troi Furniture. Të gjitha të drejtat e rezervuara.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/troi_furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
