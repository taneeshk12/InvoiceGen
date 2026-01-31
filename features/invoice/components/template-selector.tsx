'use client';

import { useInvoiceStore } from '@/lib/store/invoice-store';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { InvoiceTemplate } from '@/types/invoice';

const templates: { value: InvoiceTemplate; label: string; description: string }[] = [
  { value: 'custom', label: 'Custom', description: 'Fully customizable' },
  { value: 'minimal', label: 'Minimal', description: 'Clean and simple' },
  { value: 'professional', label: 'Professional', description: 'Business standard' },
  { value: 'modern', label: 'Modern', description: 'Contemporary design' },
];

export function TemplateSelector() {
  const { invoice, setTemplate } = useInvoiceStore();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Choose Template</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {templates.map((template) => (
          <button
            key={template.value}
            onClick={() => setTemplate(template.value)}
            className={cn(
              'text-left p-4 rounded-lg border-2 transition-all hover:border-primary hover:shadow-md',
              invoice.template === template.value
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border'
            )}
          >
            <div className="font-semibold mb-1">{template.label}</div>
            <div className="text-sm text-muted-foreground">{template.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
