import { useReducer } from 'react';
import Form from '../components/form';
import { fetchAPI, submitAPI } from '../util/api';

export const updateTimes = (state, action) => {
    const availableTimes = fetchAPI(new Date(action.payload));
    return availableTimes;
};

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const Reservation = () => {
    const [availableSlots, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <div className="w-full h-screen flex">
            <div className="hidden md:block w-[10%] h-screen bg-[#495E57]"></div>
            <div className="w-full md:w-[80%] h-screen bg-[#F4CE14]/20 flex flex-col px-4 py-6 md:py-[150px]">
                <h1 className="text-4xl md:text-5xl markazi-text-700 text-[#495E57] text-center">Reserve a Table</h1>
                <Form availableSlots={availableSlots} onDateChange={dispatch} onSubmit={submitAPI} />
            </div>
            <div className="hidden md:block w-[10%] h-screen bg-[#495E57]"></div>
        </div>
    );
};

export default Reservation;
