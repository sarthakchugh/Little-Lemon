import React from 'react';

const Button = ({ bgColor, color, children }) => {
    return <button className={`bg-[#${bgColor}] text-[#${color}] px-4 py-2 font-bold rounded-lg shadow-xl`}>{children}</button>;
};

export default Button;
