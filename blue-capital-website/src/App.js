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
      fontSize: "60px",
      lineHeight: 1.05,
      fontWeight: 800,
      marginBottom: "24px",
    },
    heroText: {
      fontSize: "20px",
      lineHeight: 1.7,
      color: "#dbeafe",
      marginBottom: "32px",
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
    },
    secondaryBtn: {
      border: "1px solid rgba(255,255,255,0.4)",
      color: "#ffffff",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 600,
      textDecoration: "none",
    },
    heroLogoWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heroLogo: {
      width: "100%",
      maxWidth: "340px",
    },
    section: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "80px 28px",
    },
    sectionTitle: {
      fontSize: "36px",
      fontWeight: 800,
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "17px",
      lineHeight: 1.8,
      marginBottom: "16px",
      color: "#374151",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    },
    footer: {
      backgroundColor: "#f3f4f6",
      textAlign: "center",
      padding: "36px",
      fontSize: "14px",
    }
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div style={styles.brandText}>Blue Capital Holdings LLC</div>
          <div style={styles.navLinks}>
            <a href="#home" style={styles.link}>Home</a>
            <a href="#about" style={styles.link}>About</a>
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
              We acquire and operate established small businesses with strong fundamentals and long-term growth potential.
            </p>
            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryBtn}>Start a Conversation</a>
              <a href="#about" style={styles.secondaryBtn}>Learn More</a>
            </div>
          </div>

          <div style={styles.heroLogoWrap}>
            <img src="/logo.png" alt="Logo" style={styles.heroLogo} />
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Blue Capital Holdings</h2>
        <p style={styles.paragraph}>
          Blue Capital Holdings LLC is a private investment firm focused on acquiring and operating small to mid-sized businesses.
        </p>
        <p style={styles.paragraph}>
          Our strategy centers on long-term ownership, operational improvement, and sustainable growth.
        </p>
      </section>

      <section id="founder" style={styles.section}>
        <h2 style={styles.sectionTitle}>Founder / Operator</h2>
        <p style={styles.paragraph}><strong>Michael McMullan</strong></p>
        <p style={styles.paragraph}>
          Michael brings years of management experience across operations, finance, and supply chain environments.
        </p>
        <p style={styles.paragraph}>
          He holds a degree in Finance and Supply Chain Management with a minor in Economics, and is a Lean Six Sigma Green Belt.
        </p>
        <p style={styles.paragraph}>
          Based in Indianapolis, Indiana.
        </p>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.paragraph}>info@bluecapitalholdingsllc.com</p>
        <p style={styles.paragraph}>812-312-1910</p>
      </section>

      <footer style={styles.footer}>
        Blue Capital Holdings LLC | Indianapolis, Indiana
      </footer>
    </div>
  );
}
