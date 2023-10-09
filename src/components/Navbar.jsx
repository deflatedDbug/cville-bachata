import { useState } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const DesktopNav = () => (

    <ul className="list-none sm:flex hidden justify-end items-center flex-1 mb-2 pr-24">
        {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10 px-3 hover:text-gray-500 transition-all duration-300`}
            >
                <a href={`#${nav.id}`} aria-label={nav.title}>
                    {nav.title}
                </a>

            </li>
        ))}
    </ul>
);


const MobileNav = () => {

    const [active, setActive] = useState("home");
    const [toggle, setToggle] = useState(false);

    return (
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[120px] h-[20px] object-contain pr-6"
                onClick={() => setToggle(!toggle)}
            />

            <div
                className={`${!toggle ? "hidden" : "flex"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Navbar = () => {

    return (
        <nav className="w-full fixed top-0 bg-black bg-opacity-90 z-50 flex justify-between items-center border-opacity-50 border-gray-400 navbar shadow-md">
            <a href="#home">
                <img src={logo} alt="logo" className="w-[150px] h-[100px] pt-2" />
            </a>
            <DesktopNav />
            <MobileNav />
        </nav>
    );
}

export default Navbar