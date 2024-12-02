import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { Menu } from 'lucide-react';

const Header = () => {
    const linkHoverClass = 'hover:text-[#F4CE14] hover:bg-[#495E57] px-2 py-2 rounded-lg transition-all duration-300';
    return (
        <header>
            <nav className="w-full flex bg-gray-300 justify-between py-2 lg:px-[10%] px-5 items-center">
                <div>
                    {/* Logo */}
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                {/* Navigation Links */}
                <ul className="hidden md:flex md:gap-2 lg:gap-5 text-[#495E57] font-bold">
                    <li className={linkHoverClass}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={linkHoverClass}>
                        <a href="#about">About</a>
                    </li>
                    <li className={linkHoverClass}>
                        <a href="#menu">Menu</a>
                    </li>
                    <li className={linkHoverClass}>
                        <Link to={'/reservation'}>Reservations</Link>
                    </li>
                    <li className={linkHoverClass}>
                        <a href="#menu">Order Online</a>
                    </li>
                    <li className={linkHoverClass}>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
                <button className="md:hidden">
                    <Menu />
                </button>
            </nav>
        </header>
    );
};

export default Header;
