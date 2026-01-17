import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    id: 0,
    title: 'AI-Powered Bookkeeping',
    description: 'Merges machine learning for automated transaction classification. Instant data processing enabling real-time financial dashboards. Cognitive automation via NLP/computer vision to interpret unstructured documents.'
  },
  {
    id: 1,
    title: 'RPA Workflow Automation',
    description: 'Deploys software bots to handle rule-based business processes like invoice matching, payroll processing. Operating 24/7, these bots integrate with ERP/accounting systems (Odoo, SAP, Office 365) to achieve 99.9% accuracy and reduce processing time.'
  },
  {
    id: 2,
    title: 'Smart Financial Reporting',
    description: 'In-depth financial analysis provides valuable data to support informed business decisions. Helping clients avoid costly errors caused by inadequate financial data.'
  },
  {
    id: 3,
    title: 'ERP System Design & Integration',
    description: 'Bridge accounting workflows with supply chain/CRM modules. API connectors for legacy system integration. Embed machine learning models directly into financial modules. Continuous process improvement audits.'
  }
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const totalSlides = slides.length;

  const getSlideClass = (index) => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;

    if (index === currentSlide) return 'carousel-slide active';
    if (index === prevIndex) return 'carousel-slide prev';
    if (index === nextIndex) return 'carousel-slide next';
    return 'carousel-slide';
  };

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleSlideClick = (index) => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;
    
    if (index === prevIndex || index === nextIndex) {
      showSlide(index);
      resetAutoPlay();
    }
  };

  const handleDotClick = (index) => {
    showSlide(index);
    resetAutoPlay();
  };

  return (
    <section 
      className="carousel-section"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <h1 style={{ textAlign: 'right', marginRight: '1em', color: 'rgb(179, 171, 151)' }}>
        Core Services
      </h1>
      <div style={{ display: 'block', height: '2.5em' }}></div>
      
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={getSlideClass(index)}
            id={`slide${index}`}
            onClick={() => handleSlideClick(index)}
          >
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <span 
            key={slide.id}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            data-slide={index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Carousel;
