import React from 'react';
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";

const PhoneInput = ({ label }) => {
    return (
        <div className="relative">
            {label && <label className="block text-sm text-gray-800 mb-1">{label}</label>}
            <input
                type="tel"
                placeholder="Phone number"
                className="w-80 py-2 px-4 border-double border-4 rounded focus:outline-none focus:border-blue-200 transition duration-300 "
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">

            </div>
        </div>
    );
};

export default PhoneInput;
