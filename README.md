# ClariPath: Professional Career Counselling & Mentorship

A premium, high-converting platform for career guidance, overseas admission planning, and professional mentorship. Built with a focus on visual excellence, clarity, and seamless CMS integration.

## ✨ Core Features

- **Premium UI/UX**: Modern, glassmorphic design system using a curated **Soft Blue & Sage Green** palette.
- **Dynamic Content**: Fully integrated with **Sanity CMS** for real-time updates to services, package pricing, and founder details.
- **Interactive Mentorship**: Categorized service tabs for Career Analysis, Overseas Planning, and Corporate Mentoring.
- **Responsive Contact Hub**: Custom-built, two-column contact section with dynamic reachability and form integration.
- **Optimized Performance**: Built on **Next.js 15+** with Turbopack for lightning-fast loads and smooth micro-animations.

## 🛠 Technology Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **CMS**: Sanity (Headless)
- **Icons**: Lucide React
- **Typography**: Inter / Outfit (Modern Sans Serif)

## 🚀 Deployment

The easiest way to host this website is via **Vercel**. It is optimized for Next.js and will automatically deploy your code from this GitHub repository.

### Steps to Host:
1.  Go to [Vercel](https://vercel.com/new).
2.  Import this repository (`Meena_R`).
3.  Add the following **Environment Variables** in the Vercel dashboard:
    -   `NEXT_PUBLIC_SANITY_PROJECT_ID`: `il7kwo8v`
    -   `NEXT_PUBLIC_SANITY_DATASET`: `production`
4.  Click **Deploy**.

Your website will be live at a `.vercel.app` URL within minutes!

## 🚀 Getting Started (Local Development)

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Repository Structure

- `src/app`: Next.js core routes and layout.
- `src/components`: Premium UI components (Navbar, ContactSection, FounderSection, etc.).
- `src/sanity/lib`: CMS data fetching and client configuration.
- `scripts`: Utility scripts for data migration and seeding.

---

*Designed and developed with a focus on helping individuals choose a path that truly aligns with their potential.*
