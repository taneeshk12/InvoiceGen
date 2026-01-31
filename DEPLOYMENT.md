# Deployment Guide

## 🚀 Deploying to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables**
   In Vercel dashboard:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app is live!

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_APP_URL

# Deploy to production
vercel --prod
```

## 📱 Deploying to Other Platforms

### Netlify

1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Environment Variables**
   Same as Vercel

3. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       build:
         commands:
           - npm ci
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t invoice-generator .
docker run -p 3000:3000 invoice-generator
```

## 🔧 Post-Deployment Setup

### 1. Update Supabase Redirect URLs

In your Supabase project:
- Go to **Authentication** > **URL Configuration**
- Add your production URL to **Site URL**:
  ```
  https://yourdomain.com
  ```
- Add to **Redirect URLs**:
  ```
  https://yourdomain.com/auth/callback
  ```

### 2. Setup Custom Domain (Vercel)

1. Go to your project settings
2. Navigate to **Domains**
3. Add your custom domain
4. Update DNS records as instructed

### 3. Enable Google OAuth (Optional)

1. **Google Cloud Console**
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI:
     ```
     https://your-project.supabase.co/auth/v1/callback
     ```

2. **Supabase Dashboard**
   - Go to **Authentication** > **Providers**
   - Enable Google
   - Add Client ID and Secret

### 4. Setup Analytics

**Vercel Analytics**
```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔍 SEO Optimization

### 1. Submit Sitemap

Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/invoice-generator</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

Submit to:
- Google Search Console
- Bing Webmaster Tools

### 2. robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### 3. Performance Optimization

**Enable Compression**
```javascript
// next.config.js
module.exports = {
  compress: true,
  // ... other config
}
```

**Optimize Images**
```javascript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}
```

## 📊 Monitoring

### Setup Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

```bash
npx @sentry/wizard@latest -i nextjs
```

### Setup Logging

Add to `next.config.js`:
```javascript
module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

## 🔒 Security

### Environment Variables Checklist

- [ ] Never commit `.env.local`
- [ ] Use different keys for dev/prod
- [ ] Rotate keys regularly
- [ ] Use Vercel's encrypted variables

### Security Headers

Add to `next.config.js`:
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}
```

## 🧪 Pre-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test invoice creation flow
- [ ] Test PDF generation
- [ ] Test on mobile devices
- [ ] Check SEO meta tags
- [ ] Verify environment variables
- [ ] Test authentication (if enabled)
- [ ] Check for console errors
- [ ] Run Lighthouse audit
- [ ] Test all templates
- [ ] Verify Supabase connection

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Check variable names match exactly
- Ensure `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding variables

### Supabase Connection Issues

- Verify URL and keys
- Check Supabase project status
- Verify RLS policies
- Check allowed domains in Supabase

## 📈 Post-Launch

### Week 1
1. Monitor error logs
2. Check analytics
3. Collect user feedback
4. Fix critical bugs

### Week 2-4
1. Optimize slow pages
2. Improve SEO
3. Add missing features
4. A/B test improvements

### Month 2+
1. Scale infrastructure
2. Add advanced features
3. Improve conversion rates
4. Expand to new markets

## 🎯 Performance Targets

- **Page Load**: < 1 second
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90

## 📞 Support

If you encounter issues:
1. Check logs in Vercel dashboard
2. Review Supabase logs
3. Check GitHub issues
4. Contact support

---

**You're ready to launch! 🚀**

Good luck with your deployment!
