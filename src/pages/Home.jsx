import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

function Home() {
  const missionTitleRef = useRef(null);

  useEffect(() => {
    if (missionTitleRef.current) {
      Splitting({ target: missionTitleRef.current, by: 'chars' });
    }
  }, []);

  return (
    <>
      <Header />
      
      <section id="home" className="hero-section">
        <h1 className="shimmer-text">Boost your Accounting Automation with AI Innovation</h1>
        <p className="hero-section-paragraph">
          A leading company combines AI technology with professional accounting expertise
        </p>
      </section>

      <section className="mission-section">
        <div className="grid-background"></div>
        <h1 ref={missionTitleRef} className="mission-title" data-splitting>Our Mission</h1>
        <hr className="mission-divider" />
        <div className="mission">
          <p>In today's digital era, many organizations struggle with outdated operational structures that limit collaboration and innovation. Technology and education are essential to transform how businesses adapt to rapidly changing market demands.</p>
          <p>We leverage AI-driven automation and comprehensive training to revolutionize your operational processes. Our solutions streamline workflows, foster continuous learning, and empower your team to achieve sustainable compliance while driving efficiency and growth.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="grid-background"></div>
        <h1 className="section-title">Core Services</h1>
        <hr className="section-divider" />
        <div className="services-grid">
          <div className="service-card">
            <h3>AI-Powered Bookkeeping</h3>
            <p>Merges machine learning for automated transaction classification. Instant data processing enabling real-time financial dashboards. Cognitive automation via NLP/computer vision to interpret unstructured documents.</p>
          </div>
          <div className="service-card">
            <h3>RPA Workflow Automation</h3>
            <p>Deploys software bots to handle rule-based business processes like invoice matching, payroll processing. Operating 24/7, these bots integrate with ERP/accounting systems (Odoo, SAP, Office 365) to achieve 99.9% accuracy and reduce processing time.</p>
          </div>
          <div className="service-card">
            <h3>Smart Financial Reporting</h3>
            <p>In-depth financial analysis provides valuable data to support informed business decisions. Helping clients avoid costly errors caused by inadequate financial data.</p>
          </div>
          <div className="service-card">
            <h3>ERP System Design & Integration</h3>
            <p>Bridge accounting workflows with supply chain/CRM modules. API connectors for legacy system integration. Embed machine learning models directly into financial modules. Continuous process improvement audits.</p>
          </div>
        </div>
      </section>

      <section id="about" className="team-section">
        <h1 className="section-title">Our Team</h1>
        <hr className="section-divider" />
        <div className="team-image-container">
          <img src="/photos/team.jpeg" alt="Our Team" className="team-image" />
        </div>
        <div className="team-content">
          <p>Our consulting team comprises a diverse group of seasoned professionals, including experienced consultants, former industry leaders, risk and technology specialists, compliance solution experts, and financial regulation authorities. Each team member brings unique insights and deep expertise to address the complex challenges our clients face.</p>
          <p>This collective expertise allows us to harness knowledge and innovation to help our clients effectively manage compliance risks in an ever-changing regulatory landscape. We are committed to delivering tailored solutions that meet the evolving needs of businesses across various industries.</p>
        </div>
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
      </section>

      <section className="value-section">
        <div className="grid-background"></div>
        <h1 className="section-title">Our Commitment & Value Proposition</h1>
        <hr className="section-divider" />
        <p className="value-text">As a forward-thinking consultancy, we are deeply committed to sustainability across all facets of our operations. Our goal extends beyond delivering financial returns; we strive to generate tangible social and environmental benefits for our clients and the communities we serve.</p>
        <p className="value-intro">By partnering with us, you gain access to:</p>
        <ul className="value-list">
          <li>Cutting-edge technological solutions</li>
          <li>Industry-leading expertise</li>
          <li>Innovative compliance strategies</li>
          <li>Sustainable operational models</li>
        </ul>
        <p className="value-closing">We invite you to join us in reshaping traditional operations through the power of technology. Together, we can drive meaningful change, enhance compliance practices, and create lasting value in an increasingly complex business environment.</p>
      </section>

      <Footer />
    </>
  );
}

export default Home;
