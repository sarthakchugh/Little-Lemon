import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const linkHoverClass = 'hover:text-[#F4CE14] hover:bg-[#495E57] px-2 py-2 rounded-lg transition-all duration-300';
    return (
        <div
            className={`w-[250px] h-full fixed top-0 left-0 z-10 bg-white transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300`}
        >
            <ul className="flex flex-col md:gap-2 lg:gap-5 text-[#495E57] font-bold items-center h-full mt-[100px]">
                <li className={linkHoverClass} onClick={toggleSidebar}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={linkHoverClass} onClick={toggleSidebar}>
                    <a href="/#about">About</a>
                </li>
                <li className={linkHoverClass} onClick={toggleSidebar}>
                    <a href="/#menu">Menu</a>
                </li>
                <li className={linkHoverClass} onClick={toggleSidebar}>
                    <Link to={'/reservation'}>Reservations</Link>
                </li>
                <li className={linkHoverClass} onClick={toggleSidebar}>
                    <a href="/#menu">Order Online</a>
                </li>
                <li className={linkHoverClass} onClick={toggleSidebar}>
                    <Link to={'/login'}>Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
