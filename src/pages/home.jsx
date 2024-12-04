import { useEffect } from 'react';
import Hero from '../components/hero';
import Testimonial from '../components/testimonial';
import About from '../components/about';
import Menu from '../components/menu';

import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.substring(1); // Remove the '#' from the hash
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <Hero />
            <Menu />
            <Testimonial />
            <About />
        </>
    );
};

export default Home;
