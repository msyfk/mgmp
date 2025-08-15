import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiUser } from 'react-icons/fi'; // Impor ikon

const Navbar = ({ changePage }) => {
  // State untuk menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State untuk dropdown informasi di desktop
  const [isInfoDropdownOpen, setInfoDropdownOpen] = useState(false);
  // State untuk dropdown informasi di mobile
  const [isMobileInfoDropdownOpen, setMobileInfoDropdownOpen] = useState(false);

  // Ref untuk mendeteksi klik di luar dropdown desktop
  const dropdownRef = useRef(null);

  // Efek untuk menutup dropdown desktop saat klik di luar
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

  // Fungsi untuk handle toggle menu mobile
  const handleMobileMenuToggle = () => {
    // Jika kita akan menutup menu mobile, pastikan dropdown info juga tertutup
    if (isMobileMenuOpen) {
      setMobileInfoDropdownOpen(false);
    }
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-100 p-4 relative shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-slate-800 text-3xl font-extrabold">
          <a href="#" onClick={() => changePage('beranda')}>Mgmp.</a>
        </div>

        {/* Grup Tengah: Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" onClick={() => changePage('beranda')} className="text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-full text-sm font-medium">Beranda</a>
          <a href="#" onClick={() => changePage('berita')} className="text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-full text-sm font-medium">Berita</a>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setInfoDropdownOpen(!isInfoDropdownOpen)}
              className="text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-full text-sm font-medium flex items-center focus:outline-none cursor-pointer"
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

        {/* Grup Kanan: Ikon */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              className="bg-transparent border border-slate-400 text-slate-800 h-9 px-4 pr-10 rounded-full text-sm focus:outline-none w-32 sm:w-48"
              placeholder="Search ..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
              <svg className="h-5 w-5 text-slate-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
          <button className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none">
            <FiBell className="h-6 w-6" /> {/* Ikon Notifikasi */}
          </button>
          <button className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none">
            <FiUser className="h-6 w-6" /> {/* Ikon Akun */}
          </button>
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle} className="p-2 text-slate-800 hover:text-red">
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Daftar Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-100 absolute top-full left-0 w-full shadow-md z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" onClick={() => { changePage('beranda'); setMobileMenuOpen(false); }} className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#" onClick={() => { changePage('berita'); setMobileMenuOpen(false); }} className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Berita</a>
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
                  <a href="#" onClick={() => { changePage('profil'); setMobileMenuOpen(false); }} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Profil</a>
                  <a href="#" onClick={() => { changePage('visimisi'); setMobileMenuOpen(false); }} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Visi & Misi</a>
                  <a href="#" onClick={() => { changePage('kegiatan'); setMobileMenuOpen(false); }} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Kegiatan</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;