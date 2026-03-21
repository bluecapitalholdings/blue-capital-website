import React from "react";

export default function App() {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      color: "#1f2937",
      backgroundColor: "#ffffff",
      margin: 0,
      padding: 0,
    },
    nav: {
      borderBottom: "1px solid #e5e7eb",
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    navInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "18px 28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap",
    },
    brandText: {
      fontSize: "18px",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "#102a56",
    },
    navLinks: {
      display: "flex",
      gap: "28px",
      fontSize: "15px",
      color: "#374151",
      flexWrap: "wrap",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
    },
    hero: {
      background: "linear-gradient(135deg, #0f2d5c 0%, #173f7a 55%, #123364 100%)",
      color: "#ffffff",
      padding: "96px 28px 88px",
    },
    heroInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "56px",
      alignItems: "center",
    },
    heroTitle: {
      fontSize: "64px",
      lineHeight: 1.02,
      fontWeight: 800,
      maxWidth: "760px",
      marginBottom: "26px",
      letterSpacing: "-0.04em",
    },
    heroText: {
      fontSize: "20px",
      lineHeight: 1.7,
      maxWidth: "720px",
      color: "#dbeafe",
      marginBottom: "34px",
    },
    buttonRow: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    primaryBtn: {
      backgroundColor: "#ffffff",
      color: "#102a56",
      textDecoration: "none",
      padding: "15px 26px",
      borderRadius: "12px",
      fontWeight: 700,
      display: "inline-block",
      boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
    },
    secondaryBtn: {
      border: "1px solid rgba(255,255,255,0.35)",
      color: "#ffffff",
      textDecoration: "none",
      padding: "15px 26px",
      borderRadius: "12px",
      fontWeight: 600,
      display: "inline-block",
      backgroundColor: "rgba(255,255,255,0.04)",
    },
    heroLogoWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heroLogoCard: {
      width: "100%",
      maxWidth: "410px",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "24px",
      padding: "34px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
      backdropFilter: "blur(4px)",
    },
    heroLogo: {
      width: "100%",
      maxWidth: "300px",
      display: "block",
      margin: "0 auto",
      opacity: 0.5,
      filter: "brightness(1.25) contrast(1.05)",
      mixBlendMode: "screen",
    },
    trustStrip: {
      borderBottom: "1px solid #e5e7eb",
      backgroundColor: "#ffffff",
    },
    trustInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "22px 28px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "14px",
      color: "#4b5563",
      fontSize: "14px",
      fontWeight: 600,
    },
    section: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "84px 28px",
    },
    sectionGray: {
      backgroundColor: "#f8fafc",
      padding: "84px 0",
    },
    sectionTitle: {
      fontSize: "40px",
      fontWeight: 800,
      marginBottom: "24px",
      color: "#111827",
      letterSpacing: "-0.03em",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "40px",
      alignItems: "start",
    },
    paragraph: {
      fontSize: "17px",
      lineHeight: 1.85,
      color: "#374151",
      marginBottom: "18px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
      padding: "30px",
      border: "1px solid #eef2f7",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: 700,
      marginBottom: "18px",
      color: "#111827",
    },
    list: {
      paddingLeft: "20px",
      margin: 0,
      color: "#374151",
      lineHeight: 1.9,
      fontSize: "16px",
    },
    criteriaGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "24px",
      marginBottom: "28px",
    },
    sellSection: {
      background: "linear-gradient(135deg, #0f2d5c 0%, #143769 100%)",
      color: "#ffffff",
      padding: "84px 0",
    },
    sellText: {
      color: "#dbeafe",
      fontSize: "18px",
      lineHeight: 1.8,
      maxWidth: "760px",
      marginBottom: "28px",
    },
    formWrap: {
      maxWidth: "860px",
      margin: "0 auto",
      padding: "84px 28px",
    },
    form: {
      display: "grid",
      gap: "18px",
    },
    input: {
      width: "100%",
      padding: "15px 16px",
      borderRadius: "12px",
      border: "1px solid #d1d5db",
      fontSize: "16px",
      boxSizing: "border-box",
      backgroundColor: "#ffffff",
    },
    textarea: {
      width: "100%",
      padding: "15px 16px",
      borderRadius: "12px",
      border: "1px solid #d1d5db",
      fontSize: "16px",
      minHeight: "150px",
      boxSizing: "border-box",
      resize: "vertical",
      backgroundColor: "#ffffff",
    },
    submit: {
      backgroundColor: "#102a56",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      padding: "16px 20px",
      fontSize: "16px",
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(16, 42, 86, 0.18)",
    },
    footer: {
      backgroundColor: "#f3f4f6",
      textAlign: "center",
      padding: "38px 24px",
      color: "#4b5563",
      fontSize: "14px",
      lineHeight: 1.8,
      borderTop: "1px solid #e5e7eb",
    },
    footerBrand: {
      fontWeight: 700,
      color: "#111827",
      fontSize: "15px",
    },
  };

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
            <a href="#contact" style={styles.link}>Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" style={styles.hero}>
        <div style={styles.heroInner}>
          <div>
            <h1 style={styles.heroTitle}>
              Acquiring and Growing Profitable Small Businesses
            </h1>
            <p style={styles.heroText}>
              Blue Capital Holdings LLC is a private investment firm focused on
              acquiring and operating established small businesses with strong
              fundamentals and long-term growth potential.
            </p>
            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryBtn}>
                Start a Confidential Conversation
              </a>
              <a href="#criteria" style={styles.secondaryBtn}>
                View Acquisition Criteria
              </a>
            </div>
          </div>

          <div style={styles.heroLogoWrap}>
            <div style={styles.heroLogoCard}>
              <img src="/logo.png" alt="Blue Capital Holdings" style={styles.heroLogo} />
            </div>
          </div>
        </div>
      </section>

      <section style={styles.trustStrip}>
        <div style={styles.trustInner}>
          <div>Long-term ownership focused</div>
          <div>Privately held investment firm</div>
          <div>U.S. small business acquisitions</div>
          <div>Confidential process for owners</div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.twoCol}>
          <div>
            <h2 style={styles.sectionTitle}>Long-Term Ownership. Responsible Growth.</h2>
            <p style={styles.paragraph}>
              We partner with business owners who are preparing for retirement,
              succession, or a transition. Our goal is to preserve the legacy
              you built while supporting long-term growth and stability for
              employees and customers.
            </p>
            <p style={styles.paragraph}>
              Rather than buying and flipping companies, we acquire businesses
              to operate and grow them over the long term through operational
              improvement and responsible ownership.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Core Focus</div>
            <ul style={styles.list}>
              <li>Small business acquisitions</li>
              <li>Operational improvement</li>
              <li>Long-term ownership strategy</li>
              <li>Strategic investments</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="criteria" style={styles.sectionGray}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acquisition Criteria</h2>

          <div style={styles.criteriaGrid}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Revenue</div>
              <p style={styles.paragraph}>$500,000 – $5,000,000 annually</p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Profitability</div>
              <p style={styles.paragraph}>Consistent positive cash flow</p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Location</div>
              <p style={styles.paragraph}>United States based businesses</p>
            </div>
          </div>

          <div style={styles.twoCol}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Industries of Interest</div>
              <ul style={styles.list}>
                <li>Service businesses</li>
                <li>Logistics and distribution</li>
                <li>Commercial services</li>
                <li>Light manufacturing</li>
                <li>Real-estate supported businesses</li>
              </ul>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Preferred Characteristics</div>
              <ul style={styles.list}>
                <li>Established customer base</li>
                <li>Experienced employees</li>
                <li>Stable operations</li>
                <li>Opportunities for operational improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sell" style={styles.sellSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Considering Selling Your Business?</h2>
          <p style={styles.sellText}>
            We work directly with business owners preparing for retirement,
            succession, or a transition. Our process is confidential, flexible,
            and focused on protecting the legacy of your company.
          </p>
          <div style={styles.twoCol}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Why Owners Work With Us</div>
              <ul style={styles.list}>
                <li>Confidential acquisition process</li>
                <li>Flexible deal structures</li>
                <li>Long-term ownership approach</li>
                <li>Commitment to employees and customers</li>
              </ul>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Transition Structures</div>
              <ul style={styles.list}>
                <li>Full acquisitions</li>
                <li>Seller financing arrangements</li>
                <li>Gradual ownership transitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.formWrap}>
        <h2 style={styles.sectionTitle}>Submit Your Business</h2>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          style={styles.form}
        >
          <input name="name" placeholder="Your Name" style={styles.input} />
          <input name="company" placeholder="Company Name" style={styles.input} />
          <input name="revenue" placeholder="Annual Revenue" style={styles.input} />
          <input name="location" placeholder="Location" style={styles.input} />
          <input name="email" placeholder="Email" style={styles.input} />
          <input name="phone" placeholder="Phone" style={styles.input} />
          <textarea
            name="message"
            placeholder="Tell us about the business"
            style={styles.textarea}
          />
          <button type="submit" style={styles.submit}>
            Submit Confidentially
          </button>
        </form>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerBrand}>Blue Capital Holdings LLC</div>
        <div>Business Acquisition & Investment Firm</div>
        <div>info@bluecapitalholdings.com | 812-312-1910</div>
      </footer>
    </div>
  );
}
