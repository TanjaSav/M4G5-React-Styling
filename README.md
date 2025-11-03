# React + Vite + TypeScript + Tailwind + ShadCN UI
## About

In this project, I built the main page of a mobile grocery shopping app using React, Vite, TypeScript, Tailwind CSS, and the ShadCN UI component library.

## Goals
The goal was to create a clean, modular interface that’s easy to maintain and extend.

## Core Components
The page includes four core components:
- **Header.tsx**: A top navigation bar with the Broccoli Market logo, favorites and cart icons, and a hamburger menu that opens a sidebar.
- **Search.tsx**: A compact search bar with an embedded icon, styled for clarity and optimized for mobile UX.
- **PromoCarousel.tsx**: A horizontally scrollable carousel showcasing promotional offers, built with ShadCN’s Carousel, Card, and Button components.
- **Categories.tsx**: A responsive grid of grocery categories, each with a label and icon, styled with hover effects and consistent layout.

## Why ShadCN UI
ShadCN UI played a key role by providing accessible, customizable components built on Radix UI and Tailwind. It allowed me to maintain visual consistency while adapting styles to match the app’s branding.

## How To Install
1. Create a Vite + React + TypeScript project
```
npm create vite@latest my-app -- --template react-ts
cd my-app
```
2. Install dependencies
```
npm install
```
3. Install Tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
4. Configure Tailwind
In `tailwind.config.js`, replace the content section:
```/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
5. Add Tailwind directives to your CSS
In `src/index.css`, replace everything with:
```@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. Initialize ShadCN UI
```
npx shadcn@latest init
```
7. Add ShadCN Components
```
npx shadcn@latest add button
npx shadcn@latest add carousel
npx shadcn@latest add card
npx shadcn@latest add input
```

8. Import ShadCN UI Components:
```
import { Button } from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
```
9. Install Lucide Icons
```
npm install lucide-react
```
9. Import Lucide Icons
```
import { Search, ShoppingCart, Heart, Menu } from "lucide-react";
```
10. Run the development server
```
npm run dev
```

## Live Demo Link 
https://tanjasav.github.io/M4G5-React-Styling/


























