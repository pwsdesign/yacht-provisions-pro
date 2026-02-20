import { useState, useEffect, useRef, useCallback } from "react";
import { LangContext, t, tUnit, tTag, tTier, tCat, tSupCat } from "./i18n";

const COLORS = {
  navy: "#0B1D33",
  deepNavy: "#061425",
  midNavy: "#122B4A",
  accent: "#C9A96E",
  accentLight: "#E2CB97",
  accentDim: "rgba(201,169,110,0.15)",
  sea: "#1A6B7A",
  seaLight: "#2A8D9C",
  white: "#FAFBFC",
  offWhite: "#F0F1F3",
  silver: "#B8BCC4",
  muted: "#6B7280",
  success: "#34D399",
  warning: "#FBBF24",
  danger: "#F87171",
  glass: "rgba(11,29,51,0.65)",
  glassBorder: "rgba(201,169,110,0.2)",
};

/* ================================================================
   PITCH DECK SLIDES
   ================================================================ */

function PitchDeck({ onFinish, lang, setLang }) {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [transitioning, setTransitioning] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => setEntered(true), 100);
  }, []);

  const totalSlides = 4;

  const goNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      if (currentSlide >= totalSlides - 1) {
        onFinish();
      } else {
        setCurrentSlide(prev => prev + 1);
        setTransitioning(false);
      }
    }, 400);
  };

  const goPrev = () => {
    if (transitioning || currentSlide <= -1) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(prev => prev - 1);
      setTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const slideNames = [t("slideTitle", lang), t("slideProblem", lang), t("slideSolution", lang), t("slideMarket", lang), t("slideRevenue", lang)];

  return (
    <div className="pitch-deck" style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: `radial-gradient(ellipse at 15% 10%, rgba(26,107,122,0.14) 0%, transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(201,169,110,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(18,43,74,0.5) 0%, transparent 70%), ${COLORS.navy}`,
      fontFamily: "'DM Sans', sans-serif",
      color: COLORS.white,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Lang toggle top-right */}
      <div style={{ position: "absolute", top: 16, right: 16, zIndex: 20 }}>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
      {/* Ambient */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div className="float-slow" style={{ position: "absolute", top: "8%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)" }} />
        <div className="float-slower" style={{ position: "absolute", bottom: "10%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,107,122,0.05) 0%, transparent 70%)" }} />
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke={COLORS.accent} strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, opacity: 0.015 }}>
          <svg viewBox="0 0 200 200" fill="none" stroke={COLORS.accent} strokeWidth="0.5">
            <circle cx="100" cy="100" r="90" /><circle cx="100" cy="100" r="60" /><circle cx="100" cy="100" r="30" />
            <line x1="100" y1="5" x2="100" y2="195" /><line x1="5" y1="100" x2="195" y2="100" />
            <line x1="30" y1="30" x2="170" y2="170" /><line x1="170" y1="30" x2="30" y2="170" />
          </svg>
        </div>
      </div>

      <div className="pitch-slide-area" style={{
        flex: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? "scale(0.97)" : "scale(1)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        {currentSlide === -1 && <TitleSlide lang={lang} />}
        {currentSlide === 0 && <ProblemSlide lang={lang} />}
        {currentSlide === 1 && <SolutionSlide lang={lang} />}
        {currentSlide === 2 && <MarketSlide lang={lang} />}
        {currentSlide === 3 && <RevenueSlide lang={lang} />}
      </div>

      {/* Bottom nav */}
      <div className="pitch-bottom-nav" style={{ flexShrink: 0, padding: "16px 48px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 10, background: `linear-gradient(to top, ${COLORS.navy} 60%, transparent)` }}>
        <div className="pitch-dots" style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {slideNames.map((name, i) => (
            <button key={i} onClick={() => { if (!transitioning) { setTransitioning(true); setTimeout(() => { setCurrentSlide(i - 1); setTransitioning(false); }, 400); }}}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 20, background: currentSlide === i - 1 ? COLORS.accentDim : "transparent", border: `1px solid ${currentSlide === i - 1 ? COLORS.accent + "44" : "transparent"}`, cursor: "pointer", transition: "all 0.3s" }}>
              <div style={{ width: currentSlide === i - 1 ? 24 : 8, height: 8, borderRadius: 4, background: currentSlide >= i - 1 ? COLORS.accent : COLORS.muted + "44", transition: "all 0.4s ease" }} />
              <span className="pitch-dot-label" style={{ fontSize: 11, color: COLORS.accent, fontWeight: 600, letterSpacing: 0.5, display: currentSlide === i - 1 ? "inline" : "none" }}>{name}</span>
            </button>
          ))}
        </div>
        <div className="pitch-nav-buttons" style={{ display: "flex", gap: 12 }}>
          {currentSlide > -1 && (
            <button onClick={goPrev} className="hover-lift" style={{ padding: "12px 24px", borderRadius: 12, border: `1px solid ${COLORS.glassBorder}`, background: COLORS.glass, color: COLORS.silver, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", backdropFilter: "blur(10px)" }}>{t("back", lang)}</button>
          )}
          <button onClick={goNext} className="hover-lift pitch-next-btn" style={{
            padding: "12px 32px", borderRadius: 12, border: "none",
            background: currentSlide === totalSlides - 1 ? `linear-gradient(135deg, ${COLORS.sea}, ${COLORS.seaLight})` : `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
            color: currentSlide === totalSlides - 1 ? COLORS.white : COLORS.deepNavy,
            fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            boxShadow: `0 4px 20px ${currentSlide === totalSlides - 1 ? "rgba(26,107,122,0.4)" : "rgba(201,169,110,0.3)"}`,
          }}>
            {currentSlide === totalSlides - 1 ? t("launchDemo", lang) : currentSlide === -1 ? t("begin", lang) : t("continue", lang)}
          </button>
        </div>
      </div>

      <div className="pitch-keyboard-hint" style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", fontSize: 11, color: COLORS.muted + "66", display: "flex", gap: 12, alignItems: "center" }}>
        <span style={{ padding: "2px 8px", borderRadius: 4, border: `1px solid ${COLORS.muted}33`, fontSize: 10 }}>←</span>
        <span style={{ padding: "2px 8px", borderRadius: 4, border: `1px solid ${COLORS.muted}33`, fontSize: 10 }}>→</span>
        <span>{t("orClick", lang)}</span>
      </div>
    </div>
  );
}

function TitleSlide({ lang }) {
  return (
    <div className="pitch-slide-content" style={{ textAlign: "center", maxWidth: 800, padding: "0 40px" }}>
      <div className="slide-enter" style={{ width: 80, height: 80, borderRadius: 24, margin: "0 auto 40px", background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, fontWeight: 900, color: COLORS.deepNavy, fontFamily: "'Playfair Display', serif", boxShadow: "0 16px 48px rgba(201,169,110,0.3)", animationDelay: "0.2s" }}>Y</div>
      <div className="slide-enter" style={{ animationDelay: "0.4s" }}>
        <h1 className="pitch-title" style={{ fontSize: 56, fontWeight: 300, letterSpacing: -2, fontFamily: "'Playfair Display', serif", margin: "0 0 8px 0", background: `linear-gradient(135deg, ${COLORS.white}, ${COLORS.silver})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Yacht Provisions Pro</h1>
      </div>
      <div className="slide-enter" style={{ animationDelay: "0.6s" }}>
        <div style={{ width: 60, height: 1, margin: "24px auto", background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
      </div>
      <div className="slide-enter" style={{ animationDelay: "0.8s" }}>
        <p className="pitch-subtitle" style={{ fontSize: 20, fontWeight: 300, color: COLORS.silver, fontFamily: "'Playfair Display', serif", lineHeight: 1.6, maxWidth: 600, margin: "0 auto 32px" }}>{t("titleTagline", lang)}</p>
      </div>
      <div className="slide-enter" style={{ animationDelay: "1s" }}>
        <div className="pitch-stats-bar" style={{ display: "inline-flex", gap: 24, padding: "16px 32px", borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, backdropFilter: "blur(20px)" }}>
          {[{ label: t("titleMarket", lang), value: "$60B" }, { label: t("titleFLOpp", lang), value: "$500M+" }, { label: t("titleSeed", lang), value: "$1.5M" }].map((item, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 12px", borderRight: i < 2 ? `1px solid ${COLORS.glassBorder}` : "none" }}>
              <div style={{ fontSize: 10, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>{item.label}</div>
              <div className="pitch-stat-value" style={{ fontSize: 22, fontWeight: 300, color: COLORS.accent, fontFamily: "'Playfair Display', serif" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="slide-enter" style={{ animationDelay: "1.2s", marginTop: 48 }}>
        <p style={{ fontSize: 13, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", fontStyle: "italic" }}>{t("titleMotto", lang)}</p>
      </div>
    </div>
  );
}

function ProblemSlide({ lang }) {
  const painPoints = [
    { title: t("pain1Title", lang), desc: t("pain1Desc", lang) },
    { title: t("pain2Title", lang), desc: t("pain2Desc", lang) },
    { title: t("pain3Title", lang), desc: t("pain3Desc", lang) },
    { title: t("pain4Title", lang), desc: t("pain4Desc", lang) },
    { title: t("pain5Title", lang), desc: t("pain5Desc", lang) },
    { title: t("pain6Title", lang), desc: t("pain6Desc", lang) },
  ];
  return (
    <div className="pitch-slide-content" style={{ maxWidth: 1000, width: "100%", padding: "0 48px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="slide-enter" style={{ animationDelay: "0.1s" }}>
          <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 8, background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)", color: COLORS.danger, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>{t("theProblem", lang)}</span>
        </div>
        <div className="slide-enter" style={{ animationDelay: "0.2s" }}>
          <h2 className="pitch-h2" style={{ fontSize: 40, fontWeight: 300, fontFamily: "'Playfair Display', serif", letterSpacing: -1, margin: "0 0 12px 0" }}>{t("problemH2a", lang)}<span style={{ color: COLORS.danger, fontStyle: "italic" }}>{t("problemH2b", lang)}</span></h2>
        </div>
        <div className="slide-enter" style={{ animationDelay: "0.3s" }}>
          <p style={{ fontSize: 16, color: COLORS.silver, fontFamily: "'DM Sans', sans-serif", maxWidth: 560, margin: "0 auto" }}>{t("problemSub", lang)}</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
        {painPoints.map((p, i) => (
          <div key={i} className="slide-enter hover-lift" style={{ animationDelay: `${0.4 + i * 0.08}s`, padding: 24, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, backdropFilter: "blur(10px)", transition: "all 0.3s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: COLORS.accentDim, color: COLORS.accent, fontWeight: 700, fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}>{String(i + 1).padStart(2, "0")}</div>
              <h4 style={{ fontSize: 14, fontWeight: 700, color: COLORS.white, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{p.title}</h4>
            </div>
            <p style={{ fontSize: 12, color: COLORS.muted, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionSlide({ lang }) {
  const features = [
    { title: t("feat1Title", lang), desc: t("feat1Desc", lang) },
    { title: t("feat2Title", lang), desc: t("feat2Desc", lang) },
    { title: t("feat3Title", lang), desc: t("feat3Desc", lang) },
    { title: t("feat4Title", lang), desc: t("feat4Desc", lang) },
    { title: t("feat5Title", lang), desc: t("feat5Desc", lang) },
    { title: t("feat6Title", lang), desc: t("feat6Desc", lang) },
  ];
  return (
    <div className="pitch-slide-content" style={{ maxWidth: 1000, width: "100%", padding: "0 48px" }}>
      <div className="solution-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, alignItems: "center" }}>
        <div>
          <div className="slide-enter" style={{ animationDelay: "0.1s" }}>
            <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 8, background: COLORS.accentDim, border: `1px solid ${COLORS.accent}33`, color: COLORS.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>{t("theSolution", lang)}</span>
          </div>
          <div className="slide-enter" style={{ animationDelay: "0.2s" }}>
            <h2 className="pitch-h2" style={{ fontSize: 38, fontWeight: 300, fontFamily: "'Playfair Display', serif", letterSpacing: -1, margin: "0 0 16px 0", lineHeight: 1.2 }}>{t("solutionH2a", lang)}<span style={{ color: COLORS.accent, fontStyle: "italic" }}>{t("solutionH2b", lang)}</span></h2>
          </div>
          <div className="slide-enter" style={{ animationDelay: "0.3s" }}>
            <p style={{ fontSize: 15, color: COLORS.silver, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, margin: "0 0 28px 0" }}>{t("solutionDesc", lang)}</p>
          </div>
          <div className="slide-enter" style={{ animationDelay: "0.4s" }}>
            <div style={{ display: "flex", gap: 16, padding: "16px 20px", borderRadius: 14, background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.15)" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: COLORS.success, fontSize: 12 }}>ROI</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.success, fontFamily: "'DM Sans', sans-serif" }}>{t("roiTitle", lang)}</div>
                <div style={{ fontSize: 12, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{t("roiSub", lang)}</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
          {features.map((f, i) => (
            <div key={i} className="slide-enter" style={{ animationDelay: `${0.3 + i * 0.08}s`, padding: 18, borderRadius: 14, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}` }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, marginBottom: 10, background: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: COLORS.accent, fontWeight: 800 }}>{f.title.slice(0, 1)}</div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: COLORS.white, fontFamily: "'DM Sans', sans-serif", margin: "0 0 4px 0" }}>{f.title}</h4>
              <p style={{ fontSize: 11, color: COLORS.muted, lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketSlide({ lang }) {
  return (
    <div className="pitch-slide-content" style={{ maxWidth: 1000, width: "100%", padding: "0 48px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="slide-enter" style={{ animationDelay: "0.1s" }}>
          <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 8, background: "rgba(26,107,122,0.15)", border: "1px solid rgba(42,141,156,0.25)", color: COLORS.seaLight, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>{t("theMarket", lang)}</span>
        </div>
        <div className="slide-enter" style={{ animationDelay: "0.2s" }}>
          <h2 className="pitch-h2" style={{ fontSize: 40, fontWeight: 300, fontFamily: "'Playfair Display', serif", letterSpacing: -1, margin: "0 0 12px 0" }}>{t("marketH2a", lang)}<span style={{ color: COLORS.accent, fontStyle: "italic" }}>{t("marketH2b", lang)}</span>{t("marketH2c", lang)}</h2>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 36 }}>
        {[
          { label: t("tamLabel", lang), value: "$60B", desc: t("tamDesc", lang), color: COLORS.accent, bg: `rgba(201,169,110,0.08)`, border: `${COLORS.accent}22` },
          { label: t("samLabel", lang), value: "$500M+", desc: t("samDesc", lang), color: COLORS.seaLight, bg: "rgba(26,107,122,0.1)", border: `${COLORS.sea}33` },
          { label: t("somLabel", lang), value: "$10–15M", desc: t("somDesc", lang), color: COLORS.success, bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)" },
        ].map((item, i) => (
          <div key={i} className="slide-enter" style={{ animationDelay: `${0.3 + i * 0.15}s` }}>
            <div style={{ padding: 28, borderRadius: 18, textAlign: "center", background: `linear-gradient(160deg, ${item.bg} 0%, transparent 100%)`, border: `1px solid ${item.border}`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: `radial-gradient(circle, ${item.color}08, transparent)` }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 2, fontFamily: "'DM Sans', sans-serif", marginBottom: 12 }}>{item.label}</div>
              <div className="market-big-value" style={{ fontSize: 48, fontWeight: 300, color: item.color, fontFamily: "'Playfair Display', serif", letterSpacing: -2 }}>{item.value}</div>
              <div style={{ fontSize: 12, color: COLORS.silver, fontFamily: "'DM Sans', sans-serif", marginTop: 8, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-enter" style={{ animationDelay: "0.75s" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, padding: 20, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}` }}>
          {[
            { val: "#1", label: t("mktStat1", lang) },
            { val: "100K+", label: t("mktStat2", lang) },
            { val: "0", label: t("mktStat3", lang) },
            { val: "18–24mo", label: t("mktStat4", lang) },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center", padding: "4px 8px" }}>
              <div style={{ fontSize: 22, fontWeight: 300, color: COLORS.accent, fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>{item.val}</div>
              <div style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RevenueSlide({ lang }) {
  const streams = [
    { name: t("rev1Name", lang), rate: "15–22%", example: t("rev1Ex", lang), desc: t("rev1Desc", lang), color: COLORS.accent },
    { name: t("rev2Name", lang), rate: "$75–$200", example: t("rev2Ex", lang), desc: t("rev2Desc", lang), color: COLORS.seaLight },
    { name: t("rev3Name", lang), rate: "$300–$800/mo", example: t("rev3Ex", lang), desc: t("rev3Desc", lang), color: COLORS.success },
    { name: t("rev4Name", lang), rate: "$200–$500/mo", example: t("rev4Ex", lang), desc: t("rev4Desc", lang), color: COLORS.warning },
    { name: t("rev5Name", lang), rate: "$500–$1,500", example: t("rev5Ex", lang), desc: t("rev5Desc", lang), color: "#C084FC" },
    { name: t("rev6Name", lang), rate: "Wholesale", example: t("rev6Ex", lang), desc: t("rev6Desc", lang), color: "#60A5FA" },
  ];
  return (
    <div className="pitch-slide-content" style={{ maxWidth: 1060, width: "100%", padding: "0 48px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div className="slide-enter" style={{ animationDelay: "0.1s" }}>
          <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: 8, background: COLORS.accentDim, border: `1px solid ${COLORS.accent}33`, color: COLORS.accent, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>{t("revenueEngine", lang)}</span>
        </div>
        <div className="slide-enter" style={{ animationDelay: "0.2s" }}>
          <h2 className="pitch-h2" style={{ fontSize: 40, fontWeight: 300, fontFamily: "'Playfair Display', serif", letterSpacing: -1, margin: "0 0 8px 0" }}>{t("revenueH2a", lang)}<span style={{ color: COLORS.accent, fontStyle: "italic" }}>{t("revenueH2b", lang)}</span></h2>
        </div>
        <div className="slide-enter" style={{ animationDelay: "0.3s" }}>
          <p style={{ fontSize: 14, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif" }}>{t("revenueSub", lang)}</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        {streams.map((s, i) => (
          <div key={i} className="slide-enter hover-lift" style={{ animationDelay: `${0.35 + i * 0.07}s`, padding: 20, borderRadius: 16, background: COLORS.glass, border: `1px solid ${s.color}22`, position: "relative", overflow: "hidden", transition: "all 0.3s" }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle, ${s.color}08, transparent)` }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: s.color }}>{`R${i + 1}`}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.white, fontFamily: "'DM Sans', sans-serif" }}>{s.name}</div>
            </div>
            <div style={{ fontSize: 24, fontWeight: 300, color: s.color, fontFamily: "'Playfair Display', serif", marginBottom: 2 }}>{s.rate}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: COLORS.silver, fontFamily: "'DM Sans', sans-serif", marginBottom: 8 }}>{s.example}</div>
            <div style={{ fontSize: 11, color: COLORS.muted, lineHeight: 1.5, fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="slide-enter" style={{ animationDelay: "0.85s", marginTop: 20 }}>
        <div className="revenue-summary-bar" style={{ display: "flex", justifyContent: "center", gap: 36, padding: "16px 28px", borderRadius: 14, background: `linear-gradient(135deg, ${COLORS.accent}08, ${COLORS.sea}08)`, border: `1px solid ${COLORS.glassBorder}`, flexWrap: "wrap" }}>
          {[
            { label: t("revAvgOrder", lang), value: "$5K–$15K" },
            { label: t("revPerOrder", lang), value: "$1,050–$2,850" },
            { label: t("revCaptains", lang), value: "$2–5M GMV" },
            { label: t("revSeedRound", lang), value: "$750K–$1.5M" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="revenue-stat-value" style={{ fontSize: 18, fontWeight: 300, color: COLORS.accent, fontFamily: "'Playfair Display', serif" }}>{item.value}</div>
              <div style={{ fontSize: 10, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", marginTop: 2, textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ================================================================
   APP COMPONENTS
   ================================================================ */

const CATEGORIES = [
  { id: "proteins", label: "Proteins", count: 24 },
  { id: "seafood", label: "Seafood", count: 31 },
  { id: "produce", label: "Produce", count: 42 },
  { id: "dairy", label: "Dairy & Eggs", count: 18 },
  { id: "bakery", label: "Bakery", count: 15 },
  { id: "beverages", label: "Beverages", count: 36 },
  { id: "spirits", label: "Spirits & Wine", count: 28 },
  { id: "dry", label: "Dry Goods", count: 22 },
  { id: "cleaning", label: "Cleaning", count: 14 },
  { id: "specialty", label: "Specialty", count: 19 },
];

const PRODUCTS = {
  seafood: [
    { id: 1, name: "Maine Lobster Tails", unit: "per lb", price: 42.00, supplier: "Ocean Prime Seafood", rating: 4.9, tag: "Premium" },
    { id: 2, name: "Alaskan King Crab Legs", unit: "per lb", price: 68.00, supplier: "Ocean Prime Seafood", rating: 4.8, tag: "Seasonal" },
    { id: 3, name: "Sashimi-Grade Ahi Tuna", unit: "per lb", price: 38.50, supplier: "Blue Marlin Direct", rating: 5.0, tag: "Chef's Pick" },
    { id: 4, name: "Jumbo Gulf Shrimp (U-10)", unit: "per lb", price: 24.00, supplier: "Gulf Coast Provisions", rating: 4.7 },
    { id: 5, name: "Fresh Oysters — Wellfleet", unit: "per dozen", price: 36.00, supplier: "Shell & Tide Co.", rating: 4.9, tag: "Live" },
    { id: 6, name: "Branzino — Whole, Cleaned", unit: "per fish", price: 28.00, supplier: "Mediterranean Catch", rating: 4.6 },
  ],
  beverages: [
    { id: 7, name: "Dom Pérignon 2013", unit: "per bottle", price: 285.00, supplier: "Prestige Wine & Spirits", rating: 5.0, tag: "Premium" },
    { id: 8, name: "Whispering Angel Rosé", unit: "per case (6)", price: 168.00, supplier: "Prestige Wine & Spirits", rating: 4.8 },
    { id: 9, name: "San Pellegrino Sparkling", unit: "per case (24)", price: 38.00, supplier: "Euro Beverage Dist.", rating: 4.7 },
    { id: 10, name: "Cold-Pressed Juice Assortment", unit: "per set (12)", price: 72.00, supplier: "Sunrise Juicery", rating: 4.9, tag: "Organic" },
  ],
  proteins: [
    { id: 11, name: "Japanese A5 Wagyu Strip", unit: "per lb", price: 185.00, supplier: "Kobe & Co.", rating: 5.0, tag: "Ultra Premium" },
    { id: 12, name: "Berkshire Pork Chops", unit: "per lb", price: 22.00, supplier: "Heritage Meats FL", rating: 4.8 },
    { id: 13, name: "Free-Range Chicken Breast", unit: "per lb", price: 12.50, supplier: "Heritage Meats FL", rating: 4.6 },
  ],
};

const FLEET = [
  { name: "M/Y Serenity", length: "82ft", type: "Sunseeker", status: "Departing", departure: "Tomorrow 6:00 AM", captain: "Capt. James Reed", orderStatus: "In Progress", orderTotal: 14280, progress: 72, location: "Fort Lauderdale" },
  { name: "M/Y Azure Dream", length: "110ft", type: "Azimut", status: "Provisioned", departure: "Feb 21, 8:00 AM", captain: "Capt. Elena Vasquez", orderStatus: "Complete", orderTotal: 28450, progress: 100, location: "Miami Beach Marina" },
  { name: "S/Y Wind Dancer", length: "65ft", type: "Oyster", status: "Pending", departure: "Feb 22, 10:00 AM", captain: "Capt. Tom Bridges", orderStatus: "Awaiting Approval", orderTotal: 8920, progress: 35, location: "Palm Beach" },
  { name: "M/Y Poseidon's Crown", length: "140ft", type: "Lürssen", status: "Docked", departure: "Feb 25, 12:00 PM", captain: "Capt. Marcus Hall", orderStatus: "Not Started", orderTotal: 0, progress: 0, location: "Bahia Mar" },
];

const ORDERS_RECENT = [
  { id: "YPP-2847", vessel: "M/Y Serenity", date: "Feb 18", total: 14280, items: 47, status: "delivering" },
  { id: "YPP-2846", vessel: "M/Y Azure Dream", date: "Feb 17", total: 28450, items: 83, status: "complete" },
  { id: "YPP-2845", vessel: "S/Y Wind Dancer", date: "Feb 16", total: 8920, items: 31, status: "pending" },
  { id: "YPP-2844", vessel: "M/Y Bella Vita", date: "Feb 15", total: 11340, items: 56, status: "complete" },
  { id: "YPP-2843", vessel: "M/Y Oceanus", date: "Feb 14", total: 19870, items: 64, status: "complete" },
];

function AnimatedNumber({ value, prefix = "" }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplay(Math.floor((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [value]);
  return <>{prefix}{display.toLocaleString()}</>;
}

function StatusBadge({ status, lang = "en" }) {
  const config = {
    delivering: { bg: "rgba(52,211,153,0.15)", color: COLORS.success, label: t("statusDelivering", lang), dot: true },
    complete: { bg: "rgba(201,169,110,0.15)", color: COLORS.accent, label: t("statusComplete", lang) },
    pending: { bg: "rgba(251,191,36,0.15)", color: COLORS.warning, label: t("statusPending", lang) },
    "In Progress": { bg: "rgba(52,211,153,0.15)", color: COLORS.success, label: t("statusInProgress", lang), dot: true },
    Complete: { bg: "rgba(201,169,110,0.15)", color: COLORS.accent, label: t("statusComplete", lang) },
    "Awaiting Approval": { bg: "rgba(251,191,36,0.15)", color: COLORS.warning, label: t("statusAwaiting", lang) },
    "Not Started": { bg: "rgba(107,114,128,0.15)", color: COLORS.silver, label: t("statusNotStarted", lang) },
  };
  const c = config[status] || config.pending;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, background: c.bg, color: c.color, fontSize: 12, fontWeight: 600, letterSpacing: 0.3 }}>
      {c.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.color, animation: "pulse 2s infinite" }} />}
      {c.label}
    </span>
  );
}

function SideNav({ active, setActive, lang }) {
  const items = [
    { id: "dashboard", icon: "⬡", label: t("navBridge", lang) },
    { id: "provision", icon: "◈", label: t("navProvision", lang) },
    { id: "fleet", icon: "⎔", label: t("navFleet", lang) },
    { id: "orders", icon: "☰", label: t("navOrders", lang) },
    { id: "suppliers", icon: "◎", label: t("navSuppliers", lang) },
  ];
  return (
    <>
      {/* Desktop sidebar */}
      <nav className="side-nav-desktop" style={{ width: 72, minHeight: "100vh", background: COLORS.deepNavy, borderRight: `1px solid ${COLORS.glassBorder}`, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20, gap: 4, position: "fixed", left: 0, top: 0, zIndex: 100 }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: COLORS.deepNavy, marginBottom: 28, fontFamily: "'Playfair Display', serif" }}>Y</div>
        {items.map((item) => (
          <button key={item.id} onClick={() => setActive(item.id)} style={{ width: 52, height: 52, borderRadius: 14, border: "none", background: active === item.id ? COLORS.accentDim : "transparent", color: active === item.id ? COLORS.accent : COLORS.silver, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.25s ease", gap: 2, position: "relative" }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 0.5, fontFamily: "'DM Sans', sans-serif" }}>{item.label}</span>
            {active === item.id && <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 3, height: 24, borderRadius: "0 4px 4px 0", background: COLORS.accent }} />}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: COLORS.midNavy, border: `2px solid ${COLORS.accent}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: COLORS.accent, fontWeight: 700, marginBottom: 20, fontFamily: "'DM Sans', sans-serif" }}>JR</div>
      </nav>
      {/* Mobile bottom tab bar */}
      <nav className="bottom-nav-mobile" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: COLORS.deepNavy, borderTop: `1px solid ${COLORS.glassBorder}`, display: "none", justifyContent: "space-around", alignItems: "center", padding: "6px 0 env(safe-area-inset-bottom, 8px) 0" }}>
        {items.map((item) => (
          <button key={item.id} onClick={() => setActive(item.id)} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, padding: "8px 0", border: "none", background: "transparent", color: active === item.id ? COLORS.accent : COLORS.silver, cursor: "pointer", position: "relative" }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: 0.3, fontFamily: "'DM Sans', sans-serif" }}>{item.label}</span>
            {active === item.id && <span style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 24, height: 3, borderRadius: "0 0 4px 4px", background: COLORS.accent }} />}
          </button>
        ))}
      </nav>
    </>
  );
}

function Header({ title, subtitle, lang, setLang }) {
  return (
    <header className="app-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, gap: 16, flexWrap: "wrap" }}>
      <div style={{ minWidth: 0 }}>
        <h1 className="header-title" style={{ fontSize: 28, fontWeight: 300, color: COLORS.white, fontFamily: "'Playfair Display', serif", letterSpacing: -0.5, margin: 0 }}>{title}</h1>
        <p className="header-subtitle" style={{ fontSize: 13, color: COLORS.muted, marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>{subtitle}</p>
      </div>
      <div className="header-actions" style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
          <input className="header-search" placeholder={t("searchPlaceholder", lang)} style={{ width: "100%", maxWidth: 260, padding: "10px 16px 10px 38px", borderRadius: 12, border: `1px solid ${COLORS.glassBorder}`, background: COLORS.glass, color: COLORS.white, fontSize: 13, fontFamily: "'DM Sans', sans-serif", outline: "none" }} />
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: COLORS.muted }}>⌕</span>
        </div>
        {setLang && <LangToggle lang={lang} setLang={setLang} />}
        <button style={{ width: 40, height: 40, minWidth: 40, borderRadius: 12, border: `1px solid ${COLORS.glassBorder}`, background: COLORS.glass, color: COLORS.silver, fontSize: 16, cursor: "pointer", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>⚑<span style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: "50%", background: COLORS.danger }} /></button>
      </div>
    </header>
  );
}

function Dashboard({ setActive, lang, setLang }) {
  const stats = [
    { label: t("activeOrders", lang), value: 12, change: t("plus3Today", lang), icon: "◈" },
    { label: t("monthlyGMV", lang), value: 284500, prefix: "$", change: t("plus18vsJan", lang), icon: "◆" },
    { label: t("fleetAccounts", lang), value: 8, change: t("plus2Month", lang), icon: "⎔" },
    { label: t("suppliersOnline", lang), value: 47, change: t("fillRate98", lang), icon: "◎" },
  ];
  return (
    <div className="fade-in">
      <Header title={t("bridgeOverview", lang)} subtitle={t("dashSubtitle", lang)} lang={lang} setLang={setLang} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 28 }}>
        {stats.map((s, i) => (
          <div key={i} className="card hover-lift" style={{ padding: 24, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, animationDelay: `${i * 0.08}s` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.2, fontFamily: "'DM Sans', sans-serif" }}>{s.label}</span>
              <span style={{ fontSize: 18, color: COLORS.accent, opacity: 0.6 }}>{s.icon}</span>
            </div>
            <div style={{ fontSize: 32, fontWeight: 300, color: COLORS.white, fontFamily: "'Playfair Display', serif", letterSpacing: -1 }}><AnimatedNumber value={s.value} prefix={s.prefix || ""} /></div>
            <div style={{ fontSize: 12, color: COLORS.seaLight, marginTop: 6, fontFamily: "'DM Sans', sans-serif" }}>{s.change}</div>
          </div>
        ))}
      </div>
      <div className="dashboard-grid">
        <div className="card" style={{ padding: 24, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 400, color: COLORS.white, fontFamily: "'Playfair Display', serif", margin: 0 }}>{t("recentOrders", lang)}</h3>
            <button onClick={() => setActive("orders")} style={{ fontSize: 12, color: COLORS.accent, background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{t("viewAll", lang)}</button>
          </div>
          {ORDERS_RECENT.map((o) => (
            <div key={o.id} className="hover-row dashboard-order-row" style={{ display: "grid", gridTemplateColumns: "90px 1fr 80px 100px 100px", alignItems: "center", padding: "14px 12px", borderRadius: 10, gap: 12 }}>
              <span className="order-id" style={{ fontSize: 12, fontWeight: 600, color: COLORS.accent, fontFamily: "'DM Mono', monospace" }}>{o.id}</span>
              <span className="order-vessel" style={{ fontSize: 13, color: COLORS.white, fontFamily: "'DM Sans', sans-serif" }}>{o.vessel}</span>
              <span className="order-items" style={{ fontSize: 12, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif" }}>{o.items} {t("items", lang)}</span>
              <span className="order-total" style={{ fontSize: 13, fontWeight: 600, color: COLORS.white, fontFamily: "'DM Sans', sans-serif", textAlign: "right" }}>${o.total.toLocaleString()}</span>
              <div className="order-status" style={{ display: "flex", justifyContent: "flex-end" }}><StatusBadge status={o.status} lang={lang} /></div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="card" style={{ padding: 24, borderRadius: 16, background: `linear-gradient(135deg, ${COLORS.accent}18, ${COLORS.sea}18)`, border: `1px solid ${COLORS.glassBorder}` }}>
            <h3 style={{ fontSize: 16, fontWeight: 400, color: COLORS.white, fontFamily: "'Playfair Display', serif", margin: "0 0 16px 0" }}>{t("quickActions", lang)}</h3>
            {[{ label: t("newProvisionOrder", lang), icon: "＋", action: () => setActive("provision") }, { label: t("reorderTemplate", lang), icon: "↻" }, { label: t("genManifest", lang), icon: "☷" }].map((a, i) => (
              <button key={i} onClick={a.action} className="hover-lift" style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, color: COLORS.white, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, textAlign: "left", width: "100%", marginBottom: 10 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent, fontSize: 16 }}>{a.icon}</span>{a.label}
              </button>
            ))}
          </div>
          <div className="card" style={{ padding: 24, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, flex: 1 }}>
            <h3 style={{ fontSize: 16, fontWeight: 400, color: COLORS.white, fontFamily: "'Playfair Display', serif", margin: "0 0 16px 0" }}>{t("upcomingDepartures", lang)}</h3>
            {FLEET.filter(f => f.departure).slice(0, 3).map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: COLORS.accent }}>VSL</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.white, fontFamily: "'DM Sans', sans-serif" }}>{f.name}</div>
                  <div style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif" }}>{f.departure}</div>
                </div>
                <StatusBadge status={f.orderStatus} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProvisionBuilder({ lang, setLang }) {
  const [selectedCat, setSelectedCat] = useState("seafood");
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const products = PRODUCTS[selectedCat] || [];
  const cartItems = Object.entries(cart);
  const cartTotal = cartItems.reduce((sum, [, { price, qty }]) => sum + price * qty, 0);
  const cartCount = cartItems.reduce((sum, [, { qty }]) => sum + qty, 0);
  const addToCart = (p) => setCart(prev => ({ ...prev, [p.id]: { ...p, qty: (prev[p.id]?.qty || 0) + 1 } }));
  const updateQty = (id, d) => setCart(prev => { const item = prev[id]; if (!item) return prev; const n = item.qty + d; if (n <= 0) { const { [id]: _, ...r } = prev; return r; } return { ...prev, [id]: { ...item, qty: n } }; });

  return (
    <div className="fade-in">
      <Header title={t("smartProvBuilder", lang)} subtitle={t("provBuilderSub", lang)} lang={lang} setLang={setLang} />
      <div className="provision-grid">
        <div className="card provision-categories" style={{ padding: 16, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, alignSelf: "start", position: "sticky", top: 20 }}>
          <div className="categories-label" style={{ fontSize: 10, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.5, padding: "8px 12px", fontFamily: "'DM Sans', sans-serif" }}>{t("categories", lang)}</div>
          {CATEGORIES.map((cat) => {
            const abbrev = cat.label.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
            return (
              <button key={cat.id} onClick={() => setSelectedCat(cat.id)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, border: "none", background: selectedCat === cat.id ? COLORS.accentDim : "transparent", color: selectedCat === cat.id ? COLORS.accent : COLORS.silver, cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: selectedCat === cat.id ? 600 : 400 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: COLORS.accentDim, color: COLORS.accent, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11 }}>{abbrev}</span><span style={{ flex: 1 }}>{tCat(cat.id, lang)}</span><span style={{ fontSize: 11, color: COLORS.muted }}>{cat.count}</span>
              </button>
            );
          })}
        </div>
        <div>
          <div className="card" style={{ display: "flex", alignItems: "center", gap: 20, padding: "16px 20px", borderRadius: 14, background: `linear-gradient(135deg, ${COLORS.accent}10, ${COLORS.sea}10)`, border: `1px solid ${COLORS.glassBorder}`, marginBottom: 20, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{t("vessel", lang)}</span>
              <span style={{ padding: "6px 14px", borderRadius: 8, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, color: COLORS.white, fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>M/Y Serenity — 82ft Sunseeker</span>
            </div>
            <div style={{ width: 1, height: 24, background: COLORS.glassBorder }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{t("departure", lang)}</span>
              <span style={{ padding: "6px 14px", borderRadius: 8, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, color: COLORS.accent, fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{t("tomorrowTime", lang)}</span>
            </div>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 11, color: COLORS.success, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{t("deliveryConfirmed", lang)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10, background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", marginBottom: 20 }}>
            <span style={{ fontSize: 16, fontWeight: 800, color: COLORS.warning }}>!</span>
            <span style={{ fontSize: 12, color: COLORS.warning, fontFamily: "'DM Sans', sans-serif" }}><strong>{t("guestAlert", lang)}</strong> {t("guestAlertDetail", lang)}</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {products.map((p, i) => {
              const inCart = cart[p.id];
              return (
                <div key={p.id} className="card hover-lift" style={{ padding: 20, borderRadius: 14, background: COLORS.glass, border: `1px solid ${inCart ? COLORS.accent + "44" : COLORS.glassBorder}`, animationDelay: `${i * 0.05}s` }}>
                  {p.tag && <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 6, background: p.tag.includes("Premium") ? COLORS.accentDim : p.tag === "Chef's Pick" ? "rgba(26,107,122,0.2)" : "rgba(107,114,128,0.15)", color: p.tag.includes("Premium") ? COLORS.accent : p.tag === "Chef's Pick" ? COLORS.seaLight : COLORS.silver, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, marginBottom: 10, fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase" }}>{tTag(p.tag, lang)}</span>}
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: COLORS.white, fontFamily: "'DM Sans', sans-serif", margin: "0 0 6px 0" }}>{p.name}</h4>
                  <div style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>{p.supplier} · {"★".repeat(Math.floor(p.rating))} {p.rating}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 300, color: COLORS.white, fontFamily: "'Playfair Display', serif" }}>${p.price.toFixed(2)}</div>
                      <div style={{ fontSize: 11, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif" }}>{tUnit(p.unit, lang)}</div>
                    </div>
                    {inCart ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button onClick={() => updateQty(p.id, -1)} style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${COLORS.glassBorder}`, background: COLORS.glass, color: COLORS.white, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                        <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.accent, minWidth: 20, textAlign: "center" }}>{inCart.qty}</span>
                        <button onClick={() => updateQty(p.id, 1)} style={{ width: 28, height: 28, borderRadius: 8, border: `1px solid ${COLORS.accent}44`, background: COLORS.accentDim, color: COLORS.accent, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                      </div>
                    ) : (
                      <button onClick={() => addToCart(p)} className="hover-lift" style={{ padding: "8px 16px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`, color: COLORS.deepNavy, fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{t("addBtn", lang)}</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {cartCount > 0 && (
            <div onClick={() => setShowCart(!showCart)} className="hover-lift cart-fab" style={{ position: "fixed", bottom: 28, right: 28, display: "flex", alignItems: "center", gap: 16, padding: "16px 24px", borderRadius: 18, background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`, color: COLORS.deepNavy, cursor: "pointer", boxShadow: "0 8px 32px rgba(201,169,110,0.4)", zIndex: 200 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>{cartCount}</div>
              <div><div className="cart-fab-text" style={{ fontSize: 14, fontWeight: 700 }}>{t("viewCart", lang)}</div><div style={{ fontSize: 12, opacity: 0.8 }}>${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div></div>
              <span style={{ fontSize: 18, marginLeft: 4 }}>→</span>
            </div>
          )}
          {showCart && cartCount > 0 && (
            <div className="cart-panel" style={{ position: "fixed", top: 0, right: 0, width: 420, height: "100vh", background: COLORS.deepNavy, borderLeft: `1px solid ${COLORS.glassBorder}`, zIndex: 300, padding: 28, overflowY: "auto", animation: "slideInRight 0.3s ease" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 400, color: COLORS.white, fontFamily: "'Playfair Display', serif", margin: 0 }}>{t("provisionCart", lang)}</h3>
                <button onClick={() => setShowCart(false)} style={{ background: "none", border: "none", color: COLORS.silver, cursor: "pointer", fontSize: 20 }}>✕</button>
              </div>
              {cartItems.map(([id, item]) => (
                <div key={id} style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, borderRadius: 12, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, marginBottom: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.white }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: COLORS.muted }}>${item.price.toFixed(2)} × {item.qty}</div>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.accent }}>${(item.price * item.qty).toFixed(2)}</div>
                  <div style={{ display: "flex", gap: 4 }}>
                    <button onClick={() => updateQty(Number(id), -1)} style={{ width: 24, height: 24, borderRadius: 6, border: `1px solid ${COLORS.glassBorder}`, background: "transparent", color: COLORS.silver, cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                    <button onClick={() => updateQty(Number(id), 1)} style={{ width: 24, height: 24, borderRadius: 6, border: `1px solid ${COLORS.glassBorder}`, background: "transparent", color: COLORS.silver, cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24, padding: "20px 0", borderTop: `1px solid ${COLORS.glassBorder}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontSize: 13, color: COLORS.muted }}>{t("subtotal", lang)}</span><span style={{ fontSize: 13, color: COLORS.white }}>${cartTotal.toFixed(2)}</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontSize: 13, color: COLORS.muted }}>{t("coordFee", lang)}</span><span style={{ fontSize: 13, color: COLORS.white }}>$150.00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}><span style={{ fontSize: 15, fontWeight: 700, color: COLORS.white }}>{t("total", lang)}</span><span style={{ fontSize: 15, fontWeight: 700, color: COLORS.accent }}>${(cartTotal + 150).toFixed(2)}</span></div>
                <button className="hover-lift" style={{ width: "100%", padding: "14px 0", borderRadius: 14, border: "none", background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`, color: COLORS.deepNavy, fontSize: 14, fontWeight: 800, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{t("scheduleDelivery", lang)}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FleetView({ lang, setLang }) {
  return (
    <div className="fade-in">
      <Header title={t("fleetDashboard", lang)} subtitle={t("fleetSub", lang)} lang={lang} setLang={setLang} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
        {FLEET.map((v, i) => (
          <div key={i} className="card hover-lift" style={{ padding: 24, borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, animationDelay: `${i * 0.08}s` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 400, color: COLORS.white, fontFamily: "'Playfair Display', serif", margin: 0 }}>{v.name}</h3>
                <div style={{ fontSize: 12, color: COLORS.muted, fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{v.length} {v.type} · {v.location}</div>
              </div>
              <StatusBadge status={v.orderStatus} lang={lang} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div style={{ padding: 12, borderRadius: 10, background: COLORS.deepNavy }}><div style={{ fontSize: 10, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>{t("captain", lang)}</div><div style={{ fontSize: 13, color: COLORS.white, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{v.captain}</div></div>
              <div style={{ padding: 12, borderRadius: 10, background: COLORS.deepNavy }}><div style={{ fontSize: 10, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>{t("departure", lang)}</div><div style={{ fontSize: 13, color: COLORS.accent, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>{v.departure}</div></div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}><span style={{ fontSize: 11, color: COLORS.muted }}>{t("provisionProgress", lang)}</span><span style={{ fontSize: 11, color: COLORS.accent, fontWeight: 700 }}>{v.progress}%</span></div>
              <div style={{ height: 6, borderRadius: 3, background: COLORS.deepNavy, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 3, background: v.progress === 100 ? COLORS.accent : `linear-gradient(90deg, ${COLORS.sea}, ${COLORS.seaLight})`, width: `${v.progress}%`, transition: "width 1s ease" }} /></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 20, fontWeight: 300, color: COLORS.white, fontFamily: "'Playfair Display', serif" }}>{v.orderTotal > 0 ? `$${v.orderTotal.toLocaleString()}` : "—"}</span>
              <button style={{ padding: "8px 16px", borderRadius: 10, border: `1px solid ${COLORS.glassBorder}`, background: "transparent", color: COLORS.accent, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{v.progress === 0 ? t("startOrder", lang) : t("viewDetails", lang)} →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrdersView({ lang, setLang }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? ORDERS_RECENT : ORDERS_RECENT.filter(o => o.status === filter);
  return (
    <div className="fade-in">
      <Header title={t("orderManagement", lang)} subtitle={t("ordersSub", lang)} lang={lang} setLang={setLang} />
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {[{ key: "all", label: t("filterAll", lang) }, { key: "delivering", label: t("filterDelivering", lang) }, { key: "pending", label: t("filterPending", lang) }, { key: "complete", label: t("filterComplete", lang) }].map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)} style={{ padding: "8px 18px", borderRadius: 10, border: `1px solid ${filter === f.key ? COLORS.accent : COLORS.glassBorder}`, background: filter === f.key ? COLORS.accentDim : "transparent", color: filter === f.key ? COLORS.accent : COLORS.silver, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>{f.label}</button>
        ))}
      </div>
      <div className="card orders-table-desktop" style={{ borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, overflow: "hidden", overflowX: "auto" }}>
        <div className="table-header-row" style={{ display: "grid", gridTemplateColumns: "100px 1fr 100px 80px 120px 120px", padding: "14px 24px", borderBottom: `1px solid ${COLORS.glassBorder}` }}>
          {[t("thOrderId", lang), t("thVessel", lang), t("thDate", lang), t("thItems", lang), t("thTotal", lang), t("thStatus", lang)].map(h => (
            <span key={h} style={{ fontSize: 10, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.2 }}>{h}</span>
          ))}
        </div>
        {filtered.map((o) => (
          <div key={o.id} className="hover-row table-data-row" style={{ display: "grid", gridTemplateColumns: "100px 1fr 100px 80px 120px 120px", padding: "16px 24px", borderBottom: `1px solid ${COLORS.glassBorder}22`, alignItems: "center", cursor: "pointer" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.accent, fontFamily: "'DM Mono', monospace" }}>{o.id}</span>
            <span style={{ fontSize: 13, color: COLORS.white, fontWeight: 500 }}>{o.vessel}</span>
            <span style={{ fontSize: 13, color: COLORS.muted }}>{o.date}</span>
            <span style={{ fontSize: 13, color: COLORS.muted }}>{o.items}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.white }}>${o.total.toLocaleString()}</span>
            <StatusBadge status={o.status} lang={lang} />
          </div>
        ))}
      </div>
      {/* Mobile order cards */}
      <div className="orders-cards-mobile" style={{ display: "none", flexDirection: "column", gap: 12 }}>
        {filtered.map((o) => (
          <div key={o.id} className="card" style={{ padding: 16, borderRadius: 14, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.accent, fontFamily: "'DM Mono', monospace" }}>{o.id}</span>
              <StatusBadge status={o.status} lang={lang} />
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.white, marginBottom: 6 }}>{o.vessel}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: COLORS.muted }}>{o.date} · {o.items} {t("items", lang)}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: COLORS.white }}>${o.total.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SuppliersView({ lang, setLang }) {
  const suppliers = [
    { name: "Ocean Prime Seafood", category: "Seafood", rating: 4.9, orders: 234, revenue: "$142K", fill: "99.2%", status: "Premium" },
    { name: "Prestige Wine & Spirits", category: "Beverages", rating: 5.0, orders: 187, revenue: "$298K", fill: "98.8%", status: "Premium" },
    { name: "Heritage Meats FL", category: "Proteins", rating: 4.8, orders: 156, revenue: "$89K", fill: "97.5%", status: "Verified" },
    { name: "Gulf Coast Provisions", category: "Seafood", rating: 4.7, orders: 98, revenue: "$67K", fill: "96.1%", status: "Verified" },
    { name: "Sunrise Juicery", category: "Beverages", rating: 4.9, orders: 134, revenue: "$48K", fill: "99.5%", status: "Organic" },
    { name: "Kobe & Co.", category: "Proteins", rating: 5.0, orders: 42, revenue: "$186K", fill: "100%", status: "Ultra Premium" },
  ];
  return (
    <div className="fade-in">
      <Header title={t("supplierNetwork", lang)} subtitle={t("suppliersSub", lang)} lang={lang} setLang={setLang} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 28 }}>
        {[{ label: t("activeSuppliers", lang), value: "47", sub: t("tenCategories", lang) }, { label: t("avgFillRate", lang), value: "98.4%", sub: t("vsLastMonth", lang) }, { label: t("supplierGMV", lang), value: "$830K", sub: t("last30Days", lang) }].map((s, i) => (
          <div key={i} className="card" style={{ padding: 20, borderRadius: 14, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}` }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontSize: 26, fontWeight: 300, color: COLORS.white, fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
            <div style={{ fontSize: 12, color: COLORS.seaLight, marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="card suppliers-table-desktop" style={{ borderRadius: 16, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}`, overflow: "hidden", overflowX: "auto" }}>
        <div className="table-header-row" style={{ display: "grid", gridTemplateColumns: "1fr 120px 80px 80px 100px 80px 120px", padding: "14px 24px", borderBottom: `1px solid ${COLORS.glassBorder}` }}>
          {[t("thSupplier", lang), t("thCategory", lang), t("thRating", lang), t("thOrders", lang), t("thRevenue", lang), t("thFillRate", lang), t("thTier", lang)].map(h => (
            <span key={h} style={{ fontSize: 10, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 1.2 }}>{h}</span>
          ))}
        </div>
        {suppliers.map((s, i) => (
          <div key={i} className="hover-row table-data-row" style={{ display: "grid", gridTemplateColumns: "1fr 120px 80px 80px 100px 80px 120px", padding: "16px 24px", borderBottom: `1px solid ${COLORS.glassBorder}22`, alignItems: "center", cursor: "pointer" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.white }}>{s.name}</span>
            <span style={{ fontSize: 12, color: COLORS.muted }}>{tSupCat(s.category, lang)}</span>
            <span style={{ fontSize: 13, color: COLORS.accent, fontWeight: 600 }}>★ {s.rating}</span>
            <span style={{ fontSize: 13, color: COLORS.white }}>{s.orders}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.white }}>{s.revenue}</span>
            <span style={{ fontSize: 13, color: COLORS.success, fontWeight: 600 }}>{s.fill}</span>
            <span style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 20, background: s.status.includes("Premium") ? COLORS.accentDim : "rgba(26,107,122,0.15)", color: s.status.includes("Premium") ? COLORS.accent : COLORS.seaLight, fontSize: 11, fontWeight: 600 }}>{tTier(s.status, lang)}</span>
          </div>
        ))}
      </div>
      {/* Mobile supplier cards */}
      <div className="suppliers-cards-mobile" style={{ display: "none", flexDirection: "column", gap: 12 }}>
        {suppliers.map((s, i) => (
          <div key={i} className="card" style={{ padding: 16, borderRadius: 14, background: COLORS.glass, border: `1px solid ${COLORS.glassBorder}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: COLORS.white }}>{s.name}</span>
              <span style={{ display: "inline-flex", padding: "4px 12px", borderRadius: 20, background: s.status.includes("Premium") ? COLORS.accentDim : "rgba(26,107,122,0.15)", color: s.status.includes("Premium") ? COLORS.accent : COLORS.seaLight, fontSize: 11, fontWeight: 600 }}>{tTier(s.status, lang)}</span>
            </div>
            <div style={{ fontSize: 12, color: COLORS.muted, marginBottom: 10 }}>{tSupCat(s.category, lang)} · <span style={{ color: COLORS.accent }}>★ {s.rating}</span></div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <div style={{ flex: 1, padding: "8px 10px", borderRadius: 8, background: COLORS.deepNavy, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}>{t("thOrders", lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.white }}>{s.orders}</div>
              </div>
              <div style={{ flex: 1, padding: "8px 10px", borderRadius: 8, background: COLORS.deepNavy, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}>{t("thRevenue", lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.white }}>{s.revenue}</div>
              </div>
              <div style={{ flex: 1, padding: "8px 10px", borderRadius: 8, background: COLORS.deepNavy, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: COLORS.muted, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 2 }}>{t("thFillRate", lang)}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.success }}>{s.fill}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   LANG TOGGLE
   ================================================================ */

function LangToggle({ lang, setLang, style }) {
  return (
    <button onClick={() => setLang(lang === "en" ? "es" : "en")} style={{ display: "inline-flex", alignItems: "center", gap: 0, borderRadius: 20, border: `1px solid ${COLORS.glassBorder}`, background: COLORS.glass, cursor: "pointer", padding: 0, fontFamily: "'DM Sans', sans-serif", backdropFilter: "blur(10px)", ...style }}>
      <span style={{ padding: "5px 10px", borderRadius: "20px 0 0 20px", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, background: lang === "en" ? COLORS.accentDim : "transparent", color: lang === "en" ? COLORS.accent : COLORS.muted, transition: "all 0.2s" }}>EN</span>
      <span style={{ padding: "5px 10px", borderRadius: "0 20px 20px 0", fontSize: 11, fontWeight: 700, letterSpacing: 0.5, background: lang === "es" ? COLORS.accentDim : "transparent", color: lang === "es" ? COLORS.accent : COLORS.muted, transition: "all 0.2s" }}>ES</span>
    </button>
  );
}

/* ================================================================
   ROOT
   ================================================================ */

export default function YachtProvisionsPro() {
  const [showPitch, setShowPitch] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("ypp-lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => { try { localStorage.setItem("ypp-lang", lang); } catch {} }, [lang]);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard": return <Dashboard setActive={setActivePage} lang={lang} setLang={setLang} />;
      case "provision": return <ProvisionBuilder lang={lang} setLang={setLang} />;
      case "fleet": return <FleetView lang={lang} setLang={setLang} />;
      case "orders": return <OrdersView lang={lang} setLang={setLang} />;
      case "suppliers": return <SuppliersView lang={lang} setLang={setLang} />;
      default: return <Dashboard setActive={setActivePage} lang={lang} setLang={setLang} />;
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.glassBorder}; border-radius: 3px; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes slideEnter { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .slide-enter { animation: slideEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .float-slower { animation: floatSlow 12s ease-in-out infinite reverse; }
        @keyframes floatSlow { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -15px); } }
        .fade-in > * { animation: fadeIn 0.5s ease both; }
        .card { animation: fadeIn 0.5s ease both; }
        .hover-lift { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .hover-lift:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .hover-row { transition: background 0.2s ease; }
        .hover-row:hover { background: rgba(201,169,110,0.04); }
        input::placeholder { color: ${COLORS.muted}; }
        input:focus { border-color: ${COLORS.accent}44 !important; box-shadow: 0 0 0 3px ${COLORS.accent}11; }
        @keyframes appReveal { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        .dashboard-grid { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 20px; }
        .provision-grid { display: grid; grid-template-columns: 240px 1fr; gap: 20px; align-items: start; }
        @media (max-width: 1100px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 960px) {
          .provision-grid { grid-template-columns: 1fr; }
        }

        /* ===== MOBILE RESPONSIVE ===== */
        @media (max-width: 768px) {
          /* Nav: hide sidebar, show bottom bar */
          .side-nav-desktop { display: none !important; }
          .bottom-nav-mobile { display: flex !important; }
          .app-main { margin-left: 0 !important; padding: 16px 14px 80px 14px !important; }

          /* Header */
          .app-header { flex-direction: column !important; gap: 12px !important; margin-bottom: 20px !important; }
          .header-title { font-size: 22px !important; }
          .header-subtitle { font-size: 11px !important; }
          .header-actions { width: 100%; }
          .header-search { max-width: 100% !important; width: 100% !important; }

          /* Dashboard stats grid: 2 columns */
          .dashboard-grid { grid-template-columns: 1fr !important; gap: 14px !important; }

          /* Dashboard order rows: stacked card style */
          .dashboard-order-row {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto auto !important;
            gap: 4px 8px !important;
            padding: 12px !important;
            border-bottom: 1px solid rgba(201,169,110,0.1);
          }
          .dashboard-order-row .order-id { grid-column: 1; }
          .dashboard-order-row .order-total { grid-column: 2; text-align: right !important; }
          .dashboard-order-row .order-vessel { grid-column: 1; font-size: 12px !important; }
          .dashboard-order-row .order-items { display: none !important; }
          .dashboard-order-row .order-status { grid-column: 2; justify-content: flex-end; }

          /* Provision Builder */
          .provision-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .provision-categories { position: static !important; }
          .categories-label { display: none !important; }
          .provision-categories {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            gap: 6px !important;
            padding: 10px !important;
            -webkit-overflow-scrolling: touch;
          }
          .provision-categories button {
            white-space: nowrap !important;
            min-width: auto !important;
            padding: 8px 12px !important;
            flex-shrink: 0 !important;
          }
          .provision-categories button span:nth-child(3) { display: none !important; }

          /* Cart panel full-width */
          .cart-panel { width: 100% !important; padding: 20px 16px !important; }
          .cart-fab { bottom: 72px !important; right: 14px !important; left: 14px !important; padding: 14px 18px !important; border-radius: 14px !important; justify-content: center; }

          /* Orders & Suppliers: show cards, hide tables */
          .orders-table-desktop { display: none !important; }
          .orders-cards-mobile { display: flex !important; }
          .suppliers-table-desktop { display: none !important; }
          .suppliers-cards-mobile { display: flex !important; }

          /* Fleet cards: full width */

          /* ===== PITCH DECK MOBILE ===== */
          .pitch-deck { overflow: hidden !important; }
          .pitch-slide-area {
            overflow-y: auto !important;
            overflow-x: hidden !important;
            align-items: flex-start !important;
            -webkit-overflow-scrolling: touch;
            padding: 24px 0 16px !important;
          }
          .pitch-slide-content { padding: 0 16px !important; width: 100% !important; }
          .pitch-title { font-size: 30px !important; letter-spacing: -1px !important; }
          .pitch-subtitle { font-size: 15px !important; margin-bottom: 16px !important; }
          .pitch-h2 { font-size: 22px !important; }
          .pitch-stats-bar { gap: 12px !important; padding: 12px 14px !important; flex-wrap: wrap !important; }
          .pitch-stat-value { font-size: 16px !important; }
          .market-big-value { font-size: 28px !important; }
          .revenue-stat-value { font-size: 14px !important; }
          .revenue-summary-bar { gap: 12px !important; padding: 12px 12px !important; display: grid !important; grid-template-columns: 1fr 1fr !important; }

          /* Pitch bottom nav — fixed at bottom */
          .pitch-bottom-nav {
            padding: 10px 16px env(safe-area-inset-bottom, 14px) !important;
            background: ${COLORS.navy} !important;
            border-top: 1px solid rgba(201,169,110,0.15);
            gap: 8px !important;
            flex-direction: row !important;
            justify-content: space-between !important;
          }
          .pitch-dots { gap: 2px !important; }
          .pitch-dots button { padding: 4px 6px !important; }
          .pitch-dot-label { display: none !important; }
          .pitch-nav-buttons { gap: 8px !important; }
          .pitch-nav-buttons button { padding: 10px 16px !important; font-size: 12px !important; }
          .pitch-keyboard-hint { display: none !important; }

          /* Solution slide grid */
          .solution-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

          /* Tighter pitch slide cards */
          .pitch-slide-content .slide-enter { padding: 14px !important; }
          .pitch-slide-content h4 { font-size: 13px !important; }
          .pitch-slide-content p { font-size: 11px !important; }
        }

        /* Small phones */
        @media (max-width: 400px) {
          .pitch-title { font-size: 24px !important; }
          .pitch-h2 { font-size: 18px !important; }
          .market-big-value { font-size: 24px !important; }
          .header-title { font-size: 20px !important; }
        }
      `}</style>

      {showPitch && <PitchDeck onFinish={() => setShowPitch(false)} lang={lang} setLang={setLang} />}

      {!showPitch && (
        <div style={{
          minHeight: "100vh",
          background: `radial-gradient(ellipse at 20% 0%, rgba(26,107,122,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(201,169,110,0.06) 0%, transparent 50%), ${COLORS.navy}`,
          fontFamily: "'DM Sans', sans-serif",
          color: COLORS.white,
          display: "flex",
          animation: "appReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}>
          <SideNav active={activePage} setActive={setActivePage} lang={lang} />
          <main className="app-main" style={{ flex: 1, marginLeft: 72, padding: "28px 32px", minHeight: "100vh" }}>
            {renderPage()}
          </main>
        </div>
      )}
    </LangContext.Provider>
  );
}
