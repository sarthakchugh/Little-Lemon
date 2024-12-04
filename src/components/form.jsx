import { MoveLeft, MoveRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ availableSlots, onDateChange, onSubmit }) => {
    const navigate = useNavigate();
    const labelClass = 'font-bold text-[#495E57] karla-700 mb-1';
    const inputClass = 'w-full border border-[#495E57] px-2 py-1 rounded';
    const errorClass = 'w-full border border-red-500 px-2 py-1 rounded bg-red-500/20';
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: '',
        comments: '',
        name: '',
        email: '',
        contact: '',
    });

    const [error, setError] = useState({
        date: false,
        time: false,
        guests: false,
        name: false,
        email: false,
        contact: false,
    });

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle date change
    const handleDateChange = (e) => {
        const { value } = e.target;
        onDateChange({ payload: value });
        setFormData({ ...formData, date: value, time: '' });
    };

    // Handle validation on blur
    const handleBlur = (e) => {
        const { name } = e.target;
        if (formData[name] === '') {
            setError({ ...error, [name]: true });
        }
    };

    // Handle validation on focus
    const handleFocus = (e) => {
        const { name } = e.target;
        setError({ ...error, [name]: false });
    };

    const validatePage1 = () => {
        let isValid = true;
        if (formData.date === '') {
            isValid = false;
            setError((prevError) => {
                return {
                    ...prevError,
                    date: true,
                };
            });
        }

        if (formData.time === '') {
            isValid = false;
            setError((prevError) => {
                return {
                    ...prevError,
                    time: true,
                };
            });
        }

        if (formData.guests === '' || formData.guests < 1 || formData.guests > 10) {
            isValid = false;
            setError((prevError) => {
                return {
                    ...prevError,
                    guests: true,
                };
            });
        }

        return isValid;
    };

    const validatePage2 = () => {
        let isValid = true;
        if (formData.name.trim() === '') {
            isValid = false;
            setError((prevError) => {
                return {
                    ...prevError,
                    name: true,
                };
            });
        }

        if (formData.email.trim() === '') {
            isValid = false;
            setError((prevError) => {
                return {
                    ...prevError,
                    email: true,
                };
            });
        }

        if (formData.contact.trim() === '') {
            isValid = false;
            setError((prevError) => {
                return {
                    ...prevError,
                    contact: true,
                };
            });
        }

        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePage2()) {
            if (onSubmit(formData)) {
                navigate('/confirm'); // Navigate to confirmation page
            }
        }
    };

    return (
        <div className="max-w-[500px] w-[90%] mx-auto my-4 bg-white rounded-xl shadow-lg">
            {/* Back Button */}
            {currentPage === 2 && (
                <button type="button" onClick={() => setCurrentPage(1)} className="pt-2 px-4 flex gap-2">
                    <MoveLeft /> Back
                </button>
            )}
            <form className="px-4 py-4" onSubmit={handleSubmit}>
                {currentPage === 1 && (
                    <>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="date">
                                Select a Date
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                className={error.date ? errorClass : inputClass}
                                value={formData.date}
                                onChange={handleDateChange}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            />
                            {error.date && <p className="text-red-500 text-sm">Please select a date</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="time">
                                Select a Time
                            </label>
                            <select
                                id="time"
                                name="time"
                                className={error.time ? errorClass : inputClass}
                                value={formData.time}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            >
                                <option value="" disabled>
                                    Select Time
                                </option>
                                {availableSlots.map((slot) => (
                                    <option key={slot}>{slot}</option>
                                ))}
                            </select>
                            {error.time && <p className="text-red-500 text-sm">Please select a time</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="res-guests">
                                Number of Guests
                            </label>
                            <input
                                id="guests"
                                name="guests"
                                type="number"
                                step={1}
                                className={error.guests ? errorClass : inputClass}
                                value={formData.guests}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            />
                            {error.guests && <p className="text-red-500 text-sm">Please enter valid number of guests (1-10)</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="occasion">
                                Any occasion?
                            </label>
                            <select
                                id="occasion"
                                name="occasion"
                                className={inputClass}
                                value={formData.occasion}
                                onChange={handleChange}
                            >
                                <option>Not really</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Business Meeting</option>
                                <option>Casual Dining</option>
                            </select>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="comments">
                                Have a special request? Let us know.
                            </label>
                            <textarea
                                rows={5}
                                id="comments"
                                name="comments"
                                className={inputClass}
                                value={formData.comments}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                validatePage1() ? setCurrentPage(2) : null;
                            }}
                            className="ml-auto mr-0 w-1/2 bg-[#495E57] text-[#F4CE14] py-2 px-4 rounded hover:bg-[#F4CE14] hover:text-[#495E57] flex items-center gap-4 justify-center"
                        >
                            Next <MoveRight />
                        </button>
                    </>
                )}
                {currentPage === 2 && (
                    <>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={error.name ? errorClass : inputClass}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            />
                            {error.name && <p className="text-red-500 text-sm">Please provide a name</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={error.email ? errorClass : inputClass}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            />
                            {error.email && <p className="text-red-500 text-sm">Please provide an email</p>}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className={labelClass} htmlFor="contact">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className={error.contact ? errorClass : inputClass}
                                onBlur={handleBlur}
                                onFocus={handleFocus}
                            />
                            {error.contact && <p className="text-red-500 text-sm">Please provide a contact number</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#495E57] text-[#F4CE14] py-2 px-4 rounded hover:bg-[#F4CE14] hover:text-[#495E57] flex items-center gap-4 justify-center"
                        >
                            Reserve
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

export default Form;
