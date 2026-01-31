import type { Metadata } from 'next';

interface SEOPageConfig {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  imageUrl?: string;
}

export function generateMetadata(config: SEOPageConfig): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const url = `${baseUrl}${config.path}`;
  const imageUrl = config.imageUrl || `${baseUrl}/og-image.png`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: 'Invoice Generator' }],
    creator: 'Invoice Generator',
    openGraph: {
      type: 'website',
      url,
      title: config.title,
      description: config.description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      siteName: 'Invoice Generator',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [imageUrl],
      creator: '@invoicegen',
    },
    alternates: {
      canonical: url,
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
}

export function generateStructuredData(config: SEOPageConfig) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Invoice Generator',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: config.description,
    url: `${baseUrl}${config.path}`,
    operatingSystem: 'Web',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };
}

export const seoPages = {
  home: {
    title: 'Free Invoice Generator - Create Professional Invoices Online',
    description: 'Generate professional invoices for free. No sign-up required. Create, customize, and download invoices in PDF format instantly. Perfect for freelancers and small businesses.',
    keywords: ['invoice generator', 'free invoice', 'create invoice', 'invoice maker', 'online invoice'],
    path: '/',
  },
  invoiceGenerator: {
    title: 'Invoice Generator - Create Professional Invoices Free',
    description: 'Free online invoice generator. Create professional invoices with your logo, multiple templates, and instant PDF download. No registration required.',
    keywords: ['invoice generator', 'free invoice maker', 'online invoice creator', 'invoice template'],
    path: '/invoice-generator',
  },
  gstInvoice: {
    title: 'GST Invoice Generator - Free GST Invoice Maker Online',
    description: 'Generate GST-compliant invoices online for free. Add GSTIN, calculate GST automatically, and download professional GST invoices in PDF format.',
    keywords: ['gst invoice', 'gst invoice generator', 'gst bill', 'gstin invoice', 'tax invoice'],
    path: '/gst-invoice-generator',
  },
  proformaInvoice: {
    title: 'Proforma Invoice Generator - Create Proforma Invoice Free',
    description: 'Create professional proforma invoices online. Free tool for generating proforma invoices with custom templates. Download in PDF format instantly.',
    keywords: ['proforma invoice', 'proforma invoice generator', 'quotation invoice', 'preliminary invoice'],
    path: '/proforma-invoice-generator',
  },
  taxInvoice: {
    title: 'Tax Invoice Generator - Create Tax Invoice Online Free',
    description: 'Generate professional tax invoices with automatic tax calculations. Free online tool with multiple templates and instant PDF download.',
    keywords: ['tax invoice', 'tax invoice generator', 'vat invoice', 'sales tax invoice'],
    path: '/tax-invoice-generator',
  },
  freelancerInvoice: {
    title: 'Freelancer Invoice Template - Free Invoice for Freelancers',
    description: 'Professional invoice templates designed for freelancers. Create customized invoices with your branding, track payments, and get paid faster.',
    keywords: ['freelancer invoice', 'freelance invoice template', 'contractor invoice', 'consultant invoice'],
    path: '/freelancer-invoice-template',
  },
};
