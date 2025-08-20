import React from 'react';
import { FiTrendingUp, FiAward, FiHeart, FiUsers, FiCpu, FiBook } from 'react-icons/fi';

const kegiatanData = [
  {
    icon: <FiTrendingUp className="text-white" />,
    bgColor: "bg-blue-500",
    title: "Workshop & Pelatihan",
    description: "Mengadakan workshop rutin tentang teknologi pendidikan (AI, Gamifikasi), Kurikulum Merdeka, dan literasi digital.",
  },
  {
    icon: <FiAward className="text-white" />,
    bgColor: "bg-yellow-500",
    title: "Kompetisi & Lomba",
    description: "Menyelenggarakan lomba cipta media ajar, debat bahasa Inggris, dan turnamen olahraga untuk siswa dan guru.",
  },
  {
    icon: <FiHeart className="text-white" />,
    bgColor: "bg-pink-500",
    title: "Kegiatan Sosial",
    description: "Program bakti sosial ke panti asuhan, aksi tanam pohon (Sekolah Hijau), dan seminar kesehatan mental.",
  },
  {
    icon: <FiUsers className="text-white" />,
    bgColor: "bg-indigo-500",
    title: "Kolaborasi & Kemitraan",
    description: "Studi banding ke pusat inovasi, menjalin kerjasama dengan universitas, dan program parenting bersama orang tua.",
  },
  {
    icon: <FiCpu className="text-white" />,
    bgColor: "bg-green-500",
    title: "Pengembangan Infrastruktur",
    description: "Menyalurkan bantuan sarana digital seperti komputer dan proyektor ke sekolah-sekolah yang membutuhkan.",
  },
  {
    icon: <FiBook className="text-white" />,
    bgColor: "bg-purple-500",
    title: "Program Alumni",
    description: "Menghadirkan alumni berprestasi untuk berbagi kisah sukses dan motivasi kepada siswa.",
  },
];


const Kegiatan = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-3">Agenda & Kegiatan</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Jelajahi beragam program dan kegiatan yang kami selenggarakan untuk mendukung pertumbuhan profesional guru dan siswa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kegiatanData.map((kegiatan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${kegiatan.bgColor}`}>
                {kegiatan.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">{kegiatan.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{kegiatan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kegiatan;