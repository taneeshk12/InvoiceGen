export interface InvoiceItem {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  taxRate: number;
  amount: number;
}

export interface CompanyDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  gst?: string;
  logoUrl?: string;
  logoAsWatermark?: boolean;
}

export interface ClientDetails {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface Invoice {
  id?: string;
  invoiceNumber: string;
  company: CompanyDetails;
  client: ClientDetails;
  invoiceDate: string;
  dueDate?: string;
  items: InvoiceItem[];
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  template: InvoiceTemplate;
  notes?: string;
  terms?: string;
  status?: 'draft' | 'sent' | 'paid' | 'cancelled';
  shareToken?: string;
  isPublic?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type InvoiceTemplate = 
  | 'minimal' 
  | 'professional' 
  | 'modern' 
  | 'bold' 
  | 'letterhead'
  | 'custom';

export interface InvoiceFormData {
  company: CompanyDetails;
  client: ClientDetails;
  invoiceDate: string;
  dueDate?: string;
  items: InvoiceItem[];
  discountAmount: number;
  notes?: string;
  terms?: string;
  template: InvoiceTemplate;
}
