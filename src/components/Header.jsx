import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
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
        <button className="header-buttons" onClick={scrollToTop}>Home</button>
        <button className="header-buttons" onClick={() => scrollToSection('about')}>About Us</button>
        <button className="header-buttons" onClick={() => scrollToSection('footer')}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
