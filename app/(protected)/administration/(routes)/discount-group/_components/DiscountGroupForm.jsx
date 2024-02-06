'use client'
import React, { useState } from 'react'





import { IoIosArrowDown, IoIosArrowUp, IoIosMore, IoIosSearch } from 'react-icons/io'
import { BsPersonCircle } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { BiHide, BiSortAlt2 } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdEdit } from 'react-icons/md'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import GridTest from '../../../../../../components/misc/GridTable/GridTable'
import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'
import Tooltip from '../../../../../../components/misc/tooltip/Tooltip'
import InputTextEut from '../../../../../../components/misc/textinput/InputTextEut'
// import PhoneNumber from './GridTable/PhoneNumber'

const DiscountGroupForm = ({data}) => {

  const [head, setHead] = useState([{ title: 'SubItem', slector: 'SubItem', Wid: 250, customComp: ModalOpen }, { title: 'Part', slector: 'Part', Wid: 120 }, { title: 'Cost', slector: 'Cost', Wid: 100 }, { title: 'LastCost', slector: 'LastCost', Wid: 120 }, { title: 'OhQty', slector: 'OhQty', Wid: 120 }, { title: 'OrderQty', slector: 'OrderQty', Wid: 120 }, { title: 'UOM', slector: 'UOM', Wid: 120 }, { title: 'Conv', slector: 'Conv', Wid: 120 }, { title: 'CaseQty', slector: 'CaseQty', Wid: 120 }, { title: 'Split', slector: 'Split', Wid: 120 }, { title: 'Batch', slector: 'Batch', Wid: 120 }, { title: 'Expiry', slector: 'Expiry', Wid: 120 }])
  const [row, setRow] = useState([{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" }, { SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },])
    const [edit,setEdit]=useState(true)
  return (
    <div className=' bg-gray-100 rounded-lg  w-full'>

      <div className='gap-2 flex  p-3 rounded-lg  justify-center'>

       
        <div className='px-4 border  bg-white w-[70%] rounded-md shadow-md shadow-gray-200 py-5'  >
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
            <Tooltip  content='Edit'>
            <MdEdit className='text-[25px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500' />
          </Tooltip>
          <Tooltip  content='Perview'>
            <FaRegEye className='text-[25px] rounded-lg border cursor-pointer p-1 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-400'  />
          </Tooltip>
          <Tooltip  content='Export'>
            <HiOutlineDocumentArrowDown className='text-[25px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400' />
           </Tooltip>
            </div>


            {/* <div className='flex gap-2'>
              <Tooltip  content='Edit'>
              <MdEdit className='text-[25px] border  hover:bg-purple-200 rounded-lg cursor-pointer p-1 hover:text-purple-500 ' />
              </Tooltip>
              <Tooltip  content='Perview'>
              <FaRegEye className='text-[25px] rounded-lg border cursor-pointer p-1 hover:bg-sky-100 hover:text-sky-500 ' />
             </Tooltip>
             <Tooltip  content='Export'>
              <HiOutlineDocumentArrowDown className='text-[25px] cursor-pointer rounded-lg border p-1 hover:bg-indigo-100 hover:text-indigo-500 ' />
          </Tooltip>
            </div> */}


            <div className=''>
              <p className='H text-gray-800   text-[20px]'>PC0324445</p>
              <p className='H text-gray-500  text-right '>January 24</p>

            </div>
          </div>
          {/* <DropDownInput options={options} /> */}
          {/* <DateTimePicker isDisabled={true} /> */}
          <div className='w-full flex'>
            <div className='basis-1/3'>

          <InputTextEut label="CODE" placeHolder='CODE' isDisabled={edit} initialValue={data.CODE}/>
          <InputTextEut label="Name" placeHolder='Name' isDisabled={edit} initialValue={data.NAME}/>
          <InputTextEut label="Discount Percentage" placeHolder='Discount Percentage' isDisabled={edit}  />
          <InputTextEut label="Discription" placeHolder='Discription' isDisabled={edit} />
          
            </div>
            <div>

            </div>
          </div>
          {/* <TextInput label="Phone #" isDisabled={true} /> */}
          {/* <TextInput label="Fax" isDisabled={true} />
          <TextInput label="Email" isDisabled={true} /> h*/}

          {/* // <TextInput label="Name"/> */}

        </div>
      </div >
    </div>
  )
}

export default DiscountGroupForm
