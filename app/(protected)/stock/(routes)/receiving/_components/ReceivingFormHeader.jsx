import React from 'react'
import { BiHide, BiSortAlt2 } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp, IoIosMore, IoIosSearch } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import HeaderDropDown from './FormHeaderDropdown'

const ReceivingFormHeader = ({supplier}) => {
  return (
    <div className='flex w-full justify-between px-2 bg-white py-2 mb-2 rounded-t-md'>
    <div className='  flex w-[40%] py-2 '>
      <button className='bg-cyan-700 rounded-md py-2 px-3 w-[150px] text-white'> Restock</button>
      <div className='flex ml-4'>
        <div className='bg-green-400 flex mr-2 p-[2px] h-full'>

        </div>
        <select className='w-[170px] border-b border-b-gray-300 shadow-sm outline-none' name="whereHouse" id="whereHouse">
          <option className="" value="volvo">{supplier}</option>
        </select>
      </div>
    </div>
     <div className=' lg:flex md:hidden sm:hidden hidden w-[100%]   justify-end '>
      <div className='flex '>
        <div className='flex gap-4'>
          <div className='hedden lg:flex md:hidden sm:hidden items-center gap-2'>

            <IoIosSearch className='text-[18px]' />
            Search
          </div>
          <div className='hidden items-center gap-2 lg:flex md:hidden sm:hidden'>
            <BiSortAlt2 className='text-[18px]' />
            Sort
          </div>
          <div className='hidden items-center gap-2 lg:flex mr-1 md:hidden sm:hidden'>
            <BiHide className='text-[18px]' />
            Hide
          </div>
         
        </div>
      </div>


    </div>
    <div className='flex w-[17%]  min-w-fit justify-end gap-2'>
      <div className='flex items-center'>
      <div className='flex items-center gap-2 lg:hidden md:flex sm:flex mt-1'>
            {/* <IoIosMore className='text-[18px]' /> */}
            <HeaderDropDown/>
          </div>
        <div className='border h-fit flex items-center p-1'>

          <IoIosArrowDown className='text-[18px]' />

        </div>
      </div>
      <div className='flex items-center'>
        <div className='border flex items-center h-fit p-1'>

          <IoIosArrowUp className='text-[18px]' />

        </div>
      </div>
      <div className='flex items-center p-1'>

        <FiFilter className='text-[18px]' />

      </div>

      <div className='flex items-center p-1'>

        <IoSettingsOutline className='text-[18px]' />

      </div>
      
    </div>
  </div>
  )
}

export default ReceivingFormHeader