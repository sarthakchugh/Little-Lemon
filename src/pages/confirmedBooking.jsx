import { CircleCheckBig } from 'lucide-react';

const ConfirmedBooking = () => {
    return (
        <div className="w-full h-screen flex">
            <div className="hidden md:block w-[10%] h-screen bg-[#495E57]"></div>
            <div className="w-full md:w-[80%] h-screen bg-[#F4CE14]/20 flex flex-col px-4 py-6 md:py-[150px]">
                <div className="max-w-[500px] w-[90%] mx-auto my-4 bg-white rounded-xl shadow-lg px-4 py-6 flex flex-col items-center gap-2 ">
                    <CircleCheckBig color="#495E57" height={70} width={70} />
                    <h1 className="text-4xl markazi-text-700 text-[#495E57] mb-4">Success!</h1>
                    <p className="karla-400 text-[#495E57]">Your reservation has been confirmed. We can't wait to host you!</p>
                </div>
            </div>
            <div className="hidden md:block w-[10%] h-screen bg-[#495E57]"></div>
        </div>
    );
};

export default ConfirmedBooking;
