export type LogoPlacement = 'top-left' | 'top-center' | 'top-right' | 'watermark' | 'none';
export type LayoutStyle = 'single-column' | 'two-column' | 'modern-grid';
export type HeaderStyle = 'classic' | 'minimal' | 'bold' | 'gradient';
export type TableStyle = 'striped' | 'bordered' | 'minimal' | 'modern';
export type FontFamily = 'inter' | 'roboto' | 'poppins' | 'montserrat' | 'open-sans';

export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textSecondary: string;
  background: string;
  border: string;
  tableBg: string;
  tableHeaderBg: string;
  tableHeaderText: string;
}

export interface InvoiceCustomization {
  // Colors
  colors: ColorScheme;
  
  // Logo
  logoPlacement: LogoPlacement;
  logoSize: number; // percentage
  
  // Watermark
  showWatermark: boolean;
  watermarkSize: number; // percentage
  watermarkOpacity: number; // 0-100
  
  // Layout
  layoutStyle: LayoutStyle;
  headerStyle: HeaderStyle;
  showBorder: boolean;
  borderRadius: number;
  
  // Typography
  fontFamily: FontFamily;
  fontSize: {
    heading: number;
    subheading: number;
    body: number;
    small: number;
  };
  
  // Table
  tableStyle: TableStyle;
  showTableBorders: boolean;
  
  // Sections
  showCompanyDetails: boolean;
  showClientDetails: boolean;
  showInvoiceNumber: boolean;
  showDates: boolean;
  showNotes: boolean;
  showTerms: boolean;
  showTaxColumn: boolean;
  
  // Spacing
  padding: number;
  sectionSpacing: number;
}

export const defaultCustomization: InvoiceCustomization = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    text: '#1f2937',
    textSecondary: '#6b7280',
    background: '#ffffff',
    border: '#e5e7eb',
    tableBg: '#f9fafb',
    tableHeaderBg: '#6366f1',
    tableHeaderText: '#ffffff',
  },
  logoPlacement: 'top-left',
  logoSize: 100,
  showWatermark: false,
  watermarkSize: 100,
  watermarkOpacity: 10,
  layoutStyle: 'two-column',
  headerStyle: 'classic',
  showBorder: true,
  borderRadius: 8,
  fontFamily: 'inter',
  fontSize: {
    heading: 24,
    subheading: 18,
    body: 14,
    small: 12,
  },
  tableStyle: 'striped',
  showTableBorders: true,
  showCompanyDetails: true,
  showClientDetails: true,
  showInvoiceNumber: true,
  showDates: true,
  showNotes: true,
  showTerms: true,
  showTaxColumn: true,
  padding: 32,
  sectionSpacing: 24,
};

// Preset color schemes
export const colorPresets: Record<string, ColorScheme> = {
  indigo: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    text: '#1f2937',
    textSecondary: '#6b7280',
    background: '#ffffff',
    border: '#e5e7eb',
    tableBg: '#f9fafb',
    tableHeaderBg: '#6366f1',
    tableHeaderText: '#ffffff',
  },
  blue: {
    primary: '#3b82f6',
    secondary: '#0ea5e9',
    accent: '#06b6d4',
    text: '#1e293b',
    textSecondary: '#64748b',
    background: '#ffffff',
    border: '#e2e8f0',
    tableBg: '#f8fafc',
    tableHeaderBg: '#3b82f6',
    tableHeaderText: '#ffffff',
  },
  emerald: {
    primary: '#10b981',
    secondary: '#059669',
    accent: '#14b8a6',
    text: '#064e3b',
    textSecondary: '#6b7280',
    background: '#ffffff',
    border: '#d1fae5',
    tableBg: '#f0fdf4',
    tableHeaderBg: '#10b981',
    tableHeaderText: '#ffffff',
  },
  rose: {
    primary: '#f43f5e',
    secondary: '#ec4899',
    accent: '#f97316',
    text: '#881337',
    textSecondary: '#9f1239',
    background: '#ffffff',
    border: '#fecdd3',
    tableBg: '#fff1f2',
    tableHeaderBg: '#f43f5e',
    tableHeaderText: '#ffffff',
  },
  amber: {
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#ea580c',
    text: '#78350f',
    textSecondary: '#92400e',
    background: '#ffffff',
    border: '#fde68a',
    tableBg: '#fffbeb',
    tableHeaderBg: '#f59e0b',
    tableHeaderText: '#ffffff',
  },
  slate: {
    primary: '#475569',
    secondary: '#64748b',
    accent: '#94a3b8',
    text: '#0f172a',
    textSecondary: '#475569',
    background: '#ffffff',
    border: '#cbd5e1',
    tableBg: '#f8fafc',
    tableHeaderBg: '#475569',
    tableHeaderText: '#ffffff',
  },
};
