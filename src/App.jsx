import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Berita from './components/Berita.jsx';
import Profil from './components/Profil.jsx';
import VisiMisi from './components/VisiMisi.jsx';
import Kegiatan from './components/Kegiatan.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('beranda');

  const changePage = (page) => {
    setCurrentPage(page);
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
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Navbar changePage={changePage} currentPage={currentPage} />  
      {renderPage()}
    </div>
  );
}

export default App;
