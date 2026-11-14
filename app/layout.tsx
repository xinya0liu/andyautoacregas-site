import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://andyautoacregas.com.au";
const DESCRIPTION =
  "Mobile car AC regas, system check and repair across Brisbane, Logan, Greenbank, Redland Bay and the northern Gold Coast. From $140, on-site in 30–45 minutes. Open 7 days, 6AM–9PM by booking. ARCtick licensed (AU63933).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.longName} — Mobile AC Regas Brisbane, Logan & Gold Coast`,
    template: `%s · ${site.name}`,
  },
  description: DESCRIPTION,
  applicationName: site.longName,
  keywords: [
    "car ac regas brisbane",
    "mobile ac regas",
    "logan car aircon",
    "gold coast car aircon repair",
    "car air conditioning",
    "arctick licensed",
    "automotive ac repair",
    "mobile mechanic brisbane",
    "car aircon not cold",
    "r134a regas",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: site.longName,
    title: `${site.longName} — Cold air back, on-site in 45 minutes`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.longName} — Mobile AC Regas`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  authors: [{ name: site.longName }],
  category: "Automotive Service",
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
