import type { Invoice } from '@/types/invoice';
import { formatCurrency, formatDate } from '@/lib/utils';
import { useInvoiceStore } from '@/lib/store/invoice-store';

interface TemplateProps {
  invoice: Partial<Invoice>;
}

export function MinimalTemplate({ invoice }: TemplateProps) {
  const { customization } = useInvoiceStore();
  const { 
    showWatermark, 
    watermarkSize, 
    watermarkOpacity, 
    fontSize, 
    colors,
    padding,
    sectionSpacing,
    showBorder,
    borderRadius,
    logoPlacement,
    logoSize
  } = customization;

  const getLogoStyle = () => {
    const baseScale = logoSize / 100;
    const baseSize = 64; 
    const scaledSize = baseSize * baseScale;

    switch (logoPlacement) {
      case 'top-left':
        return { height: `${scaledSize}px`, width: 'auto', marginBottom: '1rem' };
      case 'top-center':
        return { height: `${scaledSize}px`, width: 'auto', margin: '0 auto 1rem auto' };
      case 'top-right':
        return { height: `${scaledSize}px`, width: 'auto', marginLeft: 'auto', marginBottom: '1rem' };
      default:
        return null;
    }
  };

  const logoStyle = getLogoStyle();
  const showLogo = invoice.company?.logoUrl && logoPlacement !== 'none';

  return (
    <div 
      className="bg-white relative flex flex-col"
      style={{ 
        padding: `${padding}px`, 
        gap: `${sectionSpacing}px`,
        borderRadius: showBorder ? `${borderRadius}px` : '0',
        width: '210mm',
        minHeight: '297mm',
        boxSizing: 'border-box',
        color: colors.text,
        fontSize: `${fontSize.body}px`,
        border: showBorder ? `1px solid ${colors.border}` : 'none'
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
        {/* Logo - Top Center Placement */}
        {showLogo && logoPlacement === 'top-center' && (
          <div className="flex justify-center" style={{ marginBottom: `${sectionSpacing}px` }}>
            <img src={invoice.company?.logoUrl} alt="Logo" style={logoStyle || undefined} />
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-start" style={{ marginBottom: `${sectionSpacing}px` }}>
          <div>
            {showLogo && logoPlacement === 'top-left' && (
              <img src={invoice.company?.logoUrl} alt="Logo" style={logoStyle || undefined} />
            )}
            <h1 className="font-light uppercase tracking-tighter" style={{ fontSize: `${fontSize.heading}px` }}>Invoice</h1>
            <p className="text-gray-600 mt-1">#{invoice.invoiceNumber}</p>
          </div>
          <div className="text-right">
            {showLogo && logoPlacement === 'top-right' && (
              <img 
                src={invoice.company?.logoUrl} 
                alt="Logo" 
                style={logoStyle || undefined}
                className="ml-auto mb-4"
              />
            )}
            <p className="text-4xl font-light tracking-tighter" style={{ color: colors.primary }}>
              {formatCurrency(invoice.totalAmount || 0, invoice.currency)}
            </p>
          </div>
        </div>

        {/* Bill To & Dates */}
        <div className="grid grid-cols-2 gap-8" style={{ marginBottom: `${customization.sectionSpacing}px` }}>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
            Bill To
          </h3>
          <p className="font-semibold text-lg text-gray-900">
            {invoice.client?.name}
          </p>
          {invoice.client?.email && (
            <p className="text-sm text-gray-600">{invoice.client.email}</p>
          )}
          {invoice.client?.phone && (
            <p className="text-sm text-gray-600">{invoice.client.phone}</p>
          )}
          {invoice.client?.address && (
            <p className="text-sm text-gray-600 mt-1">{invoice.client.address}</p>
          )}
        </div>
        <div className="text-right">
          <div className="mb-3">
            <span className="text-sm font-semibold text-gray-500 uppercase">
              Invoice Date
            </span>
            <p className="text-gray-900">
              {invoice.invoiceDate ? formatDate(invoice.invoiceDate) : '-'}
            </p>
          </div>
          {invoice.dueDate && (
            <div>
              <span className="text-sm font-semibold text-gray-500 uppercase">
                Due Date
              </span>
              <p className="text-gray-900">{formatDate(invoice.dueDate)}</p>
            </div>
          )}
        </div>
      </div>

        {/* Items Table */}
        <div style={{ marginBottom: `${customization.sectionSpacing}px` }}>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="text-left py-3 text-sm font-semibold uppercase text-gray-700">
                Description
              </th>
              <th className="text-right py-3 text-sm font-semibold uppercase text-gray-700">
                Qty
              </th>
              <th className="text-right py-3 text-sm font-semibold uppercase text-gray-700">
                Price
              </th>
              <th className="text-right py-3 text-sm font-semibold uppercase text-gray-700">
                Tax %
              </th>
              <th className="text-right py-3 text-sm font-semibold uppercase text-gray-700">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {invoice.items?.map((item) => (
              <tr key={item.id} className="border-b" style={{ borderColor: colors.border }}>
                <td className="py-4 px-2">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500 whitespace-pre-line">{item.description}</p>
                </td>
                <td className="text-right py-4 px-2">{item.quantity}</td>
                <td className="text-right py-4 px-2">
                  {formatCurrency(item.price, invoice.currency)}
                </td>
                <td className="text-right py-4 px-2 font-medium">
                  {formatCurrency(item.amount, invoice.currency)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        {/* Totals */}
        <div className="flex justify-end" style={{ marginBottom: `${customization.sectionSpacing}px` }}>
        <div className="w-64 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span>{formatCurrency(invoice.subtotal || 0, invoice.currency)}</span>
          </div>
          {invoice.taxAmount! > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tax</span>
              <span>{formatCurrency(invoice.taxAmount || 0, invoice.currency)}</span>
            </div>
          )}
          {invoice.discountAmount! > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Discount</span>
              <span>-{formatCurrency(invoice.discountAmount || 0, invoice.currency)}</span>
            </div>
          )}
          <div 
            className="flex justify-between pt-3 border-t font-bold text-lg"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            <span>Total</span>
            <span>{formatCurrency(invoice.totalAmount || 0, invoice.currency)}</span>
          </div>
        </div>
      </div>

        {/* Notes & Terms */}
        {(invoice.notes || invoice.terms) && (
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200" style={{ marginTop: `${customization.sectionSpacing}px` }}>
            {invoice.notes && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                  Notes
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">
                  {invoice.notes}
                </p>
              </div>
            )}
            {invoice.terms && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                  Terms & Conditions
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">
                  {invoice.terms}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
