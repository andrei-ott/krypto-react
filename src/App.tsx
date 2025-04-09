import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from 'src/components/Footer/Footer.tsx';

import Header from './components/Header/Header.tsx';
import Home from './pages/Home/Home.tsx';

function App() {
  return (
    <>
      <div className="mx-auto max-w-[1065px]">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          <Footer />
        </Router>
      </div>

      <div
        className="absolute right-0 bottom-0 left-0 h-3.5"
        style={{ background: 'var(--gradient)' }}
      ></div>
    </>
  );
}

export default App;
