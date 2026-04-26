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
  const [hoveredNav, setHoveredNav] = useState("");
  const [hoveredSurface, setHoveredSurface] = useState("");
  const [formData, setFormData] = useState(initialFormData);

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
      zIndex: 10,
      backdropFilter: "blur(10px)",
    },
    navInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "16px 28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "24px",
      flexWrap: "wrap",
    },
    brandWrap: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    navLogo: {
      width: "68px",
      height: "auto",
      display: "block",
      objectFit: "contain",
    },
    brandText: {
      fontSize: "18px",
      fontWeight: 700,
      letterSpacing: "0.01em",
      color: "#00305b",
      textTransform: "uppercase",
    },
    navLinks: {
      display: "flex",
      gap: "18px",
      fontSize: "15px",
      color: "#374151",
      flexWrap: "wrap",
      alignItems: "center",
    },
    link: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
      padding: "8px 0",
      borderRadius: "999px",
      transition: "all 0.2s ease",
    },
    missionNavBtn: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
      padding: "9px 14px",
      borderRadius: "999px",
      backgroundColor: "transparent",
      transition: "all 0.2s ease",
    },
    navHover: {
      backgroundColor: "#e8f6f7",
      boxShadow: "inset 0 0 0 1px #bde7eb",
      color: "#00305b",
      fontWeight: 700,
    },
    hero: {
      background:
        "radial-gradient(circle at top right, rgba(71, 185, 196, 0.18), transparent 24%), linear-gradient(180deg, #f8fcfd 0%, #eef7f9 52%, #fdfefe 100%)",
      color: "#00305b",
      padding: "88px 28px 72px",
    },
    heroInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "32px",
      alignItems: "start",
    },
    heroContent: {
      maxWidth: "820px",
    },
    heroAside: {
      display: "grid",
      gap: "14px",
      paddingTop: "14px",
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
      marginBottom: "18px",
      color: "#1f7d8c",
    },
    heroTitle: {
      fontSize: "clamp(40px, 7vw, 58px)",
      lineHeight: 1.04,
      fontWeight: 800,
      marginBottom: "24px",
      letterSpacing: "-0.03em",
      fontFamily: "Georgia, 'Times New Roman', serif",
      maxWidth: "900px",
    },
    heroText: {
      fontSize: "19px",
      lineHeight: 1.9,
      color: "#48657a",
      marginBottom: "28px",
      maxWidth: "720px",
    },
    missionStatement: {
      fontSize: "22px",
      lineHeight: 1.8,
      color: "#21445f",
      maxWidth: "760px",
      marginBottom: "24px",
      fontWeight: 600,
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    reassuranceRow: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "12px",
      marginTop: "10px",
      alignItems: "center",
    },
    reassurancePill: {
      padding: "10px 14px",
      borderRadius: "999px",
      backgroundColor: "#ffffff",
      border: "1px solid #dbe7ef",
      fontSize: "14px",
      color: "#567082",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    heroSpotlightCard: {
      background:
        "linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(240,248,250,0.98) 100%)",
      border: "1px solid #d7e8ef",
      borderRadius: "26px",
      padding: "28px",
      boxShadow: "0 22px 44px rgba(0,48,91,0.08)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    heroSpotlightLabel: {
      display: "inline-block",
      marginBottom: "14px",
      padding: "8px 12px",
      borderRadius: "999px",
      backgroundColor: "#e8f6f7",
      color: "#1f7d8c",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    heroSpotlightTitle: {
      fontSize: "28px",
      lineHeight: 1.15,
      color: "#00305b",
      fontWeight: 800,
      marginBottom: "12px",
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    heroSpotlightText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#537082",
      marginBottom: "18px",
    },
    heroSignalGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "12px",
    },
    heroSignalCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #deebf1",
      borderRadius: "18px",
      padding: "16px",
      boxShadow: "0 10px 20px rgba(0,48,91,0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    heroSignalValue: {
      fontSize: "20px",
      fontWeight: 800,
      color: "#00305b",
      marginBottom: "4px",
    },
    heroSignalLabel: {
      fontSize: "13px",
      lineHeight: 1.6,
      color: "#60778a",
    },
    heroPromiseBar: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      padding: "14px 16px",
      borderRadius: "18px",
      backgroundColor: "#00305b",
      color: "#ffffff",
      boxShadow: "0 16px 30px rgba(0,48,91,0.14)",
    },
    heroPromiseItem: {
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
    buttonRow: {
      display: "flex",
      gap: "14px",
      flexWrap: "nowrap",
      alignItems: "center",
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
      transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
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
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    buttonHoverLift: {
      transform: "translateY(-2px)",
      boxShadow: "0 16px 28px rgba(0,48,91,0.14)",
    },
    secondaryBtnHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 14px 26px rgba(0,48,91,0.08)",
      borderColor: "#8ac9d2",
    },
    heroStats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "14px",
      marginTop: "6px",
    },
    statCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #dbe7ef",
      borderRadius: "14px",
      padding: "16px",
      boxShadow: "0 12px 24px rgba(0,48,91,0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      padding: "20px 28px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
    },
    trustBadge: {
      backgroundColor: "#ffffff",
      border: "1px solid #dfe9ef",
      borderRadius: "18px",
      padding: "18px",
      boxShadow: "0 10px 24px rgba(0,48,91,0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    trustBadgeHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 16px 28px rgba(0,48,91,0.08)",
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
      padding: "clamp(56px, 6vw, 80px) 28px",
    },
    sectionGray: {
      background:
        "linear-gradient(180deg, #f7fbfc 0%, #f3f8fa 55%, #ffffff 100%)",
      padding: "64px 0",
    },
    sectionTitle: {
      fontSize: "clamp(30px, 5vw, 36px)",
      fontWeight: 800,
      marginBottom: "20px",
      letterSpacing: "-0.02em",
      color: "#00305b",
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    sectionEyebrow: {
      display: "inline-block",
      marginBottom: "14px",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2f8b99",
    },
    sectionLead: {
      fontSize: "19px",
      lineHeight: 1.85,
      color: "#496173",
      maxWidth: "860px",
      marginBottom: "22px",
    },
    paragraph: {
      fontSize: "17px",
      lineHeight: 1.8,
      marginBottom: "14px",
      color: "#536879",
      maxWidth: "860px",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "28px",
      alignItems: "start",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: "26px",
      boxShadow: "0 12px 28px rgba(0,48,91,0.06)",
      border: "1px solid #e3edf3",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginBottom: "24px",
    },
    metricText: {
      fontSize: "18px",
      lineHeight: 1.75,
      color: "#536879",
      marginBottom: 0,
    },
    missionPanel: {
      background:
        "linear-gradient(135deg, #f7fcfd 0%, #edf7f8 100%)",
      border: "1px solid #d2e7ea",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 16px 36px rgba(0,48,91,0.06)",
      marginTop: "28px",
    },
    missionTitle: {
      fontSize: "24px",
      fontWeight: 800,
      color: "#00305b",
      marginBottom: "14px",
    },
    missionText: {
      fontSize: "19px",
      lineHeight: 1.85,
      color: "#36546b",
      margin: 0,
      maxWidth: "860px",
    },
    emotionalGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginTop: "24px",
    },
    emotionalCard: {
      backgroundColor: "#ffffff",
      borderRadius: "18px",
      padding: "24px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 12px 28px rgba(0,48,91,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      padding: "68px 0",
      borderTop: "1px solid #e1ebf0",
      borderBottom: "1px solid #e1ebf0",
    },
    standaloneMissionWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "0 28px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
      alignItems: "start",
    },
    standaloneMissionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "24px",
      padding: "30px",
      border: "1px solid #dbe8ee",
      boxShadow: "0 16px 36px rgba(0,48,91,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      fontSize: "clamp(30px, 4.5vw, 40px)",
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
      color: "#00305b",
      marginBottom: "16px",
      fontWeight: 800,
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    standaloneMissionBody: {
      fontSize: "20px",
      lineHeight: 1.85,
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
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      padding: "68px 0",
    },
    sellText: {
      color: "#dbeafe",
      fontSize: "18px",
      lineHeight: 1.8,
      maxWidth: "760px",
      marginBottom: "24px",
    },
    founderName: {
      fontSize: "26px",
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
      gridTemplateColumns: "minmax(220px, 280px) 1fr",
      gap: "24px",
      alignItems: "center",
      marginBottom: "26px",
    },
    founderImageFrame: {
      backgroundColor: "#ffffff",
      borderRadius: "28px",
      padding: "14px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 18px 36px rgba(0,48,91,0.08)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    founderIntroText: {
      fontSize: "18px",
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
      padding: "68px 0",
    },
    founderSection: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f6fafc 100%)",
      borderTop: "1px solid #e2ebf0",
      borderBottom: "1px solid #e2ebf0",
    },
    processGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      marginTop: "24px",
    },
    processCard: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "24px",
      border: "1px solid #dfeaf0",
      boxShadow: "0 12px 28px rgba(0,48,91,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
      padding: "64px 28px",
    },
    funnelGrid: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "24px",
      alignItems: "start",
    },
    funnelChecklist: {
      backgroundColor: "#ffffff",
      borderRadius: "22px",
      padding: "28px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 16px 34px rgba(0,48,91,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
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
        "linear-gradient(145deg, #002b52 0%, #0d4b76 58%, #15708a 100%)",
      color: "#ffffff",
      borderRadius: "24px",
      padding: "30px",
      boxShadow: "0 22px 44px rgba(0,48,91,0.18)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      border: "1px solid rgba(191, 219, 254, 0.22)",
      position: "relative",
      overflow: "hidden",
    },
    ctaEyebrow: {
      display: "inline-block",
      marginBottom: "12px",
      padding: "8px 12px",
      borderRadius: "999px",
      backgroundColor: "rgba(255,255,255,0.12)",
      color: "#d9f1f4",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
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
      marginBottom: "20px",
    },
    ctaDivider: {
      height: "1px",
      backgroundColor: "rgba(255,255,255,0.18)",
      margin: "18px 0",
    },
    ctaPoints: {
      display: "grid",
      gap: "10px",
      marginBottom: "22px",
    },
    ctaPoint: {
      fontSize: "15px",
      lineHeight: 1.7,
      color: "#f2fbfc",
      fontWeight: 600,
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
      padding: "72px 28px",
    },
    contactPanel: {
      background:
        "linear-gradient(180deg, rgba(247,251,252,0.96) 0%, rgba(255,255,255,1) 100%)",
      borderRadius: "24px",
      padding: "28px",
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
          <div style={styles.brandWrap}>
            <img
              src="/logo.png"
              alt="Blue Capital Holdings logo"
              style={styles.navLogo}
            />
            <div style={styles.brandText}>Blue Capital Holdings LLC</div>
          </div>
          <div style={styles.navLinks}>
            <a
              href="#home"
              style={{
                ...styles.link,
                ...(hoveredNav === "home" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("home")}
              onMouseLeave={() => setHoveredNav("")}
            >
              Home
            </a>
            <a
              href="#about"
              style={{
                ...styles.link,
                ...(hoveredNav === "about" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("about")}
              onMouseLeave={() => setHoveredNav("")}
            >
              About
            </a>
            <a
              href="#mission"
              style={{
                ...styles.missionNavBtn,
                ...(hoveredNav === "mission" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("mission")}
              onMouseLeave={() => setHoveredNav("")}
            >
              Mission Statement
            </a>
            <a
              href="#criteria"
              style={{
                ...styles.link,
                ...(hoveredNav === "criteria" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("criteria")}
              onMouseLeave={() => setHoveredNav("")}
            >
              Criteria
            </a>
            <a
              href="#sell"
              style={{
                ...styles.link,
                ...(hoveredNav === "sell" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("sell")}
              onMouseLeave={() => setHoveredNav("")}
            >
              Sell Your Business
            </a>
            <a
              href="#founder"
              style={{
                ...styles.link,
                ...(hoveredNav === "founder" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("founder")}
              onMouseLeave={() => setHoveredNav("")}
            >
              Founder
            </a>
            <a
              href="#contact"
              style={{
                ...styles.link,
                ...(hoveredNav === "contact" ? styles.navHover : {}),
              }}
              onMouseEnter={() => setHoveredNav("contact")}
              onMouseLeave={() => setHoveredNav("")}
            >
              Contact
            </a>
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
          </div>
          <div style={styles.heroAside}>
            <div
              style={{
                ...styles.heroSpotlightCard,
                ...(hoveredSurface === "heroSpotlight" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("heroSpotlight")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.heroSpotlightLabel}>Owner Transition Focus</div>
              <div style={styles.heroSpotlightTitle}>
                A private, steady path for owners planning the next chapter.
              </div>
              <p style={styles.heroSpotlightText}>
                We are best suited for owners who care about discretion,
                continuity, and finding the right long-term steward rather than
                simply launching a broad process.
              </p>
              <div style={styles.heroSignalGrid}>
                <div
                  style={{
                    ...styles.heroSignalCard,
                    ...(hoveredSurface === "heroSignal1" ? styles.elevatedHover : {}),
                  }}
                  onMouseEnter={() => setHoveredSurface("heroSignal1")}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <div style={styles.heroSignalValue}>6-36 Months</div>
                  <div style={styles.heroSignalLabel}>
                    Typical planning window for thoughtful transitions
                  </div>
                </div>
                <div
                  style={{
                    ...styles.heroSignalCard,
                    ...(hoveredSurface === "heroSignal2" ? styles.elevatedHover : {}),
                  }}
                  onMouseEnter={() => setHoveredSurface("heroSignal2")}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <div style={styles.heroSignalValue}>Direct Contact</div>
                  <div style={styles.heroSignalLabel}>
                    Conversations with a buyer, not a crowded process
                  </div>
                </div>
                <div
                  style={{
                    ...styles.heroSignalCard,
                    ...(hoveredSurface === "heroSignal3" ? styles.elevatedHover : {}),
                  }}
                  onMouseEnter={() => setHoveredSurface("heroSignal3")}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <div style={styles.heroSignalValue}>Legacy First</div>
                  <div style={styles.heroSignalLabel}>
                    Built for owners weighing employees, customers, and reputation
                  </div>
                </div>
                <div
                  style={{
                    ...styles.heroSignalCard,
                    ...(hoveredSurface === "heroSignal4" ? styles.elevatedHover : {}),
                  }}
                  onMouseEnter={() => setHoveredSurface("heroSignal4")}
                  onMouseLeave={() => setHoveredSurface("")}
                >
                  <div style={styles.heroSignalValue}>Long-Term Hold</div>
                  <div style={styles.heroSignalLabel}>
                    Growth and stewardship over short-term flipping
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.heroPromiseBar}>
              <div style={styles.heroPromiseItem}>Confidential first conversation</div>
              <div style={styles.heroPromiseItem}>No obligation to sell now</div>
              <div style={styles.heroPromiseItem}>Respect for your team and legacy</div>
            </div>

            <div style={styles.heroStats}>
              <div
                style={{
                  ...styles.statCard,
                  ...(hoveredSurface === "stat1" ? styles.elevatedHover : {}),
                }}
                onMouseEnter={() => setHoveredSurface("stat1")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                <div style={styles.statValue}>Direct Buyer</div>
                <div style={styles.statLabel}>
                  Thoughtful conversations without broad market exposure
                </div>
              </div>
              <div
                style={{
                  ...styles.statCard,
                  ...(hoveredSurface === "stat2" ? styles.elevatedHover : {}),
                }}
                onMouseEnter={() => setHoveredSurface("stat2")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                <div style={styles.statValue}>Confidential</div>
                <div style={styles.statLabel}>
                  A process designed to protect employees, customers, and reputation
                </div>
              </div>
              <div
                style={{
                  ...styles.statCard,
                  ...(hoveredSurface === "stat3" ? styles.elevatedHover : {}),
                }}
                onMouseEnter={() => setHoveredSurface("stat3")}
                onMouseLeave={() => setHoveredSurface("")}
              >
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
        </div>
      </section>

      <section style={styles.trustStrip}>
        <div style={styles.trustInner}>
          <div
            style={{
              ...styles.trustBadge,
              ...(hoveredSurface === "trust1" ? styles.trustBadgeHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("trust1")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.trustBadgeTop}>
              <div style={styles.trustIcon}>LT</div>
              <div style={styles.trustTitle}>Long-term ownership</div>
            </div>
            <div style={styles.trustText}>
              Built around stewardship, continuity, and patient growth.
            </div>
          </div>
          <div
            style={{
              ...styles.trustBadge,
              ...(hoveredSurface === "trust2" ? styles.trustBadgeHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("trust2")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.trustBadgeTop}>
              <div style={styles.trustIcon}>DB</div>
              <div style={styles.trustTitle}>Direct buyer</div>
            </div>
            <div style={styles.trustText}>
              A private firm focused on direct, thoughtful conversations.
            </div>
          </div>
          <div
            style={{
              ...styles.trustBadge,
              ...(hoveredSurface === "trust3" ? styles.trustBadgeHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("trust3")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.trustBadgeTop}>
              <div style={styles.trustIcon}>US</div>
              <div style={styles.trustTitle}>U.S. small businesses</div>
            </div>
            <div style={styles.trustText}>
              Focused on established businesses with durable fundamentals.
            </div>
          </div>
          <div
            style={{
              ...styles.trustBadge,
              ...(hoveredSurface === "trust4" ? styles.trustBadgeHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("trust4")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.trustBadgeTop}>
              <div style={styles.trustIcon}>CF</div>
              <div style={styles.trustTitle}>Confidential process</div>
            </div>
            <div style={styles.trustText}>
              Designed to protect owners, teams, and customer relationships.
            </div>
          </div>
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

          <div style={styles.emotionalGrid}>
          <div
            style={{
              ...styles.emotionalCard,
              ...(hoveredSurface === "emotional1" ? styles.elevatedHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("emotional1")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.emotionalTitle}>You built more than revenue</div>
            <p style={styles.emotionalText}>
              For many owners, the business represents decades of sacrifice,
              reputation, customer trust, and responsibility to employees. That
              deserves more than a generic buyer.
            </p>
          </div>
          <div
            style={{
              ...styles.emotionalCard,
              ...(hoveredSurface === "emotional2" ? styles.elevatedHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("emotional2")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.emotionalTitle}>Retirement should feel clear</div>
            <p style={styles.emotionalText}>
              Owners nearing retirement often want confidence that the business
              will continue responsibly, not uncertainty about what happens after
              closing.
            </p>
          </div>
          <div
            style={{
              ...styles.emotionalCard,
              ...(hoveredSurface === "emotional3" ? styles.elevatedHover : {}),
            }}
            onMouseEnter={() => setHoveredSurface("emotional3")}
            onMouseLeave={() => setHoveredSurface("")}
          >
            <div style={styles.emotionalTitle}>The right fit matters</div>
            <p style={styles.emotionalText}>
              A strong transition is about alignment on values, timing, and
              continuity, not just valuation. That is where thoughtful conversations
              make the difference.
            </p>
          </div>
        </div>
      </section>

      <section id="mission" style={styles.standaloneMissionSection}>
        <div style={styles.standaloneMissionWrap}>
          <div
            style={{
              ...styles.standaloneMissionCard,
              ...(hoveredSurface === "missionMain" ? styles.elevatedHover : {}),
            }}
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
              We are not looking for a quick flip. We are looking to become the
              right next steward of a strong business.
            </p>
          </div>

          <div style={styles.standaloneMissionSide}>
            <div
              style={{
                ...styles.sideNoteCard,
                ...(hoveredSurface === "missionSide1" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("missionSide1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.sideNoteTitle}>Why this speaks to owners</div>
              <p style={styles.sideNoteText}>
                Owners want confidence that the next chapter will honor the team,
                protect relationships, and preserve the reputation they spent
                years earning.
              </p>
            </div>
            <div
              style={{
                ...styles.sideNoteCard,
                ...(hoveredSurface === "missionSide2" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("missionSide2")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.sideNoteTitle}>Why it helps you stand out</div>
              <p style={styles.sideNoteText}>
                This positions Blue Capital as a long-term operator focused on
                stewardship and continuity, not a generic acquisition firm chasing
                transactions.
              </p>
            </div>
            <div
              style={{
                ...styles.sideNoteCard,
                ...(hoveredSurface === "missionSide3" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("missionSide3")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.sideNoteTitle}>Why sellers feel safer reaching out</div>
              <p style={styles.sideNoteText}>
                Many owners are not ready for a formal sale process. They simply
                want a private conversation about timing, options, and whether the
                next owner will care for the business the way they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="criteria" style={styles.sectionGray}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Acquisition Criteria</h2>

          <div style={styles.criteriaGrid}>
            <div
              style={{
                ...styles.card,
                ...(hoveredSurface === "criteria1" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("criteria1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>Revenue</div>
              <p style={styles.metricText}>$500,000 to $5,000,000 annually</p>
            </div>

            <div
              style={{
                ...styles.card,
                ...(hoveredSurface === "criteria2" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("criteria2")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>Profitability</div>
              <p style={styles.metricText}>
                Consistent positive cash flow and stable operations
              </p>
            </div>

            <div
              style={{
                ...styles.card,
                ...(hoveredSurface === "criteria3" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("criteria3")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>Geography</div>
              <p style={styles.metricText}>United States based businesses</p>
            </div>
          </div>

          <div style={styles.twoCol}>
            <div
              style={{
                ...styles.card,
                ...(hoveredSurface === "criteria4" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("criteria4")}
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
              style={{
                ...styles.card,
                ...(hoveredSurface === "criteria5" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("criteria5")}
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
            built over years. We work directly with owners who want a buyer that
            understands the weight of that decision and approaches it with care.
          </p>
          <p style={styles.sellText}>
            If you are approaching retirement or thinking seriously about
            succession, our goal is to offer a steady hand, a direct process, and
            a transition path that respects everything you have put into the business.
          </p>
          <div style={styles.twoCol}>
            <div
              style={{
                ...styles.card,
                ...(hoveredSurface === "sell1" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("sell1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>Why Owners Work With Us</div>
              <ul style={styles.list}>
                <li>Confidential, direct conversations without unnecessary noise</li>
                <li>Respect for your legacy, team, and customer relationships</li>
                <li>Flexible structures shaped around real transition needs</li>
                <li>Long-term ownership rather than short-term flipping</li>
              </ul>
            </div>

            <div
              style={{
                ...styles.card,
                ...(hoveredSurface === "sell2" ? styles.elevatedHover : {}),
              }}
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
            "What happens if I reach out?" This process is designed to lower
            friction, build trust quickly, and move the right conversations
            forward.
          </p>

          <div style={styles.processGrid}>
            <div
              style={{
                ...styles.processCard,
                ...(hoveredSurface === "process1" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("process1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.processNumber}>1</div>
              <div style={styles.processTitle}>Private Introduction</div>
              <p style={styles.processText}>
                You share a few basics about your business and what kind of
                transition you are considering.
              </p>
            </div>

            <div
              style={{
                ...styles.processCard,
                ...(hoveredSurface === "process2" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("process2")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.processNumber}>2</div>
              <div style={styles.processTitle}>Initial Fit Review</div>
              <p style={styles.processText}>
                We review the opportunity carefully and respond directly if there
                appears to be a strong fit.
              </p>
            </div>

            <div
              style={{
                ...styles.processCard,
                ...(hoveredSurface === "process3" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("process3")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.processNumber}>3</div>
              <div style={styles.processTitle}>Owner Conversation</div>
              <p style={styles.processText}>
                We discuss your goals, timing, legacy concerns, and transition
                preferences in a confidential conversation.
              </p>
            </div>

            <div
              style={{
                ...styles.processCard,
                ...(hoveredSurface === "process4" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("process4")}
              onMouseLeave={() => setHoveredSurface("")}
            >
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

      <section id="founder" style={styles.founderSection}>
        <div style={styles.section}>
          <div style={styles.twoCol}>
          <div>
            <h2 style={styles.sectionTitle}>Founder / Operator</h2>
            <div style={styles.founderLeadGrid}>
                <div
                  style={{
                    ...styles.founderImageFrame,
                    ...(hoveredSurface === "founderImage" ? styles.elevatedHover : {}),
                  }}
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
                  style={{
                    ...styles.founderIntroCard,
                    ...(hoveredSurface === "founderIntro" ? styles.elevatedHover : {}),
                  }}
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
                  <div style={styles.founderHighlight}>Bloomberg Market Concepts certified</div>
                </div>
              </div>
            </div>

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
              Belt certified and certified in Bloomberg Market Concepts.
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
            style={{
              ...styles.card,
              ...(hoveredSurface === "founderCard" ? styles.elevatedHover : {}),
            }}
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
              <li>Bloomberg Market Concepts certified</li>
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
          <div
            style={{
              ...styles.funnelGrid,
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            }}
          >
            <div
              style={{
                ...styles.funnelChecklist,
                ...(hoveredSurface === "funnelChecklist" ? styles.elevatedHover : {}),
              }}
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
                  Owner-centered messaging that speaks to legacy, trust, and
                  continuity instead of generic acquisition language.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  A clear process that removes mystery and lowers resistance to
                  reaching out.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  Stronger calls to action that frame contact as a confidential
                  conversation rather than a hard commitment.
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
              <div style={styles.ctaEyebrow}>Confidential next step</div>
              <div style={styles.ctaTitle}>
                Start the right conversation before you feel forced into a process
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
              <div style={styles.ctaDivider} />
              <div style={styles.ctaPoints}>
                <div style={styles.ctaPoint}>
                  Built for owners who want clarity before they want a transaction.
                </div>
                <div style={styles.ctaPoint}>
                  Designed to protect confidentiality, relationships, and reputation.
                </div>
                <div style={styles.ctaPoint}>
                  Best fit for transitions where legacy and continuity matter as much as price.
                </div>
              </div>
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

