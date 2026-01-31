'use client';

import * as React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Zap, 
  Shield, 
  Download, 
  ArrowRight, 
  Layers, 
  Settings, 
  Palette, 
  CheckCircle2, 
  MousePointer2,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Header */}
      <header className="border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                Invoice<span className="text-primary">Gen</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
              <Link href="#templates" className="hover:text-primary transition-colors">Templates</Link>
              <Link href="/blog/how-to-create-professional-invoices" className="hover:text-primary transition-colors">Guides</Link>
              <Link href="/invoice-generator" className="text-primary font-bold">Try Editor</Link>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/invoice-generator">
                <Button className="rounded-full px-6 shadow-md shadow-primary/20 hover:scale-105 transition-transform">
                  Create Invoice <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -z-10 bg-gradient-to-l from-primary/10 to-transparent w-1/2 h-full blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 -z-10 bg-gradient-to-r from-blue-500/10 to-transparent w-1/2 h-full blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 animate-bounce">
            <Zap className="h-3 w-3" /> No Registration Required
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            Professional Invoices<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Purely Visual.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
            The world's most intuitive invoice editor. Design beautiful, tax-compliant invoices with real-time preview, high-fidelity PDF exports, and executive-grade templates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="/invoice-generator">
              <Button size="lg" className="h-14 px-10 text-lg rounded-2xl shadow-2xl shadow-primary/40">
                Start Creating — It's Free
              </Button>
            </Link>
            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden shadow-sm">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 42}`} 
                      alt="User avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                <CheckCircle2 className="h-4 w-4 text-green-500" /> Joined by 10k+ freelancers as customers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Proof */}
      <div className="border-y bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Templates", value: "Executive 5+" },
              { label: "Time to Create", value: "< 60s" },
              { label: "PDF Quality", value: "300 DPI" },
              { label: "Security", value: "E2E Local" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Built for the modern <br />
              <span className="text-primary">Business Executive.</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: <MousePointer2 className="text-blue-500" />, title: "Precision Resizable Editor", desc: "Drag and resize your workspace. Scale the preview to A4 print resolution in real-time." },
                { icon: <Palette className="text-purple-500" />, title: "Design Customization", desc: "Change typography, colors, watermark opacity, and branding with executive-grade precision." },
                { icon: <Share2 className="text-pink-500" />, title: "Smart Share Links", desc: "Generate a prefilled link to share with clients or save your progress instantly." },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{f.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-gradient-to-br from-primary to-blue-600 rounded-[3rem] p-4 shadow-3xl">
                <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden aspect-[4/3] relative">
                   <div className="absolute inset-0 bg-slate-800/50 animate-pulse" />
                   <div className="absolute top-0 inset-x-0 h-8 bg-slate-800 flex items-center px-4 gap-1.5 border-b border-slate-700">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                   </div>
                   <div className="p-8 pt-12 text-slate-400 font-mono text-sm leading-relaxed">
                      &gt; Loading high-fidelity A4 template...<br/>
                      &gt; Rendering Professional Slate-900 grid...<br/>
                      &gt; Syncing real-time workspace resize...<br/>
                      <span className="text-primary animate-pulse">_</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="bg-slate-50 dark:bg-slate-900/20 py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Choose Your Executive Look.</h2>
            <p className="text-xl text-slate-500">Every template is optimized for professional correspondence, tax compliance, and pixel-perfect PDF export.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                id: 'professional', 
                name: 'Professional Slate', 
                desc: 'The industry standard for consulting and corporate billing.',
                accent: 'bg-slate-900',
                preview: (
                  <div className="space-y-4">
                    <div className="flex justify-between items-start border-b pb-4">
                      <div className="h-6 w-20 bg-slate-900 rounded" />
                      <div className="text-[10px] text-right space-y-1">
                        <div className="h-2 w-16 bg-slate-100 ml-auto rounded" />
                        <div className="h-2 w-12 bg-slate-100 ml-auto rounded" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-2 w-full bg-slate-50 rounded" />
                       <div className="h-2 w-full bg-slate-50 rounded" />
                       <div className="h-2 w-2/3 bg-slate-50 rounded" />
                    </div>
                    <div className="pt-4 border-t">
                       <div className="flex justify-between">
                         <div className="h-3 w-12 bg-slate-200 rounded" />
                         <div className="h-3 w-16 bg-slate-900 rounded" />
                       </div>
                    </div>
                  </div>
                )
              },
              { 
                id: 'modern', 
                name: 'Modern Minimal', 
                desc: 'Clean, spacious, and perfect for digital-first agencies.',
                accent: 'bg-blue-600',
                preview: (
                  <div className="space-y-4">
                    <div className="h-8 w-8 bg-blue-600 rounded-lg mb-6" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-100 rounded" />
                        <div className="h-2 w-2/3 bg-slate-100 rounded" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-slate-50 rounded" />
                        <div className="h-2 w-full bg-slate-50 rounded" />
                      </div>
                    </div>
                    <div className="h-12 w-full bg-slate-50 rounded-xl mt-4 flex items-center px-4 justify-between">
                       <div className="h-2 w-16 bg-slate-200 rounded" />
                       <div className="h-2 w-12 bg-blue-600 rounded" />
                    </div>
                  </div>
                )
              },
              { 
                id: 'minimal', 
                name: 'Classic Executive', 
                desc: 'No-nonsense layout that focuses on the data.',
                accent: 'bg-slate-400',
                preview: (
                  <div className="space-y-3">
                    <div className="text-center pb-4 border-b">
                      <div className="h-3 w-24 bg-slate-200 mx-auto rounded" />
                    </div>
                    <div className="space-y-1.5 py-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between py-1 border-b border-slate-50">
                          <div className="h-2 w-20 bg-slate-100 rounded" />
                          <div className="h-2 w-8 bg-slate-100 rounded" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end pt-2">
                      <div className="h-4 w-20 bg-slate-200 rounded" />
                    </div>
                  </div>
                )
              },
            ].map((tmpl) => (
              <Link key={tmpl.id} href={`/invoice-generator?template=${tmpl.id}`}>
                <Card className="group hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden border-2 h-full flex flex-col">
                  <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-900/50 relative p-8">
                     <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="bg-white dark:bg-slate-950 shadow-2xl rounded-sm h-full w-full transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col p-6 border dark:border-slate-800">
                        {tmpl.preview}
                        <div className="mt-auto pt-6 flex justify-center"></div>
                           <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                              USE THIS TEMPLATE
                           </div>
                        </div>
                     </div>
                  </div>
                  <CardHeader className="mt-auto">
                    <CardTitle className="group-hover:text-primary transition-colors flex items-center justify-between">
                      {tmpl.name}
                      <div className={`h-2 w-2 rounded-full ${tmpl.accent}`} />
                    </CardTitle>
                    <CardDescription>{tmpl.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-600/30 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to look professional?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
              Join thousands of businesses who use InvoiceGen for their daily billing. No hidden fees, no limits.
            </p>
            <Link href="/invoice-generator">
              <Button size="lg" className="h-16 px-12 text-xl rounded-2xl bg-white text-black hover:bg-slate-100 shadow-xl shadow-white/10">
                Get Started Now — It's Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-900/50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold tracking-tighter">InvoiceGen</span>
              </div>
              <p className="text-sm text-slate-500">© 2026 InvoiceGen. Built with precision by ctrlaltbuild.in</p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-400">
                <Link href="/blog/how-to-create-professional-invoices" className="hover:text-primary transition-colors">Professional Guide</Link>
                <Link href="/blog/benefits-of-local-first-invoice-generation" className="hover:text-primary transition-colors">Privacy First</Link>
                <Link href="/blog/freelance-billing-guide-2026" className="hover:text-primary transition-colors">Freelance Guide 2026</Link>
              </div>
              <a href="mailto:team@ctrlaltbuild.in" className="text-sm font-bold bg-white dark:bg-slate-900 px-6 py-2.5 rounded-full shadow-md border hover:border-primary hover:text-primary transition-all">
                team@ctrlaltbuild.in
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
