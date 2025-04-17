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
      const newScale = 1 + scrollY / 1000; // Kaydırmaya bağlı olarak ölçek artırılır
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


      {/* Siyah Yazı (Sağ Tarafta, Yukarıdan Aşağı) */}
        {/* Siyah Yazı (Sol Tarafta, Yukarıdan Aşağı Harf Harf) */}
        <div className="absolute top-12 left-5 h-full flex flex-col justify-center items-center space-y-2 pl-4">
        <p className="text-white text-lg">Y</p>
        <p className="text-white text-lg">e</p>
        <p className="text-white text-lg">t</p>
        <p className="text-white text-lg"> </p>
        <p className="text-white text-lg">a</p>
        <p className="text-white text-lg">n</p>
        <p className="text-white text-lg">o</p>
        <p className="text-white text-lg">t</p>
        <p className="text-white text-lg">h</p>
        <p className="text-white text-lg">e</p>
        <p className="text-white text-lg">r</p>
        <p className="text-white text-lg"> </p>
        <p className="text-white text-lg">l</p>
        <p className="text-white text-lg">i</p>
        <p className="text-white text-lg">n</p>
        <p className="text-white text-lg">e</p>
        <p className="text-white text-lg"> </p>
        <p className="text-white text-lg">o</p>
        <p className="text-white text-lg">f</p>
        <p className="text-white text-lg"> </p>
        <p className="text-white text-lg">t</p>
        <p className="text-white text-lg">e</p>
        <p className="text-white text-lg">x</p>
        <p className="text-white text-lg">t</p>
        <p className="text-white text-lg">.</p>



      </div>
      <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-center space-y-5 pr-4">
      
        <p className="text-white text-lg rotate-90">
          Another line of text.
        </p>

      
 
      </div>
      

    
 {showText && (
        <div className="fixed top-1/1 right-[200px] animate-slide-in text-white text-lg font-semibold">
          This is a scrolling text from right to left.
        </div>
      )}

      {/* Kırmızı Alan */}
      <div className="bg-red-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Manifesto Başlığı */}
          <p className="text-white text-4xl font-semibold -mt-10">
            MANIFESTO
          </p>
          {/* Manifesto GIF */}
          <div className="mt-4">
            <img 
              src="/assets/techs/tears.gif" 
              alt="Manifesto GIF" 
              style={{ transform: `scale(${scale})`, transition: 'transform 0.2s ease-in-out' }}
              className="w-full max-w-md rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>

{/* Projects Bölümü */}
<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">Projects</h1>
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* Proje Kartları */}
    <Link href="/project1">
      <a className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <img
          src="/assets/project1.jpg"
          alt="Project 1"
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 1</h2>
      </a>
    </Link>
    <Link href="/project2">
      <a className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <img
          src="/assets/project2.jpg"
          alt="Project 2"
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 2</h2>
      </a>
    </Link>
    <Link href="/project3">
      <a className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <img
          src="/assets/project3.jpg"
          alt="Project 3"
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold text-gray-800 mt-4">Project 3</h2>
      </a>
    </Link>
    <Link href="/project4">
      <a className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <img
          src="/assets/project4.jpg"
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
