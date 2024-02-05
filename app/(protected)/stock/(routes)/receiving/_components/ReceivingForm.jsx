import React from 'react'
import ReceivingInnerGrid from './ReceivingInnerGrid'
import TextInput from '../../../../../../components/misc/textinput/TextInput'


const ReceivingForm = () => {
  return (
    <div className="  w-full flex gap-2 ">
      <div className='relative  w-3/4   rounded-sm p-2 bg-white shadow-sm shadow-gray-400 !overflow-auto'>
        <ReceivingInnerGrid/>
      </div>
      <div className='w-1/4  p-2 rounded-sm bg-white shadow-sm shadow-gray-400 !overflow-x-auto'>
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
        <TextInput label="email" />
      </div>
    </div>
  )
}

export default ReceivingForm
