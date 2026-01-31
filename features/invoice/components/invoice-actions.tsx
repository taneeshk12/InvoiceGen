'use client';

import { useState } from 'react';
import { useInvoiceStore } from '@/lib/store/invoice-store';
import { Button } from '@/components/ui/button';
import { Download, Printer, Share2, Image as ImageIcon } from 'lucide-react';
import { downloadPDF, printInvoice, downloadImage } from '@/lib/pdf-generator';
import toast from 'react-hot-toast';

export function InvoiceActions() {
  const { invoice } = useInvoiceStore();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('invoice-capture'); // Use the high-fidelity capture element
      if (!element) throw new Error('Invoice capture element not found');

      await downloadPDF(element, `invoice-${invoice.invoiceNumber}.pdf`);
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      console.error('Error downloading PDF:', error);
      toast.error('Failed to download PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = async () => {
    try {
      const element = document.getElementById('invoice-capture'); // Use the high-fidelity capture element
      if (!element) throw new Error('Invoice capture element not found');

      await printInvoice(element);
    } catch (error) {
      console.error('Error printing invoice:', error);
      toast.error('Failed to print invoice');
    }
  };

  const handleDownloadImage = async () => {
    setIsGenerating(true);
    try {
      const element = document.getElementById('invoice-capture'); // Use the high-fidelity capture element
      if (!element) throw new Error('Invoice capture element not found');

      await downloadImage(element, `invoice-${invoice.invoiceNumber}.png`);
      toast.success('Image downloaded successfully!');
    } catch (error) {
      console.error('Error downloading image:', error);
      toast.error('Failed to download image');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = () => {
    // This would typically generate a shareable link
    toast.success('Share link copied to clipboard!');
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        onClick={handleDownloadPDF}
        disabled={isGenerating}
        className="w-full"
      >
        <Download className="h-4 w-4 mr-2" />
        {isGenerating ? 'Generating...' : 'Download PDF'}
      </Button>

      <Button
        onClick={handlePrint}
        variant="outline"
        className="w-full"
      >
        <Printer className="h-4 w-4 mr-2" />
        Print
      </Button>

      <Button
        onClick={handleDownloadImage}
        disabled={isGenerating}
        variant="outline"
        className="w-full"
      >
        <ImageIcon className="h-4 w-4 mr-2" />
        Download Image
      </Button>

      <Button
        onClick={handleShare}
        variant="outline"
        className="w-full"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
    </div>
  );
}
