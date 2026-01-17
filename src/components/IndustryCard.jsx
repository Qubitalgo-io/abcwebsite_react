import { useEffect, useRef } from 'react';

function IndustryCard({ industry, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (index % 4) * 0.15;
            entry.target.style.transitionDelay = `${delay}s`;
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div className="industry-card" ref={cardRef}>
      <div 
        className="card-image" 
        style={{ backgroundImage: `url('${industry.image}')` }}
      />
      <div className="card-content">
        <h3>{industry.title}</h3>
        <p>{industry.description}</p>
      </div>
    </div>
  );
}

export default IndustryCard;
