import React, { useState, useMemo } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- DATA LENGKAP UNTUK SEMUA HALAMAN (TOTAL 18 BERITA) ---
const semuaBerita = [
  // Halaman 1
  { kategori: 'Pendidikan', judul: 'Workshop Pemanfaatan AI untuk Pembelajaran Inovatif', deskripsi: 'MGMP Pasuruan berhasil menyelenggarakan workshop tentang pemanfaatan Kecerdasan Buatan (AI).', gambarUrl: 'https://placehold.co/600x400/AB0B28/FFFFFF?text=Workshop+AI', tanggal: '18 Agu 2025', kontenLengkap: 'Workshop ini diikuti oleh lebih dari 50 guru...' },
  { kategori: 'Teknologi', judul: 'Peluncuran Aplikasi Belajar Berbasis Gamifikasi', deskripsi: 'Sebuah aplikasi mobile baru yang mengintegrasikan konsep gamifikasi dalam pembelajaran matematika.', gambarUrl: 'https://placehold.co/600x400/334155/FFFFFF?text=Aplikasi+Belajar', tanggal: '15 Agu 2025', kontenLengkap: 'Aplikasi bernama "MathVenture" ini dikembangkan oleh startup lokal...' },
  { kategori: 'Kurikulum', judul: 'Sosialisasi Kurikulum Merdeka Belajar Tahap Lanjut', deskripsi: 'Dinas Pendidikan mengadakan sosialisasi lanjutan mengenai implementasi Kurikulum Merdeka Belajar.', gambarUrl: 'https://placehold.co/600x400/10B981/FFFFFF?text=Kurikulum', tanggal: '12 Agu 2025', kontenLengkap: 'Fokus utama sosialisasi kali ini adalah pada pengembangan Proyek Penguatan Profil Pelajar Pancasila...' },
  { kategori: 'Prestasi', judul: 'Siswa Pasuruan Raih Medali Emas di Olimpiade Sains Nasional', deskripsi: 'Seorang siswa dari SMAN 1 Pasuruan berhasil mengharumkan nama daerah dengan meraih medali emas.', gambarUrl: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Juara+OSN', tanggal: '10 Agu 2025', kontenLengkap: 'Prestasi gemilang ini diraih setelah melalui persaingan ketat...' },
  { kategori: 'Kegiatan', judul: 'Studi Banding MGMP ke Pusat Inovasi Pendidikan di Jakarta', deskripsi: 'Perwakilan MGMP Pasuruan melakukan studi banding untuk mempelajari praktik terbaik.', gambarUrl: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=Studi+Banding', tanggal: '05 Agu 2025', kontenLengkap: 'Selama tiga hari, tim MGMP Pasuruan mengunjungi beberapa lembaga pendidikan terkemuka...' },
  { kategori: 'Literasi', judul: 'Gerakan Literasi Digital: Cerdas Bermedia Sosial untuk Pendidik', deskripsi: 'MGMP menginisiasi gerakan literasi digital untuk meningkatkan kesadaran penggunaan media sosial.', gambarUrl: 'https://placehold.co/600x400/64748B/FFFFFF?text=Literasi+Digital', tanggal: '02 Agu 2025', kontenLengkap: 'Dalam acara ini, para guru dibekali dengan pengetahuan untuk mengidentifikasi hoaks...' },
  // Halaman 2
  { kategori: 'Kolaborasi', judul: 'MGMP Jalin Kerjasama dengan Universitas Terkemuka', deskripsi: 'Penandatanganan MoU untuk program pelatihan dan riset bersama telah dilaksanakan.', gambarUrl: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Kerjasama+Univ', tanggal: '25 Jul 2025', kontenLengkap: 'Kerjasama ini bertujuan untuk menjembatani dunia akademik dengan praktik pengajaran di sekolah...' },
  { kategori: 'Infrastruktur', judul: 'Bantuan Sarana Digital untuk Sekolah di Pelosok', deskripsi: 'Donasi berupa perangkat komputer dan proyektor disalurkan ke sekolah-sekolah yang membutuhkan.', gambarUrl: 'https://placehold.co/600x400/EC4899/FFFFFF?text=Bantuan+Digital', tanggal: '22 Jul 2025', kontenLengkap: 'Program ini merupakan hasil kolaborasi antara MGMP dan sektor swasta...' },
  { kategori: 'Kompetisi', judul: 'Lomba Cipta Media Pembelajaran Tingkat Kabupaten', deskripsi: 'Ajang adu kreativitas para guru dalam menciptakan media ajar inovatif kembali digelar.', gambarUrl: 'https://placehold.co/600x400/F97316/FFFFFF?text=Lomba+Media', tanggal: '20 Jul 2025', kontenLengkap: 'Lomba tahun ini diikuti oleh puluhan peserta dengan karya-karya yang sangat beragam...' },
  { kategori: 'Lingkungan', judul: 'Program Sekolah Hijau: Tanam 1000 Pohon', deskripsi: 'MGMP bersama siswa-siswi serentak melakukan aksi penanaman pohon di lingkungan sekolah.', gambarUrl: 'https://placehold.co/600x400/22C55E/FFFFFF?text=Sekolah+Hijau', tanggal: '18 Jul 2025', kontenLengkap: 'Kegiatan ini bertujuan untuk menumbuhkan kepedulian terhadap lingkungan...' },
  { kategori: 'Seni & Budaya', judul: 'Pentas Seni dan Budaya Meriahkan Akhir Tahun Ajaran', deskripsi: 'Berbagai pertunjukan seni tradisional dan modern ditampilkan oleh siswa-siswi berbakat.', gambarUrl: 'https://placehold.co/600x400/D946EF/FFFFFF?text=Pentas+Seni', tanggal: '15 Jul 2025', kontenLengkap: 'Acara ini menjadi wadah ekspresi kreativitas siswa di bidang non-akademik...' },
  { kategori: 'Kesehatan', judul: 'Seminar Kesehatan Mental untuk Guru dan Siswa', deskripsi: 'Pentingnya menjaga kesehatan mental di lingkungan sekolah menjadi topik utama seminar.', gambarUrl: 'https://placehold.co/600x400/0EA5E9/FFFFFF?text=Kesehatan+Mental', tanggal: '11 Jul 2025', kontenLengkap: 'Seminar ini menghadirkan psikolog profesional sebagai narasumber...' },
  // Halaman 3
  { kategori: 'Olahraga', judul: 'Gelar Turnamen Futsal Antar Sekolah se-Kabupaten', deskripsi: 'Ajang sportivitas dan silaturahmi antar siswa melalui turnamen futsal tahunan.', gambarUrl: 'https://placehold.co/600x400/059669/FFFFFF?text=Turnamen+Futsal', tanggal: '09 Jul 2025', kontenLengkap: 'Turnamen ini diikuti oleh 32 tim dari berbagai sekolah...' },
  { kategori: 'Kewirausahaan', judul: 'Pelatihan Kewirausahaan Siswa: Dari Hobi Jadi Bisnis', deskripsi: 'Siswa diajarkan dasar-dasar memulai bisnis dan pemasaran digital.', gambarUrl: 'https://placehold.co/600x400/6366F1/FFFFFF?text=Wirausaha', tanggal: '07 Jul 2025', kontenLengkap: 'Pelatihan ini bertujuan untuk mencetak generasi muda yang mandiri dan kreatif...' },
  { kategori: 'Bahasa', judul: 'Lomba Debat Bahasa Inggris Tingkat Kabupaten', deskripsi: 'Para siswa menunjukkan kemahiran berargumen dalam bahasa Inggris.', gambarUrl: 'https://placehold.co/600x400/F43F5E/FFFFFF?text=Lomba+Debat', tanggal: '05 Jul 2025', kontenLengkap: 'Lomba ini menjadi ajang untuk meningkatkan kemampuan berpikir kritis dan public speaking...' },
  { kategori: 'Sosial', judul: 'Bakti Sosial MGMP: Berbagi dengan Panti Asuhan', deskripsi: 'Kegiatan sosial tahunan diisi dengan donasi dan kegiatan bermain bersama anak-anak panti.', gambarUrl: 'https://placehold.co/600x400/84CC16/FFFFFF?text=Bakti+Sosial', tanggal: '03 Jul 2025', kontenLengkap: 'Kegiatan ini bertujuan untuk menumbuhkan rasa empati dan kepedulian sosial...' },
  { kategori: 'Parenting', judul: 'Webinar Parenting: Sinergi Orang Tua dan Guru', deskripsi: 'Membangun komunikasi efektif antara orang tua dan guru demi kemajuan belajar siswa.', gambarUrl: 'https://placehold.co/600x400/14B8A6/FFFFFF?text=Webinar+Parenting', tanggal: '01 Jul 2025', kontenLengkap: 'Webinar ini menghadirkan pakar parenting sebagai pembicara utama...' },
  { kategori: 'Alumni', judul: 'Sukses Alumni: Kisah Inspiratif dari Lulusan Terbaik', deskripsi: 'Alumni berprestasi berbagi pengalaman dan motivasi kepada adik-adik kelasnya.', gambarUrl: 'https://placehold.co/600x400/A855F7/FFFFFF?text=Sukses+Alumni', tanggal: '30 Jun 2025', kontenLengkap: 'Acara ini diharapkan dapat memberikan inspirasi dan gambaran karir masa depan...' },
];

const Berita = () => {
  const [beritaTerpilih, setBeritaTerpilih] = useState(null);
  const [halamanSaatIni, setHalamanSaatIni] = useState(1);
  const beritaPerHalaman = 6;

  // Menghitung total halaman secara dinamis
  const totalHalaman = Math.ceil(semuaBerita.length / beritaPerHalaman);

  // --- LOGIKA UNTUK MENAMPILKAN BERITA SESUAI HALAMAN ---
  const beritaDiHalamanIni = useMemo(() => {
    const indeksAwal = (halamanSaatIni - 1) * beritaPerHalaman;
    const indeksAkhir = indeksAwal + beritaPerHalaman;
    return semuaBerita.slice(indeksAwal, indeksAkhir);
  }, [halamanSaatIni]);
  // --------------------------------------------------------

  const bukaDetailBerita = (berita) => {
    setBeritaTerpilih(berita);
    document.body.style.overflow = 'hidden';
  };

  const tutupDetailBerita = () => {
    setBeritaTerpilih(null);
    document.body.style.overflow = 'auto';
  };

  const keHalamanBerikutnya = () => {
    setHalamanSaatIni((halaman) => Math.min(halaman + 1, totalHalaman));
  };

  const keHalamanSebelumnya = () => {
    setHalamanSaatIni((halaman) => Math.max(halaman - 1, 1));
  };

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-2">Artikel & Berita Terkini</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ikuti perkembangan terbaru dari dunia pendidikan dan kegiatan MGMP Kabupaten Pasuruan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaDiHalamanIni.map((berita, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <img src={berita.gambarUrl} alt={berita.judul} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-red/10 text-red px-3 py-1 rounded-full text-xs font-semibold">{berita.kategori}</span>
                    <span className="text-xs text-slate-500">{berita.tanggal}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2 grow">{berita.judul}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {berita.deskripsi}
                  </p>
                  <button
                    onClick={() => bukaDetailBerita(berita)}
                    className="font-semibold text-red hover:text-red/80 transition-colors duration-300 text-left mt-auto cursor-pointer"
                  >
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex rounded-md shadow">
              <button
                onClick={keHalamanSebelumnya}
                disabled={halamanSaatIni === 1}
                className="px-3 py-2 bg-white border border-gray-300 text-slate-600 rounded-l-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft className="h-5 w-5" />
              </button>

              {[...Array(totalHalaman)].map((_, i) => {
                const nomorHalaman = i + 1;
                return (
                  <button
                    key={nomorHalaman}
                    onClick={() => setHalamanSaatIni(nomorHalaman)}
                    className={`px-4 py-2 border-t border-b border-gray-300 text-sm font-medium transition-colors duration-200 ${halamanSaatIni === nomorHalaman
                        ? 'bg-red border-red text-white'
                        : 'bg-white text-slate-600 hover:bg-gray-100'
                      }`}
                  >
                    {nomorHalaman}
                  </button>
                );
              })}

              <button
                onClick={keHalamanBerikutnya}
                disabled={halamanSaatIni === totalHalaman}
                className="px-3 py-2 bg-white border border-gray-300 text-slate-600 rounded-r-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {beritaTerpilih && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4 backdrop-blur-md bg-black/30">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-fade-in-up">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold text-slate-800">Detail Berita</h2>
              <button onClick={tutupDetailBerita} className="p-2 rounded-full hover:bg-slate-100">
                <FiX className="h-6 w-6 text-slate-600" />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <img src={beritaTerpilih.gambarUrl} alt={beritaTerpilih.judul} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="flex justify-between items-center mb-2 text-sm text-slate-500">
                <span>{beritaTerpilih.tanggal}</span>
                <span className="font-semibold text-red">{beritaTerpilih.kategori}</span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 mb-4">{beritaTerpilih.judul}</h1>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {beritaTerpilih.kontenLengkap}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Berita;