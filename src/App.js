import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
// import Header from './component/Header/Header';
import Home from './component/Home/Home';
import AboutPage from './page/AboutPage';
import ContactPage from './page/ContactPage';
import PortfolioPage from './page/PortfolioPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
