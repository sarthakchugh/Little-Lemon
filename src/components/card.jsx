import { Bike } from 'lucide-react';

const Card = ({ dish }) => {
    return (
        <article className="w-[250px] md:w-[300px] rounded-xl shadow-lg bg-white">
            <div>
                <img src={dish.image} alt={dish.name} className="w-full h-[150px] md:h-[200px] object-cover rounded-t-xl" />
            </div>
            <div className="px-4 py-2 karla-400">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg md:text-xl">{dish.name}</h3>
                    <p className="font-bold text-[#495E57]">${dish.price}</p>
                </div>
                <div className="text-sm md:text-base mb-2 h-[110px] md:h-[130px] text-justify">{dish.description}</div>
                <button className="font-bold flex gap-2 items-center text-sm md:text-base mx-auto md:mx-0">
                    Order for delivery <Bike />
                </button>
            </div>
        </article>
    );
};

export default Card;
