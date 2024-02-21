import React, { useState, useEffect } from 'react';

const InputTextEut = ({ placeHolder, isDisabled, initialValue, onChange , value }) => {

  return (
    <div className='py-2'>
      <input
        className='w-full bg-white border-b border-b-gray-300 py-1 text-[14px] outline-none mb-2'
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default InputTextEut;

//method to call in parent
//  const [inputValue, setInputValue] = useState('');
//    const handleInputChange = (e) => {
//   setInputValue(e.target.value);
// };
{/* <InputTextEut
        placeHolder="Enter text..."
        initialValue={inputValue}
        onChange={handleInputChange}
        value={inputValue}
      /> */}