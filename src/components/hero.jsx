import heroImage from '../assets/restauranfood.jpg';
import Button from './button';

const Hero = () => {
    return (
        <section className="w-full md:h-[600px] bg-[#495E57] px-4 py-4 flex justify-center items-center gap-4">
            <div className="w-[50%] md:w-[40%]">
                <div>
                    <h1 className="font-extrabold text-4xl md:text-8xl text-[#F4CE14] markazi-text-700">Little Lemon</h1>
                    <h2 className="font-bold text-3xl md:text-6xl text-white markazi-text-500">Chicago</h2>
                </div>
                <div className="max-w-[500px] md:mt-12 md:mb-6 mt-6 mb-3">
                    <p className="md:font-bold md:text-3xl text-white karla-400">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                </div>
                <Button color="495E57" bgColor="F4CE14">
                    Reserve a Table
                </Button>
            </div>
            <div className="w-[50%] h-[300px] md:w-[300px] md:h-[500px] rounded-xl  py-4 md:py-8">
                <img src={heroImage} alt="Restaurant Hero Image" className="h-full w-full object-cover rounded-xl" />
            </div>
        </section>
    );
};

export default Hero;
