import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiUser, FiSearch, FiX } from 'react-icons/fi';

const Navbar = ({ changePage, currentPage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInfoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [isMobileInfoDropdownOpen, setMobileInfoDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setInfoDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    if (isMobileMenuOpen) {
      setMobileInfoDropdownOpen(false);
    }
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileInfoDropdownOpen(false);
  };

  const isInfoActive = ['profil', 'visimisi', 'kegiatan'].includes(currentPage);

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-30">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-slate-800 text-3xl font-extrabold">
            <a href="#" onClick={() => changePage('beranda')}>Mgmp.</a>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              onClick={() => changePage('beranda')}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out ${currentPage === 'beranda' ? 'bg-red text-white' : 'text-slate-800 hover:bg-red hover:text-white'
                }`}
            >
              Beranda
            </a>
            <a
              href="#"
              onClick={() => changePage('berita')}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out ${currentPage === 'berita' ? 'bg-red text-white' : 'text-slate-800 hover:bg-red hover:text-white'
                }`}
            >
              Berita
            </a>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setInfoDropdownOpen(!isInfoDropdownOpen)}
                className={`px-3 py-2 rounded-full text-sm font-medium flex items-center focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out ${isInfoActive ? 'bg-red text-white' : 'text-slate-800 hover:bg-red hover:text-white'
                  }`}
              >
                <span>Informasi</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isInfoDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isInfoDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <a href="#" onClick={() => { changePage('profil'); setInfoDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
                  <a href="#" onClick={() => { changePage('visimisi'); setInfoDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visi & Misi</a>
                  <a href="#" onClick={() => { changePage('kegiatan'); setInfoDropdownOpen(false); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kegiatan</a>
                </div>
              )}
            </div>
          </div>

          {/* Ikon Kanan */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                className="bg-transparent border border-slate-400 text-slate-800 h-9 px-4 pr-10 rounded-full text-sm focus:outline-none w-32 sm:w-48"
                placeholder="Search ..."
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                <FiSearch className="h-5 w-5 text-slate-600" />
              </button>
            </div>
            <button className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none transition-colors duration-300">
              <FiBell className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none transition-colors duration-300">
              <FiUser className="h-6 w-6" />
            </button>
            <div className="md:hidden">
              <button onClick={handleMobileMenuToggle} className="p-2 text-slate-800 hover:text-red">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-slate-500/10 backdrop-blur-md z-40 transition-opacity duration-300 ease-in-out"
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Menu</h2>
          <button onClick={closeMobileMenu} className="p-2 text-slate-800 hover:text-red">
            <FiX className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          <div className="relative mb-2">
            <input
              type="text"
              className="bg-white border border-slate-400 text-slate-800 h-9 px-4 pr-10 rounded-full text-sm focus:outline-none w-full"
              placeholder="Search ..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <FiSearch className="h-5 w-5 text-slate-600" />
            </button>
          </div>
          <a href="#" onClick={() => { changePage('beranda'); closeMobileMenu(); }} className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
          <a href="#" onClick={() => { changePage('berita'); closeMobileMenu(); }} className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Berita</a>
          <div>
            <button
              onClick={() => setMobileInfoDropdownOpen(!isMobileInfoDropdownOpen)}
              className="w-full text-left text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
            >
              <span>Informasi</span>
              <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileInfoDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isMobileInfoDropdownOpen && (
              <div className="mt-2 pl-4">
                <a href="#" onClick={() => { changePage('profil'); closeMobileMenu(); }} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Profil</a>
                <a href="#" onClick={() => { changePage('visimisi'); closeMobileMenu(); }} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Visi & Misi</a>
                <a href="#" onClick={() => { changePage('kegiatan'); closeMobileMenu(); }} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Kegiatan</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;