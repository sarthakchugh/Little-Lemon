import { TESTIMONIALS } from '../util/specials';

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="w-[300px] rounded-lg shadow-lg bg-white karla-400">
            <div className="py-2 px-4 flex flex-col gap-4">
                <p className="font-bold">Rating: {testimonial.rating}</p>
                <div className="flex gap-6 items-center">
                    <div className="w-[100px]">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                </div>
                <p className="italic h-[150px]">"{testimonial.review}"</p>
            </div>
        </article>
    );
};

const Testimonial = () => {
    return (
        <section className="bg-[#495E57]/80 py-6 px-4 md:px-[10%]">
            <h1 className="text-3xl md:text-5xl markazi-text-700 mb-5 text-[#F4CE14] [text-shadow:_1px_1px_0_rgb(0_0_0_/_90%)] ">
                Testimonials
            </h1>
            <ul className="flex gap-5 md:justify-center items-center overflow-x-auto">
                {TESTIMONIALS.map((testimonial) => (
                    <li key={testimonial.name}>
                        <TestimonialCard testimonial={testimonial} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Testimonial;
