'use client';

import type { Invoice } from '@/types/invoice';
import { formatCurrency, formatDate } from '@/lib/utils';
import { useInvoiceStore } from '@/lib/store/invoice-store';

interface TemplateProps {
  invoice: Partial<Invoice>;
}

export function ModernTemplate({ invoice }: TemplateProps) {
  const { customization } = useInvoiceStore();
  const { 
    sectionSpacing, 
    padding, 
    showBorder, 
    borderRadius, 
    showWatermark, 
    watermarkOpacity, 
    watermarkSize, 
    logoPlacement, 
    logoSize,
    fontSize,
    colors
  } = customization;

  const getLogoStyle = () => {
    const baseScale = logoSize / 100;
    const baseSize = 64; // 16 * 4 (h-16)
    const scaledSize = baseSize * baseScale;

    switch (logoPlacement) {
      case 'top-left':
        return { height: `${scaledSize}px`, width: 'auto', marginBottom: '1rem' };
      case 'top-center':
        return { height: `${scaledSize}px`, width: 'auto', margin: '0 auto 1rem auto' };
      case 'top-right':
        return { height: `${scaledSize}px`, width: 'auto', marginLeft: 'auto', marginBottom: '1rem' };
      case 'watermark':
        return null;
      default:
        return null;
    }
  };

  const logoStyle = getLogoStyle();
  const showLogo = invoice.company?.logoUrl && logoPlacement !== 'none';

  const containerStyle = `
    min-h-[1056px] 
    bg-gradient-to-br from-gray-50 via-white to-gray-100 
    text-black 
    relative 
    overflow-hidden
    ${showBorder ? 'border-2 border-gray-200' : ''}
  `.trim();

  const borderRadiusStyle = showBorder ? { borderRadius: `${borderRadius}px` } : {};

  return (
    <div 
      className="bg-white relative overflow-hidden flex flex-col"
      style={{ 
        padding: `${padding}px`, 
        gap: `${sectionSpacing}px`, 
        borderRadius: showBorder ? `${borderRadius}px` : '0',
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
        {/* Modern Header: Creative & Dynamic */}
        <div 
          className="flex justify-between items-end border-b-2 border-purple-100 pb-10"
          style={{ marginBottom: `${sectionSpacing}px` }}
        >
          <div className="space-y-6">
            {showLogo && logoPlacement === 'top-left' && (
              <div className="h-16 flex items-center">
                <img src={invoice.company?.logoUrl || ''} alt="Logo" style={logoStyle || undefined} />
              </div>
            )}
            <div>
              <h1 
                className="font-black tracking-tighter uppercase leading-none"
                style={{ fontSize: `${fontSize.heading * 1.5}px` }}
              >
                Invoice
              </h1>
              <div className="mt-4 inline-flex items-center bg-purple-600 text-white rounded-full px-4 py-1.5 shadow-lg shadow-purple-200">
                <span className="text-xs font-bold uppercase tracking-widest mr-2 opacity-70">Ref</span>
                <span className="text-sm font-black italic">#{invoice.invoiceNumber}</span>
              </div>
            </div>
          </div>

          <div className="text-right space-y-4">
            {showLogo && logoPlacement === 'top-right' && (
              <div className="h-16 flex items-center justify-end">
                <img src={invoice.company?.logoUrl || ''} alt="Logo" style={logoStyle || undefined} />
              </div>
            )}
            <div className="bg-white/40 backdrop-blur-md p-6 rounded-3xl border border-white/60 shadow-xl shadow-purple-500/5">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">{invoice.company?.name}</h2>
              <div className="text-xs font-bold text-gray-500 mt-2 space-y-1">
                {invoice.company?.address && <p className="leading-relaxed max-w-[240px] ml-auto uppercase opacity-60 tracking-tighter">{invoice.company.address}</p>}
                <div className="pt-2 flex flex-col items-end gap-1">
                  {invoice.company?.email && <span className="text-purple-600 lowercase">{invoice.company.email}</span>}
                  {invoice.company?.phone && <span className="text-pink-500">{invoice.company.phone}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Billing Grid */}
        <div 
          className="grid grid-cols-2 gap-8 py-10"
          style={{ marginBottom: `${sectionSpacing}px` }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <h3 className="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em] mb-4">Client Destination</h3>
            <div className="space-y-2">
              <p className="font-black text-gray-900 text-2xl tracking-tighter uppercase">{invoice.client?.name}</p>
              <div className="text-xs font-bold text-gray-400 leading-relaxed max-w-[280px]">
                {invoice.client?.address && <p className="uppercase opacity-80">{invoice.client.address}</p>}
                {invoice.client?.email && <p className="mt-2 text-purple-400 lowercase">{invoice.client.email}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="grid grid-cols-2 gap-6 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[40px] text-white shadow-2xl shadow-slate-200">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block">Release Date</span>
                <p className="text-lg font-black">{invoice.invoiceDate ? formatDate(invoice.invoiceDate) : '-'}</p>
              </div>
              <div className="space-y-1 border-l border-white/10 pl-6">
                <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block">Deadline</span>
                <p className="text-lg font-black text-pink-100">{invoice.dueDate ? formatDate(invoice.dueDate) : '-'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Tech Table */}
        <div className="flex-grow">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-gray-900/5">
                <th className="py-4 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Description / Service</th>
                <th className="text-center py-4 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 w-24">QTY</th>
                <th className="text-right py-4 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 w-32">Rate</th>
                <th className="text-right py-4 px-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 w-32">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {invoice.items?.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="py-8 px-2 max-w-sm">
                    <p className="font-black text-gray-900 text-lg leading-tight mb-2 tracking-tight">{item.name}</p>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{item.description}</p>
                  </td>
                  <td className="text-right py-8 px-2 text-sm font-bold text-gray-900">{item.quantity}</td>
                  <td className="text-right py-8 px-2 text-sm font-bold text-gray-400">{formatCurrency(item.price, invoice.currency)}</td>
                  <td className="text-right py-8 px-2 font-black text-gray-900 text-xl tracking-tighter">{formatCurrency(item.amount, invoice.currency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Creative Summary Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            {invoice.notes && (
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-2">Editor's Notes</h4>
                <p className="text-[11px] font-bold text-gray-500 leading-relaxed italic">{invoice.notes}</p>
              </div>
            )}
            <div className="px-6 flex gap-4 opacity-30">
              <div className="h-1 w-12 bg-purple-600 rounded-full"></div>
              <div className="h-1 w-8 bg-pink-500 rounded-full"></div>
              <div className="h-1 w-4 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 px-8">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Base Cost</span>
                <span className="text-sm font-black text-gray-900">{formatCurrency(invoice.subtotal || 0, invoice.currency)}</span>
              </div>
              {invoice.taxAmount! > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Tax (VAT)</span>
                  <span className="text-sm font-black text-gray-900">{formatCurrency(invoice.taxAmount || 0, invoice.currency)}</span>
                </div>
              )}
              {invoice.discountAmount! > 0 && (
                <div className="flex justify-between items-center text-rose-500">
                  <span className="text-[10px] font-black uppercase tracking-widest">Mark Down</span>
                  <span className="text-sm font-black">-{formatCurrency(invoice.discountAmount || 0, invoice.currency)}</span>
                </div>
              )}
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[30px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white border-2 border-gray-900 p-8 rounded-[30px] flex justify-between items-center overflow-hidden">
                <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-purple-50 to-transparent -z-10"></div>
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] block mb-1">Total Due</span>
                  <span className="text-4xl font-black text-gray-900 tracking-tighter">
                    {formatCurrency(invoice.totalAmount || 0, invoice.currency)}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-gray-400">Currency</p>
                  <p className="text-sm font-black text-purple-600">INR / ₹</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
