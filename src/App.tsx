import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer/Footer.tsx';
import Header from '@/components/Header/Header.tsx';
import Home from '@/pages/Home/Home.tsx';
import NotImplemented from '@/pages/NotImplemented/NotImplemented.tsx';

function App() {
  return (
    <>
      <div className="mx-auto flex min-h-[100vh] max-w-[1065px] flex-col">
        <BrowserRouter>
          <Header />

          <div className="flex flex-1 items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotImplemented />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>

      <div
        className="absolute right-0 bottom-0 left-0 h-3.5"
        style={{ background: 'var(--gradient)' }}
      ></div>
    </>
  );
}

export default App;
