# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website, designed for Andrei & Sam's wedding on September 7, 2025. It features a responsive, interactive invitation with sections for a hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide a beautiful and engaging digital invitation experience, leveraging modern web technologies for a sophisticated and elegant presentation. Key capabilities include interactive elements, background music, a quiz game for invitation reveal, and comprehensive wedding information display.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The project utilizes a full-stack JavaScript architecture. The frontend is built with React and TypeScript, bundled by Vite, and styled using Tailwind CSS integrated with shadcn/ui. Routing is managed by Wouter, and server state is handled by TanStack Query. The backend is an Express.js server developed with TypeScript, currently using in-memory storage. The design emphasizes a dark mode aesthetic with an "old money" theme, featuring elegant typography, responsive layouts, and interactive components. Key features include an interactive quiz game with score-based invitation designs, background music that starts on user interaction, comprehensive wedding content sections, and SEO optimization. The site is designed for mobile responsiveness and elegant visual presentation.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and all wedding-related images (e.g., hero section backgrounds, venue images, prenup photos, payment QR codes).
- **Google Fonts**: Utilized for enhanced typography (Playfair Display, Cormorant Garamond, Inter).
- **Google Maps**: Integrated for providing links to ceremony and reception venues.