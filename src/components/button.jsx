import React from 'react';

const Button = ({ bgColor, color, onClick, children }) => {
    return (
        <button className={`bg-[#${bgColor}] text-[#${color}] px-4 py-2 font-bold rounded-lg shadow-xl`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
