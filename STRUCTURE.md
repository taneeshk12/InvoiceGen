# Invoice Generator SaaS - Complete Folder Structure

## 📂 Project Directory Tree

```
invoice-generator-saas/
│
├── 📁 app/                                 # Next.js 14 App Router
│   ├── 📄 layout.tsx                      # Root layout with theme provider
│   ├── 📄 page.tsx                        # Homepage with hero & features
│   ├── 📄 globals.css                     # Global styles & Tailwind
│   │
│   ├── 📁 invoice-generator/              # Main invoice creation page
│   │   ├── 📄 page.tsx                   # Invoice generator UI
│   │   └── 📄 layout.tsx                 # SEO metadata
│   │
│   ├── 📁 gst-invoice-generator/         # GST invoice (SEO page)
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 proforma-invoice-generator/    # Proforma invoice (SEO page)
│   │   └── 📄 page.tsx
│   │
│   ├── 📁 tax-invoice-generator/         # Tax invoice (SEO page)
│   │   └── 📄 page.tsx
│   │
│   └── 📁 freelancer-invoice-template/   # Freelancer template (SEO page)
│       └── 📄 page.tsx
│
├── 📁 components/                          # Reusable UI Components
│   ├── 📁 ui/                             # Base UI components
│   │   ├── 📄 button.tsx                 # Button component
│   │   ├── 📄 input.tsx                  # Input component
│   │   ├── 📄 textarea.tsx               # Textarea component
│   │   ├── 📄 card.tsx                   # Card component
│   │   └── 📄 label.tsx                  # Label component
│   │
│   ├── 📄 theme-toggle.tsx               # Dark/light mode toggle
│   └── 📄 toast-provider.tsx             # Toast notification provider
│
├── 📁 features/                            # Feature Modules
│   └── 📁 invoice/                        # Invoice Feature Module
│       ├── 📁 components/
│       │   ├── 📄 invoice-form.tsx       # Main form (company, client, items)
│       │   ├── 📄 invoice-preview.tsx    # Live preview component
│       │   ├── 📄 invoice-actions.tsx    # Export/Print/Share buttons
│       │   └── 📄 template-selector.tsx  # Template chooser
│       │
│       └── 📁 templates/                  # Invoice Templates
│           ├── 📄 minimal-template.tsx   # Minimal clean design
│           ├── 📄 professional-template.tsx  # Professional blue theme
│           └── 📄 modern-template.tsx    # Modern gradient design
│
├── 📁 lib/                                 # Utilities & Helpers
│   ├── 📁 supabase/                       # Supabase Configuration
│   │   ├── 📄 client.ts                  # Client-side Supabase
│   │   ├── 📄 server.ts                  # Server-side Supabase
│   │   └── 📄 middleware.ts              # Auth middleware
│   │
│   ├── 📁 store/                          # State Management
│   │   └── 📄 invoice-store.ts           # Zustand store for invoice
│   │
│   ├── 📄 utils.ts                        # Common utilities (cn, format, etc)
│   ├── 📄 invoice-calculations.ts         # Invoice math (subtotal, tax, total)
│   ├── 📄 pdf-generator.ts                # PDF/Print/Image export
│   └── 📄 seo.ts                          # SEO metadata generator
│
├── 📁 types/                               # TypeScript Type Definitions
│   ├── 📄 invoice.ts                      # Invoice, Item, Company types
│   └── 📄 supabase.ts                     # Supabase database types
│
├── 📁 supabase/                            # Supabase Database
│   └── 📄 schema.sql                      # Database schema & RLS policies
│
├── 📁 public/                              # Static Assets
│   ├── 📄 favicon.ico
│   └── 📄 og-image.png                    # Open Graph image
│
├── 📄 middleware.ts                        # Next.js middleware (auth)
├── 📄 package.json                         # Dependencies
├── 📄 tsconfig.json                        # TypeScript config
├── 📄 tailwind.config.ts                   # Tailwind CSS config
├── 📄 next.config.js                       # Next.js config
├── 📄 postcss.config.js                    # PostCSS config
│
├── 📄 .env.local.example                   # Environment variables template
├── 📄 .gitignore                          # Git ignore file
│
├── 📄 README.md                            # Project overview
├── 📄 PROJECT_DOCUMENTATION.md             # Complete documentation
├── 📄 QUICKSTART.md                        # Quick start guide
└── 📄 DEPLOYMENT.md                        # Deployment guide

```

## 📊 Component Hierarchy

```
App Layout
└── Theme Provider
    └── Page
        ├── Header
        │   ├── Logo
        │   ├── Navigation
        │   └── Theme Toggle
        │
        └── Main Content
            ├── Invoice Generator Page
            │   ├── Template Selector
            │   │   └── Template Options (Minimal, Professional, Modern)
            │   │
            │   ├── Invoice Form (Left Column)
            │   │   ├── Company Details Card
            │   │   │   ├── Logo Upload
            │   │   │   ├── Company Info Fields
            │   │   │   └── GST/VAT Field
            │   │   │
            │   │   ├── Client Details Card
            │   │   │   └── Client Info Fields
            │   │   │
            │   │   ├── Invoice Details Card
            │   │   │   ├── Invoice Date
            │   │   │   └── Due Date
            │   │   │
            │   │   ├── Items Card
            │   │   │   ├── Item 1 (name, desc, qty, price, tax)
            │   │   │   ├── Item 2
            │   │   │   └── Add Item Button
            │   │   │
            │   │   └── Additional Details Card
            │   │       ├── Discount
            │   │       ├── Notes
            │   │       └── Terms
            │   │
            │   └── Preview & Actions (Right Column - Sticky)
            │       ├── Invoice Preview
            │       │   └── Selected Template
            │       │       ├── Header with Logo
            │       │       ├── Company & Client Info
            │       │       ├── Items Table
            │       │       ├── Totals
            │       │       └── Notes & Terms
            │       │
            │       └── Action Buttons
            │           ├── Download PDF
            │           ├── Print
            │           ├── Download Image
            │           └── Share
            │
            └── Toast Provider (Global)
```

## 🔄 Data Flow

```
User Input (Form)
    ↓
Invoice Store (Zustand)
    ↓
├─→ Invoice Form (updates on change)
│
└─→ Invoice Preview (real-time update)
    ↓
    User clicks action button
    ↓
    ├─→ Download PDF → pdf-generator.ts → jsPDF → Download
    ├─→ Print → pdf-generator.ts → html2canvas → Print
    ├─→ Download Image → pdf-generator.ts → html2canvas → Download
    └─→ Share → Generate share link → Copy to clipboard
```

## 🗄️ Database Schema

```
┌─────────────────────────────────────────┐
│            profiles                      │
├─────────────────────────────────────────┤
│ id (uuid, PK)                           │
│ email (text)                            │
│ full_name (text)                        │
│ avatar_url (text)                       │
│ company_name (text)                     │
│ created_at (timestamp)                  │
│ updated_at (timestamp)                  │
└─────────────────────────────────────────┘
              │
              │ 1:N
              ↓
┌─────────────────────────────────────────┐
│            invoices                      │
├─────────────────────────────────────────┤
│ id (uuid, PK)                           │
│ user_id (uuid, FK) → profiles.id       │
│ invoice_number (text)                   │
│ company_* (company details)             │
│ client_* (client details)               │
│ items (jsonb)                           │
│ subtotal (decimal)                      │
│ tax_amount (decimal)                    │
│ discount_amount (decimal)               │
│ total_amount (decimal)                  │
│ template (text)                         │
│ notes (text)                            │
│ terms (text)                            │
│ status (enum)                           │
│ share_token (text, unique)              │
│ is_public (boolean)                     │
│ created_at (timestamp)                  │
│ updated_at (timestamp)                  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         blog_posts (SEO)                 │
├─────────────────────────────────────────┤
│ id (uuid, PK)                           │
│ slug (text, unique)                     │
│ title (text)                            │
│ content (text)                          │
│ seo_title (text)                        │
│ seo_description (text)                  │
│ seo_keywords (text[])                   │
│ published (boolean)                     │
│ created_at (timestamp)                  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│     Storage: logos (bucket)              │
├─────────────────────────────────────────┤
│ Public access                           │
│ User uploads                            │
│ Auto-optimization                       │
└─────────────────────────────────────────┘
```

## 🎨 Template Structure

Each template follows this structure:

```tsx
MinimalTemplate / ProfessionalTemplate / ModernTemplate
├── Container (A4 size, 1056px height)
│   ├── Header Section
│   │   ├── Logo (if uploaded)
│   │   ├── "INVOICE" title
│   │   ├── Invoice number
│   │   └── Company details
│   │
│   ├── Bill To & Dates Section
│   │   ├── Client information
│   │   └── Invoice dates
│   │
│   ├── Items Table
│   │   ├── Table header (Description, Qty, Price, Tax%, Amount)
│   │   └── Item rows
│   │
│   ├── Totals Section
│   │   ├── Subtotal
│   │   ├── Tax
│   │   ├── Discount (if any)
│   │   └── Grand Total
│   │
│   └── Footer Section
│       ├── Notes
│       └── Terms & Conditions
```

## 🚀 Key Features by File

| File | Key Features |
|------|-------------|
| `invoice-form.tsx` | Form inputs, logo upload, add/remove items, calculations |
| `invoice-preview.tsx` | Live preview, template switching |
| `invoice-actions.tsx` | PDF download, print, image download, share |
| `template-selector.tsx` | Visual template selection |
| `invoice-store.ts` | State management, persistence, calculations |
| `pdf-generator.ts` | PDF/image generation, print functionality |
| `seo.ts` | Meta tags, structured data, SEO pages |
| `schema.sql` | Database tables, RLS policies, triggers |

## 🔐 Security Layers

```
1. Environment Variables
   ├── Client-side (NEXT_PUBLIC_*)
   └── Server-side (SUPABASE_SERVICE_ROLE_KEY)

2. Supabase Row Level Security (RLS)
   ├── Users can only access their own data
   ├── Public invoices accessible via share token
   └── Storage policies for logo uploads

3. Next.js Middleware
   ├── Protected routes (/dashboard)
   └── Auth session verification

4. Input Validation
   ├── Zod schemas
   └── TypeScript type checking
```

## 📱 Responsive Breakpoints

```
Mobile:  < 768px   → Single column, full width
Tablet:  768-1024  → Two column for some sections
Desktop: > 1024px  → Two column with sticky preview
```

---

This structure is designed for:
- ✅ Easy maintenance
- ✅ Scalability
- ✅ Code reusability
- ✅ SEO optimization
- ✅ Performance
- ✅ Type safety
