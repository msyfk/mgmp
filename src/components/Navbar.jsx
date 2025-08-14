import React, { useState } from 'react';

const Navbar = () => {
  // State untuk mengontrol visibilitas menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-100 p-4 relative shadow-md">
      {/* Container Utama */}
      <div className="container mx-auto flex items-center justify-between">
        {/* 1. Grup Kiri: Logo */}
        <div className="text-slate-800 text-3xl font-extrabold">
          <a href="#">Mgmp.</a>
        </div>

        {/* 2. Grup Tengah: Link Navigasi (Hanya Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-full text-sm font-medium">Beranda</a>
          <a href="#" className="text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-full text-sm font-medium">Berita</a>
          <a href="#" className="text-slate-800 hover:bg-red hover:text-white px-3 py-2 rounded-full text-sm font-medium">Informasi</a>
        </div>

        {/* 3. Grup Kanan: Search, Notifikasi, Akun, dan Menu Mobile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Menu Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              className="bg-transparent border-1 text-slate-800 h-9 px-4 pr-10 rounded-full text-sm focus:outline-none w-32 sm:w-48"
              placeholder="Search ..."
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
              <svg className="h-5 w-5 text-slate-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>

          {/* Tombol Notifikasi */}
          <button className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          {/* Tombol Akun */}
          <button className="p-2 rounded-full text-slate-800 hover:text-white hover:bg-red focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-red"
            >
              {isMobileMenuOpen ? (
                // Ikon 'X' saat menu terbuka
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                // Ikon hamburger saat menu tertutup
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Daftar Menu Mobile (Tampil/Sembunyi) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#" className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Berita</a>
            <a href="#" className="text-slate-800 hover:bg-red hover:text-white block px-3 py-2 rounded-md text-base font-medium">Informasi</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;