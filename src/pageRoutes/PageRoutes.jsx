import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import Header from '../component/Header/Header';
import MobileHeader from '../component/Header/MobileHeader';

const PageRoutes = () => (
  <>
    <BrowserRouter>
      <Header />
      <MobileHeader />
      <AnimatedRoutes />
    </BrowserRouter>
  </>
);

export default PageRoutes;
