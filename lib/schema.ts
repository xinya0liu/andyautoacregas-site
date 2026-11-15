import { site } from "./site";

const SITE_URL = "https://andyautoacregas.com.au";

// AutoRepair is a Schema.org subtype of LocalBusiness that Google uses for
// automotive service businesses — unlocks local pack + knowledge panel.
export function localBusinessJsonLd() {
  const services = site.services.map((s) => ({
    "@type": "OfferCatalog",
    name: s.name,
    description: s.blurb,
    itemOffered: {
      "@type": "Service",
      name: s.name,
      priceSpecification: {
        "@type": "PriceSpecification",
        price: s.price.replace(/^From \$/, "").replace(/Quote.*/i, ""),
        priceCurrency: "AUD",
      },
    },
  }));

  const openingHours = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
  ];

  const sameAs = [
    site.social.facebook,
    site.social.instagram,
    site.social.googleMap,
  ].filter(Boolean);

  const areaServed = site.areas.flatMap((a) =>
    a.suburbs.map((s) => ({
      "@type": "City",
      name: s,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Queensland",
      },
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SITE_URL}#business`,
    name: site.longName,
    alternateName: site.name,
    description: site.tagline,
    url: SITE_URL,
    image: `${SITE_URL}/brand/logo-circle.png`,
    logo: `${SITE_URL}/brand/logo-circle.png`,
    telephone: `+61${site.phoneDigits.slice(1)}`,
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Credit Card, PayID, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    areaServed,
    openingHoursSpecification: openingHours,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC Services",
      itemListElement: services,
    },
    sameAs,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ARC Refrigerant Trading Authorisation",
        credentialCategory: "licence",
        identifier: "AU63933",
        recognizedBy: {
          "@type": "Organisation",
          name: "Australian Refrigeration Council",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Refrigerant Handling Licence",
        credentialCategory: "licence",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Refrigerant Trading Authorisation",
        credentialCategory: "licence",
      },
    ],
  };
}
