import React, { useState, useEffect } from 'react';

const InputTextEut = ({ label, placeHolder, isDisabled, initialValue }) => {
  const [value, setValue] = useState(initialValue || '');

  useEffect(() => {
    // Update the value if the initialValue prop changes (e.g., due to API response)
    setValue(initialValue || '');
  }, [initialValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='py-2'>
      <div>
        <p className='text-[12px] font-bold text-gray-700'>{label}</p>
      </div>
      <input
        className='w-full bg-white border-b  border-b-gray-300 py-1 text-[14px] outline-none'
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default InputTextEut;
