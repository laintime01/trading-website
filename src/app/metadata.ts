// src/app/metadata.ts
import type { Metadata } from "next";

const siteConfig = {
  name: "Skilled Trades Hub",
  description: "Professional website templates and solutions for trades professionals",
  author: "Your Name"
} as const;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}` // 这样其他页面可以是 "Contact | Skilled Trades Hub"
  },
  description: `${siteConfig.description} - carpenters, electricians, plumbers, and HVAC specialists`,
  keywords: [
    "trade website templates",
    "carpenter website",
    "electrician website",
    "plumber website",
    "HVAC website",
    "professional trade templates"
  ],
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};