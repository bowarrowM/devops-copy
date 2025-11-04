# DevOps.com.tr - Modern DevOps Consulting Website

A modern, production-ready website for DevOps consulting services in Turkey. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Multi-language Support**: Turkish (default), English, and German
- **Modern Design**: Gradient backgrounds, smooth animations, and responsive layout
- **Production-Ready**: Optimized for performance and SEO
- **Service Tiers**: Foundation, Transformation, Advanced, and Managed services
- **Contact Form**: Integrated contact form for lead generation
- **Static Export**: Can be deployed to any static hosting service

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Static export compatible

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

1. **Build the project**:
```bash
npm run build
```

2. **The static files will be in the `out/` directory**

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`

### Static Hosting (AWS S3, GitHub Pages, etc.)
1. Run `npm run build`
2. Upload the `out/` directory to your hosting service

### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📁 Project Structure

```
devopscomtr/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── lib/                   # Libraries and utilities
│   ├── i18n/             # Internationalization
│   │   ├── types.ts
│   │   ├── index.ts
│   │   └── translations/
│   │       ├── tr.ts
│   │       ├── en.ts
│   │       └── de.ts
│   └── context/          # React contexts
│       └── LanguageContext.tsx
└── public/               # Static files

```

## 🎨 Customization

### Adding a New Language

1. Create a new translation file in `lib/i18n/translations/`:
```typescript
// lib/i18n/translations/fr.ts
import { Translations } from '../types';

export const fr: Translations = {
  // Add all translations
};
```

2. Update `lib/i18n/index.ts`:
```typescript
import { fr } from './translations/fr';

export const translations = {
  tr,
  en,
  de,
  fr, // Add new language
};

export const languages = [
  // Add new language
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Adding New Services

Update the translations in `lib/i18n/translations/` to add new services to the services section.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:
```env
NEXT_PUBLIC_SITE_URL=https://devops.com.tr
NEXT_PUBLIC_CONTACT_EMAIL=info@devops.com.tr
```

### SEO Optimization

Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // Add more metadata
}
```

## 📝 Content Management

### Updating Prices

Edit the translation files in `lib/i18n/translations/` to update service prices.

### Updating Contact Information

Edit the translation files to update contact information across all languages.

## 🛠️ Development

### Running Tests
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📞 Support

For questions or issues:
- Email: info@devops.com.tr
- Website: https://devops.com.tr

## 📄 License

© 2025 DevOps.com.tr. All rights reserved.

## 🇹🇷 Made in Turkey

This project is built with ❤️ in Turkey for the Turkish DevOps community.
