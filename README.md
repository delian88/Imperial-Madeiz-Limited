# Imperial Madeiz Limited — Alkebulan City Ghana Web Platform

Full-stack web application designed for **Imperial Madeiz Limited (Medeiz Limited)**, cloning the architectural layout, color palette (`#002C5F` navy, `#181b31` dark slate, `#FE5D5B` coral, `#FFBC7D` gold), typography (`Roboto`, `Inter`, `Roboto Slab`), interactive features, and animations of **[sabcltd.com](https://sabcltd.com/)**, tailored with verified press write-ups, photography, and videos of the **Alkebulan City Ghana Development Project** at **Agave-Dzebetato, South Tongu District, Volta Region**.

---

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons
- **Backend**: Next.js TypeScript Route Handlers (`/api/projects`, `/api/insights`, `/api/inquiries`, `/api/vendors`, `/api/stats`)
- **ORM**: Drizzle ORM (`drizzle-orm/postgres-js` & `drizzle-kit`)
- **Database**: Supabase PostgreSQL (`@supabase/supabase-js` + `postgres` driver) with automatic zero-config local persistence fallback when `DATABASE_URL` is not yet set

---

## Key Features & SABC (`sabcltd.com`) Clone Elements

1. **Sticky Header + Left & Right Vertical Sticky Bars (`Navbar.tsx`)**:
   - Top navigation with hover dropdown for all 8 Alkebulan City Master-Plan zones, `Quick Inquiry` modal trigger, and `Client Login / Partner Portal` liquid-hover button.
   - Left vertical rotated email bar (`info@imperialmadeiz.com`) and right vertical `scroll to top` + quick project modal button.
2. **Full-Screen Hero Swiper Slider (`HomeClient.tsx`)**:
   - Autoplay slide transitions with `fadeInUp` typography (`Simple & Authentic /01`, `Quality & Experience /02`, `Simple & Authentic /03`), inside chevron navigation, pagination indicators, and video lightbox modal.
3. **Overlapping Dual-Image `Who We Are` Section**:
   - Features Founder & CEO **Dr. Delorn Madeiz** addressing the gathering at Agave-Dzebetato alongside Executive Director **Mrs. Anael Madeiz** and a 6-stat impact bar (`2,000+ Acres`, `5,000,000 Habitats`, `2,000,000+ Jobs`, `509,000+ Family Homes`, `2,000+ SMEs`, `60% Local Workforce`).
4. **Zoom-on-Hover `lqd-fb-style-11` Services Cards**:
   - `Pre-construction Services`, `Design & Build Services`, and `Construction Management` with white content bars that transition to `#002C5F` navy on hover.
5. **Core Values (`D.I.C.E.`) & Regional Partners**:
   - Highlights the 5-nation West African EPC Consortium (Ghana, Nigeria, Togo, Benin, Côte d'Ivoire), **BlueGates Global**, Agave Traditional Leaders (**Togbega Gadagbe Hlitabo IV**, **Torgbui Kavi VI**, **Tator Seshie**), South Tongu District Assembly (**Hon. Victoria Dzeklo**, **Hon. Peter Doe Newton**), and financial partners.
6. **Full-Viewport Sticky Scroll Banner & Dual Solid/Outlined Marquee Ticker**:
   - Clones SABC's `Quality & Experience` -> `Partnership` banner and alternating solid/outlined horizontal text marquees.
7. **Filterable Portfolio Case Studies (`All Projects`, `City Marks`, `Corporate Buildings`, `Residential`, `Auditorium`)**:
   - 8 detailed master-plan zones with dedicated `/projects/[slug]` case study pages.
8. **Verified Press Archive & Official YouTube Video Briefings**:
   - Complete text, quotes, and photographs from **[Graphic Online](https://www.graphic.com.gh/news/general-news/ghana-news-modern-city-project-takes-off-at-agave-dzebetato.html)**, **AdomOnline**, and **ACGhana**, plus embedded official videos from **[@imperialmadeiz1804](https://www.youtube.com/@imperialmadeiz1804)**.
9. **SABC Table-Grid Inquiry Modal & `/become-a-vendor` Registration**:
   - Exact bordered table-grid forms persisted via Drizzle ORM / Supabase.

---

## Running Locally & Connecting Supabase

1. Copy `.env.example` to `.env.local` and add your Supabase PostgreSQL connection string (`DATABASE_URL`) and Supabase project keys (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
2. Push the Drizzle schema to Supabase and seed initial data:
   ```bash
   npm run db:push
   npm run db:seed
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

