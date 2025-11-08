import React, { useState } from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';

const Login = ({ changePage, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Gagal untuk login.');
      }

      localStorage.setItem('token', data.token);
      onLoginSuccess();

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-slate-800">Selamat Datang Kembali</h1>
          <p className="mt-2 text-slate-600">Silakan masuk untuk melanjutkan.</p>
        </div>

        {error && <div className="bg-red/10 text-red p-3 rounded-lg text-center font-medium">{error}</div>}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="relative">
            <FiUser className="absolute top-3 left-3 text-slate-400" />
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
              placeholder="Kata Sandi"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 bg-red text-white font-bold rounded-lg hover:bg-red/90 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <FiLogIn />
            <span>Masuk</span>
          </button>
        </form>
        <div className="text-center text-sm text-slate-600">
          <p>
            Belum punya akun?{' '}
            <a href="#" onClick={() => changePage('register')} className="font-medium text-red hover:underline">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;