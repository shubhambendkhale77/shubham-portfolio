// ============================================================
// Portfolio.jsx  —  Shubham Bendkhale  (Responsive + Mobile)
// ============================================================
import { useState, useEffect, useRef } from "react";
import profileImg from "./Image/Photo.jpeg"
// ─────────────────────────────────────────────────────────────
// FONT AWESOME ICON SHIMS
// Drop-in replacements for the lucide-react components used below,
// backed by Font Awesome (loaded via CDN) instead of lucide.
// Same prop API (size, color, strokeWidth, fill) so usage elsewhere
// in the file is unchanged.
// ─────────────────────────────────────────────────────────────

function useFontAwesome() {
  useEffect(() => {
    if (document.getElementById("fa-cdn")) return;
    const link = document.createElement("link");
    link.id = "fa-cdn";
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(link);
  }, []);
}

function FAIcon({ name, brand = false, size = 16, color = "currentColor", style = {} }) {
  return (
    <i
      className={`${brand ? "fa-brands" : "fa-solid"} ${name}`}
      style={{ fontSize: size, color, lineHeight: 1, display: "inline-block", ...style }}
      aria-hidden="true"
    />
  );
}

const Mail = (p) => <FAIcon name="fa-envelope" {...p} />;
const Phone = (p) => <FAIcon name="fa-phone" {...p} />;
const Linkedin = (p) => <FAIcon name="fa-linkedin" brand {...p} />;
const Github = (p) => <FAIcon name="fa-github" brand {...p} />;
const ArrowUpRight = (p) => <FAIcon name="fa-arrow-up-right-from-square" {...p} />;
const Sparkles = (p) => <FAIcon name="fa-wand-magic-sparkles" {...p} />;
const MapPin = (p) => <FAIcon name="fa-location-dot" {...p} />;
const Building2 = (p) => <FAIcon name="fa-building" {...p} />;
const BookOpen = (p) => <FAIcon name="fa-book-open" {...p} />;
const Award = (p) => <FAIcon name="fa-award" {...p} />;
const ExternalLink = (p) => <FAIcon name="fa-up-right-from-square" {...p} />;
const Code2 = (p) => <FAIcon name="fa-code" {...p} />;
const Database = (p) => <FAIcon name="fa-database" {...p} />;
const Cloud = (p) => <FAIcon name="fa-cloud" {...p} />;
const Zap = (p) => <FAIcon name="fa-bolt" {...p} />;
const Layers = (p) => <FAIcon name="fa-layer-group" {...p} />;
const CheckCircle2 = (p) => <FAIcon name="fa-circle-check" {...p} />;
const Briefcase = (p) => <FAIcon name="fa-briefcase" {...p} />;
const GraduationCap = (p) => <FAIcon name="fa-graduation-cap" {...p} />;
const Rocket = (p) => <FAIcon name="fa-rocket" {...p} />;
const TrendingUp = (p) => <FAIcon name="fa-arrow-trend-up" {...p} />;
const Star = (p) => <FAIcon name="fa-star" {...p} />;
const Calendar = (p) => <FAIcon name="fa-calendar" {...p} />;
const Target = (p) => <FAIcon name="fa-bullseye" {...p} />;
const Boxes = (p) => <FAIcon name="fa-boxes-stacked" {...p} />;
// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const ROLES = [
  "Dynamics 365 Expert",
  "Azure Integration Specialist",
  "Power Platform Developer",
  "Canvas App Engineer",
];

const STATS = [
  { value: "1.5yr", label: "Experience", Icon: Briefcase },
  { value: "3", label: "MS Certifications", Icon: Award },
  { value: "6+", label: "Projects Shipped", Icon: Rocket },
  { value: "20+", label: "Technologies", Icon: Boxes },
];

const QUICK_FACTS = [
  { Icon: MapPin, text: "Bengaluru, Karnataka, India" },
  { Icon: Building2, text: "VNB Consulting Services" },
  { Icon: Mail, text: "shubhambendkhale7@gmail.com" },
  { Icon: Phone, text: "+91 8149250536" },
];

const SKILLS = [
  {
    label: "Power Platform",
    Icon: Zap,
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
    items: ["Canvas Apps", "Model-Driven Apps", "Power Automate", "PCF Controls", "Power Pages", "Business Process Flows"],
  },
  {
    label: "Dynamics 365",
    Icon: Layers,
    color: "#2563eb",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.2)",
    items: ["D365 CE", "Plugin Development (C#)", "CRM Customization", "Sales Module", "Workflows"],
  },
  {
    label: "Azure & Cloud",
    Icon: Cloud,
    color: "#0891b2",
    bg: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.2)",
    items: ["Azure Functions", "Logic Apps", "API Management", "Key Vault", "Blob Storage", "RBAC", "EDI Automation"],
  },
  {
    label: "Languages",
    Icon: Code2,
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.2)",
    items: ["C#", ".NET", "JavaScript", "C / C++"],
  },
  {
    label: "Databases",
    Icon: Database,
    color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
    border: "rgba(217,119,6,0.2)",
    items: ["Microsoft Dataverse", "SQL Server", "MongoDB", "Firebase Firestore"],
  },
  {
    label: "Frontend & Tools",
    Icon: Boxes,
    color: "#dc2626",
    bg: "rgba(220,38,38,0.08)",
    border: "rgba(220,38,38,0.2)",
    items: ["React.js", "Material UI", "Redux", "Node.js", "Git", "Postman", "SSMS"],
  },
];

