'use client';

import * as React from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { getNicheBySlug, getRelatedNiches } from '@/lib/niches';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Download,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Star
} from 'lucide-react';

export default function NicheLandingPage() {
  const params = useParams();
  const profession = params.profession as string;
  
  const nicheData = getNicheBySlug(profession);
  
  if (!nicheData) {
    notFound();
  }

  const relatedNiches = getRelatedNiches(profession, 3);

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
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/invoice-generator">
                <Button size="lg" className="shadow-lg shadow-primary/25 font-semibold">
                  Create Invoice
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6 animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Free Professional Invoice Template</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Invoice Template for{' '}
              <span className="text-primary">{nicheData.title}s</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {nicheData.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/invoice-generator">
                <Button size="lg" className="text-lg px-8 py-6 shadow-2xl shadow-primary/30 hover:scale-105 transition-transform font-bold">
                  <FileText className="mr-2 h-5 w-5" />
                  Create Your Invoice Now
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold">
                  See Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>No Sign-up</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Instant Download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="features">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">
                Perfect for <span className="text-primary">{nicheData.profession}</span> Professionals
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to create professional invoices for your {nicheData.profession.toLowerCase()} business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {nicheData.benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-blue-500" />
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription className="text-base">
                    Create professional invoices in under 2 minutes
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <Download className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle>Instant PDF Download</CardTitle>
                  <CardDescription className="text-base">
                    Download your invoice as a PDF immediately
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-purple-500" />
                  </div>
                  <CardTitle>Privacy First</CardTitle>
                  <CardDescription className="text-base">
                    Your data stays in your browser, never stored
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Invoice Items */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">
                Common Services for <span className="text-primary">{nicheData.title}s</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Pre-populated service items to help you get started quickly
              </p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {nicheData.commonItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">
                Invoicing Tips for <span className="text-primary">{nicheData.title}s</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Best practices to ensure you get paid on time
              </p>
            </div>

            <div className="grid gap-6">
              {nicheData.tips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium leading-relaxed">{tip}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-primary mb-2">10k+</div>
                <div className="text-sm text-muted-foreground font-medium">Invoices Created</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Free Forever</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-primary mb-2">&lt;2min</div>
                <div className="text-sm text-muted-foreground font-medium">Average Time</div>
              </Card>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl font-black text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground font-medium">User Rating</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Niches */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">
                Other Professional Templates
              </h2>
              <p className="text-xl text-muted-foreground">
                Invoice templates for other professions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedNiches.map((niche) => (
                <Link key={niche.slug} href={`/invoice-template-for-${niche.slug}`}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {niche.title} Invoice
                      </CardTitle>
                      <CardDescription className="text-base">
                        {niche.description.substring(0, 100)}...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        View Template
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Ready to Create Your {nicheData.title} Invoice?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of {nicheData.profession.toLowerCase()} professionals who trust our invoice generator
            </p>
            <Link href="/invoice-generator">
              <Button size="lg" className="text-lg px-12 py-6 shadow-2xl shadow-primary/30 hover:scale-105 transition-transform font-bold">
                <FileText className="mr-2 h-5 w-5" />
                Start Creating - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>No credit card required • No signup • 100% Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="bg-primary p-2 rounded-xl">
                    <FileText className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-black">InvoiceGen</span>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Professional invoice templates for every profession
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/invoice-generator" className="hover:text-primary">Invoice Generator</Link></li>
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><Link href="/blog/how-to-create-professional-invoices" className="hover:text-primary">Blog</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Templates</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/freelancer-invoice-template" className="hover:text-primary">Freelancer</Link></li>
                  <li><Link href="/gst-invoice-generator" className="hover:text-primary">GST Invoice</Link></li>
                  <li><Link href="/tax-invoice-generator" className="hover:text-primary">Tax Invoice</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2026 InvoiceGen. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
