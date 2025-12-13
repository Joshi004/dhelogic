# TechSergy - IT Consultancy Website

A modern, professional website for TechSergy IT consultancy built with React, Material UI, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, Stripe-inspired aesthetic with professional typography and color palette
- **Responsive**: Mobile-first approach, works on all device sizes
- **Animated**: Smooth transitions and micro-interactions powered by Framer Motion
- **Multi-Page**: Home, About, Services, Portfolio, and Contact pages
- **Contact Form**: Validated form with React Hook Form

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Material UI v5** - Component library
- **React Router v6** - Client-side routing
- **Framer Motion** - Animations
- **React Hook Form** - Form handling

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Deep Indigo) | `#4F46E5` | CTAs, links, active states |
| Secondary (Slate) | `#0F172A` | Headlines, dark text |
| Background | `#FFFFFF` | Main backgrounds |
| Surface | `#F8FAFC` | Cards, sections |
| Success | `#10B981` | Positive indicators |
| Text Primary | `#1E293B` | Body text |
| Text Secondary | `#64748B` | Captions, labels |

### Typography

- **Headlines**: Plus Jakarta Sans (Bold/ExtraBold)
- **Body**: Inter (Regular/Medium)

## 📁 Project Structure

```
techsergy-website/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/       # Shared components (Navbar, Footer, etc.)
│   │   ├── home/         # Home page components
│   │   ├── services/     # Services page components
│   │   ├── about/        # About page components
│   │   ├── portfolio/    # Portfolio page components
│   │   └── contact/      # Contact page components
│   ├── pages/            # Page components
│   ├── theme/            # MUI theme configuration
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd techsergy-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages

- **Home** (`/`) - Hero, services overview, featured work, testimonials
- **About** (`/about`) - Company mission, values, team, process
- **Services** (`/services`) - Detailed service offerings
- **Portfolio** (`/portfolio`) - Case studies (Tether, Video Analysis AI)
- **Contact** (`/contact`) - Contact form and information

## 🔧 Customization

### Updating Colors

Edit the color palette in `src/theme/theme.js`

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation links in `src/components/common/Navbar.jsx` and `Footer.jsx`

## 📝 License

This project is proprietary to TechSergy.

## 👥 Contact

- Website: [techsergy.com](https://techsergy.com)
- Email: hello@techsergy.com
