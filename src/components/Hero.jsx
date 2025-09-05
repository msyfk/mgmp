import React, { useState } from 'react';

// --- Impor gambar Anda ---
import quizizzBg from '../assets/quizizz.png';
import wordwallBg from '../assets/wordwall.png';
import educandyBg from '../assets/educandy.png';
import kahootBg from '../assets/kahoot.png';
import canvaBg from '../assets/canva.png';
import myBanner from '../assets/hero-image.jpg'

// Data untuk slider "Saran Pembelajaran"
const learningTools = [
  { name: 'Quizizz', url: 'https://quizizz.com/', bgImage: quizizzBg },
  { name: 'Wordwall', url: 'https://wordwall.net/', bgImage: wordwallBg },
  { name: 'Educandy Studio', url: 'https://educandy.com/', bgImage: educandyBg },
  { name: 'Kahoot!', url: 'https://kahoot.it/', bgImage: kahootBg },
  { name: 'Canva', url: 'https://www.canva.com/', bgImage: canvaBg },
];

// Data untuk "Artikel dan Berita"
const articles = [
  {
    title: 'Judul Artiker atau Berita',
    description: 'Lorem ipsum dolor sit amet consectetur. Posuere vel tellus urna nunc proin aliquet tempor convallis pulvinar. Aenean tempor enim consequat in purus habitant mi leo.',
    imageUrl: 'https://placehold.co/150x100/e2e8f0/334155',
  },
  {
    title: 'Judul Artiker atau Berita',
    description: 'Lorem ipsum dolor sit amet consectetur. Posuere vel tellus urna nunc proin aliquet tempor convallis pulvinar. Aenean tempor enim consequat in purus habitant mi leo.',
    imageUrl: 'https://placehold.co/150x100/e2e8f0/334155',
  },
  {
    title: 'Judul Artiker atau Berita',
    description: 'Lorem ipsum dolor sit amet consectetur. Posuere vel tellus urna nunc proin aliquet tempor convallis pulvinar. Aenean tempor enim consequat in purus habitant mi leo.',
    imageUrl: 'https://placehold.co/150x100/e2e8f0/334155',
  },
];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? learningTools.length - itemsPerPage : currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? 0 : newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex >= learningTools.length - itemsPerPage;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {/* Bagian Banner Atas */}
      <div className="container mx-auto my-8 px-4">
        <div className="w-full h-64 md:h-96 bg-linear-to-r from-orange-400 to-yellow-500 rounded-lg shadow-lg overflow-hidden">
          <img src={myBanner} alt="Abstract banner" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bagian Saran Pembelajaran (Slider) */}
      <div className="container mx-auto my-12 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Saran Pembelajaran</h2>
        <div className="max-w-4xl mx-auto relative flex items-center">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute -left-4 md:-left-12 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {learningTools.map((tool, index) => (
                <div key={index} className="shrink-0 w-1/3 px-2">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg shadow-md h-32 block relative overflow-hidden transition-transform hover:scale-105 hover:shadow-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${tool.bgImage})` }}
                    aria-label={tool.name}
                  >
                    {/* Elemen <img> sudah dihapus dari sini */}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= learningTools.length - itemsPerPage}
            className="absolute -right-4 md:-right-12 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Bagian Artikel dan Berita */}
      <div className="bg-red w-full py-12 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Artikel dan Berita</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-6">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex items-start gap-4">
                  <img src={article.imageUrl} alt={article.title} className="w-24 h-24 md:w-36 md:h-24 object-cover rounded-md shrink-0" />
                  <div className="grow">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-3">{article.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:col-span-1 bg-white rounded-lg shadow-lg min-h-80">
              {/* Konten sidebar kanan */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 mt-1">
        <div className="container mx-auto px-4 text-center text-gray-600">
          Copyright MGMP Kab-Pasuruan
        </div>
      </footer>
    </>
  );
}

export default Hero;