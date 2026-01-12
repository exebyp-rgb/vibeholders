This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# VibeHolders

Интерактивная социальная платформа-карта для креаторов с 12 уникальными архетипами.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (Postgres)
- **Deployment**: Cloudflare Pages

## Supabase Setup

### 1. Create Supabase Project

1. Go to [app.supabase.com](https://app.supabase.com)
2. Create a new project
3. Wait for database to be ready

### 2. Create Database Schema

Run this SQL in Supabase SQL Editor:

```sql
CREATE TABLE creators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  archetype TEXT NOT NULL,
  vibe_tags TEXT[] DEFAULT '{}',
  avatar_url TEXT,
  photo_url TEXT,
  position_x FLOAT CHECK (position_x >= 0 AND position_x <= 100),
  position_y FLOAT CHECK (position_y >= 0 AND position_y <= 100),
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  cta_text TEXT,
  cta_link TEXT,
  bio TEXT,
  instagram TEXT,
  twitter TEXT,
  youtube TEXT,
  tiktok TEXT,
  website TEXT,
  followers INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for avatars and photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('creators', 'creators', true);
```

### 3. Get API Keys

1. Go to Project Settings > API
2. Copy `Project URL` and `anon public` key
3. Create `.env.local` file:

```bash
cp .env.example .env.local
```

4. Add your keys to `.env.local`



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
