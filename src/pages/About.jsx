import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Header />

      <section className="team">
        <div className="team-container">
          <h1>Our Team</h1>
          <p>Our consulting team comprises a diverse group of seasoned professionals, including experienced consultants, former industry leaders, risk and technology specialists, compliance solution experts, and financial regulation authorities. Each team member brings unique insights and deep expertise to address the complex challenges our clients face.</p>
          <p>This collective expertise allows us to harness knowledge and innovation to help our clients effectively manage compliance risks in an ever-changing regulatory landscape. We are committed to delivering tailored solutions that meet the evolving needs of businesses across various industries.</p>
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

      <section className="sustainability-section">
        <div className="sustainability-container">
          <h1>Our Commitment to Sustainability</h1>
          <p>As a forward-thinking consultancy, we are deeply committed to sustainability across all facets of our operations. Our goal extends beyond delivering financial returns; we strive to generate tangible social and environmental benefits for our clients and the communities we serve. This responsible approach is a reflection of our core values and our vision for a more sustainable future.</p>
        </div>
      </section>

      <section className="value-section">
        <div className="value-container">
          <h1>Our Value Proposition</h1>
          <p className="value-intro">By partnering with us, you gain access to:</p>
          <p className="value-closing">We invite you to join us in reshaping traditional operations through the power of technology. Together, we can drive meaningful change, enhance compliance practices, and create lasting value in an increasingly complex business environment.</p>
          <ul className="value-list">
            <li>Cutting-edge technological solutions</li>
            <li>Industry-leading expertise</li>
            <li>Innovative compliance strategies</li>
            <li>Sustainable operational models</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
