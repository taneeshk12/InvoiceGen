import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from '@/components/theme-provider';
import { ToastProvider } from '@/components/toast-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://invoicegen.ctrlaltbuild.in'),
  title: {
    default: 'InvoiceGen | #1 High-Fidelity Executive Invoice Generator',
    template: '%s | InvoiceGen',
  },
  description:
    'Generate professional, tax-compliant A4 invoices with our high-fidelity executive editor. No login required. Features real-time resizing, custom watermarks, and 300 DPI PDF exports for freelancers & businesses.',
  keywords: [
    'online invoice generator',
    'professional invoice templates',
    'A4 PDF invoice creator',
    'free billing software for freelancers',
    'high fidelity invoice editor',
    'GST compliant invoice maker',
    'executive layout invoice',
    'custom brand invoice tool',
    'ctrlaltbuild'
  ],
  authors: [{ name: 'ctrlaltbuild' }],
  creator: 'ctrlaltbuild',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://invoicegen.ctrlaltbuild.in',
    title: 'InvoiceGen | Professional High-Fidelity Invoices',
    description: 'Design beautiful, tax-compliant invoices with an executive-grade real-time editor.',
    siteName: 'InvoiceGen',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'InvoiceGen Editor Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvoiceGen | Executive Invoice Editor',
    description: 'Design beautiful invoices with a real-time high-fidelity editor.',
    creator: '@ctrlaltbuild',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Recommended to add this
  },
  alternates: {
    canonical: 'https://invoicegen.ctrlaltbuild.in',
  },
  other: {
    'apple-mobile-web-app-title': 'InvoiceGen',
    'application-name': 'InvoiceGen',
    'msapplication-TileColor': '#0f172a',
    'theme-color': '#ffffff',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
