'use client';

import * as React from 'react';
import type { Invoice } from '@/types/invoice';
import type { InvoiceCustomization } from '@/types/customization';
import { formatCurrency, formatDate } from '@/lib/utils';

interface CustomizableTemplateProps {
  invoice: Partial<Invoice>;
  customization: InvoiceCustomization;
}

const fontFamilyMap = {
  inter: 'Inter, system-ui, sans-serif',
  roboto: 'Roboto, sans-serif',
  poppins: 'Poppins, sans-serif',
  montserrat: 'Montserrat, sans-serif',
  'open-sans': '"Open Sans", sans-serif',
};

export function CustomizableTemplate({ invoice, customization }: CustomizableTemplateProps) {
  const { colors, fontSize, fontFamily, padding, sectionSpacing, showBorder, borderRadius, showWatermark, watermarkOpacity, watermarkSize } = customization;
  const { company, client, items = [], invoiceNumber, invoiceDate, dueDate, subtotal = 0, taxAmount = 0, totalAmount = 0, discountAmount = 0, notes, terms } = invoice;

  const containerStyle: React.CSSProperties = {
    fontFamily: fontFamilyMap[fontFamily],
    color: colors.text,
    backgroundColor: colors.background,
    padding: `${padding}px`,
    position: 'relative',
    width: '210mm', // Force specific width
    minHeight: '297mm', // Force specific height
    boxSizing: 'border-box',
    ...(showBorder && {
      border: `2px solid ${colors.border}`,
      borderRadius: `${borderRadius}px`,
    }),
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: `${sectionSpacing}px`,
    ...(customization.headerStyle === 'gradient' && {
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      color: colors.tableHeaderText,
      padding: `${padding / 2}px`,
      margin: `-${padding}px -${padding}px ${sectionSpacing}px`,
      borderRadius: showBorder ? `${borderRadius}px ${borderRadius}px 0 0` : '0',
    }),
    ...(customization.headerStyle === 'bold' && {
      backgroundColor: colors.primary,
      color: colors.tableHeaderText,
      padding: `${padding / 2}px`,
      margin: `-${padding}px -${padding}px ${sectionSpacing}px`,
    }),
  };

  const logoStyle: React.CSSProperties = {
    maxWidth: `${customization.logoSize}px`,
    maxHeight: '80px',
    objectFit: 'contain',
  };

  const getLogoAlignment = () => {
    if (customization.logoPlacement === 'top-center') return 'center';
    if (customization.logoPlacement === 'top-right') return 'flex-end';
    return 'flex-start';
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: customization.tableStyle === 'bordered' ? 'separate' : 'collapse',
    borderSpacing: customization.tableStyle === 'bordered' ? '0' : '0',
    ...(customization.showTableBorders && {
      border: `1px solid ${colors.border}`,
    }),
  };

  const getTableRowStyle = (index: number): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      fontSize: `${fontSize.body}px`,
    };

    if (customization.tableStyle === 'striped' && index % 2 === 1) {
      return { ...baseStyle, backgroundColor: colors.tableBg };
    }

    if (customization.tableStyle === 'bordered') {
      return { ...baseStyle, border: `1px solid ${colors.border}` };
    }

    return baseStyle;
  };

  return (
    <div style={containerStyle} className="relative">
      {/* Watermark Logo */}
      {showWatermark && company?.logoUrl && (
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center overflow-hidden"
          style={{ opacity: watermarkOpacity / 100, zIndex: 0 }}
        >
          <img 
            src={company.logoUrl} 
            alt="Watermark" 
            className="object-contain"
            style={{ 
              width: `${600 * (watermarkSize / 100)}px`, 
              height: 'auto', 
              filter: 'grayscale(100%) brightness(1.2)' 
            }}
          />
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={headerStyle}>
          {/* Logo (non-watermark) */}
          {customization.logoPlacement !== 'watermark' && customization.logoPlacement !== 'none' && company?.logoUrl && (
            <div style={{ display: 'flex', justifyContent: getLogoAlignment(), marginBottom: customization.headerStyle === 'minimal' ? '0' : `${sectionSpacing / 2}px` }}>
              <img src={company.logoUrl} alt={company?.name || 'Company'} style={logoStyle} />
            </div>
          )}

          {/* Header Content */}
          <div style={{
            display: customization.layoutStyle === 'two-column' ? 'grid' : 'block',
            gridTemplateColumns: customization.layoutStyle === 'two-column' ? '1fr 1fr' : '1fr',
            gap: `${sectionSpacing}px`,
          }}>
            {/* Company Details */}
            {customization.showCompanyDetails && company && (
              <div>
                <h1 style={{
                  fontSize: `${fontSize.heading}px`,
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  color: customization.headerStyle === 'gradient' || customization.headerStyle === 'bold' ? colors.tableHeaderText : colors.primary,
                }}>
                  {company.name}
                </h1>
                <div style={{ fontSize: `${fontSize.small}px`, lineHeight: '1.6', color: customization.headerStyle === 'gradient' || customization.headerStyle === 'bold' ? colors.tableHeaderText : colors.textSecondary }}>
                  {company.email && <div>{company.email}</div>}
                  {company.phone && <div>{company.phone}</div>}
                  {company.address && <div style={{ whiteSpace: 'pre-line' }}>{company.address}</div>}
                  {company.gst && <div>GST: {company.gst}</div>}
                </div>
              </div>
            )}

            {/* Invoice Details */}
            <div style={{ textAlign: customization.layoutStyle === 'two-column' ? 'right' : 'left' }}>
              <h2 style={{
                fontSize: `${fontSize.heading}px`,
                fontWeight: 'bold',
                marginBottom: '8px',
                color: customization.headerStyle === 'gradient' || customization.headerStyle === 'bold' ? colors.tableHeaderText : colors.text,
              }}>
                INVOICE
              </h2>
              {customization.showInvoiceNumber && invoiceNumber && (
                <div style={{ fontSize: `${fontSize.body}px`, marginBottom: '4px', color: customization.headerStyle === 'gradient' || customization.headerStyle === 'bold' ? colors.tableHeaderText : colors.textSecondary }}>
                  <strong>Invoice #:</strong> {invoiceNumber}
                </div>
              )}
              {customization.showDates && (
                <>
                  {invoiceDate && (
                    <div style={{ fontSize: `${fontSize.body}px`, marginBottom: '4px', color: customization.headerStyle === 'gradient' || customization.headerStyle === 'bold' ? colors.tableHeaderText : colors.textSecondary }}>
                      <strong>Date:</strong> {formatDate(invoiceDate)}
                    </div>
                  )}
                  {dueDate && (
                    <div style={{ fontSize: `${fontSize.body}px`, color: customization.headerStyle === 'gradient' || customization.headerStyle === 'bold' ? colors.tableHeaderText : colors.textSecondary }}>
                      <strong>Due Date:</strong> {formatDate(dueDate)}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bill To */}
        {customization.showClientDetails && client && (
          <div style={{ marginBottom: `${sectionSpacing}px`, padding: `${sectionSpacing / 2}px`, backgroundColor: colors.tableBg, borderRadius: `${borderRadius / 2}px` }}>
            <h3 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: '600', marginBottom: '8px', color: colors.primary }}>
              Bill To:
            </h3>
            <div style={{ fontSize: `${fontSize.body}px`, lineHeight: '1.6', color: colors.text }}>
              <div style={{ fontWeight: '600' }}>{client.name}</div>
              {client.email && <div>{client.email}</div>}
              {client.phone && <div>{client.phone}</div>}
              {client.address && <div style={{ whiteSpace: 'pre-line' }}>{client.address}</div>}
            </div>
          </div>
        )}

        {/* Items Table */}
        <table style={{ ...tableStyle, marginBottom: `${sectionSpacing}px` }}>
          <thead>
            <tr style={{ backgroundColor: colors.tableHeaderBg, color: colors.tableHeaderText }}>
              <th style={{ padding: '12px', textAlign: 'left', fontSize: `${fontSize.body}px`, fontWeight: '600' }}>Item</th>
              <th style={{ padding: '12px', textAlign: 'center', fontSize: `${fontSize.body}px`, fontWeight: '600' }}>Qty</th>
              <th style={{ padding: '12px', textAlign: 'right', fontSize: `${fontSize.body}px`, fontWeight: '600' }}>Price</th>
              {customization.showTaxColumn && (
                <th style={{ padding: '12px', textAlign: 'right', fontSize: `${fontSize.body}px`, fontWeight: '600' }}>Tax</th>
              )}
              <th style={{ padding: '12px', textAlign: 'right', fontSize: `${fontSize.body}px`, fontWeight: '600' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} style={getTableRowStyle(index)}>
                <td style={{ padding: '12px', ...(customization.showTableBorders && { border: `1px solid ${colors.border}` }) }}>
                  <div style={{ fontWeight: '500', fontSize: `${fontSize.body}px` }}>{item.name}</div>
                  {item.description && (
                    <div style={{ fontSize: `${fontSize.small}px`, color: colors.textSecondary, marginTop: '4px' }}>
                      {item.description}
                    </div>
                  )}
                </td>
                <td style={{ padding: '12px', textAlign: 'center', ...(customization.showTableBorders && { border: `1px solid ${colors.border}` }) }}>
                  {item.quantity}
                </td>
                <td style={{ padding: '12px', textAlign: 'right', ...(customization.showTableBorders && { border: `1px solid ${colors.border}` }) }}>
                  {formatCurrency(item.price)}
                </td>
                {customization.showTaxColumn && (
                  <td style={{ padding: '12px', textAlign: 'right', ...(customization.showTableBorders && { border: `1px solid ${colors.border}` }) }}>
                    {item.taxRate}%
                  </td>
                )}
                <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600', ...(customization.showTableBorders && { border: `1px solid ${colors.border}` }) }}>
                  {formatCurrency(item.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: `${sectionSpacing}px` }}>
          <div style={{ minWidth: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: `${fontSize.body}px`, borderBottom: `1px solid ${colors.border}` }}>
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            {customization.showTaxColumn && taxAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: `${fontSize.body}px`, borderBottom: `1px solid ${colors.border}` }}>
                <span>Tax:</span>
                <span>{formatCurrency(taxAmount)}</span>
              </div>
            )}
            {discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: `${fontSize.body}px`, borderBottom: `1px solid ${colors.border}`, color: colors.accent }}>
                <span>Discount:</span>
                <span>-{formatCurrency(discountAmount)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: `${fontSize.subheading}px`, fontWeight: 'bold', backgroundColor: colors.primary, color: colors.tableHeaderText, paddingLeft: '12px', paddingRight: '12px', borderRadius: `${borderRadius / 2}px`, marginTop: '8px' }}>
              <span>Total:</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {customization.showNotes && notes && (
          <div style={{ marginBottom: `${sectionSpacing}px`, padding: `${sectionSpacing / 2}px`, backgroundColor: colors.tableBg, borderRadius: `${borderRadius / 2}px` }}>
            <h3 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: '600', marginBottom: '8px', color: colors.primary }}>
              Notes:
            </h3>
            <p style={{ fontSize: `${fontSize.body}px`, lineHeight: '1.6', color: colors.text, whiteSpace: 'pre-line' }}>
              {notes}
            </p>
          </div>
        )}

        {/* Terms */}
        {customization.showTerms && terms && (
          <div style={{ padding: `${sectionSpacing / 2}px`, backgroundColor: colors.tableBg, borderRadius: `${borderRadius / 2}px`, borderTop: `2px solid ${colors.border}` }}>
            <h3 style={{ fontSize: `${fontSize.subheading}px`, fontWeight: '600', marginBottom: '8px', color: colors.primary }}>
              Terms & Conditions:
            </h3>
            <p style={{ fontSize: `${fontSize.small}px`, lineHeight: '1.6', color: colors.textSecondary, whiteSpace: 'pre-line' }}>
              {terms}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
