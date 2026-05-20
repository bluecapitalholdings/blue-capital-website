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

const pageRoutes = {
  home: "/",
  about: "/about",
  mission: "/mission",
  criteria: "/criteria",
  sell: "/sell-your-business",
  process: "/process",
  founder: "/founder",
  faq: "/faq",
  contact: "/contact",
};

const getPageFromPath = () => {
  if (typeof window === "undefined") {
    return "home";
  }

  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  return (
    Object.entries(pageRoutes).find(([, path]) => path === currentPath)?.[0] ||
    "home"
  );
};

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hoveredNav, setHoveredNav] = useState("");
  const [hoveredSurface, setHoveredSurface] = useState("");
  const [currentPage, setCurrentPage] = useState(getPageFromPath);
  const [homeMotionStage, setHomeMotionStage] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 900 : false
  );
  const [isPhone, setIsPhone] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      setIsPhone(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage !== "home") {
      setHomeMotionStage(0);
      return undefined;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setHomeMotionStage(5);
      return undefined;
    }

    setHomeMotionStage(0);
    const timers = [
      window.setTimeout(() => setHomeMotionStage(1), 180),
      window.setTimeout(() => setHomeMotionStage(2), 850),
      window.setTimeout(() => setHomeMotionStage(3), 1350),
      window.setTimeout(() => setHomeMotionStage(4), 1850),
      window.setTimeout(() => setHomeMotionStage(5), 2350),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [currentPage]);

  const navigateToPage = (pageId) => {
    const nextPath = pageRoutes[pageId] || pageRoutes.home;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }
    setCurrentPage(pageId);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageLink = (e, pageId) => {
    e.preventDefault();
    navigateToPage(pageId);
  };

  const topNavItems = isPhone
    ? [
        ["home", "Home"],
        ["about", "About"],
        ["founder", "Founder"],
        ["faq", "FAQ"],
        ["contact", "Contact"],
      ]
    : [
        ["home", "Home"],
        ["about", "About"],
        ["mission", "Mission Statement"],
        ["criteria", "Criteria"],
        ["sell", "Sell Your Business"],
        ["process", "Process"],
        ["founder", "Founder"],
        ["faq", "FAQ"],
        ["contact", "Contact"],
      ];

  const styles = {
    page: {
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      color: "#1f2937",
      backgroundColor: "#fcfdff",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
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
      padding: isPhone ? "12px 16px" : isMobile ? "14px 20px" : "16px 28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      flexDirection: isMobile ? "column" : "row",
      gap: "24px",
      flexWrap: isMobile ? "nowrap" : "wrap",
    },
    brandWrap: {
      display: "flex",
      alignItems: "center",
      gap: isPhone ? "10px" : "14px",
      width: isMobile ? "100%" : "auto",
    },
    navLogo: {
      width: isPhone ? "44px" : isMobile ? "56px" : "68px",
      height: "auto",
      display: "block",
      objectFit: "contain",
    },
    brandText: {
      fontSize: isPhone ? "13px" : isMobile ? "16px" : "18px",
      fontWeight: 700,
      letterSpacing: "0.01em",
      color: "#00305b",
      textTransform: "uppercase",
      lineHeight: 1.15,
    },
    navLinks: {
      display: "flex",
      gap: isPhone ? "10px" : isMobile ? "14px" : "18px",
      fontSize: isPhone ? "13px" : isMobile ? "14px" : "15px",
      color: "#374151",
      flexWrap: isMobile ? "nowrap" : "wrap",
      alignItems: "center",
      maxWidth: "100%",
      width: isMobile ? "100%" : "auto",
      overflowX: isMobile ? "auto" : "visible",
      paddingBottom: isMobile ? "4px" : 0,
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
    },
    mobileShortcutsWrap: {
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e3edf2",
      display: isPhone ? "block" : "none",
    },
    mobileShortcutsInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "10px 16px 14px",
    },
    mobileShortcutsLabel: {
      fontSize: "11px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2f8b99",
      marginBottom: "10px",
    },
    mobileShortcutsRow: {
      display: "flex",
      gap: "10px",
      overflowX: "auto",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
    },
    mobileShortcut: {
      textDecoration: "none",
      color: "#00305b",
      border: "1px solid #d7e8ef",
      backgroundColor: "#f8fcfd",
      borderRadius: "999px",
      padding: "8px 12px",
      fontSize: "13px",
      fontWeight: 700,
      whiteSpace: "nowrap",
      flex: "0 0 auto",
    },
    link: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
      padding: isPhone ? "8px 8px" : isMobile ? "8px 10px" : "8px 0",
      borderRadius: "999px",
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
    },
    missionNavBtn: {
      textDecoration: "none",
      color: "#334155",
      fontWeight: 500,
      padding: isPhone ? "8px 8px" : isMobile ? "8px 10px" : "9px 14px",
      borderRadius: "999px",
      backgroundColor: "transparent",
      transition: "all 0.2s ease",
      whiteSpace: "nowrap",
    },
    navHover: {
      backgroundColor: "#e8f6f7",
      boxShadow: "inset 0 0 0 1px #bde7eb",
      color: "#00305b",
      fontWeight: 700,
    },
    hero: {
      background:
        "linear-gradient(135deg, #06182b 0%, #0b2742 48%, #112f47 100%)",
      color: "#ffffff",
      padding: isPhone ? "40px 16px 28px" : isMobile ? "56px 20px 42px" : "78px 28px 64px",
      position: "relative",
      overflow: "hidden",
    },
    heroInner: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: isMobile ? "26px" : "34px",
      alignItems: "center",
    },
    heroContent: {
      maxWidth: "100%",
    },
    heroAside: {
      display: "grid",
      gap: "16px",
      paddingTop: 0,
      width: "100%",
      maxWidth: "860px",
    },
    heroEyebrow: {
      display: "inline-block",
      padding: "0 0 10px 0",
      borderRadius: 0,
      backgroundColor: "transparent",
      borderBottom: "1px solid rgba(204, 169, 92, 0.65)",
      fontSize: isPhone ? "11px" : isMobile ? "12px" : "13px",
      fontWeight: 800,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: isPhone ? "12px" : isMobile ? "14px" : "18px",
      color: "#d8bd7a",
    },
    heroTitle: {
      fontSize: isPhone ? "clamp(30px, 9vw, 42px)" : isMobile ? "clamp(38px, 8vw, 54px)" : "clamp(54px, 6vw, 72px)",
      lineHeight: 1.02,
      fontWeight: 800,
      marginBottom: isPhone ? "16px" : isMobile ? "20px" : "26px",
      letterSpacing: 0,
      fontFamily: "Georgia, 'Times New Roman', serif",
      maxWidth: "760px",
      overflowWrap: "anywhere",
    },
    heroText: {
      fontSize: isPhone ? "15px" : isMobile ? "17px" : "18px",
      lineHeight: 1.8,
      color: "#d5e0e9",
      marginBottom: isPhone ? "18px" : isMobile ? "22px" : "30px",
      maxWidth: "680px",
    },
    missionStatement: {
      fontSize: isPhone ? "17px" : isMobile ? "20px" : "25px",
      lineHeight: 1.55,
      color: "#f6f8fb",
      maxWidth: "720px",
      marginBottom: isPhone ? "16px" : isMobile ? "18px" : "22px",
      fontWeight: 600,
      fontFamily: "Georgia, 'Times New Roman', serif",
      overflowWrap: "anywhere",
    },
    reassuranceRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      marginTop: "22px",
      alignItems: "center",
    },
    reassurancePill: {
      padding: "10px 14px",
      borderRadius: "2px",
      backgroundColor: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(216,189,122,0.28)",
      fontSize: "13px",
      color: "#e8eef5",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    heroSpotlightCard: {
      background:
        "linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(244,248,250,0.98) 100%)",
      border: "1px solid rgba(216,189,122,0.45)",
      borderRadius: "6px",
      padding: isPhone ? "22px" : "28px",
      boxShadow: "0 28px 56px rgba(0,0,0,0.22)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    heroSpotlightLabel: {
      display: "inline-block",
      marginBottom: "14px",
      padding: "8px 12px",
      borderRadius: "999px",
      backgroundColor: "#f5efe1",
      color: "#8a6a24",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    heroSpotlightTitle: {
      fontSize: isMobile ? "clamp(22px, 6vw, 30px)" : "28px",
      lineHeight: isMobile ? 1.12 : 1.15,
      color: "#00305b",
      fontWeight: 800,
      marginBottom: "12px",
      fontFamily: "Georgia, 'Times New Roman', serif",
      overflowWrap: "anywhere",
    },
    heroSpotlightText: {
      fontSize: isMobile ? "15px" : "16px",
      lineHeight: 1.8,
      color: "#537082",
      marginBottom: "18px",
    },
    heroSignalGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: "12px",
    },
    heroSignalCard: {
      backgroundColor: "#ffffff",
      border: "1px solid #deebf1",
      borderRadius: "4px",
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
      borderRadius: "4px",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.13)",
      color: "#ffffff",
      boxShadow: "0 16px 30px rgba(0,0,0,0.12)",
    },
    heroPromiseItem: {
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.01em",
    },
    heroPromiseDivider: {
      fontSize: "14px",
      fontWeight: 700,
      color: "rgba(255,255,255,0.72)",
    },
    buttonRow: {
      display: "flex",
      gap: isPhone ? "10px" : "14px",
      flexWrap: isMobile ? "wrap" : "nowrap",
      alignItems: "center",
      width: isPhone ? "100%" : "auto",
    },
    primaryBtn: {
      backgroundColor: "#d8bd7a",
      color: "#06182b",
      padding: isPhone ? "12px 14px" : isMobile ? "14px 18px" : "14px 24px",
      borderRadius: "3px",
      fontWeight: 800,
      textDecoration: "none",
      boxShadow: "0 18px 32px rgba(0,0,0,0.22)",
      display: "inline-block",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      fontSize: isPhone ? "14px" : "inherit",
      lineHeight: isPhone ? 1.35 : "normal",
      whiteSpace: isPhone ? "normal" : "nowrap",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
    },
    secondaryBtn: {
      border: "1px solid rgba(255,255,255,0.32)",
      color: "#ffffff",
      padding: isPhone ? "12px 14px" : isMobile ? "14px 18px" : "14px 24px",
      borderRadius: "3px",
      fontWeight: 600,
      textDecoration: "none",
      backgroundColor: "rgba(255,255,255,0.08)",
      display: "inline-block",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      fontSize: isPhone ? "14px" : "inherit",
      lineHeight: isPhone ? 1.35 : "normal",
      whiteSpace: isPhone ? "normal" : "nowrap",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    buttonHoverLift: {
      transform: "translateY(-2px)",
      boxShadow: "0 16px 28px rgba(0,48,91,0.14)",
    },
    secondaryBtnHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 14px 26px rgba(0,48,91,0.08)",
      borderColor: "#d8bd7a",
    },
    heroStats: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "14px",
      marginTop: "6px",
      width: "100%",
    },
    statCard: {
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: "4px",
      padding: "16px",
      boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    statValue: {
      fontSize: "22px",
      fontWeight: 800,
      color: "#ffffff",
      marginBottom: "6px",
    },
    statLabel: {
      color: "#d7e3ec",
      fontSize: "14px",
      lineHeight: 1.6,
    },
    trustStrip: {
      borderBottom: "1px solid #e5e7eb",
      backgroundColor: "#ffffff",
    },
    trustInner: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isPhone ? "18px 16px" : "24px 28px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "16px",
    },
    trustBadge: {
      backgroundColor: "#ffffff",
      border: "1px solid #e3e7eb",
      borderRadius: "4px",
      padding: "20px",
      boxShadow: "0 10px 22px rgba(6,24,43,0.05)",
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
      borderRadius: "2px",
      backgroundColor: "#f5efe1",
      color: "#8a6a24",
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
      padding: isPhone ? "18px 16px 28px" : isMobile ? "22px 20px 32px" : "20px 28px 40px",
    },
    sectionGray: {
      background:
        "linear-gradient(180deg, #f7fbfc 0%, #f3f8fa 55%, #ffffff 100%)",
      padding: isPhone ? "18px 0 28px" : isMobile ? "24px 0 34px" : "24px 0 40px",
    },
    sectionTitle: {
      fontSize: isMobile ? "clamp(28px, 8vw, 34px)" : "clamp(30px, 5vw, 36px)",
      fontWeight: 800,
      marginBottom: "20px",
      letterSpacing: "-0.02em",
      color: "#00305b",
      fontFamily: "Georgia, 'Times New Roman', serif",
    },
    sectionEyebrow: {
      display: "inline-block",
      marginBottom: "10px",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2f8b99",
    },
    sectionLead: {
      fontSize: isMobile ? "17px" : "19px",
      lineHeight: 1.85,
      color: "#496173",
      maxWidth: "860px",
      marginBottom: "18px",
    },
    paragraph: {
      fontSize: isMobile ? "16px" : "17px",
      lineHeight: 1.8,
      marginBottom: "12px",
      color: "#536879",
      maxWidth: "860px",
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
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
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
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
      padding: isPhone ? "20px 0 30px" : isMobile ? "28px 0 36px" : "28px 0 42px",
      borderTop: "1px solid #e1ebf0",
      borderBottom: "1px solid #e1ebf0",
    },
    standaloneMissionWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isMobile ? "0 20px" : "0 28px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
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
      padding: isPhone ? "16px 0 26px" : isMobile ? "22px 0 30px" : "24px 0 34px",
    },
    sellText: {
      color: "#dbeafe",
      fontSize: "18px",
      lineHeight: 1.8,
      maxWidth: "760px",
      marginBottom: "24px",
    },
    founderText: {
      color: "#dbeafe",
      fontSize: isMobile ? "16px" : "18px",
      lineHeight: 1.85,
      maxWidth: "860px",
      marginBottom: "24px",
    },
    founderName: {
      fontSize: isMobile ? "22px" : "26px",
      fontWeight: 700,
      color: "#00305b",
      marginBottom: "10px",
      fontFamily: "Georgia, 'Times New Roman', serif",
      lineHeight: 1.15,
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
      gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
      gap: isMobile ? "18px" : "24px",
      alignItems: "start",
      marginBottom: "22px",
    },
    founderImageColumn: {
      display: "grid",
      gap: "14px",
      alignContent: "start",
      justifyItems: isMobile ? "center" : "start",
    },
    founderBadgeStack: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: isMobile ? "center" : "flex-start",
      marginTop: "4px",
      width: isMobile ? "100%" : "auto",
    },
    founderCardsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: "28px",
      alignItems: "stretch",
    },
    founderImageFrame: {
      borderRadius: "22px",
      transition: "transform 0.2s ease",
      maxWidth: isMobile ? "260px" : "100%",
      margin: isMobile ? "0 auto" : "0",
      overflow: "hidden",
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
      height: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    founderIntroText: {
      fontSize: isMobile ? "16px" : "18px",
      lineHeight: 1.8,
      color: "#4b6678",
      margin: 0,
      overflowWrap: "anywhere",
      wordBreak: "break-word",
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
      width: isMobile ? "100%" : "fit-content",
      maxWidth: "100%",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
      boxSizing: "border-box",
      textAlign: isMobile ? "center" : "left",
    },
    founderExtraText: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#5a7486",
      marginTop: "16px",
      marginBottom: 0,
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },
    founderList: {
      paddingLeft: "20px",
      margin: 0,
      color: "#536879",
      lineHeight: 1.9,
      fontSize: isMobile ? "15px" : "16px",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },
    processSection: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f7fbfc 100%)",
      padding: isPhone ? "20px 0 30px" : isMobile ? "28px 0 36px" : "28px 0 42px",
    },
    founderSection: {
      background:
        "linear-gradient(135deg, #0a3f6d 0%, #0d4b76 100%)",
      color: "#ffffff",
      padding: isPhone ? "12px 0 22px" : isMobile ? "18px 0 26px" : "18px 0 30px",
    },
    processGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(220px, 1fr))",
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
    founderCardNote: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#577082",
      margin: "18px 0 0 0",
      overflowWrap: "anywhere",
      wordBreak: "break-word",
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
    },

    heroBrandVisual: {
      backgroundColor: "#ffffff",
      border: "1px solid rgba(216,189,122,0.5)",
      borderRadius: "6px",
      overflow: "hidden",
      boxShadow: "0 32px 64px rgba(0,0,0,0.24)",
      transition: "opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
      width: "100%",
      marginBottom: isPhone ? "24px" : "34px",
    },
    heroBrandImage: {
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "contain",
      backgroundColor: "#f7fbfc",
    },
    heroBrandCaption: {
      display: isPhone ? "none" : "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: "1px",
      backgroundColor: "#d8bd7a",
    },
    heroBrandCaptionItem: {
      backgroundColor: "#081d33",
      color: "#f6f1e5",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      lineHeight: 1.5,
      textTransform: "uppercase",
      padding: "14px",
      textAlign: "center",
    },
    homeExecutivePanel: {
      backgroundColor: "rgba(255,255,255,0.97)",
      border: "1px solid rgba(216,189,122,0.45)",
      borderRadius: "6px",
      padding: isPhone ? "20px" : "26px",
      boxShadow: "0 28px 58px rgba(0,0,0,0.2)",
    },
    homePanelLabel: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "#8a6a24",
      marginBottom: "14px",
    },
    homePanelTitle: {
      fontSize: isMobile ? "24px" : "30px",
      lineHeight: 1.12,
      color: "#06182b",
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 800,
      marginBottom: "16px",
    },
    homePanelGrid: {
      display: "grid",
      gap: "14px",
    },
    homePanelRow: {
      borderTop: "1px solid #e6edf2",
      paddingTop: "14px",
    },
    homePanelMetric: {
      fontSize: "14px",
      fontWeight: 800,
      color: "#0b2742",
      marginBottom: "4px",
    },
    homePanelText: {
      fontSize: "14px",
      lineHeight: 1.65,
      color: "#516577",
      margin: 0,
    },
    homeCriteriaBar: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isPhone ? "18px 16px 4px" : isMobile ? "22px 20px 6px" : "26px 28px 8px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
      gap: "28px",
      alignItems: "center",
    },
    homeCriteriaIntro: {
      color: "#06182b",
    },
    homeCriteriaTitle: {
      fontSize: isMobile ? "28px" : "38px",
      lineHeight: 1.12,
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontWeight: 800,
      marginBottom: "10px",
    },
    homeCriteriaText: {
      fontSize: "17px",
      lineHeight: 1.8,
      color: "#5a6b7a",
      margin: 0,
    },
    homeCriteriaGrid: {
      display: "grid",
      gridTemplateColumns: isPhone ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: "12px",
    },
    homeCriteriaCard: {
      border: "1px solid #e0e6eb",
      borderLeft: "3px solid #d8bd7a",
      borderRadius: "4px",
      padding: "18px",
      backgroundColor: "#ffffff",
      boxShadow: "0 12px 24px rgba(6,24,43,0.05)",
    },
    homeCriteriaValue: {
      fontSize: "18px",
      fontWeight: 800,
      color: "#06182b",
      marginBottom: "6px",
    },
    homeCriteriaLabel: {
      fontSize: "14px",
      lineHeight: 1.6,
      color: "#5a6b7a",
    },
    credibilitySection: {
      background: "linear-gradient(180deg, #ffffff 0%, #f7fbfc 100%)",
      padding: isPhone ? "20px 0 30px" : isMobile ? "28px 0 36px" : "30px 0 46px",
      borderTop: "1px solid #e1ebf0",
      borderBottom: "1px solid #e1ebf0",
    },
    credibilityGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
      gap: "20px",
      marginTop: "22px",
    },
    credibilityCard: {
      backgroundColor: "#ffffff",
      borderRadius: "22px",
      padding: "24px",
      border: "1px solid #dfe9ef",
      boxShadow: "0 14px 30px rgba(0,48,91,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
      height: "100%",
      boxSizing: "border-box",
    },
    credibilityKicker: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "#2f8b99",
      marginBottom: "10px",
    },
    faqGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: "18px",
      marginTop: "22px",
    },
    faqItem: {
      backgroundColor: "#ffffff",
      border: "1px solid #dfe9ef",
      borderRadius: "18px",
      padding: "22px",
      boxShadow: "0 12px 26px rgba(0,48,91,0.05)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    faqQuestion: {
      fontSize: "18px",
      fontWeight: 800,
      color: "#00305b",
      marginBottom: "8px",
    },
    faqAnswer: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#536879",
      margin: 0,
    },
    contactSection: {
      backgroundColor: "#ffffff",
    },
    funnelBand: {
      background:
        "linear-gradient(135deg, #ffffff 0%, #f6f8fb 55%, #eef3f6 100%)",
      borderTop: "1px solid #e3e7eb",
      borderBottom: "1px solid #e3e7eb",
    },
    funnelWrap: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: isPhone ? "18px 16px 28px" : isMobile ? "24px 20px 32px" : "24px 28px 36px",
    },
    funnelGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
      gap: "24px",
      alignItems: "stretch",
    },
    funnelChecklist: {
      backgroundColor: "#ffffff",
      borderRadius: "4px",
      padding: isMobile ? "22px" : "28px",
      border: "1px solid #e0e6eb",
      boxShadow: "0 16px 34px rgba(6,24,43,0.06)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
      height: "100%",
      boxSizing: "border-box",
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
        "linear-gradient(145deg, #06182b 0%, #0b2742 64%, #15364f 100%)",
      color: "#ffffff",
      borderRadius: "4px",
      padding: "30px",
      boxShadow: "0 22px 44px rgba(0,48,91,0.18)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      border: "1px solid rgba(216,189,122,0.28)",
      position: "relative",
      overflow: "hidden",
      height: "100%",
      boxSizing: "border-box",
    },
    ctaEyebrow: {
      display: "block",
      marginBottom: "12px",
      padding: 0,
      borderRadius: 0,
      backgroundColor: "transparent",
      color: "#d8bd7a",
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
      backgroundColor: "#d8bd7a",
      color: "#06182b",
      textDecoration: "none",
      display: "inline-block",
      padding: "14px 22px",
      borderRadius: "3px",
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
      padding: isPhone ? "18px 16px 28px" : isMobile ? "24px 20px 32px" : "24px 28px 38px",
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
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(240px, 1fr))",
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
      padding: isPhone ? "28px 16px" : "36px",
      fontSize: "14px",
      lineHeight: 1.8,
      borderTop: "1px solid #e5e7eb",
      color: "#5b7081",
    },
    footerBrand: {
      fontWeight: 700,
      color: "#00305b",
    },
    footerMeta: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: isPhone ? "8px" : "10px",
      flexWrap: "wrap",
      marginTop: "4px",
    },
    footerDivider: {
      color: "#8aa0b1",
      display: isPhone ? "none" : "inline",
    },
    footerLink: {
      color: "#5b7081",
      textDecoration: "none",
      fontWeight: 500,
      overflowWrap: "anywhere",
      wordBreak: "break-word",
    },
  };

  const homeRevealStyle = (stage, distance = 22) => ({
    opacity: homeMotionStage >= stage ? 1 : 0,
    transform:
      homeMotionStage >= stage
        ? "translateY(0)"
        : `translateY(${distance}px)`,
    transition:
      "opacity 0.75s ease, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform",
  });

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
            onClick={() => navigateToPage("home")}
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
            {topNavItems.map(([id, label]) => (
              <a
                key={id}
                href={pageRoutes[id]}
                style={{
                  ...(id === "mission" ? styles.missionNavBtn : styles.link),
                  ...(hoveredNav === id || currentPage === id ? styles.navHover : {}),
                }}
                onClick={(e) => handlePageLink(e, id)}
                onMouseEnter={() => setHoveredNav(id)}
                onMouseLeave={() => setHoveredNav("")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div style={styles.mobileShortcutsWrap}>
        <div style={styles.mobileShortcutsInner}>
          <div style={styles.mobileShortcutsLabel}>More sections</div>
          <div style={styles.mobileShortcutsRow}>
            <a href={pageRoutes.mission} style={styles.mobileShortcut} onClick={(e) => handlePageLink(e, "mission")}>Mission</a>
            <a href={pageRoutes.criteria} style={styles.mobileShortcut} onClick={(e) => handlePageLink(e, "criteria")}>Criteria</a>
            <a href={pageRoutes.sell} style={styles.mobileShortcut} onClick={(e) => handlePageLink(e, "sell")}>Sell Your Business</a>
            <a href={pageRoutes.process} style={styles.mobileShortcut} onClick={(e) => handlePageLink(e, "process")}>Process</a>
            <a href={pageRoutes.faq} style={styles.mobileShortcut} onClick={(e) => handlePageLink(e, "faq")}>FAQ</a>
          </div>
        </div>
      </div>

      <section
        id="home"
        style={{
          ...styles.hero,
          display: currentPage === "home" ? "block" : "none",
        }}
      >
        <div style={styles.heroInner}>
          <div style={{ ...styles.heroContent, ...homeRevealStyle(1, 14) }}>
            <div style={styles.heroEyebrow}>Private Acquisition Firm</div>
            <div
              style={{
                ...styles.heroBrandVisual,
                ...homeRevealStyle(2, 20),
              }}
            >
              <img
                src="/website-hero.png"
                alt="Blue Capital Holdings acquisition and operations banner"
                style={styles.heroBrandImage}
              />
              <div style={styles.heroBrandCaption}>
                <span style={styles.heroBrandCaptionItem}>Disciplined Acquisitions</span>
                <span style={styles.heroBrandCaptionItem}>Operational Stewardship</span>
                <span style={styles.heroBrandCaptionItem}>Long-Term Ownership</span>
              </div>
            </div>
            <h1 style={styles.heroTitle}>
              A serious buyer for owners who care what happens next.
            </h1>
            <p style={styles.missionStatement}>
              Blue Capital Holdings acquires and operates enduring small
              businesses with discretion, discipline, and respect for the legacy
              owners have spent years building.
            </p>
            <p style={styles.heroText}>
              We are built for founders and family business owners exploring
              retirement, succession, or a thoughtful transition to a long-term
              operator.
            </p>
            <div style={styles.buttonRow}>
              <a
                href={pageRoutes.contact}
                style={{
                  ...styles.primaryBtn,
                  ...(hoveredSurface === "heroPrimary" ? styles.buttonHoverLift : {}),
                }}
                onClick={(e) => handlePageLink(e, "contact")}
                onMouseEnter={() => setHoveredSurface("heroPrimary")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                Begin a Confidential Conversation
              </a>
              <a
                href={pageRoutes.process}
                style={{
                  ...styles.secondaryBtn,
                  ...(hoveredSurface === "heroSecondary"
                    ? styles.secondaryBtnHover
                    : {}),
                }}
                onClick={(e) => handlePageLink(e, "process")}
                onMouseEnter={() => setHoveredSurface("heroSecondary")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                Review Our Process
              </a>
            </div>
            <div style={styles.reassuranceRow}>
              <div style={styles.reassurancePill}>Direct buyer</div>
              <div style={styles.reassurancePill}>Confidential review</div>
              <div style={styles.reassurancePill}>Long-term ownership</div>
            </div>
          </div>
          <div style={styles.heroAside}>
            <div style={{ ...styles.homeExecutivePanel, ...homeRevealStyle(3, 26) }}>
              <div style={styles.homePanelLabel}>Acquisition Focus</div>
              <div style={styles.homePanelTitle}>
                Established companies where continuity matters.
              </div>
              <div style={styles.homePanelGrid}>
                <div style={styles.homePanelRow}>
                  <div style={styles.homePanelMetric}>Business profile</div>
                  <p style={styles.homePanelText}>
                    Profitable service-based businesses with durable customer
                    relationships and room for operational improvement.
                  </p>
                </div>
                <div style={styles.homePanelRow}>
                  <div style={styles.homePanelMetric}>Owner situation</div>
                  <p style={styles.homePanelText}>
                    Retirement, succession planning, or a desire to find a
                    responsible long-term steward.
                  </p>
                </div>
                <div style={styles.homePanelRow}>
                  <div style={styles.homePanelMetric}>Approach</div>
                  <p style={styles.homePanelText}>
                    Direct, confidential conversations before any broad sale
                    process or public market exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...styles.trustStrip,
          ...homeRevealStyle(4, 18),
          display: currentPage === "home" ? "block" : "none",
        }}
      >
        <div style={styles.trustInner}>
          <div
            style={{
              ...styles.trustBadge,
            }}
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
            }}
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
            }}
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
            }}
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

      <section
        style={{
          backgroundColor: "#f8fafc",
          ...homeRevealStyle(5, 18),
          display: currentPage === "home" ? "block" : "none",
        }}
      >
        <div style={styles.homeCriteriaBar}>
          <div style={styles.homeCriteriaIntro}>
            <div style={styles.heroEyebrow}>What We Look For</div>
            <div style={styles.homeCriteriaTitle}>
              A refined focus on durable, owner-built companies.
            </div>
            <p style={styles.homeCriteriaText}>
              We are most interested in businesses with steady cash flow, loyal
              customers, and an owner who wants a credible path to transition.
            </p>
          </div>
          <div style={styles.homeCriteriaGrid}>
            <div style={styles.homeCriteriaCard}>
              <div style={styles.homeCriteriaValue}>Established Operations</div>
              <div style={styles.homeCriteriaLabel}>
                Real customers, repeatable work, and a team that knows the business.
              </div>
            </div>
            <div style={styles.homeCriteriaCard}>
              <div style={styles.homeCriteriaValue}>Service-Based Focus</div>
              <div style={styles.homeCriteriaLabel}>
                Practical businesses where execution and relationships matter.
              </div>
            </div>
            <div style={styles.homeCriteriaCard}>
              <div style={styles.homeCriteriaValue}>Succession Readiness</div>
              <div style={styles.homeCriteriaLabel}>
                Owners considering retirement, partnership, or a staged transition.
              </div>
            </div>
            <div style={styles.homeCriteriaCard}>
              <div style={styles.homeCriteriaValue}>Room to Improve</div>
              <div style={styles.homeCriteriaLabel}>
                Opportunities for systems, sales, finance, and operating discipline.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          ...styles.section,
          display: currentPage === "about" ? "block" : "none",
        }}
      >
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

      <section
        id="mission"
        style={{
          ...styles.standaloneMissionSection,
          display: currentPage === "mission" ? "block" : "none",
        }}
      >
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

      <section
        id="criteria"
        style={{
          ...styles.sectionGray,
          display: currentPage === "criteria" ? "block" : "none",
        }}
      >
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
              <p style={styles.metricText}>$500,000 to $2,000,000 annually</p>
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

      <section
        id="sell"
        style={{
          ...styles.sellSection,
          display: currentPage === "sell" ? "block" : "none",
        }}
      >
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

      <section
        id="process"
        style={{
          ...styles.processSection,
          display: currentPage === "process" ? "block" : "none",
        }}
      >
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

      <section
        id="credibility"
        style={{
          ...styles.credibilitySection,
          display: currentPage === "about" ? "block" : "none",
        }}
      >
        <div style={styles.section}>
          <div style={styles.sectionEyebrow}>Credibility and structure</div>
          <h2 style={styles.sectionTitle}>Built for Serious, Practical Transactions</h2>
          <p style={styles.sectionLead}>
            A successful transition requires more than interest. It requires a buyer
            who understands cash flow, financing, operations, and the human side of
            succession. Blue Capital Holdings is focused on practical acquisition
            structures that can support owners, lenders, brokers, and employees.
          </p>

          <div style={styles.credibilityGrid}>
            <div
              style={{
                ...styles.credibilityCard,
                ...(hoveredSurface === "credit1" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("credit1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.credibilityKicker}>Financing Readiness</div>
              <div style={styles.cardTitle}>Multiple Deal Structures</div>
              <p style={styles.processText}>
                We evaluate opportunities with a practical view of SBA financing,
                seller financing, conventional debt, and transition structures that
                can align incentives between buyer and seller.
              </p>
            </div>

            <div
              style={{
                ...styles.credibilityCard,
                ...(hoveredSurface === "credit2" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("credit2")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.credibilityKicker}>Broker and Advisor Friendly</div>
              <div style={styles.cardTitle}>Clear Criteria, Direct Follow-Up</div>
              <p style={styles.processText}>
                We welcome quality introductions from brokers, accountants, lenders,
                attorneys, and referral partners representing established service
                businesses with stable cash flow.
              </p>
            </div>

            <div
              style={{
                ...styles.credibilityCard,
                ...(hoveredSurface === "credit3" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("credit3")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.credibilityKicker}>Operational Stewardship</div>
              <div style={styles.cardTitle}>Post-Close Execution</div>
              <p style={styles.processText}>
                Our focus is not financial engineering alone. We look for businesses
                where disciplined operations, KPI visibility, leadership, and process
                improvement can protect and grow long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        style={{
          ...styles.sectionGray,
          display: currentPage === "faq" ? "block" : "none",
        }}
      >
        <div style={styles.section}>
          <div style={styles.sectionEyebrow}>Common owner questions</div>
          <h2 style={styles.sectionTitle}>Seller FAQ</h2>
          <p style={styles.sectionLead}>
            Many owners are not ready to start a formal sale process. These questions
            help clarify what a confidential first conversation can look like.
          </p>

          <div style={styles.faqGrid}>
            <div
              style={{
                ...styles.faqItem,
                ...(hoveredSurface === "faq1" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("faq1")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.faqQuestion}>Do I need to be ready to sell immediately?</div>
              <p style={styles.faqAnswer}>
                No. Some of the best conversations begin 6 to 36 months before an
                owner is ready. The first step can simply be a private discussion
                about goals, timing, and fit.
              </p>
            </div>

            <div
              style={{
                ...styles.faqItem,
                ...(hoveredSurface === "faq2" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("faq2")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.faqQuestion}>Will employees or customers find out?</div>
              <p style={styles.faqAnswer}>
                Confidentiality is central to our approach. Early conversations are
                handled privately and respectfully to protect employees, customers,
                and the reputation of the business.
              </p>
            </div>

            <div
              style={{
                ...styles.faqItem,
                ...(hoveredSurface === "faq3" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("faq3")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.faqQuestion}>What types of businesses are the best fit?</div>
              <p style={styles.faqAnswer}>
                We are most interested in established service-based businesses with
                stable cash flow, a proven customer base, experienced employees, and
                opportunities for operational improvement.
              </p>
            </div>

            <div
              style={{
                ...styles.faqItem,
                ...(hoveredSurface === "faq4" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("faq4")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.faqQuestion}>Can seller financing be part of the structure?</div>
              <p style={styles.faqAnswer}>
                Yes, when appropriate. Seller financing can help align incentives,
                support a smoother transition, and create flexibility around timing,
                valuation, and continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="founder"
        style={{
          ...styles.founderSection,
          display: currentPage === "founder" ? "block" : "none",
        }}
      >
        <div style={styles.section}>
          <div style={{ ...styles.sectionEyebrow, color: "#bfdbfe" }}>
            Founder / operator
          </div>
          <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>
            Meet Michael McMullan
          </h2>
          <p style={styles.founderText}>
            Michael McMullan brings an operator&apos;s mindset to acquisitions,
            combining finance, supply chain, and process improvement experience
            with a long-term commitment to building durable companies
            responsibly.
          </p>
          <p style={styles.founderText}>
            Based in Avon, Indiana, he founded Blue Capital Holdings LLC to
            acquire and grow quality small businesses through disciplined
            ownership, operational stewardship, and a direct working style that
            resonates with owners planning a thoughtful transition.
          </p>

          <div style={styles.founderCardsGrid}>
            <div
              style={{
                ...styles.founderIntroCard,
                ...(hoveredSurface === "founderIntro" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("founderIntro")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.founderLeadGrid}>
                <div style={styles.founderImageColumn}>
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
                  <div style={styles.founderBadgeStack}>
                    <div style={styles.founderHighlight}>10+ years management experience</div>
                    <div style={styles.founderHighlight}>Finance and supply chain background</div>
                    <div style={styles.founderHighlight}>Lean Six Sigma Green Belt certified</div>
                    <div style={styles.founderHighlight}>Bloomberg Market Concepts certified</div>
                    <div style={styles.founderHighlight}>Based in Avon, Indiana</div>
                  </div>
                </div>
                <div>
                  <div style={styles.founderName}>Michael McMullan</div>
                  <div style={styles.founderRole}>Founder and Operator</div>
                  <p style={styles.founderIntroText}>
                    Over a decade of management experience across operations,
                    finance, and supply chain, with a practical focus on
                    execution, process improvement, and long-term business
                    performance.
                  </p>
                  <p style={styles.founderExtraText}>
                    Owners often want to know whether the next steward can make
                    practical decisions, communicate directly, and improve the
                    business without losing what made it valuable in the first place.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                ...styles.card,
                height: "100%",
                boxSizing: "border-box",
                ...(hoveredSurface === "founderCard" ? styles.elevatedHover : {}),
              }}
              onMouseEnter={() => setHoveredSurface("founderCard")}
              onMouseLeave={() => setHoveredSurface("")}
            >
              <div style={styles.cardTitle}>
                Credentials and Operating Lens
              </div>

              <ul style={styles.founderList}>
                <li>Bachelor of Science from Indiana University Kelley School of Business</li>
                <li>Double major in Finance and Supply Chain Management</li>
                <li>Minor in Economics</li>
                <li>Lean Six Sigma Green Belt certified</li>
                <li>Bloomberg Market Concepts certified</li>
                <li>Operator-oriented acquisition approach and long-term ownership philosophy</li>
              </ul>

              <p style={styles.founderExtraText}>
                Blue Capital Holdings is built around steady ownership, operational
                discipline, and the kind of direct communication owners usually
                hope to find before beginning a broader transition process.
              </p>

              <p style={styles.founderExtraText}>
                For many sellers, the best first step is not launching an auction.
                It is finding a serious buyer who understands timing, confidentiality,
                and the personal weight behind a transition.
              </p>

              <p style={styles.founderCardNote}>
                <span style={{ ...styles.founderHighlight, whiteSpace: "normal" }}>
                  Built for owners who care about legacy, continuity, and thoughtful long-term stewardship.
                </span>
                <span style={{ ...styles.founderHighlight, whiteSpace: "normal" }}>
                  A good fit for owners who want a calm, direct conversation before entering a broader sale process.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          ...styles.funnelBand,
          ...homeRevealStyle(5, 18),
          display: currentPage === "home" ? "block" : "none",
        }}
      >
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
              }}
            >
              <div style={styles.sectionEyebrow}>A Different Kind of Buyer</div>
              <h2 style={{ ...styles.sectionTitle, marginBottom: "12px" }}>
                Quiet, direct, and built around the owner&apos;s priorities.
              </h2>
              <p style={{ ...styles.paragraph, maxWidth: "100%" }}>
                Selling a business is not only a financial decision. It is a
                decision about employees, customers, timing, reputation, and what
                the owner wants the next chapter to look like.
              </p>
              <ul style={styles.funnelList}>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  Direct conversations with the buyer, without forcing a broad
                  market process before you are ready.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  A practical review of fit, timing, valuation expectations, and
                  transition goals.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  Respect for confidentiality around employees, customers,
                  vendors, and the broader community.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  A long-term operating mindset focused on continuity before
                  aggressive change.
                </li>
                <li style={styles.funnelItem}>
                  <span style={styles.checkmark}>+</span>
                  A measured path for owners who are still early in succession
                  planning and want clarity first.
                </li>
              </ul>
            </div>

            <div
              style={{
                ...styles.ctaPanel,
              }}
            >
              <div style={styles.ctaEyebrow}>Confidential Next Step</div>
              <div style={styles.ctaTitle}>
                Start with a private conversation, not a public sale process.
              </div>
              <p style={styles.ctaText}>
                If you are considering retirement, succession, or a sale in the
                next 6 to 36 months, the first step is simply a private
                conversation. No obligation. No pressure to move before the time
                is right.
              </p>
              <p style={styles.ctaText}>
                The best conversations often begin before an owner has decided
                exactly when or how to transition.
              </p>
              <div style={styles.ctaDivider} />
              <div style={styles.ctaPoints}>
                <div style={styles.ctaPoint}>
                  Designed for owners who want clarity before they want a transaction.
                </div>
                <div style={styles.ctaPoint}>
                  Built to protect confidentiality, relationships, and reputation.
                </div>
                <div style={styles.ctaPoint}>
                  Best suited for transitions where continuity matters alongside price.
                </div>
              </div>
              <a
                href={pageRoutes.contact}
                style={{
                  ...styles.ctaButton,
                  ...(hoveredSurface === "ctaButton" ? styles.buttonHoverLift : {}),
                }}
                onClick={(e) => handlePageLink(e, "contact")}
                onMouseEnter={() => setHoveredSurface("ctaButton")}
                onMouseLeave={() => setHoveredSurface("")}
              >
                Begin the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          ...styles.contactSection,
          display: currentPage === "contact" ? "block" : "none",
        }}
      >
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
        <div style={styles.footerMeta}>
          <span>Avon, Indiana</span>
          <span style={styles.footerDivider}>|</span>
          <a
            href="mailto:info@bluecapitalholdingsllc.com"
            style={styles.footerLink}
          >
            info@bluecapitalholdingsllc.com
          </a>
          <span style={styles.footerDivider}>|</span>
          <a href="tel:8123121910" style={styles.footerLink}>
            812-312-1910
          </a>
        </div>
      </footer>
    </div>
  );
}
