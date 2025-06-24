
import { FiMenu } from 'react-icons/fi';
import BrandLogo from '../component/BrandLogo';

const Header = ({ onToggleSidebar }: { onToggleSidebar?: () => void }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <BrandLogo />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-blue-700 hover:bg-blue-100 transition"
        >
          <FiMenu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
