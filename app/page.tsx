import Image from "next/image";
import { site, telHref, smsQuoteHref, COPYRIGHT_YEAR } from "@/lib/site";

export const metadata = { title: site.tagline };

// Brand palette — lifted from andy_auto_engine_bay_sticker_EDITABLE.svg.
const NAVY_FROM = "#01579B";
const NAVY_TO = "#013A69";
const YELLOW = "#FFC400";
const YELLOW_LIGHT = "#FFDC33";
const YELLOW_DARK = "#F7B200";

function Snowflake({ size = 120, opacity = 0.08 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" fill="none" strokeWidth="3.2">
        <line x1="10" y1="50" x2="90" y2="50" />
        <line x1="22" y1="22" x2="78" y2="78" />
        <line x1="78" y1="22" x2="22" y2="78" />
      </g>
      <g stroke="currentColor" strokeLinecap="round" fill="none" strokeWidth="2.2">
        <line x1="78" y1="50" x2="84" y2="44" /><line x1="78" y1="50" x2="84" y2="56" />
        <line x1="66" y1="66" x2="64" y2="74" /><line x1="66" y1="66" x2="74" y2="68" />
        <line x1="34" y1="66" x2="26" y2="68" /><line x1="34" y1="66" x2="36" y2="74" />
        <line x1="22" y1="50" x2="16" y2="44" /><line x1="22" y1="50" x2="16" y2="56" />
        <line x1="34" y1="34" x2="36" y2="26" /><line x1="34" y1="34" x2="26" y2="32" />
        <line x1="66" y1="34" x2="74" y2="32" /><line x1="66" y1="34" x2="64" y2="26" />
      </g>
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M2.2 4.6c0-1.3 1-2.4 2.3-2.4h2c1.1 0 2 .7 2.3 1.8l.8 3c.2.9-.1 1.9-.9 2.5l-1 .8c1.4 2.6 3.6 4.8 6.2 6.2l.8-1c.6-.8 1.6-1.1 2.5-.9l3 .8c1.1.3 1.8 1.2 1.8 2.3v2c0 1.3-1.1 2.3-2.4 2.3C9.7 22 2 14.3 2.2 4.6z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function MessengerIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.4 2 2 6.2 2 11.5c0 2.8 1.3 5.3 3.4 7V22l3.1-1.7c.9.3 1.8.4 2.8.4a10 10 0 0 0 1.3-.1h.4c5.3 0 9.5-4 9.5-9.1S17.4 2 12 2zm1 12.2L10.4 11 5 14.2 11 8l2.6 3.2L19 8l-6 6.2z" />
    </svg>
  );
}

// Chat bubble for the Quick SMS Quote CTA.
function ChatIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4V5a2 2 0 0 1 2-2zm3 6v2h10V9H7zm0 4v2h7v-2H7z" />
    </svg>
  );
}

function PlayIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function StarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8l-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2z" />
    </svg>
  );
}

// Google "G" logo (simplified monochrome — safe for a credibility badge).
function GoogleIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 8 3l5.7-5.7C33.9 6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.2-2.6-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8c1.8-4.3 6-7.4 10.9-7.4 3 0 5.8 1.1 8 3L37.6 9C33.9 6 29.2 4 24 4 16.3 4 9.7 8.3 6.3 14.1z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.8-2 13.4-5.2L31.2 33c-2 1.3-4.5 2-7.2 2-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.8l6.2 5.2c-.4.4 6.6-4.8 6.6-14 0-1.3-.2-2.6-.4-3.5z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 1.8.25 2.2.41.6.23 1 .5 1.4.9.4.4.68.8.9 1.4.17.4.36 1 .42 2.2.05 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 1.8-.41 2.2-.23.6-.5 1-.9 1.4-.4.4-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.2.05-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-1.8-.25-2.2-.41-.6-.23-1-.5-1.4-.9a3.8 3.8 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2-.05-1.2-.07-1.6-.07-4.8s0-3.6.07-4.8c.06-1.2.25-1.8.41-2.2.23-.6.5-1 .9-1.4.4-.4.8-.68 1.4-.9.4-.17 1-.36 2.2-.42 1.2-.05 1.6-.07 4.8-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.8 5.8 0 0 0-2.1 1.37A5.8 5.8 0 0 0 .67 4.1c-.3.77-.5 1.65-.56 2.92C.05 8.3.04 8.7.04 12s.01 3.7.07 4.98c.06 1.27.26 2.15.56 2.92a5.8 5.8 0 0 0 1.37 2.1 5.8 5.8 0 0 0 2.1 1.37c.77.3 1.65.5 2.92.56C8.3 23.99 8.7 24 12 24s3.7-.01 4.98-.07c1.27-.06 2.15-.26 2.92-.56a5.8 5.8 0 0 0 2.1-1.37 5.8 5.8 0 0 0 1.37-2.1c.3-.77.5-1.65.56-2.92.06-1.28.07-1.68.07-4.98s-.01-3.7-.07-4.98c-.06-1.27-.26-2.15-.56-2.92a5.8 5.8 0 0 0-1.37-2.1A5.8 5.8 0 0 0 19.9.63c-.77-.3-1.65-.5-2.92-.56C15.7.01 15.3 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

function MapIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function CertIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2 3 6v6c0 5 3.8 9.7 9 10 5.2-.3 9-5 9-10V6l-9-4zm-1.3 14.5L6 11.8l1.4-1.4 3.3 3.3 6-6 1.4 1.4-7.4 7.4z" />
    </svg>
  );
}

// Service van side-profile, stylised to match the sticker palette.
function VanIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" aria-hidden="true">
      {/* body */}
      <path
        d="M4 10 L34 10 L44 10 L56 18 L60 20 L60 30 L56 30 L56 32 Q56 34 54 34 L48 34 Q46 34 46 32 L46 30 L22 30 L22 32 Q22 34 20 34 L14 34 Q12 34 12 32 L12 30 L4 30 Z"
        fill="currentColor"
      />
      {/* windshield + door */}
      <path d="M38 12 L52 20 L44 20 Q42 20 42 18 L42 12 Z" fill="#FFC400" stroke="#013A69" strokeWidth="1" />
      <path d="M22 12 L36 12 L36 20 L22 20 Z" fill="#FFC400" stroke="#013A69" strokeWidth="1" />
      {/* vent line on side */}
      <rect x="6" y="20" width="14" height="4" fill="#013A69" opacity="0.4" />
      {/* wheels */}
      <circle cx="17" cy="32" r="4" fill="#0B0B0B" stroke="#FFC400" strokeWidth="1.5" />
      <circle cx="51" cy="32" r="4" fill="#0B0B0B" stroke="#FFC400" strokeWidth="1.5" />
      {/* motion lines */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6">
        <line x1="0" y1="14" x2="4" y2="14" />
        <line x1="0" y1="20" x2="4" y2="20" />
        <line x1="0" y1="26" x2="4" y2="26" />
      </g>
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
    </svg>
  );
}

const hasFb = !!site.social.facebook;
const hasMessenger = !!site.social.messenger;
const hasIg = !!site.social.instagram;
const hasMap = !!site.social.googleMap;

const socialLinks = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon, show: hasFb },
  { href: site.social.messenger, label: "Messenger", Icon: MessengerIcon, show: hasMessenger },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon, show: hasIg },
  { href: site.social.googleMap, label: "Google Maps", Icon: MapIcon, show: hasMap },
] as const;

