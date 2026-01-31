import { generateMetadata as genMeta, seoPages } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = genMeta(seoPages.taxInvoice);

export { default } from '../invoice-generator/page';
