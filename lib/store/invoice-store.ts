import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Invoice, InvoiceItem, CompanyDetails, ClientDetails } from '@/types/invoice';
import type { InvoiceCustomization } from '@/types/customization';
import { defaultCustomization } from '@/types/customization';
import {
  calculateSubtotal,
  calculateTotalTax,
  calculateTotal,
  generateInvoiceNumber,
} from '@/lib/invoice-calculations';

interface InvoiceStore {
  invoice: Partial<Invoice>;
  customization: InvoiceCustomization;
  setCompanyDetails: (company: CompanyDetails) => void;
  setClientDetails: (client: ClientDetails) => void;
  addItem: () => void;
  updateItem: (index: number, item: Partial<InvoiceItem>) => void;
  removeItem: (index: number) => void;
  setInvoiceDate: (date: string) => void;
  setDueDate: (date: string) => void;
  setDiscount: (amount: number) => void;
  setNotes: (notes: string) => void;
  setTerms: (terms: string) => void;
  setTemplate: (template: Invoice['template']) => void;
  setCustomization: (customization: Partial<InvoiceCustomization>) => void;
  calculateTotals: () => void;
  resetInvoice: () => void;
  loadInvoice: (invoice: Invoice) => void;
}

const defaultItem: InvoiceItem = {
  id: Math.random().toString(36).substring(2, 9),
  name: '',
  description: '',
  quantity: 1,
  price: 0,
  taxRate: 0,
  amount: 0,
};

const initialInvoice: Partial<Invoice> = {
  invoiceNumber: generateInvoiceNumber(),
  company: {
    name: '',
    email: '',
    phone: '',
    address: '',
    gst: '',
  },
  client: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  invoiceDate: new Date().toISOString().split('T')[0],
  dueDate: '',
  items: [{ ...defaultItem }],
  subtotal: 0,
  taxAmount: 0,
  discountAmount: 0,
  totalAmount: 0,
  template: 'custom',
  notes: '',
  terms: '',
  status: 'draft',
};

export const useInvoiceStore = create<InvoiceStore>()(
  persist(
    (set, get) => ({
      invoice: initialInvoice,
      customization: defaultCustomization,

      setCompanyDetails: (company) => {
        set((state) => ({
          invoice: { ...state.invoice, company },
        }));
        get().calculateTotals();
      },

      setClientDetails: (client) => {
        set((state) => ({
          invoice: { ...state.invoice, client },
        }));
      },

      addItem: () => {
        set((state) => ({
          invoice: {
            ...state.invoice,
            items: [
              ...(state.invoice.items || []),
              { ...defaultItem, id: Math.random().toString(36).substring(2, 9) },
            ],
          },
        }));
      },

      updateItem: (index, updatedItem) => {
        set((state) => {
          const items = [...(state.invoice.items || [])];
          items[index] = { ...items[index], ...updatedItem };
          
          // Calculate item amount
          const quantity = items[index].quantity || 0;
          const price = items[index].price || 0;
          const taxRate = items[index].taxRate || 0;
          const baseAmount = quantity * price;
          const taxAmount = baseAmount * (taxRate / 100);
          items[index].amount = baseAmount + taxAmount;

          return {
            invoice: { ...state.invoice, items },
          };
        });
        get().calculateTotals();
      },

      removeItem: (index) => {
        set((state) => ({
          invoice: {
            ...state.invoice,
            items: (state.invoice.items || []).filter((_, i) => i !== index),
          },
        }));
        get().calculateTotals();
      },

      setInvoiceDate: (date) => {
        set((state) => ({
          invoice: { ...state.invoice, invoiceDate: date },
        }));
      },

      setDueDate: (date) => {
        set((state) => ({
          invoice: { ...state.invoice, dueDate: date },
        }));
      },

      setDiscount: (amount) => {
        set((state) => ({
          invoice: { ...state.invoice, discountAmount: amount },
        }));
        get().calculateTotals();
      },

      setNotes: (notes) => {
        set((state) => ({
          invoice: { ...state.invoice, notes },
        }));
      },

      setTerms: (terms) => {
        set((state) => ({
          invoice: { ...state.invoice, terms },
        }));
      },

      setTemplate: (template) => {
        set((state) => ({
          invoice: { ...state.invoice, template },
        }));
      },

      setCustomization: (customization) => {
        set((state) => ({
          customization: { ...state.customization, ...customization },
        }));
      },

      calculateTotals: () => {
        set((state) => {
          const items = state.invoice.items || [];
          const subtotal = calculateSubtotal(items);
          const taxAmount = calculateTotalTax(items);
          const discountAmount = state.invoice.discountAmount || 0;
          const totalAmount = calculateTotal(items, discountAmount);

          return {
            invoice: {
              ...state.invoice,
              subtotal,
              taxAmount,
              totalAmount,
            },
          };
        });
      },

      resetInvoice: () => {
        set({ invoice: { ...initialInvoice, invoiceNumber: generateInvoiceNumber() } });
      },

      loadInvoice: (invoice) => {
        set({ invoice });
      },
    }),
    {
      name: 'invoice-storage',
      partialize: (state) => ({ invoice: state.invoice }),
    }
  )
);
