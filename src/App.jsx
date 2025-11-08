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

// Komponen placeholder untuk Halaman Admin
// Anda bisa membuatnya di file terpisah nanti
const AdminDashboard = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-slate-800">Admin Dashboard</h1>
        <p className="mt-4 text-slate-600">
          Selamat datang di halaman admin. Di sini Anda dapat mengelola pengguna,
          berita, dan konten lainnya.
        </p>
      </div>
    </div>
  );
};


const App = () => {
  const [currentPage, setCurrentPage] = useState('beranda');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRole, setUserRole] = useState(null); // State baru untuk role

  // Fungsi untuk mengambil data profil dari server
  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      setUserRole(null); // Pastikan role kosong
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
      setUserData(data);
      setUserRole(data.role); // Set role dari profil
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Gagal mengambil data pengguna:', error);
      handleLogout();
    }
  };

  // Efek ini berjalan sekali saat aplikasi pertama kali dimuat
  useEffect(() => {
    fetchUserData();
  }, []);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Terima 'role' saat login sukses
  const handleLoginSuccess = (role) => {
    setUserRole(role); // Set role langsung dari login
    fetchUserData(); // Ambil sisa data pengguna
    changePage('beranda');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData(null);
    setUserRole(null); // Hapus role saat logout
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

      // Rute terproteksi untuk user yang login
      case 'profilPengguna':
        if (!isLoggedIn) {
          changePage('login');
          return <Login changePage={changePage} onLoginSuccess={handleLoginSuccess} />;
        }
        return <ProfilPengguna user={userData} onLogout={handleLogout} />;

      // Rute terproteksi khusus admin
      case 'adminDashboard':
        if (!isLoggedIn) {
          changePage('login');
          return <Login changePage={changePage} onLoginSuccess={handleLoginSuccess} />;
        }
        if (userRole !== 'admin') {
          changePage('beranda'); // Redirect ke beranda jika bukan admin
          return <Hero />;
        }
        return <AdminDashboard />; // Tampilkan dashboard jika admin

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
        userRole={userRole} // Kirim role ke Navbar
      />
      {renderPage()}
    </div>
  );
}

export default App;