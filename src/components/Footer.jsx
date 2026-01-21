function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Alpha Business Compliance Limited</h3>
          <p>&copy; 2026 All Rights Reserved</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <a 
              href="https://wa.me/85269923774" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              WhatsApp: +852 6992 3774
            </a>
          </p>
          <p>
            <a 
              href="mailto:info@alphabusiness.pro" 
              aria-label="Send us an email"
            >
              Email: info@alphabusiness.pro
            </a>
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Address</h4>
          <address>
            Workshop 6, Unit 806, 8/F,<br />
            Eight Commercial Tower,<br />
            8 Sun Yip Street, Chai Wan,<br />
            Hong Kong
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
