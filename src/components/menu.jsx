import Button from './button';
import Card from './card';
import { SPECIALS } from '../util/specials';

const Menu = () => {
    return (
        <section id='menu' className="flex flex-col w-full py-6 gap-10 bg-[#F4CE14]/20 px-4">
            <div className="flex justify-between md:px-[10%] w-full items-center">
                <h1 className="text-3xl md:text-5xl markazi-text-700 text-[#495E57]">Today's Specials</h1>
                <Button bgColor="495E57" color="F4CE14">
                    Online Menu
                </Button>
            </div>
            <ul className="flex md:gap-10 gap-4 md:justify-center items-center overflow-x-auto">
                {SPECIALS.map((dish) => (
                    <li key={dish.name}>
                        <Card dish={dish} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Menu;
