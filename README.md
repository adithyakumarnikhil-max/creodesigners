# CREO Designers - Modern Website

A modern, animated website for CREO Designers built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 Next.js 15 with App Router
- ⚛️ React 19
- 🎨 Tailwind CSS v4
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🎯 SEO optimized
- 🚀 Performance optimized

## Pages

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Portfolio (`/portfolio`)
- Team (`/team`)
- Contact (`/contact`)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd creodesigners
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the project for production:

```bash
npm run build
```

### Deployment

To run the production build:

```bash
npm run start
```

## Deployment to Vercel

### Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to your Vercel account:
   ```bash
   vercel login
   ```
   - When prompted, select "Continue with Google"
   - Complete the authentication in your browser

3. Deploy the project:
   ```bash
   vercel --prod
   ```

### Alternative Deployment Methods

1. **Using the deployment script:**
   - Windows: Run `deploy.bat`
   - Mac/Linux: Run `deploy.sh`

2. **Direct deployment from Vercel Dashboard:**
   - Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
   - Connect the repository to Vercel
   - Vercel will automatically deploy your site

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)

## Project Structure

```
src/
├── app/              # App Router pages
│   ├── about/
│   ├── contact/
│   ├── portfolio/
│   ├── services/
│   ├── team/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/       # Reusable components
│   ├── Layout/
│   │   └── MainLayout.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Section.tsx
└── public/           # Static assets
```

## Customization

### Colors

The primary and secondary colors can be customized in `tailwind.config.ts`:

```js
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ...
    900: '#0c4a6e',
  },
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    // ...
    900: '#4c1d95',
  },
}
```

### Animations

Custom animations are defined in `tailwind.config.ts` and `src/app/globals.css`.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/docs/)