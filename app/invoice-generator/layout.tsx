import { generateMetadata as genMeta, seoPages, generateStructuredData } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta(seoPages.invoiceGenerator);

export default function InvoiceGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData(seoPages.invoiceGenerator);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
