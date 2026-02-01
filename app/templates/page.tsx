'use client';

import * as React from 'react';
import Link from 'next/link';
import { niches } from '@/lib/niches';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';
import { FileText, ArrowRight, Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function AllTemplatesPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredNiches = niches.filter(niche => 
    niche.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    niche.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group niches by category
  const categorizedNiches = {
    'Creative Professionals': filteredNiches.filter(n => 
      ['photographer', 'graphic-designer', 'web-developer', 'video-editor', 'interior-designer'].includes(n.slug)
    ),
    'Marketing & Business': filteredNiches.filter(n => 
      ['social-media-manager', 'copywriter', 'marketing-consultant'].includes(n.slug)
    ),
    'Technical & IT': filteredNiches.filter(n => 
      ['it-consultant', 'software-developer', 'data-analyst'].includes(n.slug)
    ),
    'Health & Wellness': filteredNiches.filter(n => 
      ['personal-trainer', 'yoga-instructor', 'nutritionist', 'therapist', 'massage-therapist'].includes(n.slug)
    ),
    'Education & Training': filteredNiches.filter(n => 
      ['tutor', 'music-teacher', 'language-teacher'].includes(n.slug)
    ),
    'Event & Hospitality': filteredNiches.filter(n => 
      ['event-planner', 'caterer', 'dj'].includes(n.slug)
    ),
    'Home & Property Services': filteredNiches.filter(n => 
      ['real-estate-agent', 'property-manager', 'contractor', 'electrician', 'plumber', 'landscaper', 'house-cleaner'].includes(n.slug)
    ),
    'Automotive': filteredNiches.filter(n => 
      ['auto-mechanic', 'car-detailer'].includes(n.slug)
    ),
    'Beauty & Personal Care': filteredNiches.filter(n => 
      ['hairstylist', 'makeup-artist', 'nail-technician'].includes(n.slug)
    ),
    'Pet Services': filteredNiches.filter(n => 
      ['pet-groomer', 'dog-trainer', 'pet-sitter', 'veterinarian'].includes(n.slug)
    ),
    'Trades & Specialized': filteredNiches.filter(n => 
      ['carpenter', 'painter', 'hvac-technician', 'roofing-contractor'].includes(n.slug)
    ),
    'Professional Services': filteredNiches.filter(n => 
      ['lawyer', 'consultant', 'accountant', 'bookkeeper', 'virtual-assistant', 'translator', 'voice-actor'].includes(n.slug)
    ),
  };

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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6 animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>50+ Professional Invoice Templates</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight mb-6">
              Invoice Templates for Every{' '}
              <span className="text-primary">Profession</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find the perfect invoice template tailored to your profession. Free, professional, and ready to use in seconds.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for your profession (e.g., photographer, lawyer, designer...)"
                className="pl-12 pr-4 py-6 text-lg shadow-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold">{filteredNiches.length}</span> templates available
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {Object.entries(categorizedNiches).map(([category, categoryNiches]) => {
              if (categoryNiches.length === 0) return null;
              
              return (
                <div key={category} className="mb-16">
                  <h2 className="text-3xl font-black mb-8 pb-4 border-b">
                    {category}
                    <span className="ml-3 text-lg font-normal text-muted-foreground">
                      ({categoryNiches.length})
                    </span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryNiches.map((niche) => (
                      <Link key={niche.slug} href={`/invoice-template-for-${niche.slug}`}>
                        <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-4">
                              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <FileText className="h-6 w-6 text-primary" />
                              </div>
                              <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <CardTitle className="text-xl mb-2">
                              {niche.title} Invoice
                            </CardTitle>
                            <CardDescription className="text-sm line-clamp-2">
                              {niche.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-xs text-muted-foreground">
                              {niche.commonItems.length} common services included
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {filteredNiches.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No templates found</h3>
                <p className="text-muted-foreground mb-6">
                  Try a different search term or browse all templates
                </p>
                <Button onClick={() => setSearchTerm('')} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-6">
              Ready to Create Your Professional Invoice?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose a template above or start with our general invoice generator
            </p>
            <Link href="/invoice-generator">
              <Button size="lg" className="text-lg px-12 py-6 shadow-2xl shadow-primary/30 hover:scale-105 transition-transform font-bold">
                <FileText className="mr-2 h-5 w-5" />
                Create Invoice Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                  <li><Link href="/templates" className="hover:text-primary">All Templates</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Popular Templates</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/invoice-template-for-photographer" className="hover:text-primary">Photographer</Link></li>
                  <li><Link href="/invoice-template-for-consultant" className="hover:text-primary">Consultant</Link></li>
                  <li><Link href="/invoice-template-for-freelancer" className="hover:text-primary">Freelancer</Link></li>
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