const EXPERIENCE = [
  {
    num: "01",
    title: "FAMCO – Canvas App Order Management",
    period: "May 2025 – Sep 2025",
    sector: "Manufacturing Sector",
    color: "#2563eb",
    impact: { value: "35%", label: "reduction in manual order processing time" },
    points: [
      "Built Canvas App integrated with SQL Server, reducing manual processing time by 35%.",
      "Custom connectors & on-premises gateway for secure data transfer with webhook triggers.",
      "Designed stored procedures in SSMS with SQL Jobs for automated data sync.",
    ],
    tags: ["Canvas Apps", "SQL Server", "Power Automate", "SSMS"],
  },
  {
    num: "02",
    title: "Johnson Health Tech – Dynamics 365 CRM",
    period: "Aug 2025 – Present",
    sector: "Health-Tech Sector",
    color: "#0891b2",
    impact: { value: "60%", label: "faster PDF quote generation in D365 Sales" },
    points: [
      "Migrated 5+ web apps to Canvas Apps; cut PDF quote generation by 60% in D365 Sales.",
      "C# plugins & Power Automate flows ensuring zero-data-loss CRM migration from on-premises to cloud.",
      "SharePoint automation saving 10+ hours/week; REST webhook integrations for legacy systems.",
    ],
    tags: ["Dynamics 365", "C#", "SharePoint", "JavaScript"],
  },
  {
    num: "03",
    title: "Tulane – Azure EDI Transaction Automation",
    period: "Nov 2025 – May 2026",
    sector: "Education Sector",
    color: "#7c3aed",
    impact: { value: "50%", label: "reduction in EDI transaction cycle time" },
    points: [
      "Logic Apps workflows for end-to-end EDI processing — reduced cycle time by 50%.",
      "Azure Functions + Blob Storage for scalable data persistence and custom business logic.",
      "API Management, Key Vault & RBAC for enterprise-grade API security posture.",
    ],
    tags: ["Logic Apps", "Azure Functions", "API Management", "RBAC"],
  },
];

const CERTIFICATIONS = [
  {
    code: "PL-200",
    name: "Power Platform Functional Consultant Associate",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg,#7c3aed,#5b21b6)",
    shadow: "rgba(124,58,237,0.35)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamBendkhale-1331/8C8ABC3E3B701D5F?sharingId=EE364CBB841774FE",
  },
  {
    code: "PL-400",
    name: "Power Platform Developer Associate",
    color: "#2563eb",
    gradient: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    shadow: "rgba(37,99,235,0.35)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamBendkhale-1331/6A1AF3A77D18B4BD?sharingId=EE364CBB841774FE",
  },
  {
    code: "AZ-204",
    name: "Azure Developer Associate",
    color: "#0891b2",
    gradient: "linear-gradient(135deg,#0891b2,#0e7490)",
    shadow: "rgba(8,145,178,0.35)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamBendkhale-1331/70573E4D105FF5E9?sharingId=EE364CBB841774FE",
  },
];

const PROJECTS = [
  {
    id: "ecommerce",
    imageUrl: "../src/screenshots/ecommerce.png",
    badge: "Featured · Full Stack",
    badgeColor: "#60a5fa",
    badgeBg: "rgba(37,99,235,0.12)",
    badgeBorder: "rgba(37,99,235,0.22)",
    title: "Multi-Vendor E-Commerce Platform",
    subtitle: "React.js · Node.js · Redux · Material UI · MongoDB · Firebase Auth",
    accent: "#2563eb",
    accentVia: "#7c3aed",
    glow1: "rgba(37,99,235,0.1)",
    glow2: "rgba(124,58,237,0.08)",
    liveUrl: "https://shop-smart-blue.vercel.app/",
    githubUrl: "https://github.com/shubhambendkhale77/ShopSmart",
    browserUrl: "shop-smart-blue.vercel.app",
    points: [
      ["#60a5fa", "Full-stack multi-vendor platform with real-time order tracking, AI-powered product recommendations, and mobile-first UI serving 3+ vendor stores."],
      ["#a78bfa", "Vendor dashboard for product listing, inventory management, and sales analytics with role-based access control."],
      ["#38bdf8", "Firebase Auth for secure authentication · MongoDB as primary database · Firestore for real-time data sync."],
    ],
    tags: ["React.js", "Material UI", "Redux", "Node.js", "MongoDB", "Firebase Auth"],
    tagColor: "#60a5fa",
    tagBg: "rgba(37,99,235,0.1)",
    tagBorder: "rgba(37,99,235,0.22)",
  },
  {
    id: "mealmaster",
    imageUrl: "../src/screenshots/mealmaster.png",
    badge: "Full Stack · AI-Powered",
    badgeColor: "#34d399",
    badgeBg: "rgba(5,150,105,0.1)",
    badgeBorder: "rgba(5,150,105,0.25)",
    title: "MealMaster",
    subtitle: "Meal planning app with AI nutrition tracking & personalized meal plans",
    accent: "#059669",
    accentVia: "#0d9488",
    glow1: "rgba(5,150,105,0.1)",
    glow2: "rgba(13,148,136,0.07)",
    liveUrl: "https://mealmaster01.vercel.app/",
    githubUrl: "https://github.com/shubhambendkhale77/MealMaster",
    browserUrl: "mealmaster01.vercel.app",
    points: [
      ["#34d399", "Personalized meal plan creation based on dietary preferences and calorie/macronutrient goals, powered by Gemini AI for smart grocery list generation."],
      ["#2dd4bf", "Recipe database with CalorieNinja API integration for real-time nutritional insights, calorie tracking, and macro breakdowns per meal."],
      ["#60a5fa", "Firebase Authentication & Firestore for secure user data meal prep reminders, saved plans, and grocery lists persist across sessions."],
    ],
    apis: ["Gemini AI", "CalorieNinja", "Firebase Auth", "Firestore"],
    tags: ["React.js", "Firebase", "Tailwind CSS", "Context API", "Gemini AI", "CalorieNinja"],
    tagColor: "#34d399",
    tagBg: "rgba(5,150,105,0.08)",
    tagBorder: "rgba(5,150,105,0.22)",
  },
  {
    id: "gitrecruiter",
    imageUrl: "../src/screenshots/gitrecruiter.png",
    badge: "Full Stack · Hackathon",
    badgeColor: "#f472b6",
    badgeBg: "rgba(236,72,153,0.1)",
    badgeBorder: "rgba(236,72,153,0.25)",
    title: "GitHub Recruiter",
    subtitle: "Developer talent assessment platform via advanced GitHub profile analysis",
    accent: "#db2777",
    accentVia: "#7c3aed",
    glow1: "rgba(236,72,153,0.1)",
    glow2: "rgba(124,58,237,0.07)",
    githubUrl: "https://github.com/shubhambendkhale77/GitMatch",
    liveUrl: "https://gitmatch-hackathon-frontend.onrender.com/",
    browserUrl: "github-recruiter.vercel.app",
    points: [
      ["#f472b6", "In-depth GitHub profile analysis across commit frequency, language diversity, repository complexity, code quality, and community engagement."],
      ["#c084fc", "Weighted scoring algorithm generates objective hire/no-hire recommendations with configurable standard developer profiles."],
      ["#60a5fa", "Express.js + Node.js backend with MongoDB; Firebase authentication; GitHub API integration for real-time developer data aggregation."],
    ],
    tags: ["React.js", "Vite", "Chakra UI", "Express.js", "Node.js", "MongoDB", "Firebase", "GitHub API"],
    tagColor: "#f472b6",
    tagBg: "rgba(236,72,153,0.08)",
    tagBorder: "rgba(236,72,153,0.22)",
  },
];

// ─────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────

function useGoogleFonts() {
  useEffect(() => {
    if (document.getElementById("gf-inter")) return;
    const link = document.createElement("link");
    link.id = "gf-inter";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);
  }, []);
}

function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// ─────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const [ref, visible] = useReveal();
  const translate = direction === "left" ? "translateX(-24px)" : direction === "right" ? "translateX(24px)" : "translateY(24px)";
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate,
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub, light = false, eyebrowColor, eyebrowBg, eyebrowBorder, Icon }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 16px", borderRadius: 999,
        fontSize: 11, fontWeight: 800, letterSpacing: 2.5, textTransform: "uppercase",
        color: eyebrowColor || (light ? "#93c5fd" : "#2563eb"),
        background: eyebrowBg || (light ? "rgba(37,99,235,0.12)" : "#eff6ff"),
        border: `1px solid ${eyebrowBorder || (light ? "rgba(37,99,235,0.3)" : "#bfdbfe")}`,
        marginBottom: 14,
      }}>
        {Icon && <Icon size={12} strokeWidth={2.5} />}
        {eyebrow}
      </span>
      <h2 style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: "clamp(26px,5vw,44px)",
        fontWeight: 800, letterSpacing: -1.5,
        color: light ? "#fff" : "#0f172a",
        margin: "0 0 12px", lineHeight: 1.1,
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{ fontSize: "clamp(13px,2vw,15px)", color: light ? "#94a3b8" : "#64748b", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Tag({ label, color, bg, border }) {
  return (
    <span style={{
      display: "inline-block", padding: "4px 12px", borderRadius: 999,
      fontSize: 12, fontWeight: 600, margin: "3px 4px 3px 0",
      color, background: bg, border: `1px solid ${border}`, cursor: "default",
    }}>
      {label}
    </span>
  );
}

function AvatarSVG({ size = 112 }) {
  return (
    <svg viewBox="0 0 112 112" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
        <linearGradient id="av-shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="112" height="112" fill="url(#av-bg)" />
      <ellipse cx="56" cy="100" rx="36" ry="24" fill="url(#av-shirt)" />
      <polygon points="56,72 53,80 56,95 59,80" fill="#60a5fa" opacity="0.9" />
      <rect x="51" y="62" width="10" height="14" rx="5" fill="#c4a882" />
      <ellipse cx="56" cy="48" rx="20" ry="22" fill="#c4a882" />
      <ellipse cx="56" cy="29" rx="20" ry="10" fill="#1a0e00" />
      <ellipse cx="56" cy="27" rx="18" ry="8" fill="#2d1600" />
      <ellipse cx="49" cy="46" rx="3" ry="3.5" fill="white" />
      <ellipse cx="63" cy="46" rx="3" ry="3.5" fill="white" />
      <circle cx="50" cy="47" r="2" fill="#1a0a00" />
      <circle cx="64" cy="47" r="2" fill="#1a0a00" />
      <circle cx="50.8" cy="46.2" r="0.7" fill="white" />
      <circle cx="64.8" cy="46.2" r="0.7" fill="white" />
      <path d="M 46 42 Q 50 40 53 42" stroke="#2d1600" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 60 42 Q 63 40 67 42" stroke="#2d1600" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 56 49 L 54 54 Q 56 56 58 54 Z" fill="#b08060" opacity="0.7" />
      <path d="M 50 57 Q 56 62 62 57" stroke="#8b5e3c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="36" cy="48" rx="4" ry="5.5" fill="#c4a882" />
      <ellipse cx="76" cy="48" rx="4" ry="5.5" fill="#c4a882" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// HAMBURGER ICON
// ─────────────────────────────────────────────────────────────

function HamburgerIcon({ open }) {
  return (
    <div style={{ width: 24, height: 18, position: "relative", cursor: "pointer" }}>
      {[0, 8, 16].map((top, i) => (
        <span key={i} style={{
          position: "absolute", left: 0, width: "100%", height: 2,
          background: "#fff", borderRadius: 2,
          top: open
            ? i === 0 ? 8 : i === 2 ? 8 : top
            : top,
          transform: open
            ? i === 0 ? "rotate(45deg)" : i === 2 ? "rotate(-45deg)" : "scaleX(0)"
            : "none",
          opacity: open && i === 1 ? 0 : 1,
          transition: "all 0.28s ease",
          transformOrigin: "center",
        }} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 768;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(NAV_LINKS[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled || menuOpen ? "rgba(2,6,23,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        transition: "all 0.3s",
      }}>
        <div style={{
          maxWidth: 1040, margin: "0 auto", padding: "0 20px",
          height: 60, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <button
            onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, fontSize: 20, color: "#fff", letterSpacing: -0.5, display: "flex", alignItems: "center", gap: 7 }}
          >
            SB<span style={{ color: "#3b82f6" }}>.</span>
          </button>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {NAV_LINKS.map((n) => (
                <button
                  key={n}
                  onClick={() => scrollTo(n)}
                  style={{
                    background: active === n && scrolled ? "rgba(37,99,235,0.12)" : "transparent",
                    color: active === n ? "#3b82f6" : "rgba(255,255,255,0.65)",
                    border: "none", borderRadius: 8, padding: "7px 13px",
                    fontWeight: active === n ? 700 : 500, fontSize: 13,
                    cursor: "pointer", transition: "all 0.2s",
                    fontFamily: "'Inter',sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#3b82f6")}
                  onMouseLeave={e => (e.currentTarget.style.color = active === n ? "#3b82f6" : "rgba(255,255,255,0.65)")}
                >
                  {n}
                </button>
              ))}
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: "rgba(2,6,23,0.98)", backdropFilter: "blur(24px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 8,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}>
          {NAV_LINKS.map((n, i) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 28, fontWeight: 700,
                color: active === n ? "#3b82f6" : "rgba(255,255,255,0.75)",
                padding: "12px 32px", borderRadius: 16,
                transition: "color 0.2s",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "none" : "translateY(16px)",
                transitionDelay: menuOpen ? `${i * 0.05}s` : "0s",
              }}
            >
              {n}
            </button>
          ))}
          <a
            href="mailto:shubhambendkhale7@gmail.com"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 20, padding: "14px 40px", borderRadius: 14, fontWeight: 700, fontSize: 16,
              color: "#fff", background: "linear-gradient(135deg,#2563eb,#7c3aed)",
              textDecoration: "none", boxShadow: "0 6px 28px rgba(37,99,235,0.45)",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}
          >
            <Mail size={18} /> Hire Me
          </a>
        </div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────

function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = ROLES[roleIdx];
    if (!deleting && displayed.length < cur.length) {
      const t = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 70);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === cur.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" style={{
      minHeight: "100vh", background: "#020617",
      display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
      padding: "90px 20px 60px", position: "relative", overflow: "hidden", textAlign: "center",
    }}>
      {/* BG grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#334155" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {[
          { w: 500, h: 500, color: "#2563eb", top: "10%", left: "50%", transform: "translateX(-50%)", opacity: 0.18 },
          { w: 300, h: 300, color: "#7c3aed", bottom: "-5%", left: "5%", opacity: 0.12 },
          { w: 250, h: 250, color: "#0891b2", top: "20%", right: "2%", opacity: 0.1 },
        ].map((g, i) => (
          <div key={i} style={{
            position: "absolute", width: g.w, height: g.h, borderRadius: "50%",
            background: `radial-gradient(circle, ${g.color}, transparent 70%)`,
            top: g.top, bottom: g.bottom, left: g.left, right: g.right,
            transform: g.transform, opacity: g.opacity,
          }} />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, width: "100%" }}>

        {/* Avatar */}
        <div style={{ position: "relative", display: "inline-block", marginBottom: 24 }}>
          <div style={{
            width: 90, height: 90, borderRadius: "50%", padding: 3,
            background: "conic-gradient(#2563eb,#7c3aed,#0891b2,#2563eb)",
            display: "inline-flex", alignItems: "center", justifyContent: "center",
          }}>
          <div
  style={{
    width: 84,
    height: 84,
    borderRadius: "50%",
    overflow: "hidden",
    background: "#0f172a",
    border: "3px solid #020617",
  }}
>
  <img
    src={profileImg}
    alt="Shubham Bendkhale"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
</div>
          </div>
          <span style={{
            position: "absolute", bottom: 4, right: 4, width: 14, height: 14, borderRadius: "50%",
            background: "#4ade80", border: "2.5px solid #020617", boxShadow: "0 0 10px #4ade80",
          }} />
        </div>

        {/* Name */}
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(42px,10vw,84px)", fontWeight: 800, color: "#fff", margin: "0 0 2px", letterSpacing: -2, lineHeight: 1 }}>
          Shubham
        </h1>
        <h1 style={{
          fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(42px,10vw,84px)",
          fontWeight: 800, margin: "0 0 20px", letterSpacing: -2, lineHeight: 1,
          background: "linear-gradient(135deg,#60a5fa,#a78bfa,#38bdf8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          Bendkhale
        </h1>

        {/* Typewriter */}
        <div style={{ minHeight: 30, marginBottom: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <span style={{ fontSize: "clamp(14px,3vw,19px)", color: "#94a3b8", fontWeight: 500 }}>{displayed}</span>
          <span style={{ display: "inline-block", width: 2, height: "1.1em", background: "#60a5fa", animation: "sb-blink 1s step-end infinite", verticalAlign: "middle" }} />
        </div>

        {/* Bio */}
        <p style={{ fontSize: "clamp(13px,2.5vw,15px)", color: "#475569", maxWidth: 480, lineHeight: 1.9, margin: "0 auto 28px", padding: "0 4px" }}>
          1.5+ years engineering enterprise solutions on{" "}
          <strong style={{ color: "#94a3b8" }}>Microsoft Power Platform</strong>,{" "}
          <strong style={{ color: "#94a3b8" }}>Dynamics 365</strong> &amp;{" "}
          <strong style={{ color: "#94a3b8" }}>Azure</strong>. Three Microsoft certifications.
          Cutting processing times by 35–60% per engagement.
        </p>

        {/* Cert badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 28 }}>
          {[["PL-200", Zap, "#7c3aed", "rgba(124,58,237,0.12)", "rgba(124,58,237,0.25)"],
          ["PL-400", Layers, "#60a5fa", "rgba(37,99,235,0.12)", "rgba(37,99,235,0.25)"],
          ["AZ-204", Cloud, "#67e8f9", "rgba(8,145,178,0.12)", "rgba(8,145,178,0.25)"],
          ].map(([label, Icon, color, bg, border]) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 12, fontSize: "clamp(11px,2vw,12px)", fontWeight: 700, color, background: bg, border: `1px solid ${border}` }}>
              <Icon size={13} strokeWidth={2.5} /> {label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          <a href="mailto:shubhambendkhale7@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "13px 26px", borderRadius: 12, fontWeight: 700, fontSize: "clamp(13px,2.5vw,14px)",
            color: "#fff", textDecoration: "none", background: "linear-gradient(135deg,#2563eb,#7c3aed)",
            boxShadow: "0 6px 24px rgba(37,99,235,0.45)", transition: "transform 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "none")}
          >
            <Mail size={15} /> Get In Touch
          </a>
  {[
  ["LinkedIn", Linkedin, "https://www.linkedin.com/in/shubham-bendkhale/"],
  ["GitHub", Github, "https://github.com/shubhambendkhale77"],
].map(([label, Icon, href]) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "13px 22px",
      borderRadius: 12,
      fontWeight: 700,
      fontSize: "clamp(13px,2.5vw,14px)",
      color: "#e2e8f0",
      textDecoration: "none",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      transition: "background 0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
    }
  >
    <Icon size={15} /> {label}
  </a>
))}
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.3 }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#64748b" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #475569, transparent)" }} />
        </div>
      </div>

      <style>{`
        @keyframes sb-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.9)} }
        @keyframes sb-blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────

function About() {
  const width = useWindowWidth();
  const isMobile = width < 640;

  return (
    <section id="about" style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            title="The Person Behind the Code"
            sub="Power Platform engineer turning complex enterprise workflows into clean, scalable Microsoft solutions."
            Icon={Target}
          />
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(300px,1fr))",
          gap: 20,
        }}>
          {/* Bio card */}
        <Reveal direction="left">
  <div style={{
    borderRadius: 20, padding: "28px 24px",
    background: "linear-gradient(135deg,#020617,#0f172a)",
    border: "1px solid rgba(255,255,255,0.06)",
    height: "100%", boxSizing: "border-box",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, overflow: "hidden", flexShrink: 0, border: "2px solid rgba(37,99,235,0.3)" }}>
        <AvatarSVG size={48} />
      </div>
      <div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>Shubham Bendkhale</div>
        <div style={{ fontSize: 12, color: "#64748b", marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
          <Building2 size={12} /> Developer · VNB Consulting
        </div>
      </div>
    </div>
    <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.9, marginBottom: 12 }}>
      I'm a developer working across <strong style={{ color: "#fff" }}>Azure Integration Services</strong>,{" "}
      <strong style={{ color: "#fff" }}>Dynamics 365</strong> &amp; <strong style={{ color: "#fff" }}>Power Platform</strong>, with deep expertise building enterprise automation pipelines and CRM solutions across manufacturing, health-tech, and education sectors.
    </p>
    <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.9, marginBottom: 16 }}>
      My work spans end-to-end delivery from designing Dataverse data models and writing C# plugins to building Canvas Apps and deploying Azure-native EDI systems. My projects consistently cut processing times by <strong style={{ color: "#94a3b8" }}>35–60%</strong>.
    </p>
    <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.9, marginBottom: 20 }}>
      I enjoy the handoff moment most taking a messy manual process and shipping something a team relies on every day. Outside of client work, I keep building side projects to stay sharp on the broader web stack alongside Microsoft tools.
    </p>
  </div>
</Reveal>
          {/* Stats + Quick facts */}
          <Reveal direction={isMobile ? "up" : "right"}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {STATS.map(({ value, label, Icon }, i) => {
                  const colors = ["#2563eb", "#7c3aed", "#0891b2", "#059669"];
                  const bgs = ["rgba(37,99,235,0.08)", "rgba(124,58,237,0.08)", "rgba(8,145,178,0.08)", "rgba(5,150,105,0.08)"];
                  return (
                    <div key={label} style={{
                      background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16,
                      padding: "18px 14px", textAlign: "center", position: "relative",
                    }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: 9, background: bgs[i],
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 8px",
                      }}>
                        <Icon size={15} color={colors[i]} strokeWidth={2.3} />
                      </div>
                      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(24px,6vw,29px)", fontWeight: 800, color: colors[i], letterSpacing: -1 }}>{value}</div>
                      <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, fontWeight: 600 }}>{label}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "20px 18px" }}>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 2.5, marginBottom: 14 }}>Quick Facts</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {QUICK_FACTS.map(({ Icon, text }) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: 9, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={15} color="#2563eb" strokeWidth={2.2} />
                      </span>
                      <span style={{ fontSize: "clamp(12px,2.5vw,13px)", color: "#334155", fontWeight: 500, wordBreak: "break-word" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────

function Skills() {
  const width = useWindowWidth();
  const cols = width < 480 ? "1fr" : width < 768 ? "1fr 1fr" : "repeat(auto-fit,minmax(280px,1fr))";

  return (
    <section id="skills" style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        <Reveal>
          <SectionHeader
            eyebrow="Skills & Technologies"
            title="What I Know"
            sub="A deep Microsoft ecosystem stack, complemented by Azure cloud services and modern web technologies."
            eyebrowColor="#7c3aed" eyebrowBg="#f5f3ff" eyebrowBorder="#ddd6fe"
            Icon={Layers}
          />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 16 }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div style={{
                background: "#fff", border: "1px solid #e2e8f0",
                borderTop: `3px solid ${s.color}`, borderRadius: 18,
                padding: "22px 18px", height: "100%", boxSizing: "border-box",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${s.color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: s.bg, border: `1px solid ${s.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <s.Icon size={18} color={s.color} strokeWidth={2.2} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: "#0f172a" }}>{s.label}</h3>
                </div>
                <div>
                  {s.items.map((item) => (
                    <Tag key={item} label={item} color={s.color} bg={s.bg} border={s.border} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────

function ExperienceCard({ exp, index }) {
  const [open, setOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 600;

  return (
    <Reveal delay={index * 0.1}>
      <div style={{
        background: "#f8fafc", border: "1px solid #e2e8f0",
        borderLeft: `4px solid ${exp.color}`, borderRadius: 18, overflow: "hidden",
        transition: "box-shadow 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 28px ${exp.color}15`)}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%", background: "none", border: "none", padding: "18px 20px",
            cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
          }}
        >
          <div style={{ textAlign: "left", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{
              width: 32, height: 32, borderRadius: 9, background: exp.color, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: 11, flexShrink: 0,
            }}>
              {exp.num}
            </span>
            <div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(13px,3vw,15px)", fontWeight: 700, color: "#0f172a", textAlign: "left" }}>{exp.title}</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2, textAlign: "left", display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap" }}>
                <Calendar size={11} /> {exp.period} · {exp.sector}
              </div>
            </div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: `${exp.color}12`, border: `1px solid ${exp.color}28`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: exp.color, fontSize: 12, flexShrink: 0,
            transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s",
          }}>▾</div>
        </button>

        <div style={{ maxHeight: open ? 700 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
          <div style={{ padding: "0 20px 22px", borderTop: "1px solid #e2e8f0" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit,minmax(200px,1fr))",
              gap: 18, paddingTop: 18,
            }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Key Achievements</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={{ display: "flex", gap: 9, fontSize: 13, color: "#475569", lineHeight: 1.75 }}>
                      <span style={{ marginTop: 3, width: 16, height: 16, borderRadius: "50%", background: exp.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <CheckCircle2 size={11} strokeWidth={3} />
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Impact</div>
                <div style={{ background: `${exp.color}08`, border: `1px solid ${exp.color}18`, borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${exp.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <TrendingUp size={18} color={exp.color} strokeWidth={2.4} />
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(22px,5vw,28px)", fontWeight: 800, color: exp.color }}>{exp.impact.value}</div>
                  <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>{exp.impact.label}</div>
                </div>
                <div>{exp.tags.map(t => <Tag key={t} label={t} color={exp.color} bg={`${exp.color}08`} border={`${exp.color}20`} />)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: "80px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        <Reveal>
          <SectionHeader
            eyebrow="Work Experience"
            title="Where I've Worked"
            sub="Client-focused delivery at VNB Consulting Services across three high-impact engagements."
            Icon={Briefcase}
          />
        </Reveal>

        <Reveal>
          <div style={{ background: "#020617", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 18, padding: "16px 20px", marginBottom: 18, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#2563eb,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
              <Building2 size={22} strokeWidth={2.2} />
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(14px,3vw,16px)", color: "#fff" }}>VNB Consulting Services</div>
              <div style={{ fontSize: 12, color: "#64748b", marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
                <MapPin size={11} /> Software Developer · Bengaluru, Karnataka, India
              </div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, color: "#93c5fd", background: "rgba(37,99,235,0.14)", border: "1px solid rgba(37,99,235,0.3)", flexShrink: 0 }}>
              <Calendar size={11} /> Apr 2025 – Present
            </span>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.num} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────

function BrowserMockup({ project }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 18, background: "#020617" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 10px", background: "#1e293b", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
        </div>
        <div style={{ flex: 1, background: "#0f172a", borderRadius: 4, padding: "3px 8px", fontSize: 10, color: "#334155", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {project.browserUrl}
        </div>
      </div>
      {!imgError ? (
        <img src={project.imageUrl} alt={`${project.title} screenshot`} onError={() => setImgError(true)}
          style={{ width: "100%", height: 180, objectFit: "cover", objectPosition: "top", display: "block" }} />
      ) : (
        <div style={{ height: 180, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, background: `${project.accent}08` }}>
          <Code2 size={28} color={project.accent} strokeWidth={1.5} />
          <div style={{ fontSize: 12, color: "#475569", fontWeight: 600 }}>Preview unavailable</div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <div style={{
        background: "#0f172a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 22, padding: "clamp(20px,4vw,32px)",
        position: "relative", overflow: "hidden",
        height: "100%", boxSizing: "border-box",
        transition: "transform 0.25s, border-color 0.25s",
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = `${project.accent}40`; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
      >
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle,${project.glow1},transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${project.accent},${project.accentVia})`, borderRadius: "22px 22px 0 0" }} />

        <div style={{ position: "relative" }}>
          {/* Badge + links */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 11px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: project.badgeColor, background: project.badgeBg, border: `1px solid ${project.badgeBorder}` }}>
              <Star size={10} fill={project.badgeColor} strokeWidth={0} /> {project.badge}
            </span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 8, fontSize: 11, fontWeight: 700, color: "#94a3b8", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none" }}>
                  <Github size={12} /> GitHub
                </a>
              )}
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  padding: "5px 14px", borderRadius: 8, fontSize: 11, fontWeight: 700,
                  color: "#fff", textDecoration: "none",
                  background: `linear-gradient(135deg,${project.accent},${project.accentVia})`,
                  boxShadow: `0 3px 12px ${project.accent}35`,
                }}>
                <ExternalLink size={12} /> Live
              </a>
            </div>
          </div>

          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", margin: "0 0 5px", fontSize: "clamp(16px,3vw,21px)", fontWeight: 800, color: "#fff", letterSpacing: -0.4 }}>
            {project.title}
          </h3>
          <p style={{ margin: "0 0 16px", fontSize: 12, color: "#475569", lineHeight: 1.6 }}>{project.subtitle}</p>

          <BrowserMockup project={project} />

          <ul style={{ margin: "0 0 16px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {project.points.map(([color, text]) => (
              <li key={text} style={{ display: "flex", gap: 8, fontSize: "clamp(12px,2.5vw,13px)", color: "#64748b", lineHeight: 1.7 }}>
                <span style={{ color, flexShrink: 0, marginTop: 1, fontWeight: 700, fontSize: 14 }}>→</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {project.apis && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
                <Zap size={11} /> APIs Used
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.apis.map(api => (
                  <span key={api} style={{ padding: "3px 9px", borderRadius: 6, fontSize: 11, fontWeight: 700, color: project.tagColor, background: project.tagBg, border: `1px solid ${project.tagBorder}` }}>
                    {api}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#475569", textTransform: "uppercase", letterSpacing: 2, marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
              <Boxes size={11} /> Tech Stack
            </div>
            {project.tags.map(t => <Tag key={t} label={t} color={project.tagColor} bg={project.tagBg} border={project.tagBorder} />)}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  const width = useWindowWidth();
  const cols = width < 640 ? "1fr" : "repeat(auto-fit,minmax(300px,1fr))";

  return (
    <section id="projects" style={{ padding: "80px 20px", background: "#020617" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            title="What I Built"
            sub="Three full-stack projects spanning e-commerce, AI-powered nutrition, and developer talent intelligence."
            light
            Icon={Rocket}
          />
        </Reveal>
        <div style={{ marginBottom: 18 }}>
          <ProjectCard project={PROJECTS[0]} index={0} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 18 }}>
          <ProjectCard project={PROJECTS[1]} index={1} />
          <ProjectCard project={PROJECTS[2]} index={2} />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────────────────────

function Certifications() {
  const width = useWindowWidth();
  const cols = width < 480 ? "1fr" : "repeat(auto-fit,minmax(220px,1fr))";

  return (
    <section id="certifications" style={{ padding: "80px 20px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1020, margin: "0 auto" }}>
        <Reveal>
          <SectionHeader
            eyebrow="Credentials"
            title="Certifications"
            sub="Microsoft certified across the entire Power Platform and Azure ecosystem."
            eyebrowColor="#7c3aed" eyebrowBg="#f5f3ff" eyebrowBorder="#ddd6fe"
            Icon={Award}
          />
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 18 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.code} delay={i * 0.1}>
              <div style={{
                background: "#fff", border: "1px solid #e2e8f0", borderRadius: 22,
                padding: "28px 20px", textAlign: "center", height: "100%", boxSizing: "border-box",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-7px)"; e.currentTarget.style.boxShadow = `0 18px 44px ${cert.shadow}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  width: 60, height: 60, borderRadius: 16, margin: "0 auto 16px",
                  background: cert.gradient, boxShadow: `0 8px 24px ${cert.shadow}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff",
                }}>
                  <Award size={26} strokeWidth={2} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 800, color: cert.color, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
                  {cert.code} · Microsoft Certified
                </div>
                <p style={{ margin: "0 0 20px", fontSize: 13, fontWeight: 700, color: "#0f172a", lineHeight: 1.5 }}>
                  {cert.name}
                </p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 20px", borderRadius: 10,
                  fontWeight: 700, fontSize: 12, color: cert.color,
                  background: `${cert.color}0d`, border: `1.5px solid ${cert.color}30`,
                  textDecoration: "none", transition: "background 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = `${cert.color}20`)}
                  onMouseLeave={e => (e.currentTarget.style.background = `${cert.color}0d`)}
                >
                  View Certificate <ExternalLink size={12} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ marginTop: 20, background: "#020617", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(37,99,235,0.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <GraduationCap size={20} color="#60a5fa" strokeWidth={2.2} />
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#fff" }}>Continuing Education</div>
              <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>Actively pursuing advanced Microsoft certifications and staying current with Power Platform release waves.</div>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 14px", borderRadius: 999, fontSize: 11, fontWeight: 700, color: "#6ee7b7", background: "rgba(5,150,105,0.12)", border: "1px solid rgba(5,150,105,0.25)", flexShrink: 0 }}>
              <BookOpen size={11} /> Always Learning
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────

function Contact() {
  const width = useWindowWidth();
  const isMobile = width < 480;

  const CONTACTS = [
    { Icon: Phone, label: "Phone", sub: "+91 8149250536", href: "tel:8149250536", color: "#34d399", bg: "rgba(5,150,105,0.12)" },
    { Icon: Linkedin, label: "LinkedIn", sub: "View Profile", href: "https://www.linkedin.com/in/shubham-bendkhale/", color: "#60a5fa", bg: "rgba(37,99,235,0.12)" },
    { Icon: Github, label: "GitHub", sub: "View Repos", href: "https://github.com/shubhambendkhale77", color: "#c4b5fd", bg: "rgba(124,58,237,0.12)" },
  ];

  return (
    <section id="contact" style={{ padding: "80px 20px", background: "#020617", position: "relative", overflow: "hidden" }}>
      {/* ambient glow */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Work Together"
            sub="Open to full-time roles and consulting opportunities in the Microsoft ecosystem."
            light
            Icon={Mail}
          />

          <div style={{
            background: "linear-gradient(180deg, #0f172a, #0b1222)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 26,
            padding: "clamp(24px,5vw,40px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            position: "relative",
          }}>
            {/* top accent line */}
            <div style={{
              position: "absolute", top: 0, left: "10%", right: "10%", height: 2,
              background: "linear-gradient(90deg, transparent, #2563eb, #7c3aed, transparent)",
              borderRadius: "0 0 4px 4px",
            }} />


            <p style={{ fontSize: "clamp(13px,2.5vw,14px)", color: "#475569", lineHeight: 1.85, marginBottom: 24 }}>
              Feel free to reach out I'd love to discuss how I can help your team deliver better, faster enterprise solutions on the Microsoft stack.
            </p>

            {/* Email — primary CTA */}
            <a href="mailto:shubhambendkhale7@gmail.com" style={{
              display: "flex", alignItems: "center", gap: 14, padding: "16px 20px",
              borderRadius: 18, marginBottom: 14, textDecoration: "none",
              background: "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(124,58,237,0.18))",
              border: "1px solid rgba(37,99,235,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.015)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: 46, height: 46, borderRadius: 14,
                background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, boxShadow: "0 6px 16px rgba(37,99,235,0.4)",
              }}>
                <Mail size={20} color="#fff" strokeWidth={2.2} />
              </div>
              <div style={{ textAlign: "left", flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600, marginBottom: 2, textTransform: "uppercase", letterSpacing: 1 }}>Email</div>
                <div style={{ fontSize: "clamp(12px,3vw,15px)", fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: isMobile ? "normal" : "nowrap" }}>
                  shubhambendkhale7@gmail.com
                </div>
              </div>
              <ArrowUpRight size={18} color="#64748b" style={{ flexShrink: 0 }} />
            </a>

            {/* Secondary contact grid */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 10 }}>
              {CONTACTS.map(({ Icon, label, sub, href, color, bg }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{
                    display: "flex", flexDirection: isMobile ? "row" : "column", alignItems: "center",
                    gap: isMobile ? 14 : 8, padding: isMobile ? "14px 16px" : "20px 12px",
                    borderRadius: 16, textDecoration: "none",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                    transition: "transform 0.2s, background 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = `${color}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 12, background: bg,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={18} color={color} strokeWidth={2} />
                  </div>
                  <div style={{ textAlign: isMobile ? "left" : "center" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>{label}</div>
                    <div style={{ fontSize: 11, color, fontWeight: 600, marginTop: 1 }}>{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#020617", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px", textAlign: "center" }}>
      <p style={{ fontSize: 12, color: "#334155", margin: 0, fontFamily: "'Space Grotesk',sans-serif", display: "inline-flex", alignItems: "center", gap: 6 }}>
        © {new Date().getFullYear()} Shubham Bendkhale · <MapPin size={11} /> Bengaluru, Karnataka, India
      </p>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  useGoogleFonts();
  useFontAwesome();

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        img { max-width: 100%; }
        @media (max-width: 480px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
      <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh", color: "#0f172a" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}