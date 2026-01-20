# Cooked Newsletter 🌿

Macro and Bitcoin news for people who know something's broken but don't have time for the finance bro BS.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your email provider API keys (see below).

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

---

## Email Provider Setup

Choose **one** of these options:

### Option A: Beehiiv (Recommended)

Best for: Growth features, referral programs, monetization tools

1. Sign up at [beehiiv.com](https://beehiiv.com)
2. Create a new publication
3. Go to **Settings > Integrations** to get your API key
4. Go to **Settings > Publication** to get your Publication ID
5. Add to `.env.local`:
   ```
   BEEHIIV_API_KEY=your_api_key_here
   BEEHIIV_PUBLICATION_ID=your_publication_id_here
   ```

### Option B: Buttondown

Best for: Simplicity, developers, markdown-first workflow

1. Sign up at [buttondown.email](https://buttondown.email)
2. Go to **Settings** to get your API key
3. Add to `.env.local`:
   ```
   BUTTONDOWN_API_KEY=your_api_key_here
   ```

---

## Deploy to Vercel

### Option 1: One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cooked-newsletter)

### Option 2: Manual deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Add your environment variables in the Vercel dashboard
5. Deploy!

### Environment Variables in Vercel

In your Vercel project settings, add these environment variables:
- `BEEHIIV_API_KEY` (or `BUTTONDOWN_API_KEY`)
- `BEEHIIV_PUBLICATION_ID` (if using Beehiiv)

---

## Project Structure

```
cooked-newsletter/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts      # Email subscription endpoint
│   ├── globals.css           # Global styles + Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── Navigation.tsx        # Sticky nav bar
│   ├── Hero.tsx              # Hero section with CTA
│   ├── Marquee.tsx           # Scrolling stats banner
│   ├── About.tsx             # Problem statement section
│   ├── Features.tsx          # Feature cards grid
│   ├── Quote.tsx             # Testimonial section
│   ├── FinalCTA.tsx          # Bottom email capture
│   ├── Footer.tsx            # Site footer
│   ├── BackgroundOrbs.tsx    # Decorative background
│   ├── EmailForm.tsx         # Reusable email form
│   └── index.ts              # Component exports
├── .env.example              # Environment variables template
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

---

## Customization

### Colors

Edit `tailwind.config.js` to change the color palette:

```js
colors: {
  cream: '#FFFCF8',        // Background
  sage: { ... },           // Primary green tones
  terracotta: { ... },     // Accent orange tones
}
```

### Content

- **Headlines & copy**: Edit directly in components
- **Features**: Update the `features` array in `components/Features.tsx`
- **Stats marquee**: Update the `stats` array in `components/Marquee.tsx`

### Social Links

Update Twitter/TikTok links in:
- `components/Navigation.tsx`
- `components/Footer.tsx`

---

## Next Steps After Launch

### Week 1-2: Content
- [ ] Write first 3 newsletter issues
- [ ] Create Twitter account and post first thread
- [ ] Set up TikTok and record first videos

### Week 3-4: Growth
- [ ] Enable Beehiiv referral program (if using Beehiiv)
- [ ] Add analytics (Plausible or Umami)
- [ ] Create lead magnet (PDF guide, jargon glossary, etc.)

### Month 2+: Monetization
- [ ] Reach out to Bitcoin companies for sponsorships
- [ ] Consider paid tier for deep dives
- [ ] Build community (Discord or private newsletter)

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: DM Sans + Outfit (Google Fonts)
- **Hosting**: Vercel
- **Email**: Beehiiv or Buttondown

---

## License

MIT — do whatever you want with it.

---

## Questions?

Open an issue or reach out on Twitter [@cooked](https://twitter.com/cooked)
