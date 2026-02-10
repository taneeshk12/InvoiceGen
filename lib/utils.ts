import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  // If currency is just a symbol (like $ or ₹) and not a 3-letter ISO code, 
  // or if it's something custom the user typed, we check if it's a valid ISO code.
  const isIsoCode = /^[A-Z]{3}$/.test(currency);

  if (isIsoCode) {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
      }).format(amount);
    } catch (e) {
      // Fallback if ISO code is invalid or not supported
      return `${currency}${amount.toFixed(2)}`;
    }
  }

  // If it's a symbol or custom text, just prepend it
  return `${currency}${amount.toFixed(2)}`;
}

export function formatDate(date: string | Date, format: string = 'medium'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = 
    format === 'short' 
      ? { year: 'numeric', month: 'short', day: 'numeric' }
      : format === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: 'short', day: 'numeric' };
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function generateShareToken(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function downloadFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
