import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustryCard from '../components/IndustryCard';
import { industriesData } from '../data/industries';

function Industries() {
  return (
    <>
      <Header />

      <section className="industries-hero">
        <h1>Industries We Have Served</h1>
      </section>

      <section className="industries-section">
        <div className="industries-grid">
          {industriesData.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              industry={industry} 
              index={index} 
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Industries;
