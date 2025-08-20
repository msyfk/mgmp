import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Berita from './components/Berita.jsx';
import Profil from './components/Profil.jsx';
import VisiMisi from './components/VisiMisi.jsx';
import Kegiatan from './components/Kegiatan.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('beranda');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    changePage('beranda'); // Arahkan ke beranda setelah login berhasil
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    changePage('beranda'); // Arahkan ke beranda setelah logout
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