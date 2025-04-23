import Link from 'next/link';


export default function Project3() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black/50 text-white p-8 transition-colors duration-500 rounded-3xl shadow-2xl backdrop-blur-md mx-4 md:mx-16 my-10">
           
           <div className="w-full max-w-4xl  backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-6 z-10">

            <h1 className="text-4xl font-bold mb-6">
                <span className="text-red-500">The Future</span>
            </h1>
            <div className="text-xl space-y-6 max-w-3xl text-center">
                <p>And I know full well you <span className="text-red-500">won’t</span> be there.</p>
                <p>
                    You won’t be in the street, in the hum that buzzes from the arc lamps at night, nor in the gesture
                    of selecting from the menu, nor in the <span className="text-red-500">smile</span>
                    that lightens people packed into the subway,
                    nor in the borrowed books, nor in the <span className="text-red-500">see-you-tomorrow</span>.
                </p>
                <p>
                    You won’t be in my <span className="text-red-500">dreams</span>,
                    in my words’ first destination,
                    nor will you be in a telephone number
                    or in the color of a pair of gloves or a blouse.
                </p>
                <p>
                    I’ll get angry, love, without it being on account of you,
                    and I’ll buy chocolates but not for you,
                    I’ll stop at the corner you’ll never come to,
                    and I’ll say the words that are said
                    and I’ll eat the things that are eaten
                    and I’ll dream the <span className="text-red-500">dreams</span> that are dreamed.
                </p>
                <p>
                    And I know full well you won’t be there,
                    nor here inside, in the prison where I still hold you,
                    nor there outside, in this river of streets and bridges.
                </p>
                <p>
                    You won’t be there at all, you won’t even be a <span className="text-red-500">memory</span>,
                    and when I think of you I’ll be thinking a thought
                    that’s obscurely trying to <span className="text-red-500">recall</span> you.
                </p>
                <p>
                    <span className="text-red-500">Julio Cortázar</span>
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