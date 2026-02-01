import { Metadata } from 'next';
import { getNicheBySlug, getAllNicheSlugs } from '@/lib/niches';

interface Props {
  params: {
    profession: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nicheData = getNicheBySlug(params.profession);

  if (!nicheData) {
    return {
      title: 'Not Found',
      description: 'Page not found'
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const url = `${baseUrl}/invoice-template-for-${params.profession}`;

  return {
    title: `${nicheData.title} Invoice Template - Free Professional Invoice Generator`,
    description: nicheData.metaDescription,
    keywords: nicheData.keywords,
    authors: [{ name: 'InvoiceGen' }],
    creator: 'InvoiceGen',
    openGraph: {
      type: 'website',
      url,
      title: `Free ${nicheData.title} Invoice Template`,
      description: nicheData.metaDescription,
      siteName: 'InvoiceGen',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${nicheData.title} Invoice Template`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Free ${nicheData.title} Invoice Template`,
      description: nicheData.metaDescription,
      images: [`${baseUrl}/og-image.png`],
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

export async function generateStaticParams() {
  const slugs = getAllNicheSlugs();
  
  return slugs.map((slug) => ({
    profession: slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
