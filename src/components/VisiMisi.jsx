import React from 'react';
import { FiEye, FiCheckCircle } from 'react-icons/fi';

const VisiMisi = () => {
  const misiItems = [
    "Menyelenggarakan workshop dan pelatihan inovatif untuk meningkatkan keterampilan pedagogik dan profesional guru.",
    "Membangun komunitas belajar yang solid sebagai wadah untuk berbagi pengetahuan dan praktik terbaik.",
    "Mengembangkan dan menyebarluaskan media pembelajaran berbasis teknologi yang relevan dengan kebutuhan siswa.",
    "Menjalin kemitraan strategis dengan institusi pendidikan, industri, dan pemerintah untuk mendukung program MGMP.",
    "Mendorong penelitian dan pengembangan dalam bidang pendidikan sebagai dasar pengambilan kebijakan.",
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">Visi & Misi Organisasi</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Landasan dan arah gerak kami dalam memajukan kualitas pendidikan di Kabupaten Pasuruan.
          </p>
        </div>

        {/* Visi */}
        <div className="bg-red text-white rounded-xl shadow-2xl p-8 md:p-12 mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center md:justify-start">
            <FiEye className="text-5xl mr-4" />
            <h2 className="text-3xl font-bold">Visi Kami</h2>
          </div>
          <p className="mt-4 text-center md:text-left text-xl leading-relaxed">
            "Menjadi komunitas guru yang profesional, inovatif, dan inspiratif, serta menjadi pilar utama dalam mewujudkan ekosistem pendidikan yang unggul dan berkarakter di Kabupaten Pasuruan."
          </p>
        </div>

        {/* Misi */}
        <div className="bg-slate-50 rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center mb-6">
            <FiCheckCircle className="text-3xl text-red mr-3" />
            <h2 className="text-3xl font-bold text-slate-800">Misi Kami</h2>
          </div>
          <ul className="space-y-4">
            {misiItems.map((misi, index) => (
              <li key={index} className="flex items-start">
                <FiCheckCircle className="text-green-500 mr-3 mt-1 shrink-0" />
                <span className="text-slate-700 leading-relaxed">{misi}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;