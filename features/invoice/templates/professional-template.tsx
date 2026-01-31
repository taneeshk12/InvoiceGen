import type { Invoice } from '@/types/invoice';
import { formatCurrency, formatDate } from '@/lib/utils';
import { useInvoiceStore } from '@/lib/store/invoice-store';

interface TemplateProps {
  invoice: Partial<Invoice>;
}

export function ProfessionalTemplate({ invoice }: TemplateProps) {
  const { customization } = useInvoiceStore();
  const { 
    logoPlacement, 
    logoSize, 
    padding, 
    sectionSpacing, 
    showBorder, 
    borderRadius, 
    showWatermark, 
    watermarkSize, 
    watermarkOpacity,
    fontSize,
    colors
  } = customization;

  const getLogoStyle = () => {
    return {
      maxWidth: `${logoSize}px`,
      maxHeight: '80px',
      objectFit: 'contain' as const,
    };
  };

  const textStyle = {
    color: colors.text
  };

  const headingStyle = {
    fontSize: `${fontSize.heading}px`,
    lineHeight: '1',
    color: colors.text
  };

  return (
    <div 
      className="bg-white relative flex flex-col"
      style={{ 
        padding: `${padding}px`, 
        gap: `${sectionSpacing}px`,
        width: '210mm',
        minHeight: '297mm',
        boxSizing: 'border-box',
        color: colors.text,
        fontSize: `${fontSize.body}px` // Applying overall text size
      }}
    >
      {/* Watermark Logo */}
      {showWatermark && invoice.company?.logoUrl && (
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" 
          style={{ 
            opacity: watermarkOpacity / 100, 
            zIndex: 0,
            backgroundImage: `url(${invoice.company.logoUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: `${watermarkSize}%`
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section: Classic Corporate Grid */}
        <div 
          className="grid grid-cols-2 gap-8 border-b-2 border-slate-200 pb-10"
          style={{ 
            marginBottom: `${sectionSpacing}px`,
            borderColor: colors.border
          }}
        >
          <div>
            {logoPlacement === 'top-left' && invoice.company?.logoUrl && (
              <div className="mb-6 h-16 flex items-center">
                <img src={invoice.company.logoUrl} alt="Logo" style={getLogoStyle()} />
              </div>
            )}
            <h1 
              className="font-extrabold tracking-tight uppercase"
              style={headingStyle}
            >
              Invoice
            </h1>
            <div className="mt-4 flex flex-col gap-1">
              <span className="text-slate-500 font-semibold uppercase text-xs tracking-widest">Invoice Number</span>
              <span className="text-xl font-bold text-slate-800">#{invoice.invoiceNumber}</span>
            </div>
          </div>
          
          <div className="text-right flex flex-col justify-between">
            {logoPlacement === 'top-right' && invoice.company?.logoUrl && (
              <div className="mb-6 h-16 flex items-center justify-end">
                <img src={invoice.company.logoUrl} alt="Logo" style={getLogoStyle()} />
              </div>
            )}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-slate-900">{invoice.company?.name}</h2>
              <div className="text-sm text-slate-500 font-medium">
                {invoice.company?.address && <p className="whitespace-pre-line leading-relaxed max-w-[300px] ml-auto">{invoice.company.address}</p>}
                {invoice.company?.email && <p className="mt-2 text-blue-600">{invoice.company.email}</p>}
                {invoice.company?.phone && <p>{invoice.company.phone}</p>}
                {invoice.company?.gst && <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mt-2">GST: {invoice.company.gst}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid: Two Balanced Columns */}
        <div 
          className="grid grid-cols-2 gap-12 py-10"
          style={{ marginBottom: `${sectionSpacing}px` }}
        >
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Bill To</h3>
            <div className="space-y-1">
              <p className="font-bold text-slate-900 text-xl">{invoice.client?.name}</p>
              <div className="text-sm text-slate-500 leading-relaxed font-medium">
                {invoice.client?.address && <p className="whitespace-pre-line">{invoice.client.address}</p>}
                {invoice.client?.email && <p className="mt-2">{invoice.client.email}</p>}
                {invoice.client?.phone && <p>{invoice.client.phone}</p>}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Issue Date</span>
                <p className="text-slate-800 font-bold">{invoice.invoiceDate ? formatDate(invoice.invoiceDate) : '-'}</p>
              </div>
              {invoice.dueDate && (
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Due Date</span>
                  <p className="text-rose-600 font-bold">{formatDate(invoice.dueDate)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table: Professional & Spaced */}
        <div className="flex-grow">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="py-4 px-6 text-[10px] font-bold uppercase tracking-widest">Description</th>
                <th className="text-center py-4 px-6 text-[10px] font-bold uppercase tracking-widest w-24">Qty</th>
                <th className="text-right py-4 px-6 text-[10px] font-bold uppercase tracking-widest w-32">Rate</th>
                <th className="text-right py-4 px-6 text-[10px] font-bold uppercase tracking-widest w-32">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 border-b border-slate-200">
              {invoice.items?.map((item, index) => (
                <tr key={item.id} className="group transition-colors hover:bg-slate-50">
                  <td className="py-6 px-6">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    {item.description && <div className="text-xs text-slate-400 mt-1 max-w-md">{item.description}</div>}
                  </td>
                  <td className="text-center py-6 px-6 text-slate-600 font-medium">{item.quantity}</td>
                  <td className="text-right py-6 px-6 text-slate-600 font-medium">{formatCurrency(item.price)}</td>
                  <td className="text-right py-6 px-6 font-bold text-slate-900 text-base">{formatCurrency(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary & Footer Layout */}
        <div className="mt-12 grid grid-cols-2 gap-12">
          <div className="space-y-8">
            {invoice.notes && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment Instructions</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">{invoice.notes}</p>
              </div>
            )}
            {invoice.terms && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Terms & Conditions</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tighter">{invoice.terms}</p>
              </div>
            )}
          </div>

          <div className="flex justify-end pt-4">
            <div className="w-full max-w-[320px] space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-500 px-2">
                <span>Subtotal</span>
                <span>{formatCurrency(invoice.subtotal || 0)}</span>
              </div>
              {invoice.taxAmount! > 0 && (
                <div className="flex justify-between items-center text-sm font-semibold text-slate-500 px-2">
                  <span>Tax Total</span>
                  <span>{formatCurrency(invoice.taxAmount || 0)}</span>
                </div>
              )}
              {invoice.discountAmount! > 0 && (
                <div className="flex justify-between items-center text-sm font-semibold text-rose-500 px-2">
                  <span>Discount</span>
                  <span>-{formatCurrency(invoice.discountAmount || 0)}</span>
                </div>
              )}
              <div className="bg-slate-900 p-6 rounded-xl flex justify-between items-center shadow-lg transform translate-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Total Amount</span>
                <span className="text-2xl font-bold text-white tracking-tight">{formatCurrency(invoice.totalAmount || 0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
