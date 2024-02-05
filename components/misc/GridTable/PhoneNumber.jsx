import React from 'react'

const PhoneNumber = ({data}) => {
  return (
    <div className='flex h-full items-center text-[14px] pl-2 text-blue-400'><img src="/flag.jpg" className='w-[20px] mr-2 ' alt="" />{data}</div>
  )
}

export default PhoneNumber 