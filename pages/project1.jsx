import Link from 'next/link';


export default function Project1() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black/40 text-white p-8 transition-colors duration-500 rounded-3xl shadow-2xl backdrop-blur-md mx-4 md:mx-16 my-10">
            
            <div className="w-full max-w-4xl  backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-6 z-10">

            <h1 className="text-4xl font-bold mb-6">
                <span className="text-red-500">We Are The Time.</span> We Are The Famous
            </h1>
            <div className="text-xl space-y-6 max-w-3xl text-center">
                <p>We are the time. We are the famous metaphor from Heraclitus the Obscure.</p>
                <p>We are the water, not the hard diamond, the one that is lost, not the one that stands <span className="text-red-500">still</span>.</p>
                <p>
                    We are the river and we are that Greek that looks himself into the river. His reflection
                    changes into the waters of the changing mirror, into the crystal that changes like the <span className="text-red-500">fire</span>.
                </p>
                <p>We are the vain predetermined river, in his travel to his sea.</p>
                <p>The shadows have surrounded him. Everything said goodbye to us, everything goes  <span className="text-red-500">away</span>.</p>
                <p>
                    Memory does not stamp his own <span className="text-red-500">coin</span>.
                </p>
                <p>
                    However, there is something that stays, however, there is something that <span className="text-red-500">bemoans</span>.
                </p>
                <p>
                     <span className="text-red-500">Jorge Luis Borges</span>
                </p>
            </div>
            </div>

            <Link href="/#projects">
        <a className="fixed bottom-4 left-4 text-xs text-white/40 hover:text-white transition z-20">
          ← Back to Projects
        </a>
      </Link>
        </div>
    );
}