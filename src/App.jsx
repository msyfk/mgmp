import React from 'react';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Selamat Datang di Aplikasi Saya</h1>
        <p>Ini adalah konten utama dari aplikasi Anda.</p>
      </div>
    </div>
  );
}

export default App;