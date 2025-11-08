import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Berita from './components/Berita.jsx';
import Profil from './components/Profil.jsx';
import VisiMisi from './components/VisiMisi.jsx';
import Kegiatan from './components/Kegiatan.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProfilPengguna from './components/ProfilPengguna.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('beranda');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // State baru untuk menyimpan data user

  // Fungsi untuk mengambil data profil dari server
  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Sesi tidak valid atau telah berakhir.');
      }

      const data = await response.json();
      setUserData(data); // Simpan data pengguna
      setIsLoggedIn(true); // Set status login
    } catch (error) {
      console.error('Gagal mengambil data pengguna:', error);
      handleLogout(); // Jika gagal (misal token expired), logout saja
    }
  };

  // Efek ini berjalan sekali saat aplikasi pertama kali dimuat
  useEffect(() => {
    fetchUserData();
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = () => {
    fetchUserData(); // Ambil data pengguna setelah login berhasil
    changePage('beranda');
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token
    setIsLoggedIn(false);
    setUserData(null); // Hapus data pengguna
    changePage('beranda');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Hero />;
      case 'berita':
        return <Berita />;
      case 'profil':
        return <Profil />;
      case 'visimisi':
        return <VisiMisi />;
      case 'kegiatan':
        return <Kegiatan />;
      case 'login':
        return <Login changePage={changePage} onLoginSuccess={handleLoginSuccess} />;
      case 'register':
        return <Register changePage={changePage} />;
      case 'profilPengguna':
        // Kirim data pengguna sebagai prop ke komponen ProfilPengguna
        return <ProfilPengguna user={userData} onLogout={handleLogout} />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Navbar
        changePage={changePage}
        currentPage={currentPage}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      {renderPage()}
    </div>
  );
}

export default App;