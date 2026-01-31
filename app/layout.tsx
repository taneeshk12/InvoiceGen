import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ToastProvider } from '@/components/toast-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://invoicegen.ctrlaltbuild.in'),
  title: {
    default: 'InvoiceGen | Executive High-Fidelity Invoice Generator',
    template: '%s | InvoiceGen',
  },
  description:
    'The world\'s most intuitive executive invoice editor. Create professional, tax-compliant A4 invoices with real-time resizing, standalone watermarks, and high-fidelity PDF exports. Free for freelancers and businesses.',
  keywords: [
    'invoice generator',
    'free invoice',
    'executive invoice templates',
    'A4 invoice creator',
    'GST invoice generator India',
    'professional billing software',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvoiceGen | Executive Invoice Editor',
    description: 'Design beautiful invoices with a real-time high-fidelity editor.',
    creator: '@ctrlaltbuild',
  },
  robots: {
    index: true,
    follow: true,
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
          <ToastProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
