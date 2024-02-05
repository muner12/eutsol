import React from 'react'

const TextArea = ({label , placeHolder}) => {
  return (
    <div className='py-2'>
        <div>
        {/* <p className='text-[10px] font-semibold text-black'> {label} </p> */}

        </div>
        <textarea className='w-full  border-b border-b-gray-300 py-1  text-[14px] outline-none' rows="2" placeholder={placeHolder} />
     
    </div>
  )
}

export default TextArea