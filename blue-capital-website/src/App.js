import React, { useState } from "react";

const initialFormData = {
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
};

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
      color: "#1f2937",
      backgroundColor: "#ffffff",
      margin: 0,
      padding: 0,
    },
    nav: {
      borderBottom: "1px solid #dbe4f0",
      backgroundColor: "rgba(255,255,255,0.96)",
      boxShadow: "0 1px 12px rgba(15,45,92,0.06)",
      position: "sticky",
      top: 0,
      zIndex: 10,
      backdropFilter: "blur(10px)",
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
      gap: "22px",
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
      background:
        "radial-gradient(circle at top right, rgba(96,165,250,0.18), transparent 28%), linear-gradient(135deg, #0f2d5c 0%, #173f7a 52%, #10284d 100%)",
      color: "#ffffff",
      padding: "96px 28px 88px",
    },
    heroInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "56px",
      alignItems: "center",
    },
    heroEyebrow: {
      display: "inline-block",
      padding: "8px 12px",
      borderRadius: "999px",
      backgroundColor: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.16)",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      marginBottom: "18px",
    },
    heroTitle: {
      fontSize: "clamp(40px, 7vw, 58px)",
      lineHeight: 1.04,
      fontWeight: 800,
      marginBottom: "24px",
      letterSpacing: "-0.03em",
    },
    heroText: {
      fontSize: "18px",
      lineHeight: 1.8,
      color: "#dbeafe",
      marginBottom: "32px",
      maxWidth: "720px",
    },
    missionStatement: {
      fontSize: "20px",
      lineHeight: 1.75,
      color: "#ffffff",
      maxWidth: "760px",
      marginBottom: "28px",
      fontWeight: 600,
    },
    reassuranceRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "18px",
    },
    reassurancePill: {
      padding: "10px 14px",
      borderRadius: "999px",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.14)",
      fontSize: "14px",
      color: "#e0ecff",
      fontWeight: 600,
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
      boxShadow: "0 10px 28px rgba(0,0,0,0.18)",
      display: "inline-block",
    },
    secondaryBtn: {
      border: "1px solid rgba(255,255,255,0.4)",
      color: "#ffffff",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 600,
      textDecoration: "none",
      backgroundColor: "rgba(255,255,255,0.05)",
      display: "inline-block",
    },
    heroStats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "14px",
      marginTop: "30px",
    },
    statCard: {
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "14px",
      padding: "16px",
    },
    statValue: {
      fontSize: "22px",
      fontWeight: 800,
      marginBottom: "6px",
    },
    statLabel: {
      color: "#dbeafe",
      fontSize: "14px",
      lineHeight: 1.6,
    },
    heroLogoWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    heroLogoCard: {
      width: "100%",
      maxWidth: "380px",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: "28px",
      padding: "28px",
      boxShadow: "0 20px 55px rgba(0,0,0,0.22)",
    },
    heroLogo: {
      width: "100%",
      maxWidth: "320px",
      display: "block",
      margin: "0 auto",
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
      background:
        "linear-gradient(180deg, #f8fbff 0%, #f8fafc 55%, #ffffff 100%)",
      padding: "80px 0",
    },
    sectionTitle: {
      fontSize: "clamp(30px, 5vw, 36px)",
      fontWeight: 800,
      marginBottom: "20px",
      letterSpacing: "-0.02em",
      color: "#111827",
    },
    sectionEyebrow: {
      display: "inline-block",
      marginBottom: "14px",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2856a3",
    },
    sectionLead: {
      fontSize: "19px",
      lineHeight: 1.85,
      color: "#334155",
      maxWidth: "860px",
      marginBottom: "26px",
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
      borderRadius: "18px",
      padding: "26px",
      boxShadow: "0 14px 36px rgba(15,45,92,0.08)",
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
    metricText: {
      fontSize: "18px",
      lineHeight: 1.75,
      color: "#374151",
      marginBottom: 0,
    },
    missionPanel: {
      background:
        "linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)",
      border: "1px solid #d9e8ff",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 18px 40px rgba(15,45,92,0.08)",
      marginTop: "28px",
    },
    missionTitle: {
      fontSize: "24px",
      fontWeight: 800,
      color: "#102a56",
      marginBottom: "14px",
    },
    missionText: {
      fontSize: "19px",
      lineHeight: 1.85,
      color: "#1e3a5f",
      margin: 0,
      maxWidth: "860px",
    },
    emotionalGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "22px",
      marginTop: "30px",
    },
    emotionalCard: {
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: "24px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 14px 36px rgba(15,45,92,0.08)",
    },
    emotionalTitle: {
      fontSize: "19px",
      fontWeight: 700,
      color: "#102a56",
      marginBottom: "10px",
    },
    emotionalText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#475569",
      margin: 0,
    },
    sellSection: {
      background:
        "radial-gradient(circle at left top, rgba(96,165,250,0.16), transparent 24%), linear-gradient(135deg, #0f2d5c 0%, #143769 100%)",
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
    processSection: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
      padding: "84px 0",
    },
    processGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "22px",
      marginTop: "28px",
    },
    processCard: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "26px",
      border: "1px solid #e5edf7",
      boxShadow: "0 14px 36px rgba(15,45,92,0.08)",
    },
    processNumber: {
      width: "42px",
      height: "42px",
      borderRadius: "999px",
      backgroundColor: "#102a56",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      marginBottom: "16px",
    },
    processTitle: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#111827",
      marginBottom: "10px",
    },
    processText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#475569",
      margin: 0,
    },
    quoteCard: {
      backgroundColor: "#edf4ff",
      border: "1px solid #dbeafe",
      color: "#102a56",
      borderRadius: "18px",
      padding: "24px",
      marginTop: "24px",
      fontSize: "17px",
      lineHeight: 1.8,
      fontWeight: 600,
    },
    contactSection: {
      backgroundColor: "#ffffff",
    },
    funnelBand: {
      background:
        "linear-gradient(135deg, #eff6ff 0%, #f8fbff 55%, #ffffff 100%)",
      borderTop: "1px solid #e5edf8",
      borderBottom: "1px solid #e5edf8",
    },
    funnelWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "72px 28px",
    },
    funnelGrid: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "28px",
      alignItems: "start",
    },
    funnelChecklist: {
      backgroundColor: "#ffffff",
      borderRadius: "22px",
      padding: "28px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 18px 40px rgba(15,45,92,0.08)",
    },
    funnelList: {
      listStyle: "none",
      padding: 0,
      margin: "18px 0 0 0",
      display: "grid",
      gap: "14px",
    },
    funnelItem: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#334155",
      padding: "0 0 0 34px",
      position: "relative",
    },
    checkmark: {
      position: "absolute",
      left: 0,
      top: 0,
      color: "#0f766e",
      fontWeight: 800,
    },
    ctaPanel: {
      background:
        "linear-gradient(135deg, #102a56 0%, #173f7a 100%)",
      color: "#ffffff",
      borderRadius: "24px",
      padding: "30px",
      boxShadow: "0 24px 50px rgba(16,42,86,0.2)",
    },
    ctaTitle: {
      fontSize: "26px",
      fontWeight: 800,
      marginBottom: "12px",
    },
    ctaText: {
      fontSize: "17px",
      lineHeight: 1.85,
      color: "#dbeafe",
      marginBottom: "20px",
    },
    ctaButton: {
      backgroundColor: "#ffffff",
      color: "#102a56",
      textDecoration: "none",
      display: "inline-block",
      padding: "14px 22px",
      borderRadius: "12px",
      fontWeight: 800,
      boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
    },
    intakeHeader: {
      display: "grid",
      gap: "12px",
      marginBottom: "8px",
    },
    intakeBadge: {
      display: "inline-block",
      width: "fit-content",
      padding: "8px 12px",
      borderRadius: "999px",
      backgroundColor: "#e8f1ff",
      color: "#102a56",
      fontSize: "13px",
      fontWeight: 800,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    fieldHint: {
      fontSize: "13px",
      lineHeight: 1.7,
      color: "#64748b",
      marginTop: "-8px",
      marginBottom: "2px",
    },
    textAreaLabel: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#102a56",
      marginBottom: "6px",
    },
    contactWrap: {
      maxWidth: "860px",
      margin: "0 auto",
      padding: "80px 28px",
    },
    contactPanel: {
      background:
        "linear-gradient(180deg, rgba(248,251,255,0.9) 0%, rgba(255,255,255,1) 100%)",
      borderRadius: "24px",
      padding: "28px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 18px 40px rgba(15,45,92,0.08)",
    },
    form: {
      display: "grid",
      gap: "18px",
      marginTop: "22px",
    },
    inputGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
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
    submitDisabled: {
      backgroundColor: "#64748b",
      cursor: "not-allowed",
      boxShadow: "none",
    },
    note: {
      fontSize: "14px",
      color: "#6b7280",
      lineHeight: 1.7,
      marginTop: "4px",
      marginBottom: "4px",
    },
    errorBox: {
      backgroundColor: "#fef2f2",
      color: "#991b1b",
      border: "1px solid #fecaca",
      borderRadius: "10px",
      padding: "12px 14px",
      fontSize: "14px",
    },
    thankYouWrap: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top right, rgba(96,165,250,0.18), transparent 28%), linear-gradient(135deg, #0f2d5c 0%, #173f7a 55%, #123364 100%)",
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
      border: "none",
      cursor: "pointer",
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail) {
      setErrorMessage("Please enter your name and email before submitting.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mwvrjwnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          _subject: "New Acquisition Inquiry - Blue Capital Holdings",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      resetForm();
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage(
        "Something went wrong while submitting the form. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={styles.thankYouWrap}>
        <div style={styles.thankYouCard}>
          <h1 style={styles.thankYouTitle}>Thank You</h1>
          <p style={styles.thankYouText}>
            Your inquiry has been submitted successfully.
          </p>
          <p style={styles.thankYouText}>
            Blue Capital Holdings LLC appreciates your interest. All inquiries are
            reviewed confidentially, and a follow-up will be made if there appears
            to be a potential fit.
          </p>
          <button
            type="button"
            style={styles.thankYouButton}
            onClick={() => setSubmitted(false)}
          >
            Return to Homepage
          </button>
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
            <a href="#home" style={styles.link}>
              Home
            </a>
            <a href="#about" style={styles.link}>
              About
            </a>
            <a href="#criteria" style={styles.link}>
              Criteria
            </a>
            <a href="#sell" style={styles.link}>
              Sell Your Business
            </a>
            <a href="#founder" style={styles.link}>
              Founder
            </a>
            <a href="#contact" style={styles.link}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" style={styles.hero}>
        <div style={styles.heroInner}>
          <div>
            <div style={styles.heroEyebrow}>Private acquisition firm</div>
            <h1 style={styles.heroTitle}>
              Selling your business is personal. The next owner should treat it that way.
            </h1>
            <p style={styles.missionStatement}>
              We work with business owners who want more than a transaction. Blue
              Capital Holdings is built to provide a confidential, direct, and
              thoughtful path for owners who care about their people, their
              customers, and the legacy they have spent years building.
            </p>
            <p style={styles.heroText}>
              If you are thinking about retirement, succession, or simply want to
              explore your options with a serious buyer, we aim to make that first
              conversation clear, respectful, and pressure-free.
            </p>
            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryBtn}>
                Request a Confidential Conversation
              </a>
              <a href="#process" style={styles.secondaryBtn}>
                See How the Process Works
              </a>
            </div>
            <div style={styles.heroStats}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Direct Buyer</div>
                <div style={styles.statLabel}>
                  Thoughtful conversations without broad market exposure
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Confidential</div>
                <div style={styles.statLabel}>
                  A process designed to protect employees, customers, and reputation
                </div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>Long-term</div>
                <div style={styles.statLabel}>
                  Ownership built around stewardship, continuity, and growth
                </div>
              </div>
            </div>
            <div style={styles.reassuranceRow}>
              <div style={styles.reassurancePill}>Confidential conversations</div>
              <div style={styles.reassurancePill}>Legacy-minded ownership</div>
              <div style={styles.reassurancePill}>Built for retirement and succession transitions</div>
            </div>
          </div>

          <div style={styles.heroLogoWrap}>
            <div style={styles.heroLogoCard}>
              <img
                src="/logo.png"
                alt="Blue Capital Holdings logo"
                style={styles.heroLogo}
              />
            </div>
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
        <div style={styles.sectionEyebrow}>Owner-first approach</div>
        <h2 style={styles.sectionTitle}>About Blue Capital Holdings</h2>
        <p style={styles.sectionLead}>
          Most acquisition firms lead with capital. We lead with continuity. For
          many owners, the right outcome is not just about price. It is about who
          takes care of the team, preserves the customer relationships, and
          carries the business forward with discipline.
        </p>

        <p style={styles.paragraph}>
          Blue Capital Holdings LLC is a private investment firm focused on
          acquiring and operating established small to mid-sized businesses.
        </p>

        <p style={styles.paragraph}>
          We pursue long-term ownership through operational improvement,
          disciplined growth, and responsible stewardship. Rather than short-term
          resale, we focus on preserving what works, strengthening operations, and
          building durable enterprise value over time.
        </p>

        <p style={styles.paragraph}>
          We partner with business owners navigating retirement, succession, or
          transition who value a thoughtful, capable, and long-term buyer.
        </p>

        <p style={styles.paragraph}>
          Blue Capital Holdings LLC is actively seeking acquisition opportunities
          and welcomes confidential conversations with business owners, brokers,
          and referral partners.
        </p>

        <div style={styles.missionPanel}>
          <div style={styles.missionTitle}>Mission Statement</div>
          <p style={styles.missionText}>
            Our mission is to give business owners a trustworthy transition path,
            not just an exit. We acquire strong small businesses with the intent
            to protect what makes them valuable, support the people who helped
            build them, and grow them responsibly for the long term.
          </p>
        </div>

        <div style={styles.emotionalGrid}>
          <div style={styles.emotionalCard}>
            <div style={styles.emotionalTitle}>You built more than revenue</div>
            <p style={styles.emotionalText}>
              For many owners, the business represents decades of sacrifice,
              reputation, customer trust, and responsibility to employees. That
              deserves more than a generic buyer.
            </p>
          </div>
          <div style={styles.emotionalCard}>
            <div style={styles.emotionalTitle}>Retirement should feel clear</div>
            <p style={styles.emotionalText}>
              Owners nearing retirement often want confidence that the business
              will continue responsibly, not uncertainty about what happens after
              closing.
            </p>
          </div>
          <div style={styles.emotionalCard}>
            <div style={styles.emotionalTitle}>The right fit matters</div>
            <p style={styles.emotionalText}>
              A strong transition is about alignment on values, timing, and
              continuity, not just valuation. That is where thoughtful conversations
              make the difference.
            </p>
          </div>
        </div>
      </section>

      <section id="criteria" style={styles.sectionGray}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acquisition Criteria</h2>

          <div style={styles.criteriaGrid}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Revenue</div>
              <p style={styles.metricText}>$500,000 to $5,000,000 annually</p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Profitability</div>
              <p style={styles.metricText}>
                Consistent positive cash flow and stable operations
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Geography</div>
              <p style={styles.metricText}>United States based businesses</p>
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
          <div style={{ ...styles.sectionEyebrow, color: "#bfdbfe" }}>
            For owners considering a transition
          </div>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Considering Selling Your Business?
          </h2>
          <p style={styles.sellText}>
            You may only sell your business once. That decision affects your
            family, your employees, your customers, and the reputation you have
            built over years. We work directly with owners who want a buyer that
            understands the weight of that decision and approaches it with care.
          </p>
          <p style={styles.sellText}>
            If you are approaching retirement or thinking seriously about
            succession, our goal is to offer a steady hand, a direct process, and
            a transition path that respects everything you have put into the business.
          </p>
          <div style={styles.twoCol}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Why Owners Work With Us</div>
              <ul style={styles.list}>
                <li>Confidential, direct conversations without unnecessary noise</li>
                <li>Respect for your legacy, team, and customer relationships</li>
                <li>Flexible structures shaped around real transition needs</li>
                <li>Long-term ownership rather than short-term flipping</li>
              </ul>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>What You Can Expect</div>
              <ul style={styles.list}>
                <li>A straightforward, pressure-free first conversation</li>
                <li>Honest feedback on fit, timing, and next steps</li>
                <li>Transition options including seller financing when appropriate</li>
                <li>A buyer focused on operating and growing the business</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" style={styles.processSection}>
        <div style={styles.section}>
          <div style={styles.sectionEyebrow}>Simple and credible</div>
          <h2 style={styles.sectionTitle}>A Clear Process for Serious Owners</h2>
          <p style={styles.sectionLead}>
            The site should answer the question every owner is quietly asking:
            “What happens if I reach out?” This process is designed to lower
            friction, build trust quickly, and move the right conversations
            forward.
          </p>

          <div style={styles.processGrid}>
            <div style={styles.processCard}>
              <div style={styles.processNumber}>1</div>
              <div style={styles.processTitle}>Private Introduction</div>
              <p style={styles.processText}>
                You share a few basics about your business and what kind of
                transition you are considering.
              </p>
            </div>

            <div style={styles.processCard}>
              <div style={styles.processNumber}>2</div>
              <div style={styles.processTitle}>Initial Fit Review</div>
              <p style={styles.processText}>
                We review the opportunity carefully and respond directly if there
                appears to be a strong fit.
              </p>
            </div>

            <div style={styles.processCard}>
              <div style={styles.processNumber}>3</div>
              <div style={styles.processTitle}>Owner Conversation</div>
              <p style={styles.processText}>
                We discuss your goals, timing, legacy concerns, and transition
                preferences in a confidential conversation.
              </p>
            </div>

            <div style={styles.processCard}>
              <div style={styles.processNumber}>4</div>
              <div style={styles.processTitle}>Thoughtful Next Steps</div>
              <p style={styles.processText}>
                If there is alignment, we move forward with clarity and respect
                for the business you have built.
              </p>
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
              Michael McMullan brings over a decade of management experience
              across operations, finance, and supply chain environments, with a
              practical focus on execution, process improvement, and long-term
              business performance.
            </p>

            <p style={styles.paragraph}>
              He holds a Bachelor of Science from the Indiana University Kelley
              School of Business, with a double major in Finance and Supply Chain
              Management and a minor in Economics. He is also Lean Six Sigma Green
              Belt certified.
            </p>

            <p style={styles.paragraph}>
              Based in Avon, Indiana, Michael founded Blue Capital Holdings LLC to
              acquire and grow quality small businesses through disciplined
              ownership and operational stewardship.
            </p>

            <div style={styles.quoteCard}>
              Built for owners who care about legacy, continuity, and thoughtful
              long-term stewardship.
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>
              Why This Matters to Lenders, Brokers, and Sellers
            </div>

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

      <section style={styles.funnelBand}>
        <div style={styles.funnelWrap}>
          <div
            style={{
              ...styles.funnelGrid,
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            <div style={styles.funnelChecklist}>
              <div style={styles.sectionEyebrow}>Why owners convert here</div>
              <h2 style={{ ...styles.sectionTitle, marginBottom: "12px" }}>
                Built to Turn Interest Into Real Conversations
              </h2>
              <p style={{ ...styles.paragraph, maxWidth: "100%" }}>
                Your website should not just describe what you buy. It should help
                owners feel understood, reduce uncertainty, and make taking the
                first step feel safe.
              </p>
              <ul style={styles.funnelList}>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>✓</span>
                  Owner-centered messaging that speaks to legacy, trust, and
                  continuity instead of generic acquisition language.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>✓</span>
                  A clear process that removes mystery and lowers resistance to
                  reaching out.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>✓</span>
                  Stronger calls to action that frame contact as a confidential
                  conversation rather than a hard commitment.
                </li>
              </ul>
            </div>

            <div style={styles.ctaPanel}>
            <div style={styles.ctaTitle}>
              Explore a transition without pressure
            </div>
            <p style={styles.ctaText}>
              If you are considering retirement, succession, or a sale in the
              next 6 to 36 months, the first step is simply a private
              conversation. No broad process. No obligation. Just a thoughtful
              discussion about fit.
            </p>
            <p style={styles.ctaText}>
              The best inquiries usually come from owners who want to understand
              their options before they are ready to make a final decision.
            </p>
            <a href="#contact" style={styles.ctaButton}>
              Start the Conversation
            </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactWrap}>
          <div style={styles.contactPanel}>
            <div style={styles.sectionEyebrow}>Confidential inquiry</div>
            <h2 style={styles.sectionTitle}>Contact</h2>
            <p style={styles.sectionLead}>
              If you are a business owner, broker, or advisor exploring a
              transition, use the form below to begin a confidential conversation.
              The more context you share, the more thoughtfully we can evaluate
              fit and respond.
            </p>
            <div style={styles.intakeHeader}>
              <div style={styles.intakeBadge}>Seller Intake</div>
              <p style={styles.paragraph}>
                This form is designed for business owners who want an initial
                confidential conversation about transition timing, legacy, and fit.
              </p>
            </div>
            <p style={styles.paragraph}>
              <strong>Email:</strong> info@bluecapitalholdingsllc.com
            </p>
            <p style={styles.paragraph}>
              <strong>Phone:</strong> 812-312-1910
            </p>
            <p style={styles.paragraph}>
              <strong>Location:</strong> Avon, Indiana
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="hidden"
                name="_subject"
                value="New Acquisition Inquiry - Blue Capital Holdings"
              />

              <div style={styles.inputGrid}>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  style={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  style={styles.input}
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
                <input
                  name="revenue"
                  type="text"
                  placeholder="Annual Revenue Range"
                  style={styles.input}
                  value={formData.revenue}
                  onChange={handleChange}
                />
                <input
                  name="location"
                  type="text"
                  placeholder="Location"
                  style={styles.input}
                  value={formData.location}
                  onChange={handleChange}
                  autoComplete="address-level2"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  style={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  style={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                <input
                  name="industry"
                  type="text"
                  placeholder="Industry"
                  style={styles.input}
                  value={formData.industry}
                  onChange={handleChange}
                />
                <input
                  name="cashflow"
                  type="text"
                  placeholder="Annual EBITDA / Seller Discretionary Earnings"
                  style={styles.input}
                  value={formData.cashflow}
                  onChange={handleChange}
                />
                <input
                  name="askingPrice"
                  type="text"
                  placeholder="Asking Price"
                  style={styles.input}
                  value={formData.askingPrice}
                  onChange={handleChange}
                />
                <input
                  name="yearsInBusiness"
                  type="text"
                  placeholder="Years in Business"
                  style={styles.input}
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                />
                <input
                  name="employees"
                  type="text"
                  placeholder="Number of Employees"
                  style={styles.input}
                  value={formData.employees}
                  onChange={handleChange}
                />
                <input
                  name="reasonForSelling"
                  type="text"
                  placeholder="Reason for Selling / Retirement / Succession"
                  style={styles.input}
                  value={formData.reasonForSelling}
                  onChange={handleChange}
                />
                <input
                  name="timeline"
                  type="text"
                  placeholder="Desired Timeline to Transition"
                  style={styles.input}
                  value={formData.timeline}
                  onChange={handleChange}
                />
                <input
                  name="sellerFinancing"
                  type="text"
                  placeholder="Is Seller Financing Available?"
                  style={styles.input}
                  value={formData.sellerFinancing}
                  onChange={handleChange}
                />
              </div>

              <p style={styles.fieldHint}>
                Helpful context: approximate revenue, cash flow, ownership goals,
                desired timeline, and whether you want to stay involved during a transition.
              </p>

              <div style={styles.textAreaLabel}>
                Tell us about the business and the kind of transition you are considering
              </div>
              <textarea
                name="message"
                placeholder="Share anything helpful: what the company does, who it serves, whether this is a retirement or succession conversation, and what matters most to you in the next owner."
                style={styles.textarea}
                value={formData.message}
                onChange={handleChange}
              />

              <p style={styles.note}>
                Please include revenue, cash flow, timeline, and reason for
                selling when possible. All inquiries are reviewed confidentially.
              </p>

              {errorMessage ? (
                <div style={styles.errorBox}>{errorMessage}</div>
              ) : null}

              <button
                type="submit"
                style={{
                  ...styles.submit,
                  ...(submitting ? styles.submitDisabled : {}),
                }}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Confidentially"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerBrand}>Blue Capital Holdings LLC</div>
        <div>Business Acquisition & Investment Firm</div>
        <div>Avon, Indiana | info@bluecapitalholdingsllc.com | 812-312-1910</div>
      </footer>
    </div>
  );
}
