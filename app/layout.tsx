import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coupon Clipper - Never Miss a King Soopers Digital Coupon Again",
  description:
    "Automatically clip all 250 digital coupons at King Soopers before you shop. Free browser extension for Chrome and Firefox. Save money effortlessly on groceries.",
  keywords: [
    "King Soopers coupons",
    "digital coupons",
    "grocery savings",
    "coupon clipper",
    "browser extension",
    "Chrome extension",
    "Firefox addon",
    "automatic coupons",
    "grocery deals",
    "save money shopping",
  ],
  authors: [{ name: "Coupon Clipper Team" }],
  creator: "Coupon Clipper",
  publisher: "Coupon Clipper",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coupon-clipper.com",
    siteName: "Coupon Clipper",
    title: "Coupon Clipper - Never Miss a King Soopers Digital Coupon Again",
    description:
      "Automatically clip all 250 digital coupons at King Soopers before you shop. Free browser extension for Chrome and Firefox.",
    images: [
      {
        url: "/images/clip.png",
        width: 400,
        height: 300,
        alt: "Coupon Clipper Browser Extension Interface",
      },
      {
        url: "/images/in-store.jpg",
        width: 500,
        height: 400,
        alt: "King Soopers store pricing showing digital coupon savings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coupon Clipper - Never Miss a King Soopers Digital Coupon Again",
    description:
      "Automatically clip all 250 digital coupons at King Soopers. Free browser extension for Chrome and Firefox.",
    images: ["/images/clip.png"],
    creator: "@couponclipperapp",
  },
  alternates: {
    canonical: "https://coupon-clipper.com",
  },
  category: "Shopping",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Coupon Clipper" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.youtube.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Coupon Clipper",
              description:
                "Automatically clip all 250 digital coupons at King Soopers before you shop. Free browser extension for Chrome and Firefox.",
              url: "https://coupon-clipper.com",
              applicationCategory: "BrowserApplication",
              operatingSystem: ["Windows", "macOS", "Linux", "Android"],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Coupon Clipper Team",
              },
              downloadUrl: [
                "https://chromewebstore.google.com/detail/coupon-clipper/mhlpjojbmabefhmkodfokajcdblpfoca",
                "https://addons.mozilla.org/en-GB/firefox/addon/coupon-clipper/",
              ],
              screenshot: "/images/clip.png",
              featureList: [
                "Automatically clips up to 250 digital coupons",
                "Works on King Soopers website",
                "Available for Chrome and Firefox",
                "Mobile support on Firefox for Android",
                "Free and open source",
                "No data collection or tracking",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "100",
                bestRating: "5",
                worstRating: "1",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coupon Clipper",
              url: "https://coupon-clipper.com",
              logo: "/icon.svg",
              sameAs: [
                "https://github.com/DavidZirinsky/Coupon-Clipper",
                "https://chromewebstore.google.com/detail/coupon-clipper/mhlpjojbmabefhmkodfokajcdblpfoca",
                "https://addons.mozilla.org/en-GB/firefox/addon/coupon-clipper/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://github.com/DavidZirinsky/Coupon-Clipper/issues",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does Coupon Clipper work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Coupon Clipper automatically clips all available digital coupons on the King Soopers website. Simply install the browser extension, visit King Soopers, and click the extension button to clip up to 250 coupons in minutes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Coupon Clipper free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Coupon Clipper is completely free to use. It's also open source, meaning the code is publicly available and transparent.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which browsers support Coupon Clipper?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Coupon Clipper is available for Google Chrome and Mozilla Firefox. It also works on Firefox for Android mobile devices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many coupons can I clip?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can clip up to 250 digital coupons, which is the maximum limit set by King Soopers.",
                  },
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />

        {/* Video Schema for Demo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Coupon Clipper Demo - How to Automatically Clip King Soopers Coupons",
              description:
                "Watch how easy it is to clip all your King Soopers digital coupons automatically with the Coupon Clipper browser extension.",
              thumbnailUrl: "/images/clip.png",
              uploadDate: "2024-01-01T00:00:00Z",
              duration: "PT2M",
              embedUrl: "https://www.youtube.com/embed/t3esIQwrWVY",
              publisher: {
                "@type": "Organization",
                name: "Coupon Clipper",
                logo: {
                  "@type": "ImageObject",
                  url: "/icon.svg",
                },
              },
            }).replace(/</g, "\u003c"),
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0QEFJZRSDY"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0QEFJZRSDY');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
