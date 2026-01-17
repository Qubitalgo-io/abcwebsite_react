import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      
      <section className="not-found-section">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button 
            className="btn-primary" 
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;
