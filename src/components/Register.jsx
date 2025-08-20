import React, { useState } from 'react';
import { FiUserPlus, FiUser, FiLock, FiMail } from 'react-icons/fi';

const Register = ({ changePage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Logika untuk mendaftarkan pengguna
    console.log('Mendaftar dengan:', { fullName, email, password });
    // Setelah berhasil, arahkan ke halaman login
    changePage('login');
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-slate-800">Buat Akun Baru</h1>
          <p className="mt-2 text-slate-600">Bergabunglah dengan komunitas kami sekarang!</p>
        </div>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="relative">
            <FiUser className="absolute top-3 left-3 text-slate-400" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red"
              placeholder="Nama Lengkap"
              required
            />
          </div>
          <div className="relative">
            <FiMail className="absolute top-3 left-3 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red"
              placeholder="Alamat Email"
              required
            />
          </div>
          <div className="relative">
            <FiLock className="absolute top-3 left-3 text-slate-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 pl-10 pr-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red"
              placeholder="Buat Kata Sandi"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-red text-white font-bold rounded-lg hover:bg-red/90 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <FiUserPlus />
            <span>Daftar</span>
          </button>
        </form>
        <div className="text-center text-sm text-slate-600">
          <p>
            Sudah punya akun?{' '}
            <a href="#" onClick={() => changePage('login')} className="font-medium text-red hover:underline">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;