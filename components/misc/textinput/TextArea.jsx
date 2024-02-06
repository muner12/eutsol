import React, { useState, useEffect } from 'react';

const TextArea = ({ label, placeHolder, initialValue,isDisabled }) => {
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
        <p className='text-[12px] font-bold text-gray-800'>{label}</p>
      </div>
      <textarea
        className='w-full border-b border-b-gray-300 py-1 text-[14px] outline-none'
        rows="2"
        placeholder={placeHolder}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
