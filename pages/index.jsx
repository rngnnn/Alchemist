import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; // Kaydırmaya bağlı olarak ölçek artırılır
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Siyah Yazı (Sağ Tarafta, Yukarıdan Aşağı) */}
      <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-center space-y-4 pr-4">
        <p className="text-white text-lg rotate-90">
          This is a black text outside the red area.
        </p>
        <p className="text-white text-lg rotate-90">
          Another line of text.
        </p>

        <div className='absolute top-0 -0 h-full flex flex-col justify-center items-center space-y-4 pr-4'>
        <p className="text-white text-lg rotate-90">
          Yet another line of text.
        </p>
        </div>
        
      </div>

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
    </>
  );
}
