# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Setup Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be ready (2-3 minutes)
3. Go to **Settings** > **API** and copy:
   - Project URL
   - Anon key

### Step 3: Setup Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 4: Setup Database

1. Go to your Supabase project
2. Click on **SQL Editor** in the sidebar
3. Click **New Query**
4. Copy the entire content from `supabase/schema.sql`
5. Paste and click **Run**

### Step 5: Run the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✅ You're Ready!

Try these features:
- Create an invoice on `/invoice-generator`
- Add company logo
- Add multiple items
- Switch between templates
- Download as PDF
- Print invoice

## 🎨 Customization

### Change Colors
Edit `app/globals.css` to modify the color scheme:
```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... more colors */
}
```

### Add New Template
1. Create `features/invoice/templates/your-template.tsx`
2. Import in `invoice-preview.tsx`
3. Add to template selector

### Modify Invoice Fields
Edit `types/invoice.ts` to add new fields to the invoice structure.

## 📱 Test Responsive Design

```bash
# Desktop
http://localhost:3000

# Mobile view
Use browser DevTools > Toggle device toolbar
```

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard:
1. Import your GitHub repository
2. Add environment variables
3. Deploy

## 🆘 Need Help?

Common issues:

**"Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"Supabase connection error"**
- Check your environment variables
- Verify your Supabase project is running

**"TypeScript errors"**
```bash
npm run type-check
```

## 📚 Next Steps

1. **Add Authentication**: Enable Google OAuth in Supabase
2. **Create Blog**: Add blog posts for SEO
3. **Customize Templates**: Modify existing templates
4. **Add Features**: Implement invoice saving, sharing, etc.

---

**Happy Coding! 🎉**
