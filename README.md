# Alpha Business Compliance Website

A modern, responsive React website for Alpha Business Compliance - showcasing AI-driven accounting automation and ESG compliance solutions.

## 🚀 Features

- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Mobile Navigation** - Animated hamburger menu for mobile devices
- ✅ **Code Splitting** - Lazy loading pages for optimal performance
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **404 Page** - Custom not found page
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **Modern Stack** - React 19, Vite, React Router

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with mobile menu
│   ├── Footer.jsx      # Contact information
│   ├── Carousel.jsx    # Image carousel
│   ├── IndustryCard.jsx
│   └── ErrorBoundary.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Industries.jsx
│   └── NotFound.jsx
├── data/
│   └── industries.js
├── App.jsx             # Main app with routing
└── main.jsx            # Entry point
```

## 🛠️ Technologies Used

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **React Router 7.12** - Client-side routing
- **CSS3** - Styling with Flexbox and Grid
- **ESLint** - Code quality

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 Pages

1. **Home** (`/`) - Hero section, mission statement, carousel, and projects
2. **About** (`/about`) - Team information, certifications, and values
3. **Industries** (`/industries`) - Industries served with card grid
4. **404** (`/*`) - Custom not found page

## 📱 Mobile Features

- Animated hamburger menu
- Touch-friendly navigation
- Responsive typography
- Optimized layouts for small screens

## 🎨 Styling

CSS is organized into separate files:
- `App.css` - Global utilities, loading, error states
- `home.css` - Home page and header/footer styles
- `about.css` - About page styles
- `industries.css` - Industries page styles

## 🔧 Key React Concepts Used

- **Function Components** - Modern React component syntax
- **Hooks** - useState for state management
- **React Router** - useNavigate for navigation
- **Lazy Loading** - Code splitting with React.lazy()
- **Suspense** - Fallback UI during loading
- **Error Boundaries** - Catch and handle errors
- **Props** - Pass data between components
- **Event Handlers** - Interactive UI elements

## 📚 Learning Resources

See [REACT_GUIDE.md](./REACT_GUIDE.md) for a comprehensive guide to React concepts used in this project.

## 🚀 Development

### Adding a New Page

1. Create component in `src/pages/`:
```jsx
function NewPage() {
  return (
    <>
      <Header />
      <section>Your content</section>
      <Footer />
    </>
  );
}
export default NewPage;
```

2. Add route in `src/App.jsx`:
```jsx
const NewPage = lazy(() => import('./pages/NewPage'));

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation in `Header.jsx`:
```jsx
<button onClick={() => handleNavigation('/new-page')}>
  New Page
</button>
```

### Adding a New Component

1. Create file in `src/components/`
2. Export the component
3. Import and use in your pages

## 🔍 Code Quality

- ESLint configured with React rules
- No console errors or warnings
- Semantic HTML elements
- Accessible components

## 📈 Performance Optimizations

- Lazy loading routes
- Image optimization (using .avif format)
- CSS organized and modular
- Minimal JavaScript bundle
- Preconnect to font sources

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact

- **Email**: info@alphabusiness.pro
- **WhatsApp**: +852 6992 3774
- **Address**: Workshop 6, Unit 806, 8/F, Eight Commercial Tower, 8 Sun Yip Street, Chai Wan, Hong Kong

## 📄 License

© 2026 Alpha Business Compliance Limited. All Rights Reserved.

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and ESLint rules.

### Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

