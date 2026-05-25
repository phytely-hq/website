import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Phytely | Quants for Plants",
    template: "%s | Phytely",
  },
  description: "Phytely builds the quantitative tools and IoT infrastructure required for risk-averse, data-driven agriculture. We provide high-fidelity stochastic risk modeling and intelligent data layers to optimize resource efficiency.",
  keywords: [
    "Phytely", 
    "Quants for Plants", 
    "Plant Smarter", 
    "Grow Greener", 
    "Fruit Logo",
    "Precision Agriculture", 
    "Data Science", 
    "Low-Risk Farming",
    "Agentic AI Agriculture",
    "Stochastic Risk Modeling",
    "Temo",
    "Lihoai"
  ],
  authors: [{ name: "Phytely" }],
  creator: "Phytely",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phytely.com",
    siteName: "Phytely",
    title: "Phytely | Quants for Plants",
    description: "Intelligent data layers for modern plant management. Built for precision, efficiency, and scale.",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Phytely - Quants for Plants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phytely | Quants for Plants",
    description: "Building the quantitative infrastructure for a smarter, greener, and more risk-averse farming world.",
    images: ["/og-image-v2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
           attribute="class"
           defaultTheme="dark"
           enableSystem
           disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