// Photos curated 2026-11-16 from Andy's FB work-log posts + 1 Google video
// still. Files in public/work-fb/ (FB) and public/work/ (Google). Replace or
// re-order freely — just drop new files into public/work-fb/.
const workGallery: { src: string; label: string; video?: boolean }[] = [
  { src: "/work-fb/01-ranger-driveway.jpg", label: "Ford Ranger · driveway" },
  { src: "/work-fb/02-commodore.jpg", label: "Holden Commodore" },
  { src: "/work-fb/03-temp-5c.jpg", label: "Vent temp · 5.0°C" },
  { src: "/work-fb/04-mazda-clean.jpg", label: "Mazda CX-5" },
  { src: "/work-fb/05-mercedes.jpg", label: "Mercedes-Benz" },
  { src: "/work-fb/06-ford-van.jpg", label: "Ford van" },
  { src: "/work/video-poster.jpg", label: "Watch the 23-second job on Google", video: true },
  { src: "/work-fb/07-hilux-driveway.jpg", label: "Toyota Hilux · driveway" },
  { src: "/work-fb/08-temp-7c-kia.jpg", label: "Vent temp · 7.6°C" },
  { src: "/work-fb/09-vw-driveway.jpg", label: "VW · driveway" },
  { src: "/work-fb/10-gauges-detail.jpg", label: "Manifold gauges" },
  { src: "/work-fb/11-temp-7c-toyota.jpg", label: "Vent temp · 7.1°C" },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Top bar */}
      <header
        className="text-white"
        style={{ background: `linear-gradient(90deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3 gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Image
              src="/brand/logo-circle-sm.png"
              alt="Andy Auto AC Regas"
              width={44}
              height={44}
              priority
              className="rounded-full bg-white shrink-0"
            />
            <div className="hidden sm:block min-w-0">
              <div className="font-black italic tracking-wide leading-none">
                ANDY AUTO AC REGAS
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase mt-1" style={{ color: YELLOW }}>
                Mobile · Brisbane · Logan · Gold Coast · 7 Days
              </div>
            </div>
            {/* ARC licence pill — highest-value trust signal per competitor research */}
            <div
              className="hidden md:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-widest ml-2 shrink-0"
              style={{
                background: "rgba(255,196,0,0.15)",
                color: YELLOW,
                boxShadow: `inset 0 0 0 1px ${YELLOW}80`,
              }}
            >
              <CertIcon className="h-3 w-3" />
              ARC RTA No. {site.arcNumber}
            </div>
          </div>
          <a
            href={telHref}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-black text-[#013A69] shadow shrink-0"
            style={{ background: YELLOW }}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="italic">{site.phone}</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
        />
        <div className="absolute -top-6 right-10 text-white"><Snowflake size={180} opacity={0.08} /></div>
        <div className="absolute top-40 right-56 text-white"><Snowflake size={90} opacity={0.08} /></div>
        <div className="absolute bottom-10 left-10 text-white"><Snowflake size={110} opacity={0.06} /></div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-5 gap-10 items-center text-white">
          <div className="md:col-span-3">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#013A69]"
              style={{ background: YELLOW }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#013A69]" />
              Mobile Service · ARC RTA AU63933
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.02] uppercase">
              Mobile Car
              <br />
              AC Regas.
            </h1>
            <div
              className="mt-4 text-xl md:text-2xl font-black uppercase tracking-tight"
              style={{ color: YELLOW }}
            >
              Across Brisbane, Gold Coast and Logan.
            </div>
            <p className="mt-5 text-lg text-blue-100 max-w-xl leading-relaxed">
              Fully mobile car AC regas, diagnostics and repair — we come to
              your driveway, workplace or roadside.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-black text-[#013A69] shadow-lg hover:brightness-105 transition"
                style={{ background: YELLOW }}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call <span className="italic">{site.phone}</span></span>
              </a>
              <a
                href={smsQuoteHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-bold hover:bg-white/10 transition"
              >
                <ChatIcon className="h-5 w-5" />
                Quick SMS Quote
              </a>
              {(hasMessenger || hasFb) && (
                <a
                  href={site.social.messenger || site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-bold hover:bg-white/10 transition"
                >
                  <MessengerIcon className="h-5 w-5" />
                  Message on FB
                </a>
              )}
            </div>
            <div
              className="mt-10 grid grid-cols-3 max-w-lg rounded-2xl border overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <div
                className="px-4 py-4 text-center border-r"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-200/80">
                  Regas from
                </div>
                <div
                  className="mt-1 text-2xl md:text-3xl font-black"
                  style={{ color: YELLOW }}
                >
                  $140
                </div>
              </div>
              <div
                className="px-4 py-4 text-center border-r"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-200/80">
                  Typical job
                </div>
                <div
                  className="mt-1 text-2xl md:text-3xl font-black"
                  style={{ color: YELLOW }}
                >
                  45 min
                </div>
              </div>
              <div className="px-4 py-4 text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-200/80">
                  Open
                </div>
                <div
                  className="mt-1 text-2xl md:text-3xl font-black"
                  style={{ color: YELLOW }}
                >
                  7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            {/* Hero visual — real work photo = instant "mobile ac regas" proof */}
            <div className="relative">
              <div
                className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 shadow-2xl shadow-black/40"
                style={{ borderColor: YELLOW, background: NAVY_TO }}
              >
                <Image
                  src="/work-fb/hero-andy-working.jpg"
                  alt="Andy on-site with manifold gauges, R134a tank and mobile AC kit at a customer's driveway"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                  style={{ objectPosition: "50% 80%" }}
                />
              </div>
              {/* Rotated MOBILE SERVICE stamp as a corner accent */}
              <div
                className="absolute -top-4 -right-4 md:-top-5 md:-right-5 rotate-[-12deg] pointer-events-none"
                aria-hidden="true"
              >
                <div
                  className="relative h-24 w-24 md:h-28 md:w-28 rounded-full grid place-items-center text-center"
                  style={{
                    background: YELLOW,
                    boxShadow: `inset 0 0 0 3px ${NAVY_TO}, inset 0 0 0 5px ${YELLOW}, inset 0 0 0 6px ${NAVY_TO}, 0 10px 24px rgba(0,0,0,0.3)`,
                    color: NAVY_TO,
                  }}
                >
                  <div className="leading-none">
                    <div className="text-[9px] font-black tracking-[0.3em]">★ ★ ★</div>
                    <div className="mt-1 text-xs md:text-sm font-black uppercase leading-[1.05]">
                      Mobile
                      <br />
                      Service
                    </div>
                    <div className="mt-1 text-[9px] font-black uppercase tracking-[0.2em]">
                      7 Days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative h-3"
          style={{ background: `linear-gradient(90deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)` }}
        />
      </section>

      {/* Trust strip — Google rating · Years · ARC · Owner-Operator */}
      <section className="border-b" style={{ borderColor: `${NAVY_FROM}18`, background: "#fff" }}>
        <div
          className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
          style={{ color: NAVY_TO }}
        >
          {site.social.googleMap && (
            <a
              href={site.social.googleMap}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-80 transition"
            >
              <GoogleIcon className="h-5 w-5" />
              <span className="font-black">{site.googleReviews.rating.toFixed(1)}</span>
              <div className="flex" style={{ color: "#FFC107" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <span className="opacity-60 hidden sm:inline">on Google</span>
            </a>
          )}
          <div className="flex items-center gap-2">
            <span className="font-black uppercase tracking-wider">
              {site.yearsInBusiness}+ Years
            </span>
            <span className="opacity-60 hidden sm:inline">under the bonnet</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ color: NAVY_FROM }}>
              <CertIcon className="h-4 w-4" />
            </span>
            <span className="font-black uppercase tracking-wider">
              ARC RTA No. {site.arcNumber}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black uppercase tracking-wider">Owner-Operated</span>
            <span className="opacity-60 hidden sm:inline">— Andy himself</span>
          </div>
        </div>
      </section>

      {/* Services — moved up: visitors want to know what you offer before how it works */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
              Services
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight uppercase" style={{ color: NAVY_TO }}>
              Upfront pricing. No surprises.
            </h2>
          </div>
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 font-black text-[#013A69] hover:brightness-105 transition"
            style={{ background: YELLOW }}
          >
            <PhoneIcon className="h-4 w-4" />
            Book now
          </a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {site.services.map((s) => (
            <article
              key={s.slug}
              className="relative rounded-2xl p-7 border-2 transition hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: `${NAVY_FROM}18` }}
            >
              <div
                className="absolute -top-3 left-6 inline-block rounded-full px-3 py-1 text-xs font-black text-[#013A69]"
                style={{ background: YELLOW }}
              >
                {s.price}
              </div>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                {s.name}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{s.blurb}</p>
              <a
                href={telHref}
                className="mt-5 inline-flex items-center gap-1 font-black hover:gap-2 transition-all"
                style={{ color: NAVY_FROM }}
              >
                Book this → <span className="italic">{site.phone}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* How it works — 3-step mobile flow */}
      <section
        className="relative"
        style={{ background: `${NAVY_FROM}08` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
              How It Works
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
              Three steps from call to cold air.
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
            {/* Step 1 — Call */}
            <div
              className="rounded-2xl p-6 bg-white border-2 flex items-start gap-4"
              style={{ borderColor: `${NAVY_FROM}22` }}
            >
              <div
                className="shrink-0 h-14 w-14 rounded-xl grid place-items-center"
                style={{ background: YELLOW, color: NAVY_TO }}
              >
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: NAVY_FROM }}>
                  Step 01
                </div>
                <div className="mt-1 text-lg font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                  Call Andy
                </div>
                <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Tap <span className="italic font-semibold">{site.phone}</span>. Tell us the car and
                  the suburb — quote and arrival window on the spot.
                </div>
              </div>
            </div>
            {/* Arrow 1 */}
            <div className="hidden md:grid place-items-center" style={{ color: NAVY_FROM }}>
              <ArrowRight className="h-7 w-7 opacity-50" />
            </div>
            {/* Step 2 — Van arrives */}
            <div
              className="rounded-2xl p-6 bg-white border-2 flex items-start gap-4"
              style={{ borderColor: `${NAVY_FROM}22` }}
            >
              <div
                className="shrink-0 h-14 w-14 rounded-xl grid place-items-center"
                style={{ background: YELLOW, color: NAVY_TO }}
              >
                <VanIcon className="h-7 w-10" />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: NAVY_FROM }}>
                  Step 02
                </div>
                <div className="mt-1 text-lg font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                  Wagon Rolls Out
                </div>
                <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Fully equipped service wagon. Driveway, workplace, roadside — anywhere
                  the car is parked.
                </div>
              </div>
            </div>
            {/* Arrow 2 */}
            <div className="hidden md:grid place-items-center" style={{ color: NAVY_FROM }}>
              <ArrowRight className="h-7 w-7 opacity-50" />
            </div>
            {/* Step 3 — Cold air */}
            <div
              className="rounded-2xl p-6 bg-white border-2 flex items-start gap-4"
              style={{ borderColor: `${NAVY_FROM}22` }}
            >
              <div
                className="shrink-0 h-14 w-14 rounded-xl grid place-items-center"
                style={{ background: YELLOW, color: NAVY_TO }}
              >
                <Snowflake size={28} opacity={1} />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: NAVY_FROM }}>
                  Step 03
                </div>
                <div className="mt-1 text-lg font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                  Cold Air Back
                </div>
                <div className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Most regas jobs done in 30–45 minutes on site. Full repairs same-day
                  by booking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Andy — owner background and value prop */}
      <section
        className="relative overflow-hidden"
        style={{ background: `${NAVY_FROM}08` }}
      >
        <div className="absolute -top-6 -right-6" style={{ color: NAVY_FROM }}>
          <Snowflake size={160} opacity={0.05} />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Portrait — Andy + Audi Allroad service wagon */}
            <div className="relative">
              <div
                className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden border-2 shadow-xl"
                style={{ borderColor: `${NAVY_FROM}22` }}
              >
                <Image
                  src="/brand/andy-wagon.jpg"
                  alt="Andy next to his Audi Allroad service wagon with MOBILE AC SERVICE decal"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              {/* Rotated "That's Andy" badge over the photo */}
              <div
                className="absolute -top-7 -right-3 md:-top-8 md:-right-4 rotate-[-10deg]"
                aria-hidden="true"
              >
                <div
                  className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.25em] shadow-lg"
                  style={{ background: YELLOW, color: NAVY_TO }}
                >
                  ★ That&apos;s Andy
                </div>
              </div>
            </div>

            {/* Right text column */}
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
                About Andy
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                {site.ownerBio.headline}
              </h2>
              <div
                className="mt-2 text-lg md:text-xl font-black uppercase tracking-tight"
                style={{ color: NAVY_FROM }}
              >
                {site.ownerBio.subhead}
              </div>
              <div className="mt-5 space-y-4 text-slate-700 leading-relaxed">
                {site.ownerBio.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <a
                href={telHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-black text-[#013A69] hover:brightness-105 transition"
                style={{ background: YELLOW }}
              >
                <PhoneIcon className="h-4 w-4" />
                Book direct with Andy
              </a>
            </div>
          </div>

          {/* Pillars — full-width 4-card strip under the two-col block */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {site.ownerBio.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border-2 p-4"
                style={{ borderColor: `${NAVY_FROM}22` }}
              >
                <div style={{ color: NAVY_FROM }}>
                  <CertIcon className="h-5 w-5" />
                </div>
                <div
                  className="mt-3 text-base font-black uppercase tracking-tight"
                  style={{ color: NAVY_TO }}
                >
                  {p.title}
                </div>
                <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {p.body}
                </div>
              </div>
            ))}
          </div>

          {/* Credentials — merged in as the section's tail (taste: no strip sections) */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
            {site.credentials.map((c) => (
              <div
                key={c.title}
                className="inline-flex items-center gap-2 rounded-full bg-white border px-3 py-1.5"
                style={{ borderColor: `${NAVY_FROM}22`, color: NAVY_TO }}
                title={c.body}
              >
                <span style={{ color: NAVY_FROM, display: "inline-flex" }}>
                  <CertIcon className="h-3.5 w-3.5" />
                </span>
                <span className="font-black uppercase tracking-wider">{c.title}</span>
                <span className="opacity-60 text-[11px]">· {c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Work gallery — curated from FB work-log posts + Google */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
              On the Job
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
              Real work. Real cars. Real cold air.
            </h2>
          </div>
          {site.social.facebook && (
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-5 py-2.5 text-sm font-black hover:shadow-lg transition"
              style={{ borderColor: `${NAVY_FROM}22`, color: NAVY_TO }}
            >
              <FacebookIcon className="h-5 w-5" />
              See more on Facebook →
            </a>
          )}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {workGallery.map((item) =>
            item.video ? (
              <a
                key={item.src}
                href={site.social.googleMap || "#"}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group relative col-span-2 aspect-video rounded-2xl overflow-hidden border-2 block"
                style={{ borderColor: YELLOW }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 grid place-items-center bg-black/25">
                  <div
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full grid place-items-center shadow-xl transition group-hover:scale-105"
                    style={{ background: YELLOW, color: NAVY_TO }}
                  >
                    <PlayIcon className="h-7 w-7 md:h-9 md:w-9 ml-1" />
                  </div>
                </div>
              </a>
            ) : (
              <figure
                key={item.src}
                className="group relative aspect-square rounded-2xl overflow-hidden border-2"
                style={{ borderColor: `${NAVY_FROM}22` }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition group-hover:scale-[1.03]"
                />
              </figure>
            )
          )}
        </div>
      </section>

      {/* Testimonials — full-text Google reviews (moved after gallery: show → tell) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
              What customers say
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
              5.0 stars on Google.
            </h2>
          </div>
          {site.social.googleMap && (
            <a
              href={site.social.googleMap}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-5 py-2.5 text-sm font-black hover:shadow-lg transition"
              style={{ borderColor: `${NAVY_FROM}22`, color: NAVY_TO }}
            >
              <GoogleIcon className="h-5 w-5" />
              Read on Google
              <span>→</span>
            </a>
          )}
        </div>
        {/* Masonry via CSS columns so variable-height cards sit flush */}
        <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {site.testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative rounded-2xl bg-white p-6 border-2 mb-5 break-inside-avoid"
              style={{ borderColor: `${NAVY_FROM}22` }}
            >
              <div className="flex items-center gap-1" style={{ color: "#FFC107" }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote
                className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line"
                style={{ color: NAVY_TO }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full grid place-items-center font-black text-sm shrink-0"
                  style={{ background: `${NAVY_FROM}10`, color: NAVY_FROM }}
                >
                  {t.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="font-black uppercase tracking-tight text-sm" style={{ color: NAVY_TO }}>
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500">
                    <GoogleIcon className="inline-block h-3 w-3 mr-1 align-[-2px]" />
                    {t.meta}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
          Service Area
        </div>
        <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
          We come to you.
        </h2>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Not listed? Give Andy a call — happy to stretch for a full driveway
          across South East Queensland.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {site.areas.map((a) => (
            <div
              key={a.region}
              className="relative rounded-2xl p-6 border-2 overflow-hidden"
              style={{ borderColor: `${NAVY_FROM}18` }}
            >
              <div className="absolute -top-4 -right-4" style={{ color: NAVY_FROM }}>
                <Snowflake size={80} opacity={0.08} />
              </div>
              <div className="font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                {a.region}
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                {a.suburbs.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + hours */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)` }}
      >
        <div className="absolute -top-10 -left-10" style={{ color: NAVY_FROM }}>
          <Snowflake size={220} opacity={0.08} />
        </div>
        <div
          className="relative mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
          style={{ color: NAVY_TO }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.05]">
              AC acting up?
              <br />
              Call Andy.
            </h2>
            <p className="mt-4 opacity-80 max-w-md">
              Call Andy — you&apos;ll get a time window and a price before the
              wagon rolls out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-black text-white shadow-lg hover:brightness-110 transition"
                style={{ background: `linear-gradient(90deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call <span className="italic">{site.phone}</span></span>
              </a>
              {(hasMessenger || hasFb) && (
                <a
                  href={site.social.messenger || site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-black hover:bg-black/5 transition"
                  style={{ borderColor: NAVY_TO, color: NAVY_TO }}
                >
                  <MessengerIcon className="h-5 w-5" />
                  Messenger
                </a>
              )}
            </div>
            {/* Social row */}
            {socialLinks.some((s) => s.show) && (
              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: NAVY_TO }}>
                  Follow / Review
                </span>
                {socialLinks.filter((s) => s.show).map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="h-10 w-10 rounded-full grid place-items-center bg-white/70 hover:bg-white transition"
                    style={{ color: NAVY_TO }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className="rounded-2xl p-7 border-2 bg-white/60 backdrop-blur"
            style={{ borderColor: `${NAVY_TO}30` }}
          >
            <div className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: NAVY_FROM }}>
              Hours
            </div>
            <div className="mt-4 space-y-3">
              {site.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex justify-between border-b border-black/10 pb-3 last:border-none"
                >
                  <span style={{ color: NAVY_TO }}>{h.days}</span>
                  <span className="font-black" style={{ color: NAVY_FROM }}>{h.time}</span>
                </div>
              ))}
            </div>
            <div
              className="mt-5 rounded-xl p-4 text-sm"
              style={{ background: `${NAVY_FROM}10`, color: NAVY_TO }}
            >
              <span className="font-black uppercase tracking-widest text-xs" style={{ color: NAVY_FROM }}>
                Need it outside hours?
              </span>
              <div className="mt-1">{site.extendedHours}</div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-white text-sm"
        style={{ background: `linear-gradient(90deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-8 grid md:grid-cols-3 gap-6 items-start">
          <div className="flex items-center gap-2 font-black italic uppercase tracking-wide">
            <Image
              src="/brand/logo-circle-sm.png"
              alt=""
              width={32}
              height={32}
              className="rounded-full bg-white"
            />
            {site.longName}
          </div>
          <div className="text-blue-200 text-xs leading-relaxed">
            <div className="font-black text-white uppercase tracking-[0.2em] mb-1">Credentials</div>
            ARC RTA No. AU63933 · Refrigerant Handling Licence · Refrigerant Trading Authorisation
          </div>
          <div className="md:text-right">
            <div className="font-black text-white uppercase tracking-[0.2em] text-xs mb-2">Find Us</div>
            <div className="flex md:justify-end gap-2">
              <a
                href={telHref}
                aria-label="Call"
                className="h-9 w-9 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 transition"
              >
                <PhoneIcon className="h-4 w-4" />
              </a>
              {socialLinks.filter((s) => s.show).map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 w-9 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            {!socialLinks.some((s) => s.show) && (
              <div className="mt-2 text-xs text-blue-200/60 italic">
                FB · Instagram · Google Map links coming
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-blue-200 flex flex-wrap justify-between gap-3">
            <span>© {COPYRIGHT_YEAR} {site.longName}</span>
            <span>Mobile across Brisbane · Logan · Gold Coast · 7 Days</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
