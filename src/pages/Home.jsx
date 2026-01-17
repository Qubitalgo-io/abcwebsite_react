import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
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
      
      <section className="hero-section">
        <div className="hero-code-overlay">
{`Sub AutomateInvoiceProcessing()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim i As Long
    
    Set ws = ThisWorkbook.Sheets("Invoices")
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    For i = 2 To lastRow
        If ws.Cells(i, 5).Value = "Pending" Then
            ws.Cells(i, 5).Value = "Processed"
            ws.Cells(i, 6).Value = Now()
            
            Call SendNotification(ws.Cells(i, 1).Value)
        End If
    Next i
    
    MsgBox "Processing complete: " & (lastRow - 1) & " invoices"
End Sub

Function CalculateTax(amount As Double) As Double
    Const TAX_RATE As Double = 0.15
    CalculateTax = amount * TAX_RATE
End Function

Sub GenerateReport()
    Dim reportDate As Date
    reportDate = Date
    
    Range("A1").Value = "Financial Report"
    Range("A2").Value = "Generated: " & Format(reportDate, "dd/mm/yyyy")
End Sub`}
        </div>
        <h1 className="shimmer-text">Boost your Accounting Automation with AI Innovation</h1>
        <p className="hero-section-paragraph">
          A leading company combines AI technology with professional accounting expertise
        </p>
      </section>

      <section className="mission-section">
        <div className="water-wave water-wave-1">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 Q150,70 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z" fill="rgba(255, 255, 255, 0.3)"/>
          </svg>
        </div>
        <div className="water-wave water-wave-2">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q200,40 400,60 T800,60 T1200,60 L1200,120 L0,120 Z" fill="rgba(255, 255, 255, 0.2)"/>
          </svg>
        </div>
        <div className="water-wave water-wave-3">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,70 Q250,90 500,70 T1000,70 T1500,70 L1500,120 L0,120 Z" fill="rgba(255, 255, 255, 0.15)"/>
          </svg>
        </div>
        <h1 ref={missionTitleRef} className="mission-title" data-splitting>Our Mission</h1>
        <hr className="mission-divider" />
        <div className="mission">
          <p>In today's digital era, many organizations struggle with outdated operational structures that limit collaboration and innovation. Technology and education are essential to transform how businesses adapt to rapidly changing market demands.</p>
          <p>We leverage AI-driven automation and comprehensive training to revolutionize your operational processes. Our solutions streamline workflows, foster continuous learning, and empower your team to achieve sustainable compliance while driving efficiency and growth.</p>
        </div>
      </section>

      <Carousel />

      <section className="projects-section">
        <h1>ABC Lab Projects</h1>
        <div className="project-boxes">
          <div className="project">
            <h3>Automated Processing</h3>
            <p>Using Generative AI, OCR and ERP (Odoo) database integration, we automate the scanning and recording of transactions, improving efficiency and reducing errors.</p>
          </div>
          <div className="project project-image-1" />
          <div className="project project-image-2" />
          <div className="project">
            <h3>WeChat x ChatGPT</h3>
            <p>Integrating ChatGPT into WeChat enables real-time translation, 24/7 automated customer support, streamlined workflows, and flexible AI-driven mini-program development for businesses.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
