# Asef Islam - Portfolio

A modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── components/
│       └── Home.tsx      # Hero component
└── ...
```

## Deployment

This project is optimized for deployment on **Vercel** (the creators of Next.js):

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure everything for you. Your site will be live in minutes with a free domain.

## Customization

- Update social links in `src/app/components/Home.tsx`
- Add your profile image as `public/profile.jpg`
- Modify colors and styling in `tailwind.config.js`
- Update metadata in `src/app/layout.tsx`

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (Free)
