'use client';

import { useInvoiceStore } from '@/lib/store/invoice-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, X, Upload } from 'lucide-react';
import { useState } from 'react';

export function InvoiceForm() {
  const { invoice, setCompanyDetails, setClientDetails, addItem, updateItem, removeItem, setInvoiceDate, setDueDate, setCurrency, setDiscount, setNotes, setTerms } = useInvoiceStore();
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        setCompanyDetails({ ...invoice.company!, logoUrl: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 pb-40"> {/* Added significant bottom padding here */}
      {/* Company Details */}
      <Card>
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="company-logo">Company Logo</Label>
            <div className="mt-2">
              {logoPreview ? (
                <div className="relative inline-block">
                  <img src={logoPreview} alt="Logo" className="h-20 w-auto object-contain border rounded" />
                  <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-6 w-6"
                    onClick={() => {
                      setLogoPreview(null);
                      setCompanyDetails({ ...invoice.company!, logoUrl: undefined });
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <label className="flex items-center justify-center w-full h-20 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition">
                  <div className="flex flex-col items-center">
                    <Upload className="h-6 w-6 mb-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Upload Logo</span>
                  </div>
                  <input
                    id="company-logo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoUpload}
                  />
                </label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="company-name">Company Name *</Label>
              <Input
                id="company-name"
                value={invoice.company?.name || ''}
                onChange={(e) => setCompanyDetails({ ...invoice.company!, name: e.target.value })}
                placeholder="Your Company Name"
              />
            </div>
            <div>
              <Label htmlFor="company-email">Email</Label>
              <Input
                id="company-email"
                type="email"
                value={invoice.company?.email || ''}
                onChange={(e) => setCompanyDetails({ ...invoice.company!, email: e.target.value })}
                placeholder="company@example.com"
              />
            </div>
            <div>
              <Label htmlFor="company-phone">Phone</Label>
              <Input
                id="company-phone"
                value={invoice.company?.phone || ''}
                onChange={(e) => setCompanyDetails({ ...invoice.company!, phone: e.target.value })}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="company-address">Address</Label>
              <Textarea
                id="company-address"
                value={invoice.company?.address || ''}
                onChange={(e) => setCompanyDetails({ ...invoice.company!, address: e.target.value })}
                placeholder="123 Street, City, Country"
                rows={2}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="company-gst">GST/VAT Number</Label>
              <Input
                id="company-gst"
                value={invoice.company?.gst || ''}
                onChange={(e) => setCompanyDetails({ ...invoice.company!, gst: e.target.value })}
                placeholder="GST123456789"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Details */}
      <Card>
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label htmlFor="client-name">Client Name *</Label>
              <Input
                id="client-name"
                value={invoice.client?.name || ''}
                onChange={(e) => setClientDetails({ ...invoice.client!, name: e.target.value })}
                placeholder="Client Name"
              />
            </div>
            <div>
              <Label htmlFor="client-email">Email</Label>
              <Input
                id="client-email"
                type="email"
                value={invoice.client?.email || ''}
                onChange={(e) => setClientDetails({ ...invoice.client!, email: e.target.value })}
                placeholder="client@example.com"
              />
            </div>
            <div>
              <Label htmlFor="client-phone">Phone</Label>
              <Input
                id="client-phone"
                value={invoice.client?.phone || ''}
                onChange={(e) => setClientDetails({ ...invoice.client!, phone: e.target.value })}
                placeholder="+1 234 567 8900"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="client-address">Address</Label>
              <Textarea
                id="client-address"
                value={invoice.client?.address || ''}
                onChange={(e) => setClientDetails({ ...invoice.client!, address: e.target.value })}
                placeholder="456 Avenue, City, Country"
                rows={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Invoice Details */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="invoice-date">Invoice Date</Label>
              <Input
                id="invoice-date"
                type="date"
                value={invoice.invoiceDate || ''}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="due-date">Due Date</Label>
              <Input
                id="due-date"
                type="date"
                value={invoice.dueDate || ''}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="currency">Currency Symbol or Code</Label>
              <Input
                id="currency"
                value={invoice.currency || ''}
                onChange={(e) => setCurrency(e.target.value)}
                placeholder="$, USD, ₹, etc."
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Line Items */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Items</CardTitle>
            <Button type="button" size="sm" onClick={addItem}>
              <Plus className="h-4 w-4 mr-1" />
              Add Item
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {invoice.items?.map((item, index) => (
            <div key={item.id} className="border rounded-lg p-4 space-y-3 relative">
              {invoice.items!.length > 1 && (
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => removeItem(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              
              <div>
                <Label htmlFor={`item-name-${index}`}>Item Name *</Label>
                <Input
                  id={`item-name-${index}`}
                  value={item.name}
                  onChange={(e) => updateItem(index, { name: e.target.value })}
                  placeholder="Product or Service"
                />
              </div>

              <div>
                <Label htmlFor={`item-description-${index}`}>Description</Label>
                <Textarea
                  id={`item-description-${index}`}
                  value={item.description || ''}
                  onChange={(e) => updateItem(index, { description: e.target.value })}
                  placeholder="Brief description"
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label htmlFor={`item-quantity-${index}`}>Qty</Label>
                  <Input
                    id={`item-quantity-${index}`}
                    type="number"
                    min="0"
                    step="1"
                    value={item.quantity}
                    onChange={(e) => updateItem(index, { quantity: parseFloat(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label htmlFor={`item-price-${index}`}>Price</Label>
                  <Input
                    id={`item-price-${index}`}
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.price}
                    onChange={(e) => updateItem(index, { price: parseFloat(e.target.value) || 0 })}
                  />
                </div>
                <div>
                  <Label htmlFor={`item-tax-${index}`}>Tax %</Label>
                  <Input
                    id={`item-tax-${index}`}
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.taxRate}
                    onChange={(e) => updateItem(index, { taxRate: parseFloat(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="text-right text-sm">
                <span className="text-muted-foreground">Amount: </span>
                <span className="font-semibold">{invoice.currency || '$'}{item.amount.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Additional Details */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="discount">Discount Amount</Label>
            <Input
              id="discount"
              type="number"
              min="0"
              step="0.01"
              value={invoice.discountAmount || 0}
              onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
              placeholder="0.00"
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={invoice.notes || ''}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Thank you for your business!"
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="terms">Terms & Conditions</Label>
            <Textarea
              id="terms"
              value={invoice.terms || ''}
              onChange={(e) => setTerms(e.target.value)}
              placeholder="Payment due within 30 days"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
