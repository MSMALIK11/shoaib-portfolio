import { sidebarLinks } from './links';
import { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface SidebarProps {
  drawerOpen?: boolean;
  setDrawerOpen?: (value: boolean) => void;
}

const Sidebar = ({ drawerOpen = false, setDrawerOpen }: SidebarProps) => {
  const [activeId, setActiveId] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      let closestId = '';
      let closestOffset = Number.POSITIVE_INFINITY;

      sidebarLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offset = Math.abs(section.getBoundingClientRect().top);
          if (offset < closestOffset) {
            closestOffset = offset;
            closestId = link.id;
          }
        }
      });

      if (closestId) {
        setActiveId(closestId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setActiveId(id);
    setDrawerOpen?.(false); // close drawer on mobile
  };

  return (
    <div
      className={`transition-all z-50 fixed top-0 left-0 h-full w-[200px] bg-white border-r border-gray-200 pt-[60px] 
      md:translate-x-0 ${
        drawerOpen ? 'translate-x-0' : 'translate-x-[-100%]'
      } md:relative md:block`}
    >
      {/* Close button for mobile */}
      <div className="md:hidden absolute right-4 top-4">
        <button
          onClick={() => setDrawerOpen?.(false)}
          className="text-gray-500 hover:text-blue-600"
        >
          <RxCross2 size={22} />
        </button>
      </div>

      <ul className="flex flex-col gap-2 px-4 pt-2">
        {sidebarLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`cursor-pointer flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition group
              ${
                activeId === link.id
                  ? 'bg-blue-600 text-white font-medium'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
          >
            {/* Glowing scroll spy dot */}
     <span
  className={`w-2.5 h-2.5 rounded-full transition-all duration-300
    ${
      activeId === link.id
        ? 'bg-white ring-2 ring-blue-600 shadow-[0_0_8px_rgba(0,114,255,0.6)]'
        : 'bg-gray-300'
    }`}
/>


            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
