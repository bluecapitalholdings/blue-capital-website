import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    revenue: "",
    location: "",
    email: "",
    phone: "",
    industry: "",
    cashflow: "",
    askingPrice: "",
    yearsInBusiness: "",
    employees: "",
    reasonForSelling: "",
    timeline: "",
    sellerFinancing: "",
    message: "",
  });

  const styles = {
    page: { fontFamily: "Arial, sans-serif", color: "#1f2937", backgroundColor: "#ffffff", margin: 0, padding: 0 },
    nav: { borderBottom: "1px solid #e5e7eb", backgroundColor: "#ffffff", boxShadow: "0 1px 8px rgba(0,0,0,0.04)", position: "sticky", top: 0, zIndex: 10 },
    navInner: { maxWidth: "1180px", margin: "0 auto", padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap" },
    brandText: { fontSize: "20px", fontWeight: 800, letterSpacing: "-0.02em", color: "#102a56" },
    navLinks: { display: "flex", gap: "24px", fontSize: "15px", color: "#374151", flexWrap: "wrap", alignItems: "center" },
    link: { textDecoration: "none", color: "#334155", fontWeight: 600 },
    navCta: { textDecoration: "none", backgroundColor: "#102a56", color: "#ffffff", fontWeight: 700, padding: "10px 14px", borderRadius: "10px" },
    hero: { background: "linear-gradient(135deg, #0f2d5c 0%, #173f7a 55%, #123364 100%)", color: "#ffffff", padding: "96px 28px 88px" },
    heroInner: { maxWidth: "1180px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "56px", alignItems: "center" },
    eyebrow: { color: "#bfdbfe", fontSize: "14px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" },
    heroTitle: { fontSize: "56px", lineHeight: 1.05, fontWeight: 850, marginBottom: "24px", letterSpacing: "-0.04em" },
    heroText: { fontSize: "20px", lineHeight: 1.7, color: "#dbeafe", marginBottom: "28px", maxWidth: "760px" },
    missionBox: { borderLeft: "4px solid #bfdbfe", padding: "14px 0 14px 18px", color: "#eff6ff", fontSize: "17px", lineHeight: 1.7, maxWidth: "760px", marginBottom: "32px", backgroundColor: "rgba(255,255,255,0.04)", borderRadius: "0 12px 12px 0" },
    buttonRow: { display: "flex", gap: "16px", flexWrap: "wrap" },
    primaryBtn: { backgroundColor: "#ffffff", color: "#102a56", padding: "14px 24px", borderRadius: "10px", fontWeight: 800, textDecoration: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.16)", display: "inline-block" },
    secondaryBtn: { border: "1px solid rgba(255,255,255,0.45)", color: "#ffffff", padding: "14px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", backgroundColor: "rgba(255,255,255,0.06)", display: "inline-block" },
    heroLogoWrap: { display: "flex", justifyContent: "center", alignItems: "center" },
    heroLogoCard: { backgroundColor: "rgba(255,255,255,0.94)", borderRadius: "24px", padding: "28px", boxShadow: "0 24px 70px rgba(0,0,0,0.24)", border: "1px solid rgba(255,255,255,0.35)" },
    heroLogo: { width: "100%", maxWidth: "300px", display: "block" },
    trustStrip: { borderBottom: "1px solid #e5e7eb", backgroundColor: "#ffffff" },
    trustInner: { maxWidth: "1180px", margin: "0 auto", padding: "22px 28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", color: "#4b5563", fontSize: "14px", fontWeight: 700 },
    section: { maxWidth: "1180px", margin: "0 auto", padding: "84px 28px" },
    sectionGray: { backgroundColor: "#f8fafc", padding: "84px 0" },
    sectionTitle: { fontSize: "38px", fontWeight: 850, marginBottom: "20px", letterSpacing: "-0.03em", color: "#111827" },
    sectionIntro: { fontSize: "18px", lineHeight: 1.8, marginBottom: "32px", color: "#475569", maxWidth: "860px" },
    paragraph: { fontSize: "17px", lineHeight: 1.8, marginBottom: "16px", color: "#374151", maxWidth: "860px" },
    twoCol: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "start" },
    card: { backgroundColor: "#ffffff", borderRadius: "18px", padding: "28px", boxShadow: "0 12px 32px rgba(15,45,92,0.10)", border: "1px solid #eef2f7" },
    cardTitle: { fontSize: "22px", fontWeight: 800, marginBottom: "14px", color: "#111827" },
    list: { paddingLeft: "20px", margin: 0, color: "#374151", lineHeight: 1.9, fontSize: "16px" },
    criteriaGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "28px" },
    sellSection: { background: "linear-gradient(135deg, #0f2d5c 0%, #143769 100%)", color: "#ffffff", padding: "92px 0" },
    sellTitle: { fontSize: "44px", fontWeight: 850, marginBottom: "20px", letterSpacing: "-0.03em", color: "#ffffff", maxWidth: "900px" },
    sellText: { color: "#dbeafe", fontSize: "18px", lineHeight: 1.8, maxWidth: "820px", marginBottom: "24px" },
    sellCard: { backgroundColor: "#ffffff", borderRadius: "18px", padding: "30px", boxShadow: "0 18px 42px rgba(0,0,0,0.16)", border: "1px solid rgba(255,255,255,0.2)" },
    processGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "22px", marginTop: "30px" },
    processCard: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", border: "1px solid #e5e7eb", boxShadow: "0 8px 24px rgba(15,45,92,0.08)" },
    numberBadge: { width: "34px", height: "34px", borderRadius: "999px", backgroundColor: "#102a56", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, marginBottom: "12px" },
    founderName: { fontSize: "22px", fontWeight: 800, color: "#102a56", marginBottom: "12px" },
    contactWrap: { maxWidth: "900px", margin: "0 auto", padding: "84px 28px" },
    form: { display: "grid", gap: "18px", marginTop: "22px" },
    input: { width: "100%", padding: "15px 16px", borderRadius: "12px", border: "1px solid #d1d5db", fontSize: "16px", boxSizing: "border-box", backgroundColor: "#ffffff" },
    textarea: { width: "100%", padding: "15px 16px", borderRadius: "12px", border: "1px solid #d1d5db", fontSize: "16px", minHeight: "150px", boxSizing: "border-box", resize: "vertical", backgroundColor: "#ffffff" },
    submit: { backgroundColor: "#102a56", color: "#ffffff", border: "none", borderRadius: "12px", padding: "16px 20px", fontSize: "16px", fontWeight: 800, cursor: "pointer", boxShadow: "0 10px 24px rgba(16, 42, 86, 0.18)" },
    note: { fontSize: "14px", color: "#6b7280", lineHeight: 1.7, marginTop: "4px", marginBottom: "4px" },
    errorBox: { backgroundColor: "#fef2f2", color: "#991b1b", border: "1px solid #fecaca", borderRadius: "10px", padding: "12px 14px", fontSize: "14px" },
    thankYouWrap: { minHeight: "100vh", background: "linear-gradient(135deg, #0f2d5c 0%, #173f7a 55%, #123364 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px" },
    thankYouCard: { maxWidth: "760px", width: "100%", backgroundColor: "#ffffff", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.18)", padding: "48px", textAlign: "center" },
    thankYouTitle: { fontSize: "40px", fontWeight: 850, color: "#102a56", marginBottom: "16px", letterSpacing: "-0.02em" },
    thankYouText: { fontSize: "18px", lineHeight: 1.8, color: "#374151", marginBottom: "18px" },
    thankYouButton: { display: "inline-block", marginTop: "10px", backgroundColor: "#102a56", color: "#ffffff", textDecoration: "none", padding: "14px 24px", borderRadius: "10px", fontWeight: 800, border: "none", cursor: "pointer" },
    footer: { backgroundColor: "#f3f4f6", textAlign: "center", padding: "36px", fontSize: "14px", lineHeight: 1.8, borderTop: "1px solid #e5e7eb", color: "#4b5563" },
    footerBrand: { fontWeight: 800, color: "#111827" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormData({
    name: "", company: "", revenue: "", location: "", email: "", phone: "", industry: "", cashflow: "",
    askingPrice: "", yearsInBusiness: "", employees: "", reasonForSelling: "", timeline: "", sellerFinancing: "", message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");
    try {
      const response = await fetch("https://formspree.io/f/mwvrjwnk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, _subject: "New Acquisition Inquiry - Blue Capital Holdings" }),
      });
      if (response.ok) {
        resetForm();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setErrorMessage("Something went wrong while submitting the form. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong while submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={styles.thankYouWrap}>
        <div style={styles.thankYouCard}>
          <h1 style={styles.thankYouTitle}>Thank You</h1>
          <p style={styles.thankYouText}>Your inquiry has been submitted successfully.</p>
          <p style={styles.thankYouText}>Blue Capital Holdings LLC appreciates your interest. All inquiries are reviewed confidentially, and a follow-up will be made if there appears to be a potential fit.</p>
          <button type="button" style={styles.thankYouButton} onClick={() => setSubmitted(false)}>Return to Homepage</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brandText}>Blue Capital Holdings LLC</div>
          <div style={styles.navLinks}>
            <a href="#home" style={styles.link}>Home</a>
            <a href="#about" style={styles.link}>About</a>
            <a href="#criteria" style={styles.link}>Criteria</a>
            <a href="#sell" style={styles.link}>Sell Your Business</a>
            <a href="#founder" style={styles.link}>Founder</a>
            <a href="#contact" style={styles.navCta}>Start a Conversation</a>
          </div>
        </div>
      </nav>

      <section id="home" style={styles.hero}>
        <div style={styles.heroInner}>
          <div>
            <div style={styles.eyebrow}>A long-term home for established businesses</div>
            <h1 style={styles.heroTitle}>A Trusted Buyer for Business Owners Planning Their Next Chapter</h1>
            <p style={styles.heroText}>We acquire and operate established small businesses, providing owners with a smooth transition while preserving the legacy they have built.</p>
            <div style={styles.missionBox}>Blue Capital Holdings exists to provide business owners with a trusted transition path — preserving what they’ve built, supporting their team, and continuing the legacy of their business through long-term ownership.</div>
            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryBtn}>Start a Confidential Conversation</a>
              <a href="#sell" style={styles.secondaryBtn}>Why Sell to Us</a>
            </div>
          </div>
          <div style={styles.heroLogoWrap}>
            <div style={styles.heroLogoCard}>
              <img src="/logo.png" alt="Blue Capital Holdings logo" style={styles.heroLogo} />
            </div>
          </div>
        </div>
      </section>

      <section style={styles.trustStrip}>
        <div style={styles.trustInner}>
          <div>Confidential owner conversations</div>
          <div>Long-term ownership approach</div>
          <div>Continuity for employees and customers</div>
          <div>Flexible transition structures</div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>A Different Kind of Buyer</h2>
        <p style={styles.sectionIntro}>Many buyers focus on short-term gains. Blue Capital Holdings is different. Our goal is to continue what owners have built — not dismantle it.</p>
        <div style={styles.twoCol}>
          <div>
            <p style={styles.paragraph}>Blue Capital Holdings LLC is an acquisition-focused investment firm dedicated to acquiring and operating established small businesses for long-term ownership.</p>
            <p style={styles.paragraph}>We pursue disciplined growth through operational continuity, responsible stewardship, and respect for the employees, customers, and reputation that make a business valuable.</p>
            <p style={styles.paragraph}>We partner with business owners navigating retirement, succession, or transition who value a thoughtful, capable, and long-term buyer.</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Our Commitment</div>
            <ul style={styles.list}>
              <li>Preserve what already works</li>
              <li>Support employees and customers</li>
              <li>Maintain confidentiality throughout the process</li>
              <li>Provide a respectful transition path</li>
              <li>Operate with a long-term ownership mindset</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="criteria" style={styles.sectionGray}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acquisition Criteria</h2>
          <p style={styles.sectionIntro}>We focus on established businesses with durable cash flow, stable operations, and a clear path for continuity.</p>
          <div style={styles.criteriaGrid}>
            <div style={styles.card}><div style={styles.cardTitle}>Revenue</div><p style={styles.paragraph}>$500,000 to $5,000,000 annually</p></div>
            <div style={styles.card}><div style={styles.cardTitle}>Profitability</div><p style={styles.paragraph}>Consistent positive cash flow and stable operations</p></div>
            <div style={styles.card}><div style={styles.cardTitle}>Geography</div><p style={styles.paragraph}>United States based businesses</p></div>
          </div>
          <div style={styles.twoCol}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Industries of Interest</div>
              <ul style={styles.list}><li>Service businesses</li><li>Logistics and distribution</li><li>Commercial services</li><li>Light manufacturing</li><li>Real-estate supported businesses</li></ul>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Preferred Characteristics</div>
              <ul style={styles.list}><li>Established customer base</li><li>Experienced employees</li><li>Stable operations</li><li>Operational improvement opportunities</li><li>Flexible transition structures, including seller financing</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sell" style={styles.sellSection}>
        <div style={styles.section}>
          <h2 style={styles.sellTitle}>A Trusted Transition for Business Owners Ready for What’s Next</h2>
          <p style={styles.sellText}>We work directly with business owners considering retirement, succession, or a transition. Our goal is to provide a smooth, confidential process while preserving what you’ve built, supporting your employees, and continuing the legacy of your business.</p>
          <p style={{ ...styles.sellText, fontWeight: 700 }}>We are not a private equity firm — we do not flip businesses. We focus on long-term ownership and responsible stewardship.</p>
          <div style={styles.twoCol}>
            <div style={styles.sellCard}>
              <div style={styles.cardTitle}>Why Owners Work With Us</div>
              <ul style={styles.list}><li>Confidential acquisition process</li><li>Flexible deal structures</li><li>Respect for your legacy and reputation</li><li>Commitment to employees and customers</li></ul>
            </div>
            <div style={styles.sellCard}>
              <div style={styles.cardTitle}>Transition Approach</div>
              <ul style={styles.list}><li>Full acquisitions</li><li>Seller financing arrangements</li><li>Gradual ownership transitions where appropriate</li><li>Clear communication throughout the process</li></ul>
            </div>
          </div>
          <div style={{ marginTop: "34px" }}><a href="#contact" style={styles.primaryBtn}>Start a Confidential Conversation</a></div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>A Simple, Professional Process</h2>
        <p style={styles.sectionIntro}>Whether you are ready to sell now or only beginning to think about succession, we are always open to a confidential conversation.</p>
        <div style={styles.processGrid}>
          <div style={styles.processCard}><div style={styles.numberBadge}>1</div><div style={styles.cardTitle}>Initial Conversation</div><p style={styles.paragraph}>We learn about your business, your goals, and what a successful transition would look like.</p></div>
          <div style={styles.processCard}><div style={styles.numberBadge}>2</div><div style={styles.cardTitle}>Confidential Review</div><p style={styles.paragraph}>If there appears to be a fit, we review the business confidentially and professionally.</p></div>
          <div style={styles.processCard}><div style={styles.numberBadge}>3</div><div style={styles.cardTitle}>Flexible Structure</div><p style={styles.paragraph}>We consider structures that support both the seller’s goals and the long-term health of the business.</p></div>
          <div style={styles.processCard}><div style={styles.numberBadge}>4</div><div style={styles.cardTitle}>Transition & Stewardship</div><p style={styles.paragraph}>Our focus is continuity, stability, and responsible ownership after closing.</p></div>
        </div>
      </section>

      <section id="founder" style={styles.sectionGray}>
        <div style={styles.section}>
          <div style={styles.twoCol}>
            <div>
              <h2 style={styles.sectionTitle}>Founder / Operator</h2>
              <div style={styles.founderName}>Michael McMullan</div>
              <p style={styles.paragraph}>Michael McMullan brings over a decade of management experience across operations, finance, and supply chain environments, with a practical focus on execution, process improvement, and long-term business performance.</p>
              <p style={styles.paragraph}>He holds a Bachelor of Science from the Indiana University Kelley School of Business, with a double major in Finance and Supply Chain Management and a minor in Economics. He is also Lean Six Sigma Green Belt certified.</p>
              <p style={styles.paragraph}>Based in Avon, Indiana, Michael founded Blue Capital Holdings LLC to acquire and grow quality small businesses through disciplined ownership and operational stewardship.</p>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Why This Matters to Lenders, Brokers, and Sellers</div>
              <ul style={styles.list}><li>Over a decade of management experience</li><li>Finance, supply chain, and economics background</li><li>Lean Six Sigma Green Belt certified</li><li>Operator-oriented acquisition approach</li><li>Clear acquisition strategy and long-term ownership philosophy</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactWrap}>
        <h2 style={styles.sectionTitle}>Start a Confidential Conversation</h2>
        <p style={styles.paragraph}>Blue Capital Holdings LLC welcomes confidential conversations with business owners, brokers, and referral partners. Whether you are ready to sell now or simply exploring options, we would be glad to connect.</p>
        <p style={styles.paragraph}><strong>Email:</strong> info@bluecapitalholdingsllc.com</p>
        <p style={styles.paragraph}><strong>Phone:</strong> 812-312-1910</p>
        <p style={styles.paragraph}><strong>Location:</strong> Avon, Indiana</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="hidden" name="_subject" value="New Acquisition Inquiry - Blue Capital Holdings" />
          <input name="name" placeholder="Your Name" style={styles.input} value={formData.name} onChange={handleChange} required />
          <input name="company" placeholder="Company Name" style={styles.input} value={formData.company} onChange={handleChange} />
          <input name="revenue" placeholder="Annual Revenue" style={styles.input} value={formData.revenue} onChange={handleChange} />
          <input name="location" placeholder="Location" style={styles.input} value={formData.location} onChange={handleChange} />
          <input name="email" placeholder="Email" style={styles.input} value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" style={styles.input} value={formData.phone} onChange={handleChange} />
          <input name="industry" placeholder="Industry" style={styles.input} value={formData.industry} onChange={handleChange} />
          <input name="cashflow" placeholder="Annual EBITDA / Owner Cash Flow" style={styles.input} value={formData.cashflow} onChange={handleChange} />
          <input name="askingPrice" placeholder="Asking Price" style={styles.input} value={formData.askingPrice} onChange={handleChange} />
          <input name="yearsInBusiness" placeholder="Years in Business" style={styles.input} value={formData.yearsInBusiness} onChange={handleChange} />
          <input name="employees" placeholder="Number of Employees" style={styles.input} value={formData.employees} onChange={handleChange} />
          <input name="reasonForSelling" placeholder="Reason for Selling" style={styles.input} value={formData.reasonForSelling} onChange={handleChange} />
          <input name="timeline" placeholder="Desired Timeline to Sell" style={styles.input} value={formData.timeline} onChange={handleChange} />
          <input name="sellerFinancing" placeholder="Is Seller Financing Available?" style={styles.input} value={formData.sellerFinancing} onChange={handleChange} />
          <textarea name="message" placeholder="Tell us about the business" style={styles.textarea} value={formData.message} onChange={handleChange}></textarea>
          <p style={styles.note}>Please include revenue, cash flow, and reason for selling if available. All inquiries are reviewed confidentially.</p>
          {errorMessage ? <div style={styles.errorBox}>{errorMessage}</div> : null}
          <button type="submit" style={styles.submit} disabled={submitting}>{submitting ? "Submitting..." : "Submit Confidentially"}</button>
        </form>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerBrand}>Blue Capital Holdings LLC</div>
        <div>Business Acquisition & Investment Firm</div>
        <div>Avon, Indiana | info@bluecapitalholdingsllc.com | 812-312-1910</div>
      </footer>
    </div>
  );
}
