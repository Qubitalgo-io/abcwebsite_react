import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import './home.css';
import './about.css';
import './industries.css';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Industries = lazy(() => import('./pages/Industries'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const Loading = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
