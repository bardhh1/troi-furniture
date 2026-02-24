import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <NavLink to="/" className="navbar-logo">
              <img src="/img/logo_no_bg_tiny.png" alt="Troi Furniture" />
            </NavLink>

            <ul className="navbar-links">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    end={to === '/'}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="navbar-actions">
              <a className="btn btn-gold" href="https://wa.me/38348884220" target="_blank" rel="noopener noreferrer">
                Na Kontaktoni
              </a>
              <button
                className="navbar-hamburger"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} color="var(--color-text)" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <button
          className="lightbox-close"
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => isActive ? 'active' : ''}
            end={to === '/'}
          >
            {label}
          </NavLink>
        ))}
        <a
          className="btn btn-gold"
          href="https://wa.me/38348884220"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
        >
          Na Kontaktoni
        </a>
      </div>
    </>
  );
}
