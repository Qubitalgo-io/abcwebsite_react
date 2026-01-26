import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const services = [
    {
      title: "Smart Financial Reporting",
      description: "In-depth financial analysis provides valuable data to support informed business decisions. Helping clients avoid costly errors caused by inadequate financial data.",
      image: "photos/slide1.jpg"
    },
    {
      title: "AI-Powered Bookkeeping",
      description: "Merges machine learning for automated transaction classification. Instant data processing enabling real-time financial dashboards. Cognitive automation via NLP/computer vision to interpret unstructured documents.",
      image: "photos/slide2.jpg"
    },
    {
      title: "RPA Workflow Automation",
      description: "Deploys software bots to handle rule-based business processes like invoice matching, payroll processing. Operating 24/7, these bots integrate with ERP/accounting systems (Odoo, SAP, Office 365) to achieve 99.9% accuracy and reduce processing time.",
      image: "photos/slide3.jpg"
    },
    {
      title: "ERP System Design & Integration",
      description: "Bridge accounting workflows with supply chain/CRM modules. API connectors for legacy system integration. Embed machine learning models directly into financial modules. Continuous process improvement audits.",
      image: "photos/slide4.jpg"
    }
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <>
      <Header />
      
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Boost your</span>
            <span>Accounting</span>
            <span>Automation</span>
            <span>with AI</span>
            <span>Innovation</span>
          </h1>
        </div>
        <div className="hero-graphics">
          <div className="diagonal-line"></div>
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>
        <div className="hero-footer">
          <p>A leading company combines AI technology with professional accounting expertise</p>
        </div>
      </section>

      <section className="mission-section">
        <h1 className="mission-title">OUR MISSION</h1>
        <p className="mission-text">
          Many organizations struggle with outdated structures that limit collaboration and innovation in a fast-changing digital world. We harness AI-driven automation and comprehensive training to transform your operations: streamlining workflows, fostering continuous learning, ensuring sustainable compliance, and driving efficiency and growth.
        </p>
      </section>

      <section className="services-section">
        <h1 className="services-title-top">CORE</h1>
        <div className="services-carousel-container">
          <button className="carousel-btn carousel-btn-prev" onClick={goToPrev} aria-label="Previous service">
            <svg viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25"/>
              <path d="M22 17L30 25L22 33" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
          <div className="services-carousel">
            {services.map((service, index) => {
              // Calculate position relative to active
              let position = index - activeIndex;
              // Handle wrapping for infinite feel
              if (position < -1) position += services.length;
              if (position > 2) position -= services.length;
              
              // Hide cards that are not in the visible 3 positions (-1, 0, 1)
              const isVisible = position >= -1 && position <= 1;
              
              return (
                <div
                  key={index}
                  className={`service-card ${index === activeIndex ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${position * 560}px) scale(${index === activeIndex ? 1 : 0.85})`,
                    opacity: isVisible ? 1 : 0,
                    zIndex: index === activeIndex ? 10 : 5 - Math.abs(position),
                    visibility: isVisible ? 'visible' : 'hidden',
                  }}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}${service.image}`} 
                    alt={service.title}
                    className="service-card-image"
                  />
                  <div className="service-card-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="carousel-btn carousel-btn-next" onClick={goToNext} aria-label="Next service">
            <svg viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25"/>
              <path d="M22 17L30 25L22 33" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </div>
        <h1 className="services-title-bottom">SERVICE</h1>
      </section>

      <section id="about" className="team-section">
        <div className="team-content">
          <div className="team-text">
            <p>Our consulting team comprises a diverse group of seasoned professionals, including experienced consultants, former industry leaders, risk and technology specialists, compliance solution experts, and financial regulation authorities. Each team member brings unique insights and deep expertise to address the complex challenges our clients face.</p>
            <p>This collective expertise allows us to harness knowledge and innovation to help our clients effectively manage compliance risks in an ever-changing regulatory landscape. We are committed to delivering tailored solutions that meet the evolving needs of businesses across various industries.</p>
          </div>
          <div className="team-right">
            <h1 className="team-title">OUR<br/>TEAM</h1>
            <div className="team-photos">
              <div className="team-photo">
                <img src={`${import.meta.env.BASE_URL}photos/image1.png`} alt="Team Member 1" />
              </div>
              <div className="team-photo">
                <img src={`${import.meta.env.BASE_URL}photos/image2.png`} alt="Team Member 2" />
              </div>
              <div className="team-photo">
                <img src={`${import.meta.env.BASE_URL}photos/image3.png`} alt="Team Member 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="certs-section">
        <div className="certs-logos">
          <img src={`${import.meta.env.BASE_URL}photos/aws.png`} alt="AWS" />
          <img src={`${import.meta.env.BASE_URL}photos/azure.png`} alt="Azure" />
          <img src={`${import.meta.env.BASE_URL}photos/ibm.png`} alt="IBM" />
          <img src={`${import.meta.env.BASE_URL}photos/databricks.png`} alt="Databricks" />
          <img src={`${import.meta.env.BASE_URL}photos/alibaba.png`} alt="Alibaba Cloud" />
          <img src={`${import.meta.env.BASE_URL}photos/hkicpa.png`} alt="HKICPA" />
          <img src={`${import.meta.env.BASE_URL}photos/cisa.png`} alt="CISA" />
          <img src={`${import.meta.env.BASE_URL}photos/cissp.png`} alt="CISSP" />
        </div>
        <div className="certs-content">
          <p className="certs-intro">Our team holds industry-recognized certifications from leading technology and professional bodies:</p>
          <ul className="certs-list">
            <li>AWS Certified Cloud Practitioner</li>
            <li>Azure AI Fundamentals</li>
            <li>AWS Certified Solutions Architect – Associate</li>
            <li>IBM Data Science Professional Certificate</li>
            <li>IBM AI Engineering Professional Certificate</li>
            <li>Databricks Certified Data Analyst Associate</li>
            <li>Alibaba Cloud Certified Professional - Data Analyst</li>
            <li>Deep Learning Specialization by DeepLearning.AI</li>
            <li>HKICPA - Practising Certificates</li>
            <li>Certified Information Systems Auditor® (CISA®)</li>
            <li>CISSP - Certified Information Systems Security Professional</li>
          </ul>
        </div>
      </section>

      <section className="value-section">
        <div className="value-container">
          <div className="value-left">
            <h1 className="value-title">Our Commitment &<br />Value Proposition</h1>
            <p className="value-text">As a forward-thinking consultancy, we are deeply committed to sustainability across all facets of our operations. Our goal extends beyond delivering financial returns; we strive to generate tangible social and environmental benefits for our clients and the communities we serve.</p>
            <p className="value-closing">We invite you to join us in reshaping traditional operations through the power of technology. Together, we can drive meaningful change, enhance compliance practices, and create lasting value in an increasingly complex business environment.</p>
          </div>
          <div className="value-right">
            <ul className="value-timeline">
              <li>
                <span className="timeline-text">Cutting-edge technological solutions</span>
                <span className="timeline-dot"></span>
              </li>
              <li>
                <span className="timeline-text">Industry-leading expertise</span>
                <span className="timeline-dot"></span>
              </li>
              <li>
                <span className="timeline-text">Innovative compliance strategies</span>
                <span className="timeline-dot"></span>
              </li>
              <li>
                <span className="timeline-text">Sustainable operational models</span>
                <span className="timeline-dot"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
