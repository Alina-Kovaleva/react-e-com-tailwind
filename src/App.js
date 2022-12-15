import { Footer, Navigation } from './components';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
