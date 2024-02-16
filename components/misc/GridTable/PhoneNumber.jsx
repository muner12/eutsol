import React from 'react'
import Image from 'next/image'

const PhoneNumber = ({data}) => {
  return (
    <div className='flex h-full items-center text-[14px] pl-2 text-blue-400'><Image src="/flag.jpg" width='20px' height='auto' className='w-[20px] mr-2 ' alt="flag" />{data}</div>
  )
}

export default PhoneNumber 