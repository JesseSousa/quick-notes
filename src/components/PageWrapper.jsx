import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './Navigation';
import Footer from './Footer';

const PageWrapper = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-200 min-h-screen font-mono flex flex-col h-screen">
      <div className="grow-0">
        <Navigation />
      </div>
      <div className="grow">
        <AnimatePresence>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
      <div className="grow-0">
        <Footer />
      </div>
    </div>
  );
};

export default PageWrapper;
