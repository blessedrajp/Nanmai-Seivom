# Overview

This is a charitable organization website for Nanmai Seivom Trust, a non-profit organization focused on community development through sports, education, healthcare, and social services. The website showcases their mission to build a better society rooted in truth and love, particularly serving tribal communities in Kodaikanal and conducting anti-drug awareness programs through sports initiatives.

The application is built as a modern full-stack web application with a React frontend and Express.js backend, designed to provide information about the trust's activities, services, and allow community engagement through contact forms and volunteer registration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system using green/teal color scheme
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Typography**: Nutmeg font family from Google Fonts for modern, clean aesthetic
- **Routing**: Wouter for client-side routing (lightweight React Router alternative)
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation for contact forms
- **Animations**: Custom intersection observer hooks for scroll-triggered animations

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development/testing
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL store
- **User Schema**: Basic user model with username/password fields
- **Password Security**: Ready for bcrypt integration (schema supports hashed passwords)

## External Dependencies
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **Image Assets**: Unsplash for placeholder images
- **Font Loading**: Google Fonts API for Nutmeg typography
- **Development Tools**: Replit-specific plugins for development environment
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Styling Utilities**: Class Variance Authority for component variants
- **Date Handling**: date-fns for date formatting and manipulation
- **Form Validation**: Zod for runtime type checking and validation
- **Carousel**: Embla Carousel for hero image slider functionality

## Key Features
- **Responsive Design**: Mobile-first approach with sticky navigation
- **Hero Slider**: Multi-slide carousel showcasing trust initiatives
- **Service Cards**: Structured presentation of trust activities
- **Contact Forms**: Integrated contact and volunteer registration
- **Statistics Display**: Animated counters for impact metrics
- **Social Media Integration**: Links to Instagram, Facebook, and YouTube
- **Accessibility**: WCAG compliant through Radix UI components