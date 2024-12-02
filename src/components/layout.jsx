import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main className='w-full flex flex-col'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
