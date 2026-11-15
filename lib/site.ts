export const site = {
  name: "Andy Auto Regas",
  longName: "Andy Auto Regas Mobile Service",
  tagline: "Professional Mobile AC Regas Service in Brisbane, Logan & Gold Coast",
  phone: "0478 701 289",
  phoneDigits: "0478701289",
  // Trust signals the owner wants reinforced above the fold.
  arcNumber: "AU63933",
  yearsInBusiness: 10,
  ownerFirstName: "Andy",
  // Google Reviews — set count > 0 to show the numeric rating card.
  // If count is 0 the UI falls back to a "Read our reviews" link without numbers.
  googleReviews: {
    rating: 5.0,
    count: 8,
  },
  // Real quotes pulled from the live Google Business Profile 2026-11-16.
  testimonials: [
    {
      author: "Christian Rasmussen",
      meta: "7 reviews · 3 photos",
      stars: 5,
      quote:
        "I can't recommend Andy highly enough! Andy came out to regas the air conditioning on my car.",
    },
    {
      author: "Ivy Lin",
      meta: "Local Guide · 23 reviews",
      stars: 5,
      quote:
        "Andy was very professional and knowledgeable. With over 10 years of experience in car diagnostics, he knew his stuff.",
    },
    {
      author: "badgi barra",
      meta: "2 reviews",
      stars: 5,
      quote:
        "Andy was very professional and thorough. Even though I was at work he communicated very well with me.",
    },
  ],
  smsQuoteTemplate:
    "Hi Andy, I'd like a quote for my [car make/model/year] in [suburb]. What's your next available?",
  hours: [
    { days: "Open 7 Days", time: "7:00 AM – 9:00 PM" },
  ],
  // Extended availability note shown separately on site
  extendedHours:
    "Early starts and late finishes available by booking — just call ahead.",
  services: [
    {
      slug: "regas",
      name: "AC Regas Service",
      price: "From $140",
      blurb:
        "Full regas with high-grade refrigerant. Most jobs done on-site in 30–45 minutes.",
    },
    {
      slug: "check",
      name: "AC System Check",
      price: "From $100",
      blurb:
        "Diagnose weak cooling, leaks, bad smells or noisy compressors before you spend on a regas.",
    },
    {
      slug: "repair",
      name: "AC Repair",
      price: "Quote on Site",
      blurb:
        "Compressor, condenser, hoses, electrical. Same-day drop-off and pick-up available — most AC fixes finished the same day when you book ahead.",
    },
  ],
  benefits: [
    {
      title: "Mobile Service",
      body: "We come to your location — home, work, or anywhere convenient for you.",
    },
    {
      title: "Experienced Technician",
      body: "Qualified and experienced in automotive AC systems.",
    },
    {
      title: "Competitive Prices",
      body: "Fair and transparent pricing. No hidden fees — you know the cost upfront.",
    },
    {
      title: "Fast Service",
      body: "Most AC regas services completed within 30–45 minutes.",
    },
    {
      title: "Quality Guarantee",
      body: "We use quality refrigerant and genuine parts.",
    },
    {
      title: "Flexible Scheduling",
      body: "Open 7 days. 6:00 AM – 9:00 PM by booking — early starts, late finishes, weekends.",
    },
  ],
  areas: [
    {
      region: "Brisbane South",
      suburbs: ["Sunnybank", "Eight Mile Plains", "Calamvale", "Stretton"],
    },
    {
      region: "Logan Area",
      suburbs: ["Logan Central", "Springwood", "Daisy Hill", "Shailer Park"],
    },
    {
      region: "Greenbank",
      suburbs: ["Greenbank", "Park Ridge", "Boronia Heights"],
    },
    {
      region: "Redland Bay",
      suburbs: ["Redland Bay", "Mount Cotton", "Sheldon"],
    },
    {
      region: "Gold Coast (North)",
      suburbs: ["Yatala", "Ormeau", "Pimpama", "Coomera", "Upper Coomera"],
    },
  ],
  // Licensed and certified — displayed in a dedicated panel
  credentials: [
    {
      title: "ARC RTA Authorised",
      detail: "No. AU63933",
      body: "Refrigerant Trading Authorisation issued by the Australian Refrigeration Council.",
    },
    {
      title: "Refrigerant Handling Licence",
      detail: "RHL",
      body: "Qualified to install, service, repair and decommission automotive AC systems.",
    },
    {
      title: "Refrigerant Trading Authorisation",
      detail: "RTA",
      body: "Authorised to acquire, store, supply and dispose of fluorocarbon refrigerants.",
    },
  ],
  // Social / discovery links. Leave as '' to hide the icon.
  social: {
    facebook: "https://www.facebook.com/andy.auto.ac.regas/",
    instagram: "https://www.instagram.com/andy.auto.ac.regas/",
    googleMap: "https://maps.app.goo.gl/dYg1VcqxV72SwBXT6",
    messenger: "https://m.me/andy.auto.ac.regas",
  },
} as const;

export const telHref = `tel:+61${site.phoneDigits.slice(1)}`;
export const smsQuoteHref = `sms:+61${site.phoneDigits.slice(1)}?&body=${encodeURIComponent(site.smsQuoteTemplate)}`;
export const COPYRIGHT_YEAR = 2026;
