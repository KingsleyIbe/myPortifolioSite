import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './component/Header/Header';
import Home from './component/Header/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
