import React, { useState } from 'react';

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">My Website</h1>
        <nav className="space-x-6">
          <a href="#notifications" className="text-gray-600 hover:text-gray-800">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/appointment-reminders.png" alt="notifications" className="h-6 w-6 inline" />
          </a>
          <a href="#settings" className="text-gray-600 hover:text-gray-800">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/settings.png" alt="settings" className="h-6 w-6 inline animate-spin" />
          </a>
          <a onClick = {toggleMenu} className="text-gray-600 hover:text-gray-800">
          <img src="https://img.icons8.com/ios-glyphs/30/000000/user.png" alt="profile" className="h-6 w-6 inline rounded-full" />
          </a>
        </nav>
      </div>
    </header>
    {/* Menu */}
    {isOpen && (
        <div
          className="absolute right-0 mt-16 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-6"
        >
          Baljinder Singh Maan
        </div>
      )}
    </>
  )
  
}

export default Header