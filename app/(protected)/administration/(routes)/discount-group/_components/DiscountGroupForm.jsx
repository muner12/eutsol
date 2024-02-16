'use client'
import React, { useEffect, useState } from 'react'


import moment from 'moment'


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
import DiscountGroupFormHeader from './DiscountGroupFormHeader'
import DiscountGroupGrid from './DiscountGroupGrid'
import TextArea from '../../../../../../components/misc/textinput/TextArea'
import { Switch } from '@headlessui/react'
// import PhoneNumber from './GridTable/PhoneNumber'

const DiscountGroupForm = (prop) => {

  
  
let data=prop.data
console.log(data)
  const [enabled, setEnabled] = useState(true);
  const [edit,setEdit]=useState({});
  const [formData,setFormData] = useState({
    code:data.CODE,
    name:data.NAME,
    descountPercent:data.DISCOUNT_PERCENTAGE,
    desc:data.DESCRIPTION,
    status:data.ACTIVE_FLAG,

  });
  console.log(formData);
  const [newDiscount,setNewDiscount] = useState();

  const newDiscountHandler = (e) => {
    setEnabled(false);
    setFormData({
      code:"",
      name:"",
      descountPercent:"",
      desc:"",
      status:"",
    })

  }

  const [head, setHead] = useState([{ title: 'SubItem', slector: 'SubItem', Wid: 250, customComp: ModalOpen }, { title: 'Part', slector: 'Part', Wid: 120 }, { title: 'Cost', slector: 'Cost', Wid: 100 }, { title: 'LastCost', slector: 'LastCost', Wid: 120 }, { title: 'OhQty', slector: 'OhQty', Wid: 120 }, { title: 'OrderQty', slector: 'OrderQty', Wid: 120 }, { title: 'UOM', slector: 'UOM', Wid: 120 }, { title: 'Conv', slector: 'Conv', Wid: 120 }, { title: 'CaseQty', slector: 'CaseQty', Wid: 120 }, { title: 'Split', slector: 'Split', Wid: 120 }, { title: 'Batch', slector: 'Batch', Wid: 120 }, { title: 'Expiry', slector: 'Expiry', Wid: 120 }])
  const [row, setRow] = useState([{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" }, { SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },])
     
      const [item, setItem] = useState("Working on it");
      const [itemPriority, setItemPriority] = useState("High")
    
      // console.log('==== log item ====',item);
      // 
    
      const getSlect = (e) => {
        setItem(e.target.value)
      }

      const changeHandler=(e) => {
        setFormData((prevFormData)=>({...prevFormData, [e.target.name]:e.target.value}));
        // setEdit({...edit, [e.target.name]:e.target.value});
        // console.log(edit);
        console.log(formData);
      }
      useEffect(() => {console.log(formData)},[formData]);
  return (
    <div className=' bg-gray-100 rounded-lg'>

    <div className='gap-2 flex  p-3 rounded-lg  '>

      <div className='  border bg-white w-[60%] rounded-md   ' >

        <DiscountGroupFormHeader onClick={newDiscountHandler}/>
        <div className='w-full  bg-white overflow-auto  pb-2'>
        <div className=' bg-white   mt-2 pl-2  '>
          {/* <GridTable head={head} row={row} setHead={setHead} /> */}
          <DiscountGroupGrid/>
        </div>
        </div>
      </div>

      <div className='px-4 border  bg-white w-[40%] rounded-md shadow-md shadow-gray-200 py-5'  >
        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <Tooltip content='Edit'>
              <MdEdit   onClick={()=>setEnabled(!enabled)}  className='text-[30px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500' />
            </Tooltip>
            <Tooltip content='Perview'>
              <FaRegEye className='text-[30px] rounded-lg border cursor-pointer p-1 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-400' />
            </Tooltip>
            <Tooltip content='Export'>
              <HiOutlineDocumentArrowDown className='text-[30px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400' />
            </Tooltip>
          </div>

          <div className=''>
            <p className='H text-gray-800   text-[20px]'>{prop.data.DISGRP_ID}</p>
            <p className='H text-gray-500  text-right '> {moment(data.DISCOUNT_GROUP_DATE).format("MMMM D, YYYY, h:mm:ss A")}</p>

          </div>
        </div>
        {/* <DropDownInput options={options} /> */}
        {/* <DateTimePicker isDisabled={true} /> */}
        <div className='flex justify-between w-full'>
          <div className='py-4 w-full  '>
            <p className='py-3 text-gray-900 text-[14px]'>Status</p>
            <div className='flex items-center'>

              <div className={`p-1 h-[30px] mr-2 rounded-full ${formData.status == "Y" ? "bg-green-600" : formData.status == "N" ? "bg-red-400" : item == "Low" ? "bg-cyan-400" : item == "Working on it" ? "bg-yellow-400" : item == "Done" ? "bg-green-500" : item == "Stuck" ? "bg-red-600" : item == "initiated" ? "bg-zinc-400" : item == "issued" ? "bg-blue-600" : item == "Ready" ? "bg-indigo-500" : ""}`}></div>
              <select className='outline-none text-[16px]' onChange={getSlect}>
                <option value="Y" selected={formData.status=="Y"?true:false}>Active</option>
                <option value="N" selected={formData.status=="N"?true:false}>Deactive</option>
                <option value="Stuck">Stuck</option>
                <option value="intiated">intiated</option>
                <option value="issued">issued</option>
                <option value="Ready">Ready</option>
              </select>
            </div>
          </div>

          <div className='py-4 w-full '>
            <p className='py-3 text-gray-900 text-[14px]'>Priority</p>
            <div className='flex items-center '>

              <div className={`p-1  mr-2 h-[30px] rounded-full ${itemPriority == "High" ? "bg-orange-600" : itemPriority == "Medium" ? "bg-blue-400" : itemPriority == "Low" ? "bg-cyan-400" : itemPriority == "Working on it" ? "bg-yellow-400" : itemPriority == "Done" ? "bg-green-500" : itemPriority == "Stuck" ? "bg-red-600" : itemPriority == "initiated" ? "bg-zinc-400" : itemPriority == "issued" ? "bg-blue-600" : itemPriority == "Ready" ? "bg-indigo-500" : ""}`}></div>
              <select className='outline-none text-[16px] ' onChange={(e) => setItemPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>

              </select>
            </div>
          </div>
        </div>







         <InputTextEut onChange={changeHandler} name={"CODE"} label="CODE" placeHolder='CODE' isDisabled={enabled} value={formData.code}/>
        
        
          <InputTextEut onChange={changeHandler} name={"NAME"} label="Name" placeHolder='Name' isDisabled={enabled}  value={formData.name}/>
          <InputTextEut onChange={changeHandler} name={"DISCOUNT_PERCENTAGE"} label="Discount Percentage" placeHolder='Discount Percentage' isDisabled={enabled} value={formData.descountPercent}/>
          
    
        <TextArea onChange={changeHandler} name={"DESCRIPTION"} label="Descripiton" placeHolder='Descripiton' value={formData.desc}/>
        {/* <TextInput label="Phone #" isDisabled={true} /> */}
        {/* <TextInput label="Fax" isDisabled={true} />
        <TextInput label="Email" isDisabled={true} /> */}

        {/* // <TextInput label="Name"/> */}

      </div>
    </div >
  </div>
  
  )
}

export default DiscountGroupForm
