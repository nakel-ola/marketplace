import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Marketplace", template: "%S | Marketplace" },
  description:
    "This is a marketplace to but why you need from the confort of your home.",
  applicationName: "Marketplace",
  authors: [{ name: "Nunu Olamilekan", url: "https://nakel.vercel.app/" }],
  creator: "Nunu Olamilekan",
  publisher: "Nunu Olamilekan",
  metadataBase: new URL(process.env.BASE_URL!),
  openGraph: {
    images: [
      {
        url: "/logo.png",
      },
    ],
    type: "website",
    siteName: "Marketplace",
    url: "/",
    description:
      "This is a marketplace to but why you need from the confort of your home.",
  },
  robots: {
    index: false,
    follow: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  manifest: `${process.env.BASE_URL}/favicons/site.webmanifest`,
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "apple-mobile-web-app-title": "Marketplace",
    "msapplication-TileColor": "#0D6EFD",
    "msapplication-config": `${process.env.BASE_URL}/favicons/browserconfig.xml`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col justify-center")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
