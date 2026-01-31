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

export default function InvoiceGeneratorPage() {
  const { invoice, customization, loadInvoice } = useInvoiceStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isCustomTemplate = invoice.template === 'custom';
  const showBasicCustomization = invoice.template === 'professional' || invoice.template === 'modern' || invoice.template === 'minimal';
  const hasSidePanel = isCustomTemplate || showBasicCustomization;

  const [showDesignPanel, setShowDesignPanel] = React.useState(false);
  const [previewWidth, setPreviewWidth] = React.useState(450);
  const [zoomLevel, setZoomLevel] = React.useState(1);
  const [isResizing, setIsResizing] = React.useState(false);
  const [isSharing, setIsSharing] = React.useState(false);

  // Handle Shared Link Data
  React.useEffect(() => {
    const data = searchParams.get('data');
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
    }
  }, [searchParams, loadInvoice, router]);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      const shareData = {
        invoice,
        customization
      };
      const encodedData = btoa(JSON.stringify(shareData));
      const shareUrl = `${window.location.origin}${window.location.pathname}?data=${encodedData}`;
      
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
      setIsSharing(false);
      
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
        if (newWidth >= 300 && newWidth <= window.innerWidth * 0.6) {
          setPreviewWidth(newWidth);
        }
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

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
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="gap-2 border-primary/20 hover:bg-primary/5"
              >
                {isSharing ? <Check className="h-4 w-4 text-green-500" /> : <Share2 className="h-4 w-4" />}
                Share Link
              </Button>
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />
              <Button
                variant={showDesignPanel ? "secondary" : "outline"}
                size="sm"
                onClick={() => setShowDesignPanel(!showDesignPanel)}
                className="gap-2"
              >
                <Settings2 className="h-4 w-4" />
                {showDesignPanel ? "Hide Design" : "Design Settings"}
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Create Professional Invoice</h1>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Professional design editor for your business documents
          </p>
        </div>

        {/* Template Selector */}
        <div className="mb-8 max-w-6xl mx-auto">
          <TemplateSelector />
        </div>

        {/* Dynamic Adjustable Layout */}
        <div className="flex gap-0 h-[calc(100vh-14rem)] relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/20 rounded-3xl border border-slate-200 dark:border-slate-800">
          {/* Left: Customization Side Panel */}
          {hasSidePanel && showDesignPanel && (
            <div className="w-[300px] flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-40 animate-in slide-in-from-left duration-300">
              <div className="h-full relative">
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
          <div className="flex-grow overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900 shadow-inner p-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <InvoiceForm />
            </div>
          </div>

          {/* Resize Handle: Drag Button */}
          <div
            onMouseDown={startResizing}
            className={`w-2 hover:w-3 cursor-col-resize flex items-center justify-center group transition-all z-30 ${
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
              width: `${previewWidth}px`,
              '--preview-zoom': ((previewWidth - 48) / 794) * zoomLevel
            } as React.CSSProperties}
            className="flex-shrink-0 overflow-y-auto custom-scrollbar bg-slate-100 dark:bg-slate-950 p-6 flex flex-col items-center gap-6"
          >
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Live Preview</span>
                  <span className="text-[10px] text-slate-500">{Math.round(zoomLevel * 100)}% scale</span>
                </div>
                
                {/* Zoom Controls */}
                <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1 shadow-sm">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <div className="w-10 text-[10px] text-center font-mono font-bold">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7"
                    onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.1))}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <InvoicePreview />
              <InvoiceActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
