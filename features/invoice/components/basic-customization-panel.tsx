'use client';

import * as React from 'react';
import { useInvoiceStore } from '@/lib/store/invoice-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import type { LogoPlacement } from '@/types/customization';
import { Image as ImageIcon, Layout, Sliders, Settings, Type, FileText } from 'lucide-react';

export function BasicCustomizationPanel() {
  const { customization, setCustomization } = useInvoiceStore();

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <Card className="border-0 shadow-none bg-transparent">
        <CardHeader className="sticky top-0 bg-white dark:bg-slate-900 z-10 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md bg-opacity-80">
          <CardTitle className="text-lg">Design Settings</CardTitle>
          <CardDescription className="text-xs">Adjust basic appearance</CardDescription>
        </CardHeader>
        <CardContent className="p-4 space-y-8">
          {/* Logo Settings */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon className="h-4 w-4 text-primary" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Logo</h3>
            </div>
            
            <div className="space-y-1.5">
              <Label htmlFor="logoPlacement" className="text-xs font-medium">Position</Label>
              <select
                id="logoPlacement"
                value={customization.logoPlacement}
                onChange={(e) => setCustomization({ logoPlacement: e.target.value as LogoPlacement })}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
              >
                <option value="top-left">Top Left</option>
                <option value="top-center">Top Center</option>
                <option value="top-right">Top Right</option>
                <option value="none">Hidden</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-medium text-muted-foreground">Logo Size</Label>
                <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{customization.logoSize}%</span>
              </div>
              <input
                type="range"
                min={50}
                max={200}
                step={5}
                value={customization.logoSize}
                onChange={(e) => setCustomization({ logoSize: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </section>

          {/* Layout & Spacing */}
          <section className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Layout className="h-4 w-4 text-blue-500" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-blue-500">Layout</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-medium text-muted-foreground">Section Spacing</Label>
                <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{customization.sectionSpacing}px</span>
              </div>
              <input
                type="range"
                min={12}
                max={48}
                step={4}
                value={customization.sectionSpacing}
                onChange={(e) => setCustomization({ sectionSpacing: parseInt(e.target.value) })}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Type className="h-4 w-4 text-purple-500" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-purple-500">Typography</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-medium text-muted-foreground">Title Size</Label>
                <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{customization.fontSize.heading}px</span>
              </div>
              <input
                type="range"
                min={20}
                max={60}
                step={1}
                value={customization.fontSize.heading}
                onChange={(e) => setCustomization({ 
                  fontSize: { ...customization.fontSize, heading: parseInt(e.target.value) } 
                })}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label className="text-xs font-medium text-muted-foreground">Overall Text Size</Label>
                <span className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{customization.fontSize.body}px</span>
              </div>
              <input
                type="range"
                min={8}
                max={20}
                step={1}
                value={customization.fontSize.body}
                onChange={(e) => setCustomization({ 
                  fontSize: { ...customization.fontSize, body: parseInt(e.target.value) } 
                })}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
            </div>
          </section>

          {/* Watermark Section */}
          <section className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-amber-500" />
                <h3 className="font-bold text-sm uppercase tracking-wider text-amber-500">Watermark</h3>
              </div>
              <button
                onClick={() => setCustomization({ showWatermark: !customization.showWatermark })}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
                  customization.showWatermark ? 'bg-amber-500' : 'bg-slate-200 dark:bg-slate-800'
                }`}
              >
                <span
                  className={`pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                    customization.showWatermark ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {customization.showWatermark && (
              <div className="space-y-4 pl-6 animate-in slide-in-from-top-2 duration-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs text-muted-foreground font-medium">Text Size</Label>
                    <span className="text-[10px] font-mono">{customization.watermarkSize}px</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={120}
                    step={5}
                    value={customization.watermarkSize}
                    onChange={(e) => setCustomization({ watermarkSize: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs text-muted-foreground font-medium">Opacity</Label>
                    <span className="text-[10px] font-mono">{customization.watermarkOpacity}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={5}
                    value={customization.watermarkOpacity}
                    onChange={(e) => setCustomization({ watermarkOpacity: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>
            )}
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
