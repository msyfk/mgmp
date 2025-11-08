import React, { useState, useEffect, useRef } from 'react';
import {
  FiBell,
  FiUser,
  FiSearch,
  FiX,
  FiCheckCircle,
  FiTrendingUp,
  FiAward,
  FiLogOut,
  FiGrid // Icon untuk Admin Panel
} from 'react-icons/fi';

// Terima 'userRole' sebagai prop
const Navbar = ({ changePage, currentPage, isLoggedIn, onLogout, userRole }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInfoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [isMobileInfoDropdownOpen, setMobileInfoDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const notifications = [
    {
      id: 1,
      icon: <FiCheckCircle className="text-green-500" />,
      text: "Workshop AI telah berhasil diselenggarakan.",
      time: "15 menit yang lalu"
    },
    {
      id: 2,
      icon: <FiTrendingUp className="text-blue-500" />,
      text: "Artikel baru telah dipublikasikan: 'Pentingnya Literasi Digital'.",
      time: "1 jam yang lalu"
    },
    {
      id: 3,
      icon: <FiAward className="text-yellow-500" />,
      text: "Selamat! Anda mendapatkan lencana 'Kontributor Aktif'.",
      time: " kemarin"
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setInfoDropdownOpen(false);
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) setNotificationDropdownOpen(false);
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) setUserDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileInfoDropdownOpen(false);
  };

  const isInfoActive = ['profil', 'visimisi', 'kegiatan'].includes(currentPage);

  const handleUserClick = () => {
    if (isLoggedIn) {
      setUserDropdownOpen(!isUserDropdownOpen);
    } else {
      changePage('login');
      closeMobileMenu(); // Tutup menu mobile jika ada
    }
  };

  // Fungsi helper untuk navigasi agar menu mobile tertutup
  const navigate = (page) => {
    changePage(page);
    closeMobileMenu();
    setInfoDropdownOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-30">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-slate-800 text-3xl font-extrabold">
            <a href="#" onClick={() => navigate('beranda')}>Mgmp.</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" onClick={() => navigate('beranda')} className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${currentPage === 'beranda' ? 'bg-red text-white' : 'text-slate-800 hover:bg-red hover:text-white'}`}>Beranda</a>
            <a href="#" onClick={() => navigate('berita')} className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${currentPage === 'berita' ? 'bg-red text-white' : 'text-slate-800 hover:bg-red hover:text-white'}`}>Berita</a>

            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setInfoDropdownOpen(!isInfoDropdownOpen)} className={`px-3 py-2 rounded-full text-sm font-medium flex items-center focus:outline-none transition-colors duration-300 ${isInfoActive ? 'bg-red text-white' : 'text-slate-800 hover:bg-red hover:text-white'}`}>
                <span>Informasi</span>
                <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isInfoDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {isInfoDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <a href="#" onClick={() => navigate('profil')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil</a>
                  <a href="#" onClick={() => navigate('visimisi')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Visi & Misi</a>
                  <a href="#" onClick={() => navigate('kegiatan')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kegiatan</a>
                </div>
              )}
            </div>

            {/* --- LINK ADMIN DESKTOP --- */}
            {isLoggedIn && userRole === 'admin' && (
              <a
                href="#"
                onClick={() => navigate('adminDashboard')}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center
                  ${currentPage === 'adminDashboard'
                    ? 'bg-yellow-500 text-white'
                    : 'text-slate-800 hover:bg-yellow-500 hover:text-white'
                  }`}
              >
                <FiGrid className="mr-2" />
                Admin Panel
              </a>
            )}
            {/* --------------------------- */}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <input type="text" className="bg-transparent border border-slate-400 text-slate-800 h-9 px-4 pr-10 rounded-full text-sm focus:outline-none w-32 sm:w-48" placeholder="Search ..." />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-3"><FiSearch className="h-5 w-5 text-slate-600" /></button>
            </div>

            <div className="relative" ref={notificationDropdownRef}>
              <button onClick={() => setNotificationDropdownOpen(!isNotificationDropdownOpen)} className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none transition-colors duration-300 relative">
                <FiBell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-pink-500 ring-2 ring-white"></span>
              </button>
            </div>

            <div className="relative" ref={userDropdownRef}>
              <button onClick={handleUserClick} className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none transition-colors duration-300">
                <FiUser className="h-6 w-6" />
              </button>
              {isLoggedIn && isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <a href="#" onClick={() => navigate('profilPengguna')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profil Saya</a>
                  <button onClick={() => { onLogout(); setUserDropdownOpen(false); }} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <FiLogOut className="mr-2" />
                    Keluar
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={handleMobileMenuToggle} className="p-2 text-slate-800 hover:text-red"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg></button>
            </div>
          </div>
        </div>

        {/* --- Dropdown Notifikasi (Responsif) --- */}
        <div
          className={`absolute top-full right-4 w-80 md:w-96 transition-all duration-300 ease-in-out ${isNotificationDropdownOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
        >
          <div className="bg-white rounded-lg shadow-xl">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-800">Notifikasi</h3>
            </div>
            <div className="divide-y max-h-80 overflow-y-auto">
              {notifications.map(notif => (
                <div key={notif.id} className="p-4 flex items-start space-x-3 hover:bg-slate-50">
                  <div className="shrink-0 text-2xl">{notif.icon}</div>
                  <div>
                    <p className="text-sm text-slate-700">{notif.text}</p>
                    <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 text-center border-t">
              <a href="#" className="text-sm text-red hover:underline">Tandai semua dibaca</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div onClick={closeMobileMenu} className="fixed inset-0 bg-slate-500/10 backdrop-blur-md z-40"></div>
          <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 border-b"><h2 className="text-xl font-bold text-slate-800">Menu</h2><button onClick={closeMobileMenu} className="p-2 text-slate-800 hover:text-red"><FiX className="h-6 w-6" /></button></div>
            <div className="p-4 space-y-2">
              <div className="relative mb-2"><input type="text" className="bg-white border border-slate-400 text-slate-800 h-9 px-4 pr-10 rounded-full text-sm focus:outline-none w-full" placeholder="Search ..." /><button type="submit" className="absolute right-0 top-0 mt-2 mr-4"><FiSearch className="h-5 w-5 text-slate-600" /></button></div>
              <a href="#" onClick={() => navigate('beranda')} className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
              <a href="#" onClick={() => navigate('berita')} className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Berita</a>
              <div>
                <button onClick={() => setMobileInfoDropdownOpen(!isMobileInfoDropdownOpen)} className="w-full text-left text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-md text-base font-medium flex justify-between items-center">
                  <span>Informasi</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileInfoDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isMobileInfoDropdownOpen && (
                  <div className="mt-2 pl-4">
                    <a href="#" onClick={() => navigate('profil')} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Profil</a>
                    <a href="#" onClick={() => navigate('visimisi')} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Visi & Misi</a>
                    <a href="#" onClick={() => navigate('kegiatan')} className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-md">Kegiatan</a>
                  </div>
                )}
              </div>

              {/* --- LINK ADMIN MOBILE --- */}
              {isLoggedIn && userRole === 'admin' && (
                <a
                  href="#"
                  onClick={() => navigate('adminDashboard')}
                  className="text-yellow-600 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Admin Panel
                </a>
              )}
              {/* ------------------------- */}

            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;