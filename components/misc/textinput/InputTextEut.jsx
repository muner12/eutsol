import React from 'react'

const InputTextEut = ({label , placeHolder}) => {
  return (
    <div className='py-2'>
        <div>
        <p className='text-[10px] font-semibold text-black'> {label} </p>

        </div>
        <input className='w-full  border-b border-b-gray-300 py-1  text-[14px] outline-none' type="text" placeholder={placeHolder} />
     
    </div>
  )
}

export default InputTextEut