import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-header">
        <h1 className="company-name">Alpha Business Compliance</h1>
      </div>

      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`right-header ${isMenuOpen ? 'active' : ''}`}>
        <button className="header-buttons" onClick={() => handleNavigation('/')}>Home</button>
        <button className="header-buttons" onClick={() => handleNavigation('/about')}>About Us</button>
        <button className="header-buttons" onClick={() => handleNavigation('/industries')}>Industries Served</button>
        <button className="header-buttons" onClick={scrollToFooter}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
