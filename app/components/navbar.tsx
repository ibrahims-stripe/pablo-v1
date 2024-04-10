'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  const [isCompact, setIsCompact] = useState(false);
  const pathname = usePathname()

  const handleEditClick = () => {
    const editPath = `${pathname}/edit`;
    router.push(editPath);
  };

  const toggleNavbar = () => setIsCompact(!isCompact);

  return (
    <div className={`flex ${isCompact ? 'w-16 h-16' : 'w-full h-16'} items-center justify-between p-4 fixed top-0 left-0 z-50 transition-all ease-in-out duration-300`}>
      {/* Toggle Button */}
      <button onClick={toggleNavbar} className={`flex items-center justify-center w-12 h-12 ${isCompact ? 'bg-blue-500 absolute' : 'bg-transparent'} rounded-full z-20 transition-transform ease-in-out duration-300`}>
        {isCompact ? (
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>

      {/* Left Buttons (Visible when not compact) */}
      {!isCompact && (
        <div className="flex items-center ml-16">
          <button className="text-black ml-4">Dashboard</button> {/* Dashboard icon button */}
          <button className="text-black ml-4">account_id</button> {/* Account ID button */}
        </div>
      )}

      {/* Right Buttons, always visible */}
      <div className="flex items-center text-black">
        <button onClick={() => router.push('/edit')}>Edit Page</button> {/* Question mark button */}
        <button>?</button> {/* Question mark button */}
        <button>⚙️</button> {/* Cog icon button */}
      </div>
    </div>
  );
};

export default Navbar;
