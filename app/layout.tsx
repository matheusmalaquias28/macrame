import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Gtm } from "@/components/Gtm";
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";
import { hero } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
});

const pageTitle = `${hero.titleHighlight}${hero.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://macrame.blogestudos.com"),
  title: pageTitle,
  description: hero.subtitle,
  applicationName: pageTitle,
  keywords: ["macramê", "mesa posta", "projetos de macramê", "macramê passo a passo"],
  openGraph: {
    title: pageTitle,
    description: hero.subtitle,
    siteName: pageTitle,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: hero.image.src,
        width: hero.image.width,
        height: hero.image.height,
        alt: hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: hero.subtitle,
    images: [hero.image.src],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="preload" as="image" href="/macrame-hero.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body>
        {children}
        <ThirdPartyScripts />
        <Gtm />
        <Analytics />
      </body>
    </html>
  );
}
