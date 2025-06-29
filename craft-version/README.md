# The Leading Edge - CraftCMS Version

A modern, optimized CraftCMS implementation with Barba.js page transitions and GSAP animations.

## Features

- ✅ **CraftCMS 5** - Modern content management
- ✅ **Barba.js** - Smooth page transitions (restores Vue-like experience)
- ✅ **GSAP** - Professional animations and interactions
- ✅ **Modern SCSS** - Organized, maintainable stylesheets
- ✅ **Vite Build System** - Fast compilation with predictable file names
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Accessibility** - WCAG compliant
- ✅ **SEO Optimized** - Meta tags, structured data, performance

## Development Setup

### Prerequisites
- PHP 8.2+
- Composer
- Node.js 18+
- MySQL/PostgreSQL

### Installation

1. **Install PHP dependencies:**
   ```bash
   composer install
   ```

2. **Install Node dependencies:**
   ```bash
   npm install
   ```

3. **Build assets:**
   ```bash
   npm run build
   ```

### Development Workflow

- **Build assets:** `npm run build`
- **Watch for changes:** `npm run watch`
- **Development server:** `npm run dev` (for Vite dev server)

## File Structure

```
craft-version/
├── src/                    # Source files
│   ├── scss/              # SCSS stylesheets
│   │   ├── core.scss      # Core styles (always loaded)
│   │   ├── abstracts/     # Variables, mixins, functions
│   │   ├── base/          # Reset, typography, base styles
│   │   ├── components/    # Reusable components
│   │   ├── layout/        # Grid system, layout utilities
│   │   └── pages/         # Page-specific styles
│   └── js/                # JavaScript files
│       ├── core/          # Core functionality
│       │   ├── main.js    # Main entry point
│       │   └── barba.js   # Barba.js configuration
│       └── pages/         # Page-specific scripts
├── templates/             # Twig templates
│   ├── _layout/          # Layout templates
│   └── _partials/        # Reusable template parts
└── web/                  # Public web directory
    ├── css/              # Compiled CSS files
    ├── js/               # Compiled JS files
    └── images/           # Static images
```

## Asset Management

### Simple Approach
- Vite compiles SCSS to predictable CSS files (`core.css`, `home.css`, etc.)
- No complex asset hashing or manifest files
- Templates reference files directly: `{{ siteUrl }}css/core.css`

### Page-Specific Assets
Each page automatically loads:
- Core CSS: `css/core.css` (always loaded)
- Page CSS: `css/[pageHandle].css` (e.g., `css/home.css`)
- Core JS: `js/main.js` (always loaded)
- Page JS: `js/[pageHandle].js` (e.g., `js/home.js`)

## Barba.js Integration

Smooth page transitions are handled by Barba.js:
- Maintains SPA-like experience
- Custom transitions per page type
- Automatic script reinitialization
- Loading indicators

## Key Improvements Over PHP Version

1. **Smooth Page Transitions** - Barba.js restores the Vue-like experience
2. **Modern Build System** - Vite for fast, efficient compilation
3. **Better Code Organization** - Modular SCSS and JS structure
4. **Enhanced Animations** - GSAP integration throughout
5. **CraftCMS Benefits** - Powerful content management, custom fields, etc.

## Performance

- Optimized CSS/JS bundles
- Page-specific asset loading
- GSAP and Barba.js for smooth interactions
- Modern browser support with legacy fallbacks

## Browser Support

- Modern browsers (ES6+)
- Legacy browser support via Vite's legacy plugin
- Progressive enhancement approach
