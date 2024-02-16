import React, { useState, useEffect } from 'react';

const TextArea = ({  placeHolder, isDisabled,onChange , value }) => {


  return (
    <div className='py-2'>
      <textarea
        className='w-full border-b border-b-gray-300 py-1 text-[14px] outline-none'
        rows="3"
        placeholder={placeHolder}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;

//method to call in parent
//  const [commentvalue, setCommentValue] = useState('');
//    const handleCommentChange = (e) => {
//   setInputValue(e.target.value);
// };
{/* <TextArea label="Comments" value={commentvalue}initialValue={formData?.NOTES} placeHolder='Comments' onChange={handleCommentChange} />*/}