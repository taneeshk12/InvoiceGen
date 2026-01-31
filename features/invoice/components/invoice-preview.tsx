'use client';

import * as React from 'react';
import { useInvoiceStore } from '@/lib/store/invoice-store';
import { MinimalTemplate } from '@/features/invoice/templates/minimal-template';
import { ProfessionalTemplate } from '@/features/invoice/templates/professional-template';
import { ModernTemplate } from '@/features/invoice/templates/modern-template';
import { CustomizableTemplate } from '@/features/invoice/templates/customizable-template';

export function InvoicePreview() {
  const { invoice, customization } = useInvoiceStore();

  const renderTemplate = () => {
    switch (invoice.template) {
      case 'professional':
        return <ProfessionalTemplate invoice={invoice} />;
      case 'modern':
        return <ModernTemplate invoice={invoice} />;
      case 'minimal':
        return <MinimalTemplate invoice={invoice} />;
      case 'custom':
        return <CustomizableTemplate invoice={invoice} customization={customization} />;
      default:
        return <CustomizableTemplate invoice={invoice} customization={customization} />;
    }
  };

  return (
    <div className="w-full flex justify-center py-4">
      {/* Visual Preview with Zoom */}
      <div
        className="shadow-2xl bg-white ring-1 ring-slate-200 dark:ring-slate-800"
        style={{
          width: '210mm',
          height: '297mm',
          zoom: 'var(--preview-zoom, 0.45)',
          transformOrigin: 'top center',
        }}
      >
        <div className="h-full w-full overflow-hidden">
          {renderTemplate()}
        </div>
      </div>

      {/* Hidden high-fidelity version for Export/PDF - Irrespective of zoom */}
      <div className="fixed left-[-9999px] top-0 pointer-events-none">
        <div
          id="invoice-capture"
          className="bg-white"
          style={{
            width: '210mm',
            minHeight: '297mm',
            padding: '0',
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}
