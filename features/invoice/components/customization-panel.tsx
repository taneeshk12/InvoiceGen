'use client';

import * as React from 'react';
import { useInvoiceStore } from '@/lib/store/invoice-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { colorPresets } from '@/types/customization';
import type { LogoPlacement, LayoutStyle, HeaderStyle, TableStyle, FontFamily } from '@/types/customization';
import {
  Palette,
  Layout,
  Type,
  Image as ImageIcon,
  Grid3x3,
  AlignLeft,
  Sliders,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  FileText,
} from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
}

export function CustomizationPanel() {
  const { customization, setCustomization } = useInvoiceStore();
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    colors: true,
    logo: false,
    watermark: false, // Added watermark section
    layout: false,
    typography: false,
    table: false,
    sections: false,
    spacing: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleColorChange = (key: string, value: string) => {
    setCustomization({
      colors: { ...customization.colors, [key]: value },
    });
  };

  const applyColorPreset = (presetName: string) => {
    const preset = colorPresets[presetName];
    if (preset) {
      setCustomization({ colors: preset });
    }
  };

  const resetToDefaults = () => {
    if (confirm('Reset all customizations to default? This cannot be undone.')) {
      window.location.reload();
    }
  };

  const sections: Section[] = [
    { id: 'colors', title: 'Colors & Theme', icon: <Palette className="h-4 w-4" />, isOpen: openSections.colors },
    { id: 'logo', title: 'Logo Settings', icon: <ImageIcon className="h-4 w-4" />, isOpen: openSections.logo },
    { id: 'watermark', title: 'Watermark', icon: <FileText className="h-4 w-4" />, isOpen: openSections.watermark }, // Added watermark section
    { id: 'layout', title: 'Layout & Spacing', icon: <Layout className="h-4 w-4" />, isOpen: openSections.layout },
    { id: 'typography', title: 'Typography', icon: <Type className="h-4 w-4" />, isOpen: openSections.typography },
    { id: 'table', title: 'Table Style', icon: <Grid3x3 className="h-4 w-4" />, isOpen: openSections.table },
    { id: 'sections', title: 'Sections', icon: <AlignLeft className="h-4 w-4" />, isOpen: openSections.sections },
    { id: 'spacing', title: 'Spacing', icon: <Sliders className="h-4 w-4" />, isOpen: openSections.spacing },
  ];

  const Section = ({ id, title, icon, children }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-sm">{title}</span>
        </div>
        {openSections[id] ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      {openSections[id] && <div className="p-4 pt-0 space-y-4">{children}</div>}
    </div>
  );

  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <Card className="border-0 shadow-none">
        <CardHeader className="sticky top-0 bg-white dark:bg-gray-900 z-10 border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Customize Invoice</CardTitle>
              <CardDescription className="text-xs">Make it uniquely yours</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetToDefaults}
              className="text-xs"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Color Scheme */}
          <Section id="colors" title="Color Scheme" icon={<Palette className="h-4 w-4" />}>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(colorPresets).map(([name, colors]) => (
                  <button
                    key={name}
                    onClick={() => applyColorPreset(name)}
                    className="p-2 rounded-md border-2 hover:border-gray-400 transition-colors"
                    style={{ borderColor: customization.colors.primary === colors.primary ? colors.primary : '#e5e7eb' }}
                  >
                    <div className="flex gap-1 mb-1">
                      <div className="h-4 w-4 rounded" style={{ backgroundColor: colors.primary }} />
                      <div className="h-4 w-4 rounded" style={{ backgroundColor: colors.secondary }} />
                      <div className="h-4 w-4 rounded" style={{ backgroundColor: colors.accent }} />
                    </div>
                    <p className="text-xs capitalize">{name}</p>
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="primary" className="text-xs">Primary</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      type="color"
                      id="primary"
                      value={customization.colors.primary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="h-10 w-12 p-1 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customization.colors.primary}
                      onChange={(e) => handleColorChange('primary', e.target.value)}
                      className="text-xs h-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="secondary" className="text-xs">Secondary</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      type="color"
                      id="secondary"
                      value={customization.colors.secondary}
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="h-10 w-12 p-1 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customization.colors.secondary}
                      onChange={(e) => handleColorChange('secondary', e.target.value)}
                      className="text-xs h-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="text" className="text-xs">Text</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      type="color"
                      id="text"
                      value={customization.colors.text}
                      onChange={(e) => handleColorChange('text', e.target.value)}
                      className="h-10 w-12 p-1 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customization.colors.text}
                      onChange={(e) => handleColorChange('text', e.target.value)}
                      className="text-xs h-10"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="tableHeaderBg" className="text-xs">Table Header</Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      type="color"
                      id="tableHeaderBg"
                      value={customization.colors.tableHeaderBg}
                      onChange={(e) => handleColorChange('tableHeaderBg', e.target.value)}
                      className="h-10 w-12 p-1 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={customization.colors.tableHeaderBg}
                      onChange={(e) => handleColorChange('tableHeaderBg', e.target.value)}
                      className="text-xs h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Logo Settings */}
          <Section id="logo" title="Logo Settings" icon={<ImageIcon className="h-4 w-4" />}>
            <div className="space-y-3">
              {/* Logo Placement */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logoPlacement">Placement</Label>
                  <select
                    id="logoPlacement"
                    value={customization.logoPlacement}
                    onChange={(e) => setCustomization({ logoPlacement: e.target.value as LogoPlacement })}
                    className="w-full px-3 py-2 border rounded-md bg-transparent text-sm"
                  >
                    <option value="top-left">Top Left</option>
                    <option value="top-center">Top Center</option>
                    <option value="top-right">Top Right</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Label>Logo Size</Label>
                    <span className="text-xs text-muted-foreground">{customization.logoSize}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="5"
                    value={customization.logoSize}
                    onChange={(e) => setCustomization({ logoSize: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* Watermark Section */}
          <Section id="watermark" title="Watermark" icon={<FileText className="h-4 w-4" />}>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Label>Show Logo as Watermark</Label>
                <button
                  onClick={() => setCustomization({ showWatermark: !customization.showWatermark })}
                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    customization.showWatermark ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-800'
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
                <div className="space-y-6 animate-in slide-in-from-top-2 duration-200">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Watermark Size</Label>
                      <span className="text-xs text-muted-foreground">{customization.watermarkSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="120"
                      step="5"
                      value={customization.watermarkSize}
                      onChange={(e) => setCustomization({ watermarkSize: parseInt(e.target.value) })}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Watermark Opacity</Label>
                      <span className="text-xs text-muted-foreground">{customization.watermarkOpacity}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="5"
                      value={customization.watermarkOpacity}
                      onChange={(e) => setCustomization({ watermarkOpacity: parseInt(e.target.value) })}
                      className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              )}
            </div>
          </Section>

          {/* Layout */}
          <Section id="layout" title="Layout Style" icon={<Layout className="h-4 w-4" />}>
            <div className="space-y-3">
              <div>
                <Label htmlFor="layoutStyle" className="text-xs">Layout</Label>
                <select
                  id="layoutStyle"
                  value={customization.layoutStyle}
                  onChange={(e) => setCustomization({ layoutStyle: e.target.value as LayoutStyle })}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="single-column">Single Column</option>
                  <option value="two-column">Two Column</option>
                  <option value="modern-grid">Modern Grid</option>
                </select>
              </div>

              <div>
                <Label htmlFor="headerStyle" className="text-xs">Header Style</Label>
                <select
                  id="headerStyle"
                  value={customization.headerStyle}
                  onChange={(e) => setCustomization({ headerStyle: e.target.value as HeaderStyle })}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="classic">Classic</option>
                  <option value="minimal">Minimal</option>
                  <option value="bold">Bold</option>
                  <option value="gradient">Gradient</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showBorder"
                  checked={customization.showBorder}
                  onChange={(e) => setCustomization({ showBorder: e.target.checked })}
                  className="rounded"
                />
                <Label htmlFor="showBorder" className="text-xs cursor-pointer">Show Border</Label>
              </div>

              {customization.showBorder && (
                <div>
                  <Label htmlFor="borderRadius" className="text-xs">
                    Border Radius: {customization.borderRadius}px
                  </Label>
                  <input
                    type="range"
                    id="borderRadius"
                    min="0"
                    max="24"
                    value={customization.borderRadius}
                    onChange={(e) => setCustomization({ borderRadius: parseInt(e.target.value) })}
                    className="w-full mt-1"
                  />
                </div>
              )}
            </div>
          </Section>

          {/* Typography */}
          <Section id="typography" title="Typography" icon={<Type className="h-4 w-4" />}>
            <div className="space-y-3">
              <div>
                <Label htmlFor="fontFamily" className="text-xs">Font Family</Label>
                <select
                  id="fontFamily"
                  value={customization.fontFamily}
                  onChange={(e) => setCustomization({ fontFamily: e.target.value as FontFamily })}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="inter">Inter</option>
                  <option value="roboto">Roboto</option>
                  <option value="poppins">Poppins</option>
                  <option value="montserrat">Montserrat</option>
                  <option value="open-sans">Open Sans</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="headingSize" className="text-xs">
                    Heading: {customization.fontSize.heading}px
                  </Label>
                  <input
                    type="range"
                    id="headingSize"
                    min="18"
                    max="36"
                    value={customization.fontSize.heading}
                    onChange={(e) => setCustomization({ fontSize: { ...customization.fontSize, heading: parseInt(e.target.value) } })}
                    className="w-full mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="bodySize" className="text-xs">
                    Body: {customization.fontSize.body}px
                  </Label>
                  <input
                    type="range"
                    id="bodySize"
                    min="10"
                    max="18"
                    value={customization.fontSize.body}
                    onChange={(e) => setCustomization({ fontSize: { ...customization.fontSize, body: parseInt(e.target.value) } })}
                    className="w-full mt-1"
                  />
                </div>
              </div>
            </div>
          </Section>

          {/* Table Style */}
          <Section id="table" title="Table Style" icon={<Grid3x3 className="h-4 w-4" />}>
            <div className="space-y-3">
              <div>
                <Label htmlFor="tableStyle" className="text-xs">Style</Label>
                <select
                  id="tableStyle"
                  value={customization.tableStyle}
                  onChange={(e) => setCustomization({ tableStyle: e.target.value as TableStyle })}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="striped">Striped Rows</option>
                  <option value="bordered">Full Borders</option>
                  <option value="minimal">Minimal</option>
                  <option value="modern">Modern</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showTableBorders"
                  checked={customization.showTableBorders}
                  onChange={(e) => setCustomization({ showTableBorders: e.target.checked })}
                  className="rounded"
                />
                <Label htmlFor="showTableBorders" className="text-xs cursor-pointer">Show Table Borders</Label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showTaxColumn"
                  checked={customization.showTaxColumn}
                  onChange={(e) => setCustomization({ showTaxColumn: e.target.checked })}
                  className="rounded"
                />
                <Label htmlFor="showTaxColumn" className="text-xs cursor-pointer">Show Tax Column</Label>
              </div>
            </div>
          </Section>

          {/* Sections Visibility */}
          <Section id="sections" title="Sections" icon={<AlignLeft className="h-4 w-4" />}>
            <div className="space-y-2">
              {[
                { key: 'showInvoiceNumber', label: 'Invoice Number' },
                { key: 'showDates', label: 'Invoice & Due Dates' },
                { key: 'showCompanyDetails', label: 'Company Details' },
                { key: 'showClientDetails', label: 'Client Details' },
                { key: 'showNotes', label: 'Notes Section' },
                { key: 'showTerms', label: 'Terms & Conditions' },
              ].map((section) => (
                <div key={section.key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={section.key}
                    checked={customization[section.key as keyof typeof customization] as boolean}
                    onChange={(e) => setCustomization({ [section.key]: e.target.checked })}
                    className="rounded"
                  />
                  <Label htmlFor={section.key} className="text-xs cursor-pointer">{section.label}</Label>
                </div>
              ))}
            </div>
          </Section>

          {/* Spacing */}
          <Section id="spacing" title="Spacing" icon={<Sliders className="h-4 w-4" />}>
            <div className="space-y-3">
              <div>
                <Label htmlFor="padding" className="text-xs">
                  Page Padding: {customization.padding}px
                </Label>
                <input
                  type="range"
                  id="padding"
                  min="16"
                  max="64"
                  value={customization.padding}
                  onChange={(e) => setCustomization({ padding: parseInt(e.target.value) })}
                  className="w-full mt-1"
                />
              </div>

              <div>
                <Label htmlFor="sectionSpacing" className="text-xs">
                  Section Spacing: {customization.sectionSpacing}px
                </Label>
                <input
                  type="range"
                  id="sectionSpacing"
                  min="12"
                  max="48"
                  value={customization.sectionSpacing}
                  onChange={(e) => setCustomization({ sectionSpacing: parseInt(e.target.value) })}
                  className="w-full mt-1"
                />
              </div>
            </div>
          </Section>
        </CardContent>
      </Card>
    </div>
  );
}
