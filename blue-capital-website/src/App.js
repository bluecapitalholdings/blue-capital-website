import React, { useEffect, useState } from "react";

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
  const [hoveredNav, setHoveredNav] = useState("");
  const [hoveredSurface, setHoveredSurface] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    page: {
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      color: "#1f2937",
      backgroundColor: "#fcfdff",
      margin: 0,
      padding: 0,
    },
    nav: {
      borderBottom: "1px solid #d8e4ec",
      backgroundColor: "rgba(252,253,255,0.96)",
      boxShadow: "0 1px 10px rgba(0,48,91,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 20,
      backdropFilter: "blur(10px)",
    },
    navInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isMobile ? "12px 16px" : "14px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: isMobile ? "12px" : "16px",
    },
    brandWrap: {
      display: "flex",
      alignItems: "center",
      gap: isMobile ? "10px" : "12px",
      width: "100%",
    },
    navLogo: {
      width: isMobile ? "48px" : "56px",
      height: isMobile ? "48px" : "56px",
      display: "block",
      objectFit: "contain",
      flexShrink: 0,
    },
    brandText: {
      fontSize: isMobile ? "14px" : "18px",
      fontWeight: 700,
      letterSpacing: "0.01em",
      color: "#00305b",
      textTransform: "uppercase",
      lineHeight: 1.15,
    },
    navLinks: {
      display: "flex",
      gap: isMobile ? "10px" : "12px",
      fontSize: isMobile ? "14px" : "15px",
      flexWrap: "nowrap",
      alignItems: "center",
      width: "100%",
      overflowX: "auto",
      paddingBottom: "4px",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      WebkitOverflowScrolling: "touch",
    },
    link: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
      padding: isMobile ? "9px 11px" : "10px 12px",
      borderRadius: "999px",
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
      flex: "0 0 auto",
    },
    missionNavBtn: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
      padding: isMobile ? "9px 11px" : "10px 12px",
      borderRadius: "999px",
      backgroundColor: "transparent",
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
      flex: "0 0 auto",
    },
    navHover: {
      backgroundColor: "#e8f6f7",
      boxShadow: "inset 0 0 0 1px #bde7eb",
      color: "#00305b",
      fontWeight: 700,
    },
    hero: {
      background:
        "linear-gradient(180deg, #f8fcfd 0%, #eef7f9 52%, #fdfefe 100%)",
      color: "#00305b",
      padding: isMobile ? "44px 20px 42px" : "88px 28px 72px",
    },
    heroInner: {
      maxWidth: "1040px",
      margin: "0 auto",
      display: "block",
    },
    heroContent: {
      maxWidth: "820px",
    },
    heroEyebrow: {
      display: "inline-block",
      padding: "8px 12px",
      borderRadius: "999px",
      backgroundColor: "#e7f6f7",
      border: "1px solid #bde7eb",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      marginBottom: "16px",
      color: "#1f7d8c",
    },
    heroTitle: {
      fontSize: isMobile ? "34px" : "clamp(40px, 7vw, 58px)",
      lineHeight: 1.04,
      fontWeight: 800,
      marginBottom: "20px",
      letterSpacing: "-0.03em",
      fontFamily: "Georgia, 'Times New Roman', serif",
      maxWidth: "900px",
    },
    heroText: {
      fontSize: isMobile ? "17px" : "19px",
      lineHeight: 1.85,
      color: "#48657a",
      marginBottom: "28px",
      maxWidth: "720px",
    },
    missionStatement: {
      fontSize: isMobile ? "20px" : "22px",
      lineHeight: 1.8,
      color: "#21445f",
      maxWidth: "760px",
      marginBottom: "24px",
      fontWeight: 600,
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    reassuranceRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "16px",
    },
    reassurancePill: {
      padding: "10px 14px",
      borderRadius: "999px",
      backgroundColor: "#ffffff",
      border: "1px solid #dbe7ef",
      fontSize: "14px",
      color: "#567082",
      fontWeight: 600,
    },
    buttonRow: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
    },
    primaryBtn: {
      backgroundColor: "#00305b",
      color: "#ffffff",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 700,
      textDecoration: "none",
      boxShadow: "0 12px 24px rgba(0,48,91,0.16)",
      display: "inline-block",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    secondaryBtn: {
      border: "1px solid #bcd8e5",
      color: "#00305b",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 600,
      textDecoration: "none",
      backgroundColor: "#ffffff",
      display: "inline-block",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    buttonHoverLift: {
      transform: "translateY(-3px)",
      boxShadow: "0 18px 30px rgba(0,48,91,0.16)",
    },
    secondaryBtnHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 14px 26px rgba(0,48,91,0.08)",
      borderColor: "#8ac9d2",
    },
    heroStats: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "14px",
      marginTop: "28px",
    },
    statCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #dbe7ef",
      borderRadius: "14px",
      padding: "16px",
      boxShadow: "0 12px 24px rgba(0,48,91,0.05)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    statValue: {
      fontSize: "22px",
      fontWeight: 800,
      marginBottom: "6px",
    },
    statLabel: {
      color: "#60778a",
      fontSize: "14px",
      lineHeight: 1.6,
    },
    trustStrip: {
      borderBottom: "1px solid #e3edf2",
      backgroundColor: "#fdfefe",
    },
    trustInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isMobile ? "18px 20px" : "20px 28px",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
    },
    trustBadge: {
      backgroundColor: "#ffffff",
      border: "1px solid #dfe9ef",
      borderRadius: "18px",
      padding: "18px",
      boxShadow: "0 10px 24px rgba(0,48,91,0.05)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    trustBadgeHover: {
      transform: "translateY(-4px)",
      boxShadow: "0 18px 30px rgba(0,48,91,0.1)",
      borderColor: "#b9d8e4",
    },
    trustBadgeTop: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px",
    },
    trustIcon: {
      width: "34px",
      height: "34px",
      borderRadius: "999px",
      backgroundColor: "#e8f6f7",
      color: "#2f8b99",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "13px",
      fontWeight: 800,
      letterSpacing: "0.04em",
    },
    trustTitle: {
      color: "#00305b",
      fontSize: "15px",
      fontWeight: 700,
    },
    trustText: {
      color: "#60778a",
      fontSize: "14px",
      lineHeight: 1.7,
    },
    section: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isMobile ? "44px 20px" : "clamp(56px, 6vw, 80px) 28px",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    sectionGray: {
      background:
        "linear-gradient(180deg, #f7fbfc 0%, #f3f8fa 55%, #ffffff 100%)",
      padding: isMobile ? "44px 0" : "64px 0",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    sectionTitle: {
      fontSize: isMobile ? "26px" : "clamp(30px, 5vw, 36px)",
      fontWeight: 800,
      marginBottom: "18px",
      letterSpacing: "-0.02em",
      color: "#00305b",
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    sectionEyebrow: {
      display: "inline-block",
      marginBottom: "12px",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2f8b99",
    },
    sectionLead: {
      fontSize: isMobile ? "17px" : "19px",
      lineHeight: 1.8,
      color: "#496173",
      maxWidth: "860px",
      marginBottom: "22px",
    },
    paragraph: {
      fontSize: isMobile ? "16px" : "17px",
      lineHeight: 1.8,
      marginBottom: "14px",
      color: "#536879",
      maxWidth: "860px",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(320px, 1fr))",
      gap: isMobile ? "22px" : "28px",
      alignItems: "start",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: isMobile ? "22px" : "26px",
      boxShadow: "0 12px 28px rgba(0,48,91,0.06)",
      border: "1px solid #e3edf3",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    elevatedHover: {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 34px rgba(0,48,91,0.1)",
      borderColor: "#c5dae4",
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: 700,
      marginBottom: "14px",
      color: "#00305b",
    },
    list: {
      paddingLeft: "20px",
      margin: 0,
      color: "#536879",
      lineHeight: 1.9,
      fontSize: "16px",
    },
    criteriaGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginBottom: "24px",
    },
    metricText: {
      fontSize: "18px",
      lineHeight: 1.75,
      color: "#536879",
      marginBottom: 0,
    },
    emotionalGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginTop: "24px",
    },
    emotionalCard: {
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: "24px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 12px 28px rgba(0,48,91,0.06)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    emotionalTitle: {
      fontSize: "19px",
      fontWeight: 700,
      color: "#00305b",
      marginBottom: "10px",
    },
    emotionalText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#577082",
      margin: 0,
    },
    standaloneMissionSection: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f8fbfc 100%)",
      padding: isMobile ? "44px 0" : "68px 0",
      borderTop: "1px solid #e1ebf0",
      borderBottom: "1px solid #e1ebf0",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    standaloneMissionWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isMobile ? "0 20px" : "0 28px",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
      alignItems: "start",
    },
    standaloneMissionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      padding: isMobile ? "24px" : "30px",
      border: "1px solid #dbe8ee",
      boxShadow: "0 16px 36px rgba(0,48,91,0.06)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    standaloneMissionLabel: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2f8b99",
      marginBottom: "14px",
    },
    standaloneMissionTitle: {
      fontSize: isMobile ? "28px" : "clamp(30px, 4.5vw, 40px)",
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
      color: "#00305b",
      marginBottom: "16px",
      fontWeight: 800,
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    standaloneMissionBody: {
      fontSize: isMobile ? "18px" : "20px",
      lineHeight: 1.8,
      color: "#436276",
      margin: 0,
    },
    standaloneMissionSide: {
      display: "grid",
      gap: "16px",
    },
    sideNoteCard: {
      backgroundColor: "#edf7f8",
      border: "1px solid #d2e7ea",
      borderRadius: "20px",
      padding: "24px",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    sideNoteTitle: {
      fontSize: "18px",
      fontWeight: 700,
      color: "#00305b",
      marginBottom: "10px",
    },
    sideNoteText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#4e6a7b",
      margin: 0,
    },
    sellSection: {
      background:
        "linear-gradient(135deg, #00305b 0%, #0d4b76 100%)",
      color: "#ffffff",
      padding: isMobile ? "44px 0" : "68px 0",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    sellText: {
      color: "#dbeafe",
      fontSize: isMobile ? "17px" : "18px",
      lineHeight: 1.8,
      maxWidth: "760px",
      marginBottom: "24px",
    },
    founderName: {
      fontSize: isMobile ? "22px" : "26px",
      fontWeight: 700,
      color: "#00305b",
      marginBottom: "10px",
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    founderRole: {
      fontSize: "15px",
      color: "#2f8b99",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      marginBottom: "18px",
    },
    founderLeadGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "minmax(220px, 280px) 1fr",
      gap: isMobile ? "18px" : "24px",
      alignItems: "center",
      marginBottom: "26px",
    },
    founderImageFrame: {
      backgroundColor: "#ffffff",
      borderRadius: "28px",
      padding: "14px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 18px 36px rgba(0,48,91,0.08)",
      maxWidth: isMobile ? "280px" : "none",
      margin: isMobile ? "0 auto" : "0",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    founderImage: {
      width: "100%",
      display: "block",
      borderRadius: "22px",
      objectFit: "cover",
    },
    founderIntroCard: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f6fafc 100%)",
      border: "1px solid #dfe9ef",
      borderRadius: "24px",
      padding: "28px",
      boxShadow: "0 14px 28px rgba(0,48,91,0.06)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    founderIntroText: {
      fontSize: isMobile ? "17px" : "18px",
      lineHeight: 1.9,
      color: "#4b6678",
      margin: 0,
    },
    founderHighlights: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "20px",
    },
    founderHighlight: {
      padding: "10px 14px",
      borderRadius: "999px",
      backgroundColor: "#e8f6f7",
      color: "#00305b",
      border: "1px solid #c7e7ea",
      fontSize: "14px",
      fontWeight: 600,
    },
    processSection: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f7fbfc 100%)",
      padding: isMobile ? "44px 0" : "68px 0",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    founderSection: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f6fafc 100%)",
      borderTop: "1px solid #e2ebf0",
      borderBottom: "1px solid #e2ebf0",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    processGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "24px",
    },
    processCard: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "24px",
      border: "1px solid #dfeaf0",
      boxShadow: "0 12px 28px rgba(0,48,91,0.06)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    processNumber: {
      width: "42px",
      height: "42px",
      borderRadius: "999px",
      backgroundColor: "#41b7c4",
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
      color: "#00305b",
      marginBottom: "10px",
    },
    processText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#577082",
      margin: 0,
    },
    quoteCard: {
      backgroundColor: "#edf7f8",
      border: "1px solid #d2e7ea",
      color: "#00305b",
      borderRadius: "18px",
      padding: "22px",
      marginTop: "20px",
      fontSize: "17px",
      lineHeight: 1.8,
      fontWeight: 600,
    },
    contactSection: {
      backgroundColor: "#ffffff",
      scrollMarginTop: isMobile ? "120px" : "170px",
    },
    funnelBand: {
      background:
        "linear-gradient(135deg, #eff6ff 0%, #f8fbff 55%, #ffffff 100%)",
      borderTop: "1px solid #e0ebf0",
      borderBottom: "1px solid #e0ebf0",
    },
    funnelWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isMobile ? "44px 20px" : "64px 28px",
    },
    funnelGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
      gap: "24px",
      alignItems: "start",
    },
    funnelChecklist: {
      backgroundColor: "#ffffff",
      borderRadius: "22px",
      padding: isMobile ? "22px" : "28px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 16px 34px rgba(0,48,91,0.06)",
      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      color: "#466273",
      padding: "0 0 0 34px",
      position: "relative",
    },
    checkmark: {
      position: "absolute",
      left: 0,
      top: 0,
      color: "#2f8b99",
      fontWeight: 800,
    },
    ctaPanel: {
      background:
        "linear-gradient(135deg, #00305b 0%, #0d4b76 100%)",
      color: "#ffffff",
      borderRadius: "24px",
      padding: isMobile ? "24px" : "30px",
      boxShadow: "0 22px 44px rgba(0,48,91,0.18)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    ctaTitle: {
      fontSize: "26px",
      fontWeight: 800,
      marginBottom: "12px",
    },
    ctaText: {
      fontSize: "17px",
      lineHeight: 1.85,
      color: "#d9f1f4",
      marginBottom: "18px",
    },
    ctaButton: {
      backgroundColor: "#ffffff",
      color: "#00305b",
      textDecoration: "none",
      display: "inline-block",
      padding: "14px 22px",
      borderRadius: "12px",
      fontWeight: 800,
      boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
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
      backgroundColor: "#e8f6f7",
      color: "#00305b",
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
      color: "#00305b",
      marginBottom: "6px",
    },
    contactWrap: {
      maxWidth: "860px",
      margin: "0 auto",
      padding: isMobile ? "44px 20px" : "72px 28px",
    },
    contactPanel: {
      background:
        "linear-gradient(180deg, rgba(247,251,252,0.96) 0%, rgba(255,255,255,1) 100%)",
      borderRadius: "24px",
      padding: isMobile ? "22px" : "28px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 16px 36px rgba(0,48,91,0.06)",
    },
    form: {
      display: "grid",
      gap: "18px",
      marginTop: "22px",
    },
    inputGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(240px, 1fr))",
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
      backgroundColor: "#00305b",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      padding: "16px 20px",
      fontSize: "16px",
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 10px 22px rgba(0, 48, 91, 0.16)",
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
        "linear-gradient(135deg, #00305b 0%, #0d4b76 100%)",
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
      color: "#00305b",
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
      backgroundColor: "#00305b",
      color: "#ffffff",
      textDecoration: "none",
      padding: "14px 24px",
      borderRadius: "10px",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
    },
    footer: {
      backgroundColor: "#f4f8fa",
      textAlign: "center",
      padding: "36px",
      fontSize: "14px",
      lineHeight: 1.8,
      borderTop: "1px solid #e5e7eb",
      color: "#5b7081",
    },
    footerBrand: {
      fontWeight: 700,
      color: "#00305b",
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
    } catch {
      setErrorMessage(
        "Something went wrong while submitting the form. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const hoverable = (key, base) => ({
    ...base,
    ...(hoveredSurface === key ? styles.elevatedHover : {}),
  });

  if (submitted) {
    return (
      <div style={styles.thankYouWrap}>
        <div style={styles.thankYouCard}>
          <h1 style={styles.thankYouTitle}>Thank You</h1>
          <p style={styles.thankYouText}>Your inquiry has been submitted successfully.</p>
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
          <div style={styles.brandWrap}>
            <img
              src="/logo.png"
              alt="Blue Capital Holdings logo"
              style={styles.navLogo}
            />
            <div style={styles.brandText}>Blue Capital Holdings LLC</div>
          </div>

          <div style={styles.navLinks}>
            {[
              ["home", "Home"],
              ["about", "About"],
              ["mission", "Mission Statement"],
              ["criteria", "Criteria"],
              ["sell", "Sell Your Business"],
              ["founder", "Founder"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  ...(id === "mission" ? styles.missionNavBtn : styles.link),
                  ...(hoveredNav === id ? styles.navHover : {}),
                }}
                onMouseEnter={() => setHoveredNav(id)}
                onMouseLeave={() => setHoveredNav("")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" style={styles.hero}>
        <div style={styles.heroInner}>
          <div style={styles.heroContent}>
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
              <a
                href="#contact"
                style={{
                  ...styles.primaryBtn,
                  ...(hoveredSurface === "heroPrimary" ? styles.buttonHoverLift : {}),
                }}
                onMouseEnter={() => setHoveredSurface("heroPrimary")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                Request a Confidential Conversation
              </a>
              <a
                href="#process"
                style={{
                  ...styles.secondaryBtn,
                  ...(hoveredSurface === "heroSecondary"
                    ? styles.secondaryBtnHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredSurface("heroSecondary")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                See How the Process Works
              </a>
            </div>

            <div style={styles.heroStats}>
              {[
                ["Direct Buyer", "Thoughtful conversations without broad market exposure"],
                ["Confidential", "A process designed to protect employees, customers, and reputation"],
                ["Long-term", "Ownership built around stewardship, continuity, and growth"],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  style={hoverable(`stat${index}`, styles.statCard)}
                  onMouseEnter={() => setHoveredSurface(`stat${index}`)}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <div style={styles.statValue}>{title}</div>
                  <div style={styles.statLabel}>{text}</div>
                </div>
              ))}
            </div>

            <div style={styles.reassuranceRow}>
              <div style={styles.reassurancePill}>Confidential conversations</div>
              <div style={styles.reassurancePill}>Legacy-minded ownership</div>
              <div style={styles.reassurancePill}>Built for retirement and succession transitions</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.trustStrip}>
        <div style={styles.trustInner}>
          {[
            ["LT", "Long-term ownership", "Built around stewardship, continuity, and patient growth."],
            ["DB", "Direct buyer", "A private firm focused on direct, thoughtful conversations."],
            ["US", "U.S. small businesses", "Focused on established businesses with durable fundamentals."],
            ["CF", "Confidential process", "Designed to protect owners, teams, and customer relationships."],
          ].map(([icon, title, text], index) => (
            <div
              key={title}
              style={{
                ...styles.trustBadge,
                ...(hoveredSurface === `trust${index}` ? styles.trustBadgeHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface(`trust${index}`)}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.trustBadgeTop}>
                <div style={styles.trustIcon}>{icon}</div>
                <div style={styles.trustTitle}>{title}</div>
              </div>
              <div style={styles.trustText}>{text}</div>
            </div>
          ))}
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
          disciplined growth, and responsible stewardship.
        </p>
        <p style={styles.paragraph}>
          We partner with business owners navigating retirement, succession, or
          transition who value a thoughtful, capable, and long-term buyer.
        </p>

        <div style={styles.emotionalGrid}>
          {[
            ["You built more than revenue", "For many owners, the business represents decades of sacrifice, reputation, customer trust, and responsibility to employees."],
            ["Retirement should feel clear", "Owners nearing retirement often want confidence that the business will continue responsibly, not uncertainty after closing."],
            ["The right fit matters", "A strong transition is about alignment on values, timing, and continuity, not just valuation."],
          ].map(([title, text], index) => (
            <div
              key={title}
              style={hoverable(`emotion${index}`, styles.emotionalCard)}
              onMouseEnter={() => setHoveredSurface(`emotion${index}`)}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.emotionalTitle}>{title}</div>
              <p style={styles.emotionalText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="mission" style={styles.standaloneMissionSection}>
        <div style={styles.standaloneMissionWrap}>
          <div
            style={hoverable("missionMain", styles.standaloneMissionCard)}
            onMouseEnter={() => setHoveredSurface("missionMain")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.standaloneMissionLabel}>Mission For Business Owners</div>
            <h2 style={styles.standaloneMissionTitle}>
              We help owners transition with confidence, clarity, and dignity.
            </h2>
            <p style={styles.standaloneMissionBody}>
              Our mission is to give business owners a trustworthy path to
              transition when the time is right. We believe the sale of a company
              should protect the legacy you built, respect the people who helped
              build it, and create continuity for the customers who depend on it.
            </p>
          </div>

          <div style={styles.standaloneMissionSide}>
            {[
              ["Why this speaks to owners", "Owners want confidence that the next chapter will honor the team, protect relationships, and preserve the reputation they spent years earning."],
              ["Why it helps you stand out", "This positions Blue Capital as a long-term operator focused on stewardship and continuity, not a generic acquisition firm chasing transactions."],
            ].map(([title, text], index) => (
              <div
                key={title}
                style={hoverable(`missionSide${index}`, styles.sideNoteCard)}
                onMouseEnter={() => setHoveredSurface(`missionSide${index}`)}
                onMouseLeave={() => setHoveredSurface("")}
              >
                <div style={styles.sideNoteTitle}>{title}</div>
                <p style={styles.sideNoteText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="criteria" style={styles.sectionGray}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acquisition Criteria</h2>

          <div style={styles.criteriaGrid}>
            {[
              ["Revenue", "$500,000 to $5,000,000 annually"],
              ["Profitability", "Consistent positive cash flow and stable operations"],
              ["Geography", "United States based businesses"],
            ].map(([title, text], index) => (
              <div
                key={title}
                style={hoverable(`criteria${index}`, styles.card)}
                onMouseEnter={() => setHoveredSurface(`criteria${index}`)}
                onMouseLeave={() => setHoveredSurface("")}
              >
                <div style={styles.cardTitle}>{title}</div>
                <p style={styles.metricText}>{text}</p>
              </div>
            ))}
          </div>

          <div style={styles.twoCol}>
            <div
              style={hoverable("criteriaLeft", styles.card)}
              onMouseEnter={() => setHoveredSurface("criteriaLeft")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>Industries of Interest</div>
              <ul style={styles.list}>
                <li>Service businesses</li>
                <li>Logistics and distribution</li>
                <li>Commercial services</li>
                <li>Light manufacturing</li>
                <li>Real-estate supported businesses</li>
              </ul>
            </div>

            <div
              style={hoverable("criteriaRight", styles.card)}
              onMouseEnter={() => setHoveredSurface("criteriaRight")}
              onMouseLeave={() => setHoveredSurface("")}
            >
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
            built over years.
          </p>
          <p style={styles.sellText}>
            If you are approaching retirement or thinking seriously about
            succession, our goal is to offer a steady hand and a direct process.
          </p>

          <div style={styles.twoCol}>
            <div
              style={hoverable("sell1", styles.card)}
              onMouseEnter={() => setHoveredSurface("sell1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>Why Owners Work With Us</div>
              <ul style={styles.list}>
                <li>Confidential, direct conversations</li>
                <li>Respect for your legacy and team</li>
                <li>Flexible structures around real transition needs</li>
                <li>Long-term ownership rather than short-term flipping</li>
              </ul>
            </div>

            <div
              style={hoverable("sell2", styles.card)}
              onMouseEnter={() => setHoveredSurface("sell2")}
              onMouseLeave={() => setHoveredSurface("")}
            >
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
            "What happens if I reach out?"
          </p>

          <div style={styles.processGrid}>
            {[
              ["1", "Private Introduction", "You share a few basics about your business and the transition you are considering."],
              ["2", "Initial Fit Review", "We review the opportunity carefully and respond directly if there appears to be a strong fit."],
              ["3", "Owner Conversation", "We discuss your goals, timing, legacy concerns, and transition preferences."],
              ["4", "Thoughtful Next Steps", "If there is alignment, we move forward with clarity and respect."],
            ].map(([num, title, text], index) => (
              <div
                key={title}
                style={hoverable(`process${index}`, styles.processCard)}
                onMouseEnter={() => setHoveredSurface(`process${index}`)}
                onMouseLeave={() => setHoveredSurface("")}
              >
                <div style={styles.processNumber}>{num}</div>
                <div style={styles.processTitle}>{title}</div>
                <p style={styles.processText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" style={styles.founderSection}>
        <div style={styles.section}>
          <div style={styles.twoCol}>
            <div>
              <h2 style={styles.sectionTitle}>Founder / Operator</h2>

              <div style={styles.founderLeadGrid}>
                <div
                  style={hoverable("founderImage", styles.founderImageFrame)}
                  onMouseEnter={() => setHoveredSurface("founderImage")}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <img
                    src="/headshot.jpg"
                    alt="Michael McMullan"
                    style={styles.founderImage}
                  />
                </div>

                <div
                  style={hoverable("founderIntro", styles.founderIntroCard)}
                  onMouseEnter={() => setHoveredSurface("founderIntro")}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <div style={styles.founderName}>Michael McMullan</div>
                  <div style={styles.founderRole}>Founder and Operator</div>
                  <p style={styles.founderIntroText}>
                    Michael McMullan brings an operator's mindset to acquisitions,
                    combining finance, supply chain, and process improvement
                    experience with a long-term commitment to building durable
                    companies responsibly.
                  </p>

                  <div style={styles.founderHighlights}>
                    <div style={styles.founderHighlight}>10+ years management experience</div>
                    <div style={styles.founderHighlight}>Finance and supply chain background</div>
                    <div style={styles.founderHighlight}>Lean Six Sigma Green Belt</div>
                  </div>
                </div>
              </div>

              <p style={styles.paragraph}>
                Michael McMullan brings over a decade of management experience
                across operations, finance, and supply chain environments.
              </p>
              <p style={styles.paragraph}>
                He holds a Bachelor of Science from the Indiana University Kelley
                School of Business, with a double major in Finance and Supply Chain
                Management and a minor in Economics.
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

            <div
              style={hoverable("founderCard", styles.card)}
              onMouseEnter={() => setHoveredSurface("founderCard")}
              onMouseLeave={() => setHoveredSurface("")}
            >
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
        </div>
      </section>

      <section style={styles.funnelBand}>
        <div style={styles.funnelWrap}>
          <div style={styles.funnelGrid}>
            <div
              style={hoverable("funnelChecklist", styles.funnelChecklist)}
              onMouseEnter={() => setHoveredSurface("funnelChecklist")}
              onMouseLeave={() => setHoveredSurface("")}
            >
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
                  <span style={styles.checkmark}>+</span>
                  Owner-centered messaging that speaks to legacy, trust, and continuity.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  A clear process that removes mystery and lowers resistance.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  Calls to action framed as confidential conversation.
                </li>
              </ul>
            </div>

            <div
              style={{
                ...styles.ctaPanel,
                ...(hoveredSurface === "ctaPanel" ? styles.buttonHoverLift : {}),
              }}
              onMouseEnter={() => setHoveredSurface("ctaPanel")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.ctaTitle}>Explore a transition without pressure</div>
              <p style={styles.ctaText}>
                If you are considering retirement, succession, or a sale in the
                next 6 to 36 months, the first step is simply a private conversation.
              </p>
              <p style={styles.ctaText}>
                The best inquiries usually come from owners who want to understand
                their options before they are ready to make a final decision.
              </p>

              <a
                href="#contact"
                style={{
                  ...styles.ctaButton,
                  ...(hoveredSurface === "ctaButton" ? styles.buttonHoverLift : {}),
                }}
                onMouseEnter={() => setHoveredSurface("ctaButton")}
                onMouseLeave={() => setHoveredSurface("")}
              >
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
                {[
                  ["name", "Your Name", "text", true],
                  ["company", "Company Name", "text", false],
                  ["revenue", "Annual Revenue Range", "text", false],
                  ["location", "Location", "text", false],
                  ["email", "Email", "email", true],
                  ["phone", "Phone", "tel", false],
                  ["industry", "Industry", "text", false],
                  ["cashflow", "Annual EBITDA / Seller Discretionary Earnings", "text", false],
                  ["askingPrice", "Asking Price", "text", false],
                  ["yearsInBusiness", "Years in Business", "text", false],
                  ["employees", "Number of Employees", "text", false],
                  ["reasonForSelling", "Reason for Selling / Retirement / Succession", "text", false],
                  ["timeline", "Desired Timeline to Transition", "text", false],
                  ["sellerFinancing", "Is Seller Financing Available?", "text", false],
                ].map(([name, placeholder, type, required]) => (
                  <input
                    key={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    style={styles.input}
                    value={formData[name]}
                    onChange={handleChange}
                    required={required}
                  />
                ))}
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
                Please include revenue, cash flow, timeline, and reason for selling
                when possible. All inquiries are reviewed confidentially.
              </p>

              {errorMessage ? <div style={styles.errorBox}>{errorMessage}</div> : null}

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
