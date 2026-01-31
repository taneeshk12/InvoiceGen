'use client';

import * as React from 'react';
import { InvoiceForm } from '@/features/invoice/components/invoice-form';
import { InvoicePreview } from '@/features/invoice/components/invoice-preview';
import { InvoiceActions } from '@/features/invoice/components/invoice-actions';
import { TemplateSelector } from '@/features/invoice/components/template-selector';
import { CustomizationPanel } from '@/features/invoice/components/customization-panel';
import { BasicCustomizationPanel } from './../../features/invoice/components/basic-customization-panel';
import { ThemeToggle } from '@/components/theme-toggle';
import { useInvoiceStore } from '@/lib/store/invoice-store';
import Link from 'next/link';
import { FileText, GripVertical, Settings2, X, Plus, Minus, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

function InvoiceGeneratorContent() {
  const { invoice, customization, loadInvoice, setTemplate } = useInvoiceStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Initialize tab from URL if present
  const initialTab = (searchParams.get('tab') as 'form' | 'preview') || 'form';
  const [activeTab, setActiveTab] = React.useState<'form' | 'preview'>(initialTab);

  const isCustomTemplate = invoice.template === 'custom';
  const showBasicCustomization = invoice.template === 'professional' || invoice.template === 'modern' || invoice.template === 'minimal';
  const hasSidePanel = isCustomTemplate || showBasicCustomization;

  const [showDesignPanel, setShowDesignPanel] = React.useState(false);
  const [previewWidth, setPreviewWidth] = React.useState(450);
  const [zoomLevel, setZoomLevel] = React.useState(1);
  const [isResizing, setIsResizing] = React.useState(false);
  const [isSharing, setIsSharing] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(1200);

  // Handle Shared Link Data and Template Selection from Home
  React.useEffect(() => {
    const data = searchParams.get('data');
    const templateParam = searchParams.get('template');

    if (data) {
      try {
        const decodedData = JSON.parse(atob(data));
        loadInvoice(decodedData.invoice);
        // Clear param after loading
        router.replace('/invoice-generator');
        toast.success('Invoice data loaded from shared link');
      } catch (e) {
        console.error('Failed to decode shared data', e);
      }
    } else if (templateParam) {
      const validTemplates = ['professional', 'modern', 'minimal', 'custom'];
      if (validTemplates.includes(templateParam)) {
        setTemplate(templateParam as any);
        // Clear param after setting
        router.replace('/invoice-generator');
      }
    }
  }, [searchParams, loadInvoice, router, setTemplate]);

  // Handle Resize and Window Detection
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 1024) {
        setPreviewWidth(width);
      } else if (previewWidth > width * 0.6) {
        setPreviewWidth(Math.floor(width * 0.4));
      }
    };
    
    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [previewWidth]);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      const shareData = { invoice, customization };
      const encodedData = btoa(JSON.stringify(shareData));
      const shareUrl = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
      
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
      setTimeout(() => setIsSharing(false), 2000);
    } catch (err) {
      toast.error('Failed to create share link');
      setIsSharing(false);
    }
  };

  const startResizing = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth >= 300 && newWidth <= window.innerWidth * 0.7) {
          setPreviewWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  // Sync tab state with URL
  const handleTabChange = (tab: 'form' | 'preview') => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.replace(`/invoice-generator?${params.toString()}`, { scroll: false });
  };

  // Calculate zoom level safely
  const effectivePreviewWidth = windowWidth >= 1024 ? previewWidth : windowWidth;
  const availableWidth = effectivePreviewWidth - (windowWidth < 768 ? 32 : 48);
  // Allow user's zoomLevel to influence mobile as well, starting from a baseline that fits but allowing scale-up
  const mobileBaseline = (availableWidth / 794) * 0.95;
  const calculatedZoom = windowWidth < 1024 ? (mobileBaseline * zoomLevel) : ((availableWidth / 794) * zoomLevel);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <FileText className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">Invoice<span className="text-primary font-medium">Gen</span></span>
            </Link>
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2 border-primary/20 hover:bg-primary/5 h-8 md:h-10 px-2 md:px-4"
              >
                {isSharing ? <Check className="h-4 w-4 text-green-500" /> : <Share2 className="h-4 w-4" />}
                <span className="hidden xs:inline">Share Link</span>
              </Button>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block" />
              <Button
                variant={showDesignPanel ? "secondary" : "outline"}
                size="sm"
                onClick={() => setShowDesignPanel(!showDesignPanel)}
                className="gap-2 h-8 md:h-10 px-2 md:px-4"
              >
                <Settings2 className="h-4 w-4" />
                <span className="hidden xs:inline">{showDesignPanel ? "Hide Design" : "Design"}</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-0 md:px-6 py-4 md:py-8 flex flex-col">
        <div className="mb-4 md:mb-8 text-center px-4">
          <h1 className="text-xl md:text-4xl font-bold mb-1 tracking-tight">Create Professional Invoice</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Professional high-fidelity editor for business documents
          </p>
        </div>

        {/* Template Selector */}
        <div className="mb-6 md:mb-8 max-w-6xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
          <TemplateSelector />
        </div>

        {/* Mobile Tab Switcher */}
        <div className="lg:hidden flex mb-4 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mx-4 max-w-sm self-center w-[calc(100%-2rem)] shadow-sm">
           <Button 
            variant={activeTab === 'form' ? 'secondary' : 'ghost'} 
            className={`flex-1 rounded-lg h-9 text-xs font-bold transition-all ${activeTab === 'form' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-muted-foreground'}`}
            onClick={() => handleTabChange('form')}
           >
             Editor
           </Button>
           <Button 
            variant={activeTab === 'preview' ? 'secondary' : 'ghost'} 
            className={`flex-1 rounded-lg h-9 text-xs font-bold transition-all ${activeTab === 'preview' ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-muted-foreground'}`}
            onClick={() => handleTabChange('preview')}
           >
             Preview
           </Button>
        </div>

        {/* Dynamic Adjustable Layout */}
        <div className="flex flex-col lg:flex-row gap-0 h-auto lg:h-[calc(100vh-14rem)] flex-grow relative bg-slate-50/50 dark:bg-slate-950/20 md:rounded-3xl border-t border-b md:border border-slate-200 dark:border-slate-800 overflow-visible">
          {/* Left: Customization Side Panel */}
          {hasSidePanel && showDesignPanel && (
            <div className="fixed inset-y-0 left-0 w-[300px] lg:relative lg:inset-auto lg:w-[300px] flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-[60] lg:z-10 animate-in slide-in-from-left duration-300 shadow-2xl lg:shadow-none">
              <div className="h-full relative overflow-y-auto">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 z-50 h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  onClick={() => setShowDesignPanel(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                {isCustomTemplate ? <CustomizationPanel /> : <BasicCustomizationPanel />}
              </div>
            </div>
          )}

          {/* Middle: Main Form Area */}
          <div className={`flex-grow lg:overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900 shadow-inner p-4 md:p-8 ${activeTab !== 'form' && windowWidth < 1024 ? 'hidden' : 'block'}`}>
            <div className="max-w-3xl mx-auto space-y-6">
              <InvoiceForm />
            </div>
          </div>

          {/* Resize Handle */}
          <div
            onMouseDown={startResizing}
            className={`hidden lg:flex w-2 hover:w-3 cursor-col-resize items-center justify-center group transition-all z-30 ${
              isResizing ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'
            }`}
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-1.5 shadow-sm transform transition-transform group-hover:scale-125">
              <GripVertical className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Right: Live Preview & Actions */}
          <div 
            style={{ 
              width: windowWidth >= 1024 ? `${previewWidth}px` : '100%',
              '--preview-zoom': calculatedZoom
            } as React.CSSProperties}
            className={`flex-shrink-0 lg:overflow-y-auto custom-scrollbar bg-slate-100 dark:bg-slate-950 p-4 md:p-6 flex flex-col items-center gap-6 ${activeTab !== 'preview' && windowWidth < 1024 ? 'hidden' : 'flex'}`}
          >
            {/* Wrapper for scrolling content inside the preview tab */}
            <div className="w-full space-y-4 pb-48 lg:pb-0">
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Live Preview</span>
                  <span className="text-[10px] text-slate-500">
                    {Math.round(zoomLevel * 100)}% scale
                  </span>
                </div>
                
                {/* Zoom Controls (Now visible on all screens) */}
                <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 shadow-sm">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setZoomLevel(Math.max(0.3, zoomLevel - 0.1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-12 text-xs text-center font-mono font-bold">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.1))}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <InvoicePreview />
              </div>
              <div className="mt-8">
                <InvoiceActions />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function InvoiceGeneratorPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <FileText className="h-12 w-12 text-primary animate-pulse" />
          <p className="text-muted-foreground animate-pulse font-medium">Loading Professional Editor...</p>
        </div>
      </div>
    }>
      <InvoiceGeneratorContent />
    </React.Suspense>
  );
}
