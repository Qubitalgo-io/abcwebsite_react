import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import './App.css';
import './home.css';

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
