import Hero from '../components/hero';
import Testimonial from '../components/testimonial';
import About from './about';
import Menu from './menu';

const Home = () => {
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
