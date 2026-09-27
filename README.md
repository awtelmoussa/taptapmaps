# TapTap Maps 🗺️

> **Discover places in one tap.** Find cafés, gyms, and hidden spots near you with smart AI search and seamless turn-by-turn navigation.

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Overview

**TapTap Maps** is a modern, responsive web application and landing page designed to showcase a smarter way to explore local destinations. Whether you're hunting for a cozy café, a nearby fitness center, or a hidden gem in the city, TapTap Maps makes discovery intuitive, fast, and personalized.

### Key Features

* 🔍 **Smart Search & AI Beta**: Quickly locate places tailored to your immediate preferences and geolocation.
* 📌 **Save Places**: Bookmark your favorite spots for one-click access anytime.
* 🧭 **Turn-by-Turn GPS Guidance**: Precise navigation directions to get you to your destination without friction.
* 📱 **Fully Responsive & Fluid UI**: Tailored layouts for mobile, tablet, and desktop viewports with glassmorphism design accents.
* ⚡ **Blazing Fast Performance**: Built on Vite with instant HMR and optimized production bundles.

---

## 🛠️ Tech Stack

* **Framework**: [React 19](https://react.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Icons & Assets**: Custom SVG icon suite & Lucide React
* **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Project Structure

```text
taptapmap/
├── public/                # Static assets (logo, favicon)
├── src/
│   ├── assets/            # Brand imagery, map illustrations, and SVG icons
│   │   ├── icons/         # Feature and social media icons
│   │   └── images/        # Hero backgrounds and app store badges
│   ├── components/        # Reusable UI sections
│   │   ├── Navbar.tsx             # Responsive header with mobile drawer
│   │   ├── Hero.tsx               # Hero presentation with app badges
│   │   ├── FeatureSection.tsx     # Smart Search, Save, & Direction highlights
│   │   ├── DiscoverMoreSection.tsx# Dynamic exploration CTA
│   │   ├── MapSection.tsx         # Availability coverage map
│   │   ├── ExploreSmarterSection.tsx # Download CTA banner
│   │   ├── Footer.tsx             # Footer links and social icons
│   │   └── BrandOutroSection.tsx  # Outro branding
│   ├── pages/             # Landing page container
│   ├── App.tsx            # Main App component
│   ├── index.css          # Tailwind CSS directives & global resets
│   └── main.tsx           # React DOM root entry point
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (version 18.0 or later recommended)
* [pnpm](https://pnpm.io/) (or `npm` / `yarn`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/awtelmoussa/taptapmaps.git
   cd taptapmaps
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Vite local development server with Hot Module Replacement (HMR). |
| `pnpm build` | Type-checks with TypeScript and compiles the production bundle into `dist/`. |
| `pnpm preview` | Serves the production build locally for verification. |
| `pnpm lint` | Runs ESLint to check code consistency and detect errors. |

---

## 👤 Author

* **Awtel Moussa**
  * Email: [awtel-moussa@outlook.com](mailto:awtel-moussa@outlook.com)
  * GitHub: [@awtelmoussa](https://github.com/awtelmoussa)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
