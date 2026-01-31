import type { Invoice, InvoiceItem } from '@/types/invoice';

export function calculateItemAmount(item: Partial<InvoiceItem>): number {
  const quantity = item.quantity || 0;
  const price = item.price || 0;
  const taxRate = item.taxRate || 0;
  
  const baseAmount = quantity * price;
  const taxAmount = baseAmount * (taxRate / 100);
  
  return baseAmount + taxAmount;
}

export function calculateSubtotal(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => {
    const baseAmount = item.quantity * item.price;
    return sum + baseAmount;
  }, 0);
}

export function calculateTotalTax(items: InvoiceItem[]): number {
  return items.reduce((sum, item) => {
    const baseAmount = item.quantity * item.price;
    const taxAmount = baseAmount * (item.taxRate / 100);
    return sum + taxAmount;
  }, 0);
}

export function calculateTotal(
  items: InvoiceItem[],
  discountAmount: number = 0
): number {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTotalTax(items);
  
  return subtotal + tax - discountAmount;
}

export function generateInvoiceNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `INV-${year}-${random}`;
}

export function validateInvoice(invoice: Partial<Invoice>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (!invoice.company?.name) {
    errors.push('Company name is required');
  }
  
  if (!invoice.client?.name) {
    errors.push('Client name is required');
  }
  
  if (!invoice.items || invoice.items.length === 0) {
    errors.push('At least one item is required');
  }
  
  if (invoice.items) {
    invoice.items.forEach((item, index) => {
      if (!item.name) {
        errors.push(`Item ${index + 1}: Name is required`);
      }
      if (item.quantity <= 0) {
        errors.push(`Item ${index + 1}: Quantity must be greater than 0`);
      }
      if (item.price < 0) {
        errors.push(`Item ${index + 1}: Price cannot be negative`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}
