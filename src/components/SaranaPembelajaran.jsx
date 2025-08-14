import React, { useRef } from 'react';

// Data untuk item pembelajaran, bisa Anda tambahkan atau kurangi
const learningTools = [
  {
    id: 1,
    name: 'Quizizz',
    logo: 'https://cdn.quizizz.com/v2/img/logo_v2.png', // URL logo dari internet
    link: 'https://quizizz.com'
  },
  {
    id: 2,
    name: 'Wordwall',
    logo: 'https://wordwall.net/images/logo-L.png',
    link: 'https://wordwall.net'
  },
  {
    id: 3,
    name: 'Educandy',
    logo: 'https://educandy.com/wp-content/uploads/2021/04/educandy-logo-2-1.png',
    link: 'https://educandy.com'
  },
  {
    id: 4,
    name: 'Canva',
    logo: 'https://static.canva.com/static/images/canva_logo_black.svg',
    link: 'https://canva.com'
  },
  {
    id: 5,
    name: 'Kahoot!',
    logo: 'https://kahoot.com/files/2021/04/kahoot-logo-v2-primary.svg',
    link: 'https://kahoot.com'
  }
];

const SaranPembelajaran = () => {
  const scrollContainerRef = useRef(null);

  // Fungsi untuk menggeser slider ke kiri
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  // Fungsi untuk menggeser slider ke kanan
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-100 p-4 sm:p-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4 sm:p-6">
        {/* Gambar Banner Atas */}
        <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl mb-4">
          {/* Anda bisa mengganti ini dengan tag <img> jika punya gambar sendiri */}
        </div>

        <h2 className="text-center text-xl sm:text-2xl font-bold text-slate-800 mb-4">
          Saran Pembelajaran
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Tombol Kiri */}
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-slate-200 transition"
            aria-label="Scroll Left"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* Konten yang bisa di-scroll */}
          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {learningTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-48 h-24 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-4 transition-transform transform hover:scale-105 hover:shadow-md"
              >
                <img src={tool.logo} alt={tool.name} className="max-h-12 object-contain" />
              </a>
            ))}
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-slate-200 transition"
            aria-label="Scroll Right"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaranPembelajaran;