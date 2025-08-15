import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Selamat Datang di Website Kami</h1>
          <p className="text-lg text-gray-600 mb-8">Kami menyediakan berbagai macam layanan untuk kebutuhan Anda.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">Mulai Sekarang</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;