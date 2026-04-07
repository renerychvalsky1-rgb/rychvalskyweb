"use client";

import { useState, useEffect } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const PORTFOLIO = [
  {
    tag: "Brand Identity",
    title: "Hrom.marketing",
    desc: "Budovanie značky a vizuálnej identity pre marketingovú agentúru od nuly po plnú prevádzku.",
    emoji: "⚡",
  },
  {
    tag: "Social Media",
    title: "Sociálne siete – growth kampane",
    desc: "Organický rast profilov na Instagrame a LinkedIn s mesačným dosahom státisícov ľudí.",
    emoji: "📱",
  },
  {
    tag: "Stratégia",
    title: "Rebrand B2B spoločnosti",
    desc: "Kompletný rebrand pre B2B klienta — nová identita, komunikačná stratégia a positioning.",
    emoji: "🎯",
  },
  {
    tag: "Content",
    title: "Content systém pre e-shop",
    desc: "Vybudovanie contentu a editoriálneho systému, ktorý generuje organickú návštevnosť.",
    emoji: "✍️",
  },
  {
    tag: "Paid Ads",
    title: "Performance kampane",
    desc: "Meta & Google Ads s ROAS nad 5x pre e-commerce klientov v rôznych odvetviach.",
    emoji: "📈",
  },
  {
    tag: "Osobný brand",
    title: "Personal branding projekt",
    desc: "Kompletný osobný brand od definovania hodnôt po konzistentnú prezentáciu online.",
    emoji: "🙋",
  },
];

const SERVICES = [
  {
    icon: "⚡",
    title: "Performance Marketing",
    desc: "Meta Ads, Google Ads a ďalšie platené kampane s dôrazom na merateľné výsledky a návratnosť investície.",
  },
  {
    icon: "🎨",
    title: "Branding & Vizuálna identita",
    desc: "Tvorba značky, logo, manuál, tone of voice — všetko čo robí zo spoločnosti nezabudnuteľnú identitu.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    desc: "Správa sociálnych sietí, content plán, copywriting a komunita. Organický aj platený rast.",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    desc: "Tvorba obsahu, ktorý predáva — blogy, videá, grafiky, newslettre. Stratégia aj exekúcia.",
  },
  {
    icon: "📊",
    title: "Marketing Stratégia",
    desc: "Kompletná marketingová stratégia — analýza trhu, positioning, cieľová skupina a plán rastu.",
  },
  {
    icon: "🤝",
    title: "Konzultácie – Stratégia & Brand",
    desc: "1:1 konzultácie pre firmy aj jednotlivcov. Pomôžem ti nastaviť stratégiu, pozicionovanie a osobný brand.",
  },
];

const NAV_LINKS = ["O mne", "Portfólio", "Služby", "Kontakt"];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section: string) => {
    const map: Record<string, string> = {
      "O mne": "about",
      Portfólio: "portfolio",
      Služby: "services",
      Kontakt: "contact",
    };
    document.getElementById(map[section])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(0,13,13,0.88)" : "transparent",
        transition: "background 0.4s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <span
          style={{
            fontWeight: 900,
            fontSize: "1.05rem",
            letterSpacing: "0.2em",
            color: "#fff",
          }}
        >
          RYCHVALSKY
        </span>

        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.6)",
                cursor: "pointer",
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00b3a6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {link}
            </button>
          ))}
        </div>

        <a
          href="mailto:rene@rychvalsky.sk"
          className="btn-primary"
          style={{ fontSize: "0.8rem", padding: "0.6rem 1.4rem" }}
        >
          Spolupráca
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1.5rem",
        paddingTop: 80,
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: 860 }}>
        <p className="hero-tagline" style={{ marginBottom: "1.5rem" }}>
          Brand · Marketing · Stratégia
        </p>

        <h1 className="hero-name" style={{ marginBottom: "1.5rem" }}>
          René
          <br />
          <span style={{ color: "#00b3a6" }}>Rychvalský</span>
        </h1>

        <div className="teal-line" style={{ marginBottom: "1.5rem" }} />

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 540,
            lineHeight: 1.75,
            marginBottom: "2.5rem",
          }}
        >
          Pomáham firmám a ľuďom budovať silné značky, ktoré predávajú.
          Marketing, ktorý má zmysel — od stratégie po exekúciu.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Moje služby →
          </button>
          <button
            className="btn-outline"
            onClick={() =>
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Portfólio
          </button>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: "5rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(0,179,166,0.15)",
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { n: "7+", label: "Rokov skúseností" },
          { n: "50+", label: "Klientov" },
          { n: "100+", label: "Kampaní" },
        ].map(({ n, label }) => (
          <div key={label}>
            <div className="stat-number">{n}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "7rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Photo placeholder */}
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            aspectRatio: "3/4",
            background:
              "linear-gradient(135deg, #001a1a 0%, #003333 50%, #005c55 100%)",
            borderRadius: 24,
            border: "1px solid rgba(0,179,166,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "6rem",
            color: "rgba(0,179,166,0.25)",
          }}
        >
          👤
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#00b3a6",
              marginBottom: "1rem",
            }}
          >
            O mne
          </p>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
            René <span>Rychvalský</span>
          </h2>
          <div className="teal-line" style={{ marginBottom: "1.5rem" }} />
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            Marketér, stratég a zakladateľ agentúry Hrom.marketing. Špecializujem
            sa na budovanie značiek, performance marketing a osobný branding.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            Verím, že dobrý marketing je kombináciou stratégie, kreativity a dát.
            Pracujem s firmami aj jednotlivcami, ktorí chcú rásť a byť viditeľní.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://hrom.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hrom.marketing ↗
            </a>
            <a
              href="https://www.linkedin.com/in/renerychvalsky/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        padding: "7rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "3.5rem" }}>
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00b3a6",
            marginBottom: "1rem",
          }}
        >
          Portfólio
        </p>
        <h2 className="section-title">
          Vybrané <span>projekty</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PORTFOLIO.map((item) => (
          <div key={item.title} className="portfolio-tile">
            <div
              className="tile-img"
              style={{
                background: "linear-gradient(135deg, #001a1a, #003333, #004d45)",
              }}
            >
              <span style={{ fontSize: "3rem", position: "relative", zIndex: 1 }}>
                {item.emoji}
              </span>
            </div>
            <div className="tile-body">
              <div className="tile-tag">{item.tag}</div>
              <div className="tile-title">{item.title}</div>
              <div className="tile-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "7rem 1.5rem",
        background: "rgba(0,13,13,0.5)",
        borderTop: "1px solid rgba(0,179,166,0.1)",
        borderBottom: "1px solid rgba(0,179,166,0.1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#00b3a6",
              marginBottom: "1rem",
            }}
          >
            Čo robím
          </p>
          <h2 className="section-title">
            Moje <span>služby</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <a href="mailto:rene@rychvalsky.sk" className="btn-primary">
            Dohodnem konzultáciu →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#00b3a6",
              marginBottom: "1rem",
            }}
          >
            Kontakt
          </p>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Porozprávajme <span>sa</span>
          </h2>
          <div className="teal-line" style={{ marginBottom: "1.5rem" }} />
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 380 }}>
            Máš projekt, nápad alebo otázku? Napíš mi — rád sa porozprávam o tom,
            ako môžem pomôcť.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <a href="mailto:rene@rychvalsky.sk" className="contact-link">
            <span className="icon">✉️</span>
            <span>rene@rychvalsky.sk</span>
          </a>
          <a href="tel:+421000000000" className="contact-link">
            <span className="icon">📞</span>
            <span>+421 --- --- ---</span>
          </a>
          <a
            href="https://www.linkedin.com/in/renerychvalsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="icon">💼</span>
            <span>LinkedIn — René Rychvalský</span>
          </a>
          <a
            href="https://www.instagram.com/renerychvalsky"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="icon">📸</span>
            <span>@renerychvalsky</span>
          </a>
          <a
            href="https://hrom.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="icon">⚡</span>
            <span>hrom.marketing</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,179,166,0.1)",
        padding: "2rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        color: "rgba(255,255,255,0.3)",
        fontSize: "0.78rem",
        letterSpacing: "0.04em",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <span
        style={{
          fontWeight: 900,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        RYCHVALSKY
      </span>
      <span>© {new Date().getFullYear()} René Rychvalský · All rights reserved</span>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <a href="https://www.instagram.com/renerychvalsky" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>IG</a>
        <a href="https://www.linkedin.com/in/renerychvalsky/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>LI</a>
        <a href="https://hrom.marketing" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>HM</a>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="gradient-bg">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
