import image1 from '../assets/Mario and Adrian A.jpg';
import image2 from '../assets/Mario and Adrian b.jpg';

const About = () => {
    return (
        <section id='about' className="w-full bg-[#F4CE14] text-[#495E57] flex flex-col md:px-[10%] py-6 px-4">
            <h1 className="text-3xl md:text-5xl markazi-text-700 mb-5">About Us</h1>
            <div className='w-full flex flex-col md:flex-row justify-between items-start gap-10'>
                <div className='flex flex-col md:w-[50%]'>
                    <div className='flex flex-col mb-4'>
                        <h1 className='karla-400 text-2xl md:text-4xl'>Little Lemon</h1>
                        <h2 className='karla-400 text-xl md:text-2xl'>Chicago</h2>
                    </div>
                    <div>
                        <p className='karla-400 text-base md:text-lg text-justify'>
                            At <strong>Little Lemon</strong>, founders and lifelong friends <strong>Mario</strong> and <strong>Adrian</strong> invite you on a flavorful journey
                            through the Mediterranean. Their shared passion for fresh, authentic cuisine and warm hospitality
                            inspired this cozy restaurant. Each dish is crafted with love, featuring bold flavors and time-honored
                            recipes that celebrate Mediterranean tradition. Whether you’re savoring a classic mezze platter or
                            indulging in a zesty dessert, Little Lemon offers a vibrant dining experience where every meal feels
                            like home.
                        </p>
                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center md:w-[50%]'>
                    <div className='h-[300px] w-[300px]'>
                        <img src={image1} alt="Founder Image 1" className='h-full w-full object-cover rounded-2xl shadow-lg'/>
                    </div>
                    <div className='h-[300px] w-[300px] hidden md:block'>
                        <img src={image2} alt="Founder Image 2" className='h-full w-full object-cover rounded-2xl shadow-lg'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
