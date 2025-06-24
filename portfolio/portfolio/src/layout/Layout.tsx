import { useState } from 'react';
import Footer from '../component/Footer';
import Summary from '../pages/Summary';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Header onToggleSidebar={() => setDrawerOpen(!drawerOpen)} />
      <div className="flex pt-[60px]">
        <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <div className="w-full p-4" id="content-wraper">
          <Summary />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
