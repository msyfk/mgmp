import React from 'react';
import { FiUsers, FiTarget, FiAward, FiBookOpen } from 'react-icons/fi';

const Profil = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">Profil MGMP Kabupaten Pasuruan</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Wadah kolaborasi dan pengembangan profesional bagi para guru di Kabupaten Pasuruan untuk pendidikan yang lebih maju.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center"><FiBookOpen className="mr-3 text-red" /> Tentang Kami</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Musyawarah Guru Mata Pelajaran (MGMP) Kabupaten Pasuruan adalah sebuah organisasi profesional yang menjadi pusat kegiatan bagi para guru. Kami berkomitmen untuk meningkatkan kompetensi, profesionalisme, dan kinerja guru melalui berbagai program pengembangan yang inovatif dan berkelanjutan.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Sejak didirikan, MGMP telah menjadi motor penggerak dalam implementasi kurikulum, pengembangan metode pembelajaran kreatif, serta pemanfaatan teknologi dalam pendidikan di wilayah Kabupaten Pasuruan.
              </p>
            </div>
            <div className="w-full h-64 bg-linear-to-r from-red to-orange-400 rounded-lg flex items-center justify-center">
              <FiUsers className="text-white text-8xl" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FiTarget className="text-4xl text-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tujuan Utama</h3>
            <p className="text-slate-600 text-sm">Meningkatkan mutu pendidikan melalui pemberdayaan dan peningkatan kompetensi guru secara profesional dan berkelanjutan.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FiAward className="text-4xl text-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Fokus Kami</h3>
            <p className="text-slate-600 text-sm">Mengembangkan inovasi pembelajaran, berbagi praktik baik, dan memfasilitasi kolaborasi antar guru untuk menciptakan ekosistem belajar yang dinamis.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <FiUsers className="text-4xl text-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Struktur Organisasi</h3>
            <p className="text-slate-600 text-sm">Terdiri dari pengurus inti, dewan pembina, dan anggota aktif yang merupakan guru-guru dari berbagai sekolah di Kabupaten Pasuruan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;