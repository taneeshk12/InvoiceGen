# Invoice Generator SaaS

A modern, production-ready Invoice Generator built with Next.js 14, TypeScript, TailwindCSS, and Supabase.

## Features

- 🚀 Create invoices without login (guest mode)
- 🔐 Optional authentication with Google/Email
- 🎨 Multiple professional templates
- 📄 Export to PDF, Print, or Download as image
- 💾 Save invoice history for logged-in users
- 🔗 Share invoice links
- 🌓 Dark/light mode support
- 📱 Mobile-first responsive design
- ⚡ Fast loading (< 1s)
- 🔍 SEO optimized with dynamic pages

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **PDF Generation**: jsPDF + html2canvas

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.local.example .env.local
```

4. Set up Supabase:
   - Create a new project at https://supabase.com
   - Run the SQL schema from `supabase/schema.sql`
   - Enable Google OAuth (optional)
   - Update your `.env.local` with the project URL and keys

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── (marketing)/        # Public pages
│   ├── (dashboard)/        # Protected pages
│   ├── api/                # API routes
│   └── layout.tsx          # Root layout
├── components/             # Reusable UI components
├── features/
│   └── invoice/           # Invoice feature module
├── lib/                   # Utilities and helpers
├── hooks/                 # Custom React hooks
├── supabase/              # Supabase client and types
└── types/                 # TypeScript types
```

## SEO Pages

The app includes the following SEO-optimized pages:

- `/invoice-generator`
- `/gst-invoice-generator`
- `/proforma-invoice-generator`
- `/tax-invoice-generator`
- `/freelancer-invoice-template`

All pages are statically generated (SSG) with proper meta tags and structured data.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Remember to add your environment variables in the Vercel dashboard.

## License

MIT
# InvoiceGen
