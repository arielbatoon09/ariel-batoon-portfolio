import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  display: 'swap',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Ariel Batoon - Software Solutions & Web Development',
  description: 'Expert software solutions, custom web development, and digital services to help businesses thrive online.',
  keywords: 'software solutions, web development, digital services, SaaS, business solutions, custom software, Ariel Batoon, developer agency, cebu developer, cebu website',
  authors: [{ name: 'Ariel Batoon' }],
  creator: 'Ariel Batoon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arielbatoon.com/media/ariel_batoon_logo.png',
    title: 'Ariel Batoon - Software Solutions & Web Development',
    description: 'Expert software solutions, custom web development, and digital services to help businesses thrive online.',
    siteName: 'Ariel Batoon | Software Solutions',
    images: [
      {
        url: 'https://arielbatoon.com/media/ariel_batoon_logo.png',
        width: 1200,
        height: 630,
        alt: 'Ariel Batoon - Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariel Batoon - Software Solutions & Web Development',
    description: 'Expert software solutions, custom web development, and digital services to help businesses thrive online.',
    images: ['https://arielbatoon.com/media/ariel_batoon_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/media/favicon.ico',
    shortcut: '/favicon.ico',
  },
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.arielbatoon.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} text-foreground antialiased !font-default overflow-x-hidden flex min-h-screen flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
