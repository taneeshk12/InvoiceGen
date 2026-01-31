import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'How to Create Professional Invoices in 2026 | InvoiceGen Guide',
  description: 'Learn the essential elements of a professional invoice and how to use InvoiceGen to create 300 DPI, tax-compliant PDF invoices for your business.',
  keywords: ['professional invoices', 'how to make invoice', 'invoice requirements 2026', 'freelance billing tips', 'invoice template guide'],
  openGraph: {
    title: 'Mastering Professional Invoicing: A Complete Guide',
    description: 'Everything you need to know about making invoices that get you paid faster.',
    type: 'article',
    publishedTime: '2026-01-31',
    authors: ['InvoiceGen Team'],
  }
};

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Button>
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1]">
            How to Create <span className="text-primary">Professional Invoices</span> That Get You Paid Faster
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium border-y py-4">
            <div className="flex items-center gap-2"><User className="h-4 w-4" /> InvoiceGen Team</div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan 31, 2026</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 6 min read</div>
          </div>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
            In the world of freelancing and consultancy, your invoice is more than just a request for payment—it's a reflection of your professional brand. A well-designed invoice builds trust, reduces payment delays, and ensures compliance with tax authorities. 
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. The Essential Check-list</h2>
          <p>Every professional invoice should contain these non-negotiable elements:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Clear Header:</strong> "Invoice" should be the largest text to avoid confusion.</li>
            <li><strong>Unique ID:</strong> A sequential invoice number (e.g., INV-001).</li>
            <li><strong>Contact Info:</strong> Your full name/business name and the client's details.</li>
            <li><strong>Date & Due Date:</strong> Explicitly state when the invoice was issued and when payment is expected.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. Why Design Matters</h2>
          <p>
            Using a tool like <Link href="/" className="text-primary font-bold">InvoiceGen</Link> allows you to move beyond generic spreadsheets. Our <strong>Executive Templates</strong> use professional typography (like Inter/DM Sans) and balanced white space to ensure your invoice is readable and respectable.
          </p>

          <div className="bg-slate-100 dark:bg-slate-900 border-l-4 border-primary p-8 my-12 rounded-r-xl">
            <p className="m-0 italic font-medium">
              "A professional layout reduces the 'friction' of payment. When an invoice looks official and clear, clients are less likely to question the line items or delay the transfer."
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Scaling for High Fidelity</h2>
          <p>
            Most online generators produce blurry PDFs. InvoiceGen uses a high-fidelity capture engine that outputs at <strong>300 DPI</strong>, ensuring that if your client prints your invoice, every line and logo remains sharp.
          </p>

          <div className="mt-16 p-12 bg-primary/5 rounded-[2rem] text-center border border-primary/10">
            <h3 className="text-2xl font-black mb-4">Ready to generate your first invoice?</h3>
            <p className="mb-8">No login required. Just pick a template and start billing.</p>
            <Link href="/invoice-generator">
              <Button size="lg" className="rounded-xl px-12 h-14 text-lg">
                Go to Invoice Editor <FileText className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} InvoiceGen. Open Source Professional Billing.</p>
        </div>
      </footer>
    </article>
  );
}
