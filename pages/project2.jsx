import Link from 'next/link';


export default function Project2() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black/40 text-white p-8 transition-colors duration-500 rounded-3xl shadow-2xl backdrop-blur-md mx-4 md:mx-16 my-10">
            
            
            <div className="w-full max-w-4xl  backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-6 z-10">

            <h1 className="text-4xl font-bold mb-6">
                <span className="text-red-500">Little Time Left</span>
            </h1>
            <div className="text-xl space-y-6 max-w-3xl text-center">
                <p>Little time left of this dragged body of mine</p>
                <p>
                    I should die as I am as am I <span className="text-red-500">without</span> thinking of blood and bodily secretions.
                </p>
                <p>
                    I need to choke the breath out of <span className="text-red-500">being born</span>!
                </p>
                <p>
                    How becoming <span className="text-red-500">death</span> is for this pale heart.
                </p>
                <p>
                    Time that does not connect <span className="text-red-500">joys</span> to each other is a grizzly bridge and its unbearable shadow.
                </p>
                <p>There goes my overlooked body.</p>
                <p>
                    I should die as I am as am I <span className="text-red-500">without</span> thinking of friends, family, or any kind of hope.
                </p>
                <p>
                    I need to chop up this revolting body with my <span className="text-red-500">mind</span>!
                </p>
                <p>
                    Would I know before the approaching <span className="text-red-500">darkness</span> it was my life that could be ended?
                </p>
                <p>
                    I was cheerful, so cheerful that my <span className="text-red-500">laugh</span> would spook people!
                </p>
                <p>
                    Time runs out now on my worn-out body. I should die as I am as am I <span className="text-red-500">without</span> thinking of love, ties, or any kind of triumph.
                </p>
                <p>
                    I need to be stiff just like that!
                </p>
                <p>
                    <span className="text-red-500">Nilgün Marmara</span>
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