import Link from 'next/link';

export default function Project4() {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center bg-black/50 text-white p-8 transition-colors duration-500 rounded-3xl shadow-2xl backdrop-blur-md mx-4 md:mx-16 my-10">
            {/* Navbar */}

            <div className="w-full max-w-4xl  backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-6 z-10">

            {/* Content */}
            <h1 className="text-4xl font-bold mb-6">
                <span className="text-red-500">Rebirth</span>
            </h1>
            <div className="text-xl space-y-6 max-w-3xl text-center">
                <p>My entire <span className="text-red-500">verve</span> - is a dark verse.</p>
                <p>It will take you - to the unending dawn of blooms, flight and light.</p>
                <p>In this verse, I heaved you a <span className="text-red-500">sigh</span>, sigh.</p>
                <p>In this verse, I tied you to trees, water and <span className="text-red-500">flames</span>.</p>
                <p>Life perhaps, is that long, shady road, where every day, a woman wanders - with her basket of fruits.</p>
                <p>
                    Life perhaps, is that <span className="text-red-500">rope</span>; the one that a man would hang himself with -
                    in a gray, rainy day - from a thick branch.
                </p>
                <p>Life perhaps, is that child who is running back home.</p>
                <p>
                    Life perhaps, is those brief <span className="text-red-500">smokes</span>, in the lazy, idle times -
                    stolen from two making-loves.
                </p>
                <p>
                    Life perhaps, is that still instant, when my eyes sink into -
                    the reflection of your sight.
                </p>
                <p>
                    Life perhaps, is its sheltering sense; I will merge it - with the flood of <span className="text-red-500">moonlight</span> -
                    and the frozen abode of night.
                </p>
                <p>In my little, lonely room, my heart is invaded - by the silent crowd of love.</p>
                <p>
                    I am keeping track of my life: The beautiful decay of a <span className="text-red-500">rose</span>, in this antique vase;
                    the growing plant that you brought, and those birds in their timber cage.
                </p>
                <p>
                    They are singing every hour, up to the full depth - of their view.
                </p>
                <p>
                    <span className="text-red-500">Forough Farrokhzad</span>
                </p>
            </div>
            </div>
     

            <Link href="/#projects">
    <a className="absolute bottom-4 left-4 text-xs text-white/40 hover:text-white transition">
      ← Back to Projects
    </a>
  </Link>
        </div>
        

        
    );
}