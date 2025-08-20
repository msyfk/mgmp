import React from 'react';
import { FiUser, FiMail, FiEdit, FiShield, FiActivity, FiLogOut, FiCamera } from 'react-icons/fi';

const ProfilPengguna = ({ onLogout }) => {
  // Data pengguna statis sebagai contoh
  const user = {
    name: 'Ahmad Dahlan',
    email: 'ahmad.dahlan@email.com',
    avatar: 'https://placehold.co/128x128/e2e8f0/334155?text=AD'
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">

        {/* Header Profil */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center">
          <div className="relative mb-4 md:mb-0 md:mr-8">
            <img src={user.avatar} alt="Avatar Pengguna" className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 ring-red/20" />
            <button className="absolute bottom-0 right-0 bg-red text-white p-2 rounded-full hover:bg-red/90 transition-colors duration-300">
              <FiCamera />
            </button>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center md:text-left">{user.name}</h1>
            <div className="flex items-center justify-center md:justify-start mt-2 text-slate-600">
              <FiMail className="mr-2" />
              <span>{user.email}</span>
            </div>
          </div>
        </div>

        {/* Pengaturan Akun */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Akun Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <FiEdit className="text-xl text-red mr-4" />
              <div>
                <h3 className="font-semibold text-slate-700">Ubah Profil</h3>
                <p className="text-sm text-slate-500">Perbarui informasi pribadi Anda.</p>
              </div>
            </a>
            <a href="#" className="flex items-center p-4 border rounded-lg hover:bg-slate-50 transition-colors duration-200">
              <FiShield className="text-xl text-red mr-4" />
              <div>
                <h3 className="font-semibold text-slate-700">Ganti Kata Sandi</h3>
                <p className="text-sm text-slate-500">Amankan akun Anda secara berkala.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Aktivitas */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Aktivitas Saya</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <FiActivity className="text-xl text-blue-500 mr-4" />
              <div>
                <h3 className="font-semibold text-slate-700">Lencana Kontributor Aktif</h3>
                <p className="text-sm text-slate-500">Didapatkan pada 17 Agustus 2025.</p>
              </div>
            </div>
            {/* Tambahkan aktivitas lain di sini */}
          </div>
        </div>

        {/* Tombol Keluar */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onLogout}
            className="w-full md:w-auto h-12 px-8 bg-red/10 text-red font-bold rounded-lg hover:bg-red/20 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <FiLogOut />
            <span>Keluar</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilPengguna;