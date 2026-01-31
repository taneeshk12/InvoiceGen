import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Privacy and Speed: Benefits of Local-First Invoice Generation',
  description: 'Discover why generating invoices locally in your browser is more secure than cloud-based alternatives. User privacy, speed, and real-time previews.',
  keywords: ['private invoice generator', 'client privacy for freelancers', 'no login invoice tool', 'secure billing', 'local-first app benefits'],
  openGraph: {
    title: 'The Future of Billing is Local-First',
    description: 'Why you should stop uploading your client data to random servers for simple invoices.',
    type: 'article',
    publishedTime: '2026-01-31',
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
            The <span className="text-primary">Local-First</span> Advantage: Why Privacy Matters in Invoicing
          </h1>
          
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium border-y py-4">
            <div className="flex items-center gap-2"><User className="h-4 w-4" /> InvoiceGen Team</div>
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan 31, 2026</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 4 min read</div>
          </div>
        </header>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
            Most modern SaaS tools require you to create an account, upload your sensitive data, and let it sit on a remote server forever. At <Link href="/" className="text-primary font-bold">InvoiceGen</Link>, we took a different path: <strong>Local-First Generation.</strong>
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Zero Data Persistence</h2>
          <p>
            When you enter your client's name or your own bank details into our editor, that data never leaves your browser. We don't have a database of your invoices, and we don't track your earnings. Your business is your own.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border">
                <ShieldCheck className="h-10 w-10 text-green-500 mb-4" />
                <h3 className="font-bold mb-2">Maximum Privacy</h3>
                <p className="text-sm opacity-70">Client data stays on your machine. Perfect for NDA-sensitive work.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border">
                <Lock className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">No Registration</h3>
                <p className="text-sm opacity-70">Avoid the "sign-up fatigue". Open, edit, and export in under a minute.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">Instant Performance</h2>
          <p>
            Because there are no API calls to a server to "save" or "generate" the PDF, the experience is instantaneous. Our editor scale responds to your window size immediately, and PDF generation happens on your device's hardware, not a throttled cloud worker.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
          <p>
            Security doesn't always mean complex firewalls. Sometimes, the most secure way to handle data is to never collect it in the first place. Experience the speed of privacy-first tools at InvoiceGen.
          </p>
          
          <div className="mt-16 text-center">
             <Link href="/invoice-generator">
              <Button size="lg" className="rounded-full px-12 h-14 bg-slate-900 text-white dark:bg-white dark:text-black">
                Experience Secure Billing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
