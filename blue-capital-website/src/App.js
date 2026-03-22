import React from "react";

export default function App() {
  const isThankYouPage = typeof window !== "undefined" && window.location.pathname === "/thank-you";

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
      fontSize: "20px",
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
      fontSize: "58px",
      lineHeight: 1.05,
      fontWeight: 800,
      marginBottom: "24px",
      letterSpacing: "-0.03em",
    },
    heroText: {
      fontSize: "20px",
      lineHeight: 1.7,
      color: "#dbeafe",
      marginBottom: "32px",
      maxWidth: "720px",
    },
    buttonRow: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    primaryBtn: {
      backgroundColor: "#ffffff",
      color: "#102a56",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 700,
      textDecoration: "none",
      boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
    },
    secondaryBtn: {
      border: "1px solid rgba(255,255,255,0.4)",
      color: "#ffffff",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 600,
      textDecoration: "none",
      backgroundColor: "rgba(255,255,255,0.04)",
    },
    heroLogoWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heroLogo: {
      width: "100%",
      maxWidth: "340px",
      display: "block",
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
      padding: "80px 28px",
    },
    sectionGray: {
      backgroundColor: "#f8fafc",
      padding: "80px 0",
    },
    sectionTitle: {
      fontSize: "36px",
      fontWeight: 800,
      marginBottom: "20px",
      letterSpacing: "-0.02em",
      color: "#111827",
    },
    paragraph: {
      fontSize: "17px",
      lineHeight: 1.8,
      marginBottom: "16px",
      color: "#374151",
      maxWidth: "860px",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "32px",
      alignItems: "start",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
      border: "1px solid #eef2f7",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: 700,
      marginBottom: "14px",
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
    founderName: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#102a56",
      marginBottom: "12px",
    },
    contactWrap: {
      maxWidth: "860px",
      margin: "0 auto",
      padding: "80px 28px",
    },
    form: {
      display: "grid",
      gap: "18px",
      marginTop: "22px",
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
      padding: "36px",
      fontSize: "14px",
      lineHeight: 1.8,
      borderTop: "1px solid #e5e7eb",
      color: "#4b5563",
    },
    footerBrand: {
      fontWeight: 700,
      color: "#111827",
    },
    thankYouWrap: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2d5c 0%, #173f7a 55%, #123364 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px",
    },
    thankYouCard: {
      maxWidth: "760px",
      width: "100%",
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
      padding: "48px",
      textAlign: "center",
    },
    thankYouTitle: {
      fontSize: "40px",
      fontWeight: 800,
      color: "#102a56",
      marginBottom: "16px",
      letterSpacing: "-0.02em",
    },
    thankYouText: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#374151",
      marginBottom: "18px",
    },
    thankYouButton: {
      display: "inline-block",
      marginTop: "10px",
      backgroundColor: "#102a56",
      color: "#ffffff",
      textDecoration: "none",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 700,
    },
  };

  if (isThankYouPage) {
    return (
      <div style={styles.thankYouWrap}>
        <div style={styles.thankYouCard}>
          <h1 style={styles.thankYouTitle}>Thank You</h1>
          <p style={styles.thankYouText}>
            Your inquiry has been submitted successfully.
          </p>
          <p style={styles.thankYouText}>
            Blue Capital Holdings LLC appreciates your interest. All inquiries are reviewed confidentially, and a follow-up will be made if there appears to be a potential fit.
          </p>
          <a href="/" style={styles.thankYouButton}>Return to Homepage</a>
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
              Blue Capital Holdings LLC is a private investment firm focused on acquiring and operating established small businesses with strong fundamentals, durable cash flow, and long-term growth potential.
            </p>
            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryBtn}>Start a Confidential Conversation</a>
              <a href="#criteria" style={styles.secondaryBtn}>View Acquisition Criteria</a>
            </div>
          </div>

          <div style={styles.heroLogoWrap}>
            <img src="/logo.png" alt="Blue Capital Holdings logo" style={styles.heroLogo} />
          </div>
        </div>
      </section>

      <section style={styles.trustStrip}>
        <div style={styles.trustInner}>
          <div>Long-term ownership focused</div>
          <div>Privately held acquisition firm</div>
          <div>U.S. small business acquisitions</div>
          <div>Confidential process for owners</div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Blue Capital Holdings</h2>

        <p style={styles.paragraph}>
          Blue Capital Holdings LLC is a private investment firm focused on acquiring and operating established small to mid-sized businesses.
        </p>

        <p style={styles.paragraph}>
          We pursue long-term ownership through operational improvement, disciplined growth, and responsible stewardship. Rather than short-term resale, we focus on preserving what works, strengthening operations, and building durable enterprise value over time.
        </p>

        <p style={styles.paragraph}>
          We partner with business owners navigating retirement, succession, or transition who value a thoughtful, capable, and long-term buyer.
        </p>

        <p style={styles.paragraph}>
          Blue Capital Holdings LLC is actively seeking acquisition opportunities and welcomes confidential conversations with business owners, brokers, and referral partners.
        </p>
      </section>

      <section id="criteria" style={styles.sectionGray}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acquisition Criteria</h2>

          <div style={styles.criteriaGrid}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Revenue</div>
              <p style={styles.paragraph}>$500,000 to $5,000,000 annually</p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Profitability</div>
              <p style={styles.paragraph}>Consistent positive cash flow and stable operations</p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Geography</div>
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
                <li>Operational improvement opportunities</li>
                <li>Flexible transition structures, including seller financing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sell" style={styles.sellSection}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Considering Selling Your Business?</h2>
          <p style={styles.sellText}>
            Blue Capital Holdings works directly with business owners preparing for retirement, succession, or a transition. Our approach is confidential, flexible, and focused on protecting the legacy of the company while supporting continuity for employees and customers.
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
              <div style={styles.cardTitle}>Transition Approach</div>
              <ul style={styles.list}>
                <li>Full acquisitions</li>
                <li>Seller financing arrangements</li>
                <li>Gradual ownership transitions where appropriate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" style={styles.section}>
        <div style={styles.twoCol}>
          <div>
            <h2 style={styles.sectionTitle}>Founder / Operator</h2>
            <div style={styles.founderName}>Michael McMullan</div>

            <p style={styles.paragraph}>
              Michael McMullan brings over a decade of management experience across operations, finance, and supply chain environments, with a practical focus on execution, process improvement, and long-term business performance.
            </p>

            <p style={styles.paragraph}>
              He holds a Bachelor of Science from the Indiana University Kelley School of Business, with a double major in Finance and Supply Chain Management and a minor in Economics. He is also Lean Six Sigma Green Belt certified.
            </p>

            <p style={styles.paragraph}>
              Based in Avon, Indiana, Michael founded Blue Capital Holdings LLC to acquire and grow quality small businesses through disciplined ownership and operational stewardship.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Why This Matters to Lenders, Brokers, and Sellers</div>

            <ul style={styles.list}>
              <li>Over a decade of management experience</li>
              <li>Finance, supply chain, and economics background</li>
              <li>Lean Six Sigma Green Belt certified</li>
              <li>Operator-oriented acquisition approach</li>
              <li>Clear acquisition strategy and long-term ownership philosophy</li>
            </ul>

            <p style={styles.paragraph}>
              The firm is actively seeking acquisition opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactWrap}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.paragraph}>
          Blue Capital Holdings LLC welcomes confidential conversations with business owners, brokers, and referral partners.
        </p>
        <p style={styles.paragraph}><strong>Email:</strong> info@bluecapitalholdingsllc.com</p>
        <p style={styles.paragraph}><strong>Phone:</strong> 812-312-1910</p>
        <p style={styles.paragraph}><strong>Location:</strong> Avon, Indiana</p>

        <form action="https://formspree.io/f/mwvrjwnk" method="POST">
          <input type="hidden" name="_next" value="https://www.bluecapitalholdingsllc.com/thank-you" />
          <input type="hidden" name="_subject" value="New Acquisition Inquiry - Blue Capital Holdings" />
          <input name="name" placeholder="Your Name" style={styles.input} />
          <input name="company" placeholder="Company Name" style={styles.input} />
          <input name="revenue" placeholder="Annual Revenue" style={styles.input} />
          <input name="location" placeholder="Location" style={styles.input} />
          <input name="email" placeholder="Email" style={styles.input} />
          <input name="phone" placeholder="Phone" style={styles.input} />
          <input name="industry" placeholder="Industry" style={styles.input} />
          <input name="cashflow" placeholder="Annual EBITDA / Owner Cash Flow" style={styles.input} />
          <input name="askingPrice" placeholder="Asking Price" style={styles.input} />
          <input name="yearsInBusiness" placeholder="Years in Business" style={styles.input} />
          <input name="employees" placeholder="Number of Employees" style={styles.input} />
          <input name="reasonForSelling" placeholder="Reason for Selling" style={styles.input} />
          <input name="timeline" placeholder="Desired Timeline to Sell" style={styles.input} />
          <input name="sellerFinancing" placeholder="Is Seller Financing Available?" style={styles.input} />
          <textarea
            name="message"
            placeholder="Tell us about the business"
            style={styles.textarea}
          ></textarea>
          <button type="submit" style={styles.submit}>
            Submit Confidentially
          </button>
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
