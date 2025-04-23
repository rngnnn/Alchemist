import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scale, setScale] = useState(1);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        const scrollY = window.scrollY;
        const newScale = 1 + scrollY / 2000;
        setScale(Math.min(newScale, 1.4));
      }

      const scrollY = window.scrollY;
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
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* ALCHEMIST - Left */}
      <div className="hidden md:flex fixed top-24 left-2 h-screen flex-col justify-center items-center space-y-1 z-20 animate-fade-in pointer-events-none">
        {'ALCHEMIST'.split('').map((letter, index) => (
          <p key={index} className="text-white text-3xl font-bold">{letter}</p>
        ))}
      </div>

      {/* FUTURE - Right */}
      <div className="fixed top-0 right-0 h-screen flex flex-col justify-center items-center pr-2 z-20 animate-fade-in pointer-events-none">
        <p className="text-white text-3xl rotate-90 font-bold">FUTURE</p>
      </div>

      {/* Scrolled Text */}
      {showText && (
        <div className="fixed top-1/4 right-4 md:right-[400px] animate-slide-in text-white text-sm md:text-lg font-semibold bg-gradient-to-r from-black to-red-900 p-2 px-4 rounded-xl z-30 pointer-events-none">
          Be wells none see. Unstoppered tears.
        </div>
      )}

      {/* Manifesto */}
      <section className="bg-red-900 min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center space-y-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
          MANIFESTO
        </h1>
               {/* Manifesto GIF */}
               
               <div className="relative w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mb-20">
  {/* LEFT BARS */}
  <div className="hidden md:flex absolute top-0 left-[-80px] flex-row items-start space-x-4 animate-bars z-10">
    <div className="w-[4px] h-96 bg-black opacity-80 rounded" />
    <div className="w-[4px] h-svh bg-black opacity-70 rounded" />
    <div className="w-[4px] h-screen bg-black opacity-60 rounded" />
    <div className="w-[4px] h-lvh bg-black opacity-50 rounded" />
    <div className="w-[4px] h-80 bg-black opacity-40 rounded" />
    <div className="w-[4px] h-96 bg-black opacity-30 rounded" />
    <div className="w-[4px] h-svh bg-black opacity-40 rounded" />


    <div className="w-[4px] h-80 bg-black opacity-20 rounded" />
  </div>





  {/* RIGHT BARS */}
  <div className="hidden md:flex absolute top-0 right-[-36px] flex-row items-start space-x-2 animate-bars-delay z-10">
    <div className="w-[4px] h-24 bg-black opacity-80 rounded" />
    <div className="w-[4px] h-14 bg-black opacity-60 rounded" />
    <div className="w-[4px] h-32 bg-black opacity-50 rounded" />
  </div>

  {/* GIF */}
  <img
    src="/assets/techs/tears.gif"
    alt="Manifesto GIF"
    style={{
      transform: `scale(${scale})`,
      transition: 'transform 0.5s ease-out',
    }}
    className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl rounded-full shadow-xl mx-auto"
  />
</div>

      </section>


{/* Manifesto bitiminden sonra dinamik boşluk */}
<div

className="bg-red-900"
  style={{
    height: `${70 * scale}px`,
    transition: 'height 0.3s ease-out',
  }}
/>
      {/* Projects */}
      <section id="projects" className="bg-red-900 min-h-screen flex flex-col items-center justify-center px-4 pb-20 pt-10 ">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">- PROJECTS -</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl">
          {[
            { title: 'Project 1', image: 'eye.jpg', link: '/project1' },
            { title: 'Project 2', image: 'lolipop.jpg', link: '/project2' },
            { title: 'Project 3', image: 'bike.jpg', link: '/project3' },
            { title: 'Project 4', image: 'puzzle.jpg', link: '/project4' },
          ].map((project) => (
            <Link key={project.title} href={project.link}>
              <a className="bg-white shadow-md rounded-3xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300">
<div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={`/assets/techs/${project.image}`}
                  alt={project.title}
                  className="w-full max-h-64 object-contain max-auto"
                />
</div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.title}</h3>
              </a>
            </Link>
          ))}
        </div>
      </section>


      {/* Animasyonlar */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(300px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }

        @keyframes drop-bars {
    from {
      transform: translateY(-60px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-bars {
    animation: drop-bars 1s ease-out forwards;
  }

  .animate-bars-delay {
    animation: drop-bars 1.2s ease-out forwards;
  }



      `}</style>
    </main>
  );
}
