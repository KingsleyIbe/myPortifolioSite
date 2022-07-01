import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import MobileHeader from './component/Header/MobileHeader';
import Home from './component/Home/Home';
import AboutPage from './page/AboutPage';
import ContactPage from './page/ContactPage';
import PortfolioPage from './page/PortfolioPage';
import ResumePage from './page/ResumePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MobileHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
