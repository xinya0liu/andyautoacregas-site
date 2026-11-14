import Image from "next/image";
import { site, telHref, COPYRIGHT_YEAR } from "@/lib/site";

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

const workGallery = [
  { tag: "On-site regas", label: "Driveway service" },
  { tag: "Workshop", label: "Compressor replacement" },
  { tag: "Diagnostics", label: "Leak test + UV dye" },
  { tag: "Mobile van", label: "Fully equipped unit" },
  { tag: "Before / after", label: "Vent temp drop" },
  { tag: "Happy customer", label: "Cold air restored" },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Top bar */}
      <header
        className="text-white"
        style={{ background: `linear-gradient(90deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
      >
        <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-circle-sm.png"
              alt="Andy Auto AC Regas"
              width={44}
              height={44}
              priority
              className="rounded-full bg-white"
            />
            <div className="hidden sm:block">
              <div className="font-black italic tracking-wide leading-none">
                ANDY AUTO AC REGAS
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase mt-1" style={{ color: YELLOW }}>
                Mobile · Brisbane · Logan · Gold Coast · 7 Days
              </div>
            </div>
          </div>
          <a
            href={telHref}
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-black text-[#013A69] shadow"
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
              Open 7 Days · 6 AM – 9 PM by booking
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight leading-[1.02] uppercase">
              Cold air back,
              <br />
              <span style={{ color: YELLOW }}>on-site in 45 minutes.</span>
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-xl leading-relaxed">
              Mobile car AC regas, diagnostics and repair across Brisbane,
              Logan, Greenbank, Redland Bay and Gold Coast. We come to you —
              driveway, workplace, anywhere a car parks. Same-day drop-off and
              pick-up available for full AC repairs.
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
              {(hasMessenger || hasFb) && (
                <a
                  href={site.social.messenger || site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-bold hover:bg-white/10 transition"
                >
                  <MessengerIcon className="h-5 w-5" />
                  Message on Facebook
                </a>
              )}
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: YELLOW }}>$140</div>
                <div className="text-xs uppercase tracking-widest text-blue-200 mt-1">Regas from</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: YELLOW }}>45m</div>
                <div className="text-xs uppercase tracking-widest text-blue-200 mt-1">Typical job</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: YELLOW }}>7/7</div>
                <div className="text-xs uppercase tracking-widest text-blue-200 mt-1">Days open</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 relative">
            <div className="relative mx-auto aspect-square max-w-xs rounded-full bg-white p-2 shadow-2xl shadow-black/20">
              <Image
                src="/brand/logo-circle.png"
                alt="Andy Auto AC Regas"
                fill
                priority
                sizes="(max-width: 768px) 60vw, 320px"
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        <div
          className="relative h-3"
          style={{ background: `linear-gradient(90deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)` }}
        />
      </section>

      {/* Services */}
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
          {site.services.map((s, i) => (
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
              <div className="mt-2 text-xs font-black tracking-[0.3em]" style={{ color: NAVY_FROM }}>
                0{i + 1}
              </div>
              <h3 className="mt-1 text-2xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
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

      {/* Credentials */}
      <section
        className="relative overflow-hidden"
        style={{ background: `${NAVY_FROM}08` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
                Licensed &amp; Certified
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                Fully compliant automotive AC technician.
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Only ARCtick-authorised technicians can legally handle automotive
                refrigerant in Australia. Your car is in the right hands.
              </p>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {site.credentials.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-7 bg-white border-2"
                style={{ borderColor: `${NAVY_FROM}22` }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-black text-[#013A69] mb-4"
                  style={{ background: YELLOW }}
                >
                  <CertIcon className="h-3.5 w-3.5" />
                  {c.detail}
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: `linear-gradient(135deg, ${NAVY_FROM} 0%, ${NAVY_TO} 100%)` }}
      >
        <div className="absolute -top-10 -right-10 text-white"><Snowflake size={240} opacity={0.06} /></div>
        <div className="absolute bottom-0 left-20 text-white"><Snowflake size={140} opacity={0.05} /></div>
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: YELLOW }}>
            Why Andy
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight max-w-2xl">
            Qualified. Mobile. Honest about pricing.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {site.benefits.map((b, i) => (
              <div key={b.title}>
                <div
                  className="h-11 w-11 rounded-full grid place-items-center font-black text-[#013A69]"
                  style={{ background: YELLOW }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-lg font-black uppercase tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-blue-100 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-3"
          style={{ background: `linear-gradient(90deg, ${YELLOW_LIGHT} 0%, ${YELLOW} 50%, ${YELLOW_DARK} 100%)` }}
        />
      </section>

      {/* Work gallery — photos/videos placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] font-black" style={{ color: NAVY_FROM }}>
              On the Job
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: NAVY_TO }}>
              Real work. Real cars. Real cold air.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {workGallery.map((item, i) => (
            <div
              key={item.label}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 grid place-items-center text-center p-6"
              style={{
                borderColor: `${NAVY_FROM}22`,
                background: `${NAVY_FROM}${i % 2 === 0 ? "06" : "0C"}`,
                color: NAVY_TO,
              }}
            >
              <div>
                <div className="text-xs font-black uppercase tracking-widest" style={{ color: NAVY_FROM }}>
                  {item.tag}
                </div>
                <div className="mt-2 font-black uppercase">{item.label}</div>
                <div className="mt-3 text-xs text-slate-400">photo / video coming</div>
              </div>
            </div>
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
              Let&apos;s book in today.
            </h2>
            <p className="mt-4 opacity-80 max-w-md">
              Call Andy — you&apos;ll get a time window and a price before the
              van rolls out.
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
            ARCtick Authorisation AU63933 · Refrigerant Handling Licence · Refrigerant Trading Authorisation
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
