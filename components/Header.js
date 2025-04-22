import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const itemsRight = [
    { icon: 'fab fa-github', link: 'https://github.com/rngnnn' },
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/rengin-forbes/' },
    { icon: 'fa fa-envelope', link: 'mailto:rngnnnclk@gmail.com' },
    { icon: 'fa fa-user', link: 'https://who-am-i-eight.vercel.app/#' },
];

const navItems = [
    { icon: 'fal fa-home', active: 'fa fa-home', label: 'Home', href: '/' },
    {
        icon: 'fal fa-compass',
        active: 'fa fa-compass',
        label: 'Projects',
        href: '#projects',
    },
    { icon: 'fal fa-phone', active: 'fa fa-phone', label: 'Contact', href: '/contact' },
    { icon: 'fal fa-rss', active: 'fa fa-rss', label: 'Blogs', href: 'https://blog.codeshare.me' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Menü durumu
    const router = useRouter();

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="border-b-1 border-neutral-800/20 pb-2">
                <div className="flex flex-col md:flex-row w-full items-center md:justify-between">
                    <p className="font-semibold font-Poppins text-xl"></p>
                    <div className="flex items-end space-x-2">
                        {itemsRight.map((item) => (
                            <a
                                key={item.link}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center hover:bg-neutral-700/20 rounded-xl transition-all duration-150 p-2 px-3"
                            >
                                <i className={`${item.icon} text-3xl`} />
                            </a>
                        ))}
                    </div>
                </div>
                {/* Hamburger Menü */}
                <div className="flex justify-between items-center py-2">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-3xl focus:outline-none"
                    >
                        <i className="fa fa-bars" />
                    </button>
                    <div
                        className={`${
                            menuOpen ? 'block' : 'hidden'
                        } md:flex flex-col md:flex-row items-center space-x-4`}
                    >
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                {item.href.startsWith('#') ? (
                                    <button
                                        onClick={() => handleScroll(item.href.substring(1))}
                                        className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${
                                            router.asPath === item.href && 'text-white/100'
                                        }`}
                                    >
                                        <i
                                            className={`${
                                                router.asPath === item.href ? item.active : item.icon
                                            } mr-2`}
                                        />
                                        {item.label}
                                    </button>
                                ) : (
                                    <Link href={item.href}>
                                        <a
                                            className={`flex items-center justify-center text-white/50 cursor-pointer hover:text-white/100 rounded-xl transition-all duration-150 ${
                                                router.asPath === item.href && 'text-white/100'
                                            }`}
                                        >
                                            <i
                                                className={`${
                                                    router.asPath === item.href
                                                        ? item.active
                                                        : item.icon
                                                } mr-2`}
                                            />
                                            {item.label}
                                        </a>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
