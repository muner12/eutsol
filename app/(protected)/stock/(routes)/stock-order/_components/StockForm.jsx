import React from 'react'
import StockInnerGrid from './StockInnerGrid'
import TextInput from '../../../../../../components/misc/textinput/TextInput'

function StockForm() {
  return (
    <div className=" w-full flex gap-2 ">
    <div className='relative w-3/4  p-4 bg-white shadow-sm shadow-gray-400 overflow-x-auto overflow-y-auto'>
      <StockInnerGrid/>
    </div>
    <div className='w-1/4 h-auto p-4 bg-white shadow-sm shadow-gray-400 overflow-auto'>
      <TextInput label="email" />
    </div>
  </div>
  )
}

export default StockForm