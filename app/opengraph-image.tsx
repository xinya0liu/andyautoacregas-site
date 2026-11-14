import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = `${site.longName} — Mobile AC Regas Brisbane, Logan & Gold Coast`;

const NAVY_FROM = "#01579B";
const NAVY_TO = "#013A69";
const YELLOW = "#FFC400";
const YELLOW_LIGHT = "#FFDC33";
const YELLOW_DARK = "#F7B200";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)`,
          color: "#fff",
          fontFamily: "sans-serif",
          position: "relative",
          padding: "80px",
        }}
      >
        {/* Snowflake flourish top-right */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 60,
            opacity: 0.1,
            display: "flex",
          }}
        >
          <svg width="260" height="260" viewBox="0 0 100 100">
            <g stroke="#FFFFFF" strokeLinecap="round" fill="none" strokeWidth="3">
              <line x1="10" y1="50" x2="90" y2="50" />
              <line x1="22" y1="22" x2="78" y2="78" />
              <line x1="78" y1="22" x2="22" y2="78" />
            </g>
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 160,
            right: 300,
            opacity: 0.08,
            display: "flex",
          }}
        >
          <svg width="140" height="140" viewBox="0 0 100 100">
            <g stroke="#FFFFFF" strokeLinecap="round" fill="none" strokeWidth="3">
              <line x1="10" y1="50" x2="90" y2="50" />
              <line x1="22" y1="22" x2="78" y2="78" />
              <line x1="78" y1="22" x2="22" y2="78" />
            </g>
          </svg>
        </div>

        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: YELLOW,
            fontWeight: 900,
          }}
        >
          <span
            style={{
              width: 48,
              height: 4,
              background: YELLOW,
              display: "flex",
            }}
          />
          Mobile · Brisbane · Logan · Gold Coast · 7 Days
        </div>

        {/* Wordmark */}
        <div
          style={{
            marginTop: 40,
            fontSize: 108,
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            textTransform: "uppercase",
            textShadow: "0 4px 24px rgba(0,0,0,0.2)",
            display: "flex",
          }}
        >
          Andy Auto AC Regas
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 36,
            fontSize: 44,
            fontWeight: 700,
            maxWidth: 900,
            lineHeight: 1.2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Cold air back,</span>
          <span style={{ color: YELLOW }}>on-site in 45 minutes.</span>
        </div>

        {/* Phone pill + credentials row */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              background: YELLOW,
              color: NAVY_TO,
              padding: "18px 36px",
              borderRadius: 999,
              fontSize: 48,
              fontWeight: 900,
              fontStyle: "italic",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill={NAVY_TO}>
              <path d="M2.2 4.6c0-1.3 1-2.4 2.3-2.4h2c1.1 0 2 .7 2.3 1.8l.8 3c.2.9-.1 1.9-.9 2.5l-1 .8c1.4 2.6 3.6 4.8 6.2 6.2l.8-1c.6-.8 1.6-1.1 2.5-.9l3 .8c1.1.3 1.8 1.2 1.8 2.3v2c0 1.3-1.1 2.3-2.4 2.3C9.7 22 2 14.3 2.2 4.6z" />
            </svg>
            {site.phone}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              fontSize: 20,
              color: "#9EC5E8",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#fff" }}>ARCtick AU63933</span>
            <span style={{ marginTop: 6 }}>From $140 · Open 7 days</span>
          </div>
        </div>

        {/* Yellow bottom stripe — mirrors sticker */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 14,
            background: `linear-gradient(90deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)`,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
