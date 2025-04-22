import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Link bileşeni eklendi

export default function Home() {
  const [scale, setScale] = useState(1);
  const [showText, setShowText] = useState(false); // showText state'i tanımlandı

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1.3 + scrollY / 1700; // Kaydırmaya bağlı olarak ölçek artırılır
      setScale(newScale);

      // Sağdaki yazının kaydırılması
      if (scrollY > 50 && scrollY < 700) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Siyah Yazı (Sol Tarafta, Yukarıdan Aşağı Harf Harf) */}
      <div className="font absolute top-19 left-10 h-full flex flex-col justify-center items-center space-y-1 pl-9">
        <p className="text-white text-4xl">A</p>
        <p className="text-white text-4xl">L</p>
        <p className="text-white text-4xl">C</p>
        <p className="text-white text-4xl">H</p>
        <p className="text-white text-4xl">E</p>
        <p className="text-white text-4xl">M</p>
        <p className="text-white text-4xl">I</p>
        <p className="text-white text-4xl">S</p>
        <p className="text-white text-4xl">T</p>
      </div>

      {/* Siyah Yazı (Sağ Tarafta, Yukarıdan Aşağı) */}
      <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-center space-y-5 pr-4">
        <p className="text-white text-4xl rotate-90">FUTURE</p>
      </div>

      {showText && (
        <div
          className="fixed top-1/4 right-[400px] animate-slide-in text-blue text-lg font-semibold mask mask-contain bg-gradient-to-r from-black to-red-900 p-1 pl-2 "
          style={{
             borderRadius: '20px',
            zIndex: 10, // Yazıyı diğer öğelerin üzerine çıkarır
            pointerEvents: 'none', // Yazının tıklanabilir olmamasını sağlar
          }}
        >
 Be wells none see. Unstoppered tears,        </div>
      )}

      {/* Kırmızı Alan */}
      <div className="bg-red-900 min-h-screen flex items-center justify-center relative">
        {/* Manifesto Başlığı */}
        <p className="absolute top-10 text-white-900 text-4xl font-semibold">
          MANIFESTO
        </p>
        {/* Manifesto GIF */}
        <div className="mt-4">
          <img
            src="/assets/techs/tears.gif"
            alt="Manifesto GIF"
            style={{
              transform: `scale(${scale})`, // Scroll ile ölçeklendirme
              transition: 'transform 0.1s ease-out-in', // Yumuşak geçiş
             
              borderRadius: '100px',
              display: 'block',
              objectFit: 'cover',
            }}
            className="shadow-lg"
          />
        </div>
      </div>

      {/* Projects Bölümü */}
      <div id="projects" className="bg-red-900 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">- PROJECTS -</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:gri-cols-2 gap-12">
          {/* Proje Kartları */}
          <Link href="/project1">
            <a className="bg-white shadow-md rounded-3xl p-6 hover:shadow-2xl hover:scale-110 transition-transform duration-300">
              <img
                src="/assets/techs/eye.jpg"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 1</h2>
            </a>
          </Link>
          <Link href="/project2">
            <a className="bg-white shadow-md rounded-3xl p-6 hover:shadow-2xl hover:scale-110 transition-transform duration-300">
              <img
                src="/assets/techs/lolipop.jpg"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 2</h2>
            </a>
          </Link>
          <Link href="/project3">
            <a className="bg-white shadow-md rounded-3xl p-6 hover:shadow-2xl hover:scale-110 transition-transform duration-300">
              <img
                src="/assets/techs/bike.jpg"
                alt="Project 3"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 3</h2>
            </a>
          </Link>
          <Link href="/project4">
            <a className="bg-white shadow-md rounded-3xl p-6 hover:shadow-2xl hover:scale-110 transition-transform duration-300">
              <img
                src="/assets/techs/puzzle.jpg"
                alt="Project 4"
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 4</h2>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(300px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}
