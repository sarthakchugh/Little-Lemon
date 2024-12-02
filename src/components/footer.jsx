import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const padding = 'pb-2';
    return (
        <footer className="w-full bg-black/70 flex flex-col md:flex-row md:justify-evenly py-4 text-white px-4 gap-6">
            <div className="flex bg-white px-8 rounded-xl">
                {/* Logo */}
                <img src={Logo} alt="Logo" height={150} width={300} />
            </div>
            <div className='flex justify-between'>
                <nav>
                    <ul className="flex flex-col">
                        <li className={padding}>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className={padding}>
                            <a href="#about">About</a>
                        </li>
                        <li className={padding}>
                            <a href="#menu">Menu</a>
                        </li>
                        <li className={padding}>
                            <Link to={'/reservation'}>Reservations</Link>
                        </li>
                        <li className={padding}>
                            <a href="#menu">Order Online</a>
                        </li>
                        <li className={padding}>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col md:hidden gap-4">
                    <div>
                        {/* Contact Us */}
                        <h2 className="font-bold md:text-lg mb-2">Contact Us</h2>
                        <div>
                            <p className='text-sm md:text-base'>1234 W Evergreen Ave</p>
                            <p className='text-sm md:text-base'>Chicago, IL 60622</p>
                            <p className='text-sm md:text-base'>+1 (312) 555-7890</p>
                            <p className='text-sm md:text-base'>support@little-lemon.com</p>
                        </div>
                    </div>
                    <div >
                        {/* Social Media Links */}
                        <h2 className="font-bold md:text-lg mb-2">Reach out to us on</h2>
                        <ul className="flex gap-4">
                            <li>
                                <a href="https://www.facebook.com">
                                    <Facebook />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com">
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.x.com">
                                    <Twitter />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                {/* Contact Us */}
                <h2 className="font-bold text-lg mb-2">Contact Us</h2>
                <div>
                    <p>1234 W Evergreen Ave</p>
                    <p>Chicago, IL 60622</p>
                    <p>+1 (312) 555-7890</p>
                    <p>support@little-lemon.com</p>
                </div>
            </div>
            <div className="hidden md:block">
                {/* Social Media Links */}
                <h2 className="font-bold text-lg mb-2">Reach out to us on</h2>
                <ul className="flex gap-4">
                    <li>
                        <a href="https://www.facebook.com">
                            <Facebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com">
                            <Instagram />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.x.com">
                            <Twitter />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
