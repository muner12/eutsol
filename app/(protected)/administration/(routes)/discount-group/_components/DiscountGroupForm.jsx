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
import { useDispatch, useSelector } from 'react-redux'
import { setFormData, setValidCode, validateCode } from '../_redux/DiscountGroupSlice'
import { useRouter } from 'next/navigation'
import useApiFetch from '../../../../../../customHook/CustomHook'
// import PhoneNumber from './GridTable/PhoneNumber'


const DiscountGroupForm = (prop) => {

  let router=useRouter();
  
let data=prop.data

let dispatch=useDispatch();
  const [enabled, setEnabled] = useState(false);
  const [enabledCode,setEnabledCode]=useState(true);
  
const [code,setCode]=useState(data.CODE);

const [name,setName]=useState(data.NAME);
const [descountPercent,setDescountPercent]=useState(data.DISCOUNT_PERCENTAGE);

const [desc,setDesc]=useState(data.DESCRIPTION);

const [status,setStatus]=useState(data.ACTIVE_FLAG);

const [dgrp,setDgrp]=useState(data.DISGRP_ID);



let responseFormData=useSelector(state=>state.discountGroup.data);
useEffect(()=>{
 
  if(responseFormData.CODE==="SUCCESS"){
   //
  }
},[])



  

  const [head, setHead] = useState([{ title: 'SubItem', slector: 'SubItem', Wid: 250, customComp: ModalOpen }, { title: 'Part', slector: 'Part', Wid: 120 }, { title: 'Cost', slector: 'Cost', Wid: 100 }, { title: 'LastCost', slector: 'LastCost', Wid: 120 }, { title: 'OhQty', slector: 'OhQty', Wid: 120 }, { title: 'OrderQty', slector: 'OrderQty', Wid: 120 }, { title: 'UOM', slector: 'UOM', Wid: 120 }, { title: 'Conv', slector: 'Conv', Wid: 120 }, { title: 'CaseQty', slector: 'CaseQty', Wid: 120 }, { title: 'Split', slector: 'Split', Wid: 120 }, { title: 'Batch', slector: 'Batch', Wid: 120 }, { title: 'Expiry', slector: 'Expiry', Wid: 120 }])
  const [row, setRow] = useState([{ SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" }, { SubItem: "item 1", Part: "NV325423", Cost: "$34.32", LastCost: '$25.34', OhQty: "500", OrderQty: "200", UOM: "EA", Conv: "12", CaseQty: "16.66", Split: "", Batch: "98569323", Expiry: "Jan 24 , 2026" },])
     
      const [item, setItem] = useState("Working on it");
      const [itemPriority, setItemPriority] = useState("High")
    
    
      //check if code valid or not
      const [apiResponse,setApiResponse]=useState();
      let [error,sendRequest]=useApiFetch();

     let getAllTask=(data)=>{
    
        setApiResponse(data);
        dispatch(setValidCode(data));
     }
     let valideCode=useSelector(state=>state.discountGroup.code)
     let loading=useSelector(state=>state.discountGroup.loading);
     let value= !loading && valideCode.Result
     console.log("code",value && value[0].VALIDATION_RESULT);
     
      //changehandlers
      const handleCodeChange = (e) => {

       
        let newdata={
          data: {
              TYPE: "DISCOUNT_GROUP_CODE",
              CODE:e.target.value
          },
          action: "InventoryWeb",
          method: "GetCodeUniqueValidation",
          username: "testuser",
          type: "rpc",
          tid: "144"
      }
     dispatch(validateCode(newdata));
      setCode(e.target.value);
        
      };
    
      const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleDiscountPercentChange = (e) => {
        setDescountPercent(e.target.value);
      };
    
      const handleDescChange = (e) => {
        setDesc(e.target.value);
      };


      const handleStatusChange = (e) => {
        setStatus(e.target.value);
      };
    
     
      const formData = {
        CODE: code,
        NAME: name,
        DISCOUNT_PERCENTAGE: descountPercent,
        DESCRIPTION: desc,
        ACTIVE_FLAG: status,
        DISGRP_ID: dgrp,
      };
      dispatch(setFormData(formData));
  
      // Submit formData to your API
   
   const newClickHandler=()=>{
     setCode('');
     setName('');
     setDescountPercent('');
     setDesc('');
     setStatus('');
     setEnabledCode(false);
     
   }
  return (
    <div className=' bg-gray-100 rounded-lg'>

    <div className='gap-2 flex  p-3 rounded-lg  '>

      <div className='  border bg-white w-[60%] rounded-md   ' >

        <DiscountGroupFormHeader onClick={newClickHandler}/>
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

              <div className={`p-1 h-[30px] mr-2 rounded-full ${status == "Y" ? "bg-green-600" : status == "N" ? "bg-red-400" : "bg-slate-300"}`}></div>
              <select className='outline-none text-[16px]' onChange={handleStatusChange}>
              <option value="null">--select--</option>
                <option value="Y" selected={status=="Y"?true:false}>Active</option>
                <option value="N" selected={status=="N"?true:false}>Deactive</option>
               
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







         <InputTextEut onChange={handleCodeChange} name={"CODE"} label="CODE" placeHolder='CODE' isDisabled={enabledCode} value={code}/>
          {
            value && value[0].VALIDATION_RESULT==="FALSE"?(<span className='text-red-500'>code already exists</span>):""
          }
         
          <InputTextEut onChange={handleNameChange} name={"NAME"} label="Name" placeHolder='Name' isDisabled={enabled}  value={name}/>
          <InputTextEut onChange={handleDiscountPercentChange} name={"DISCOUNT_PERCENTAGE"} label="Discount Percentage" placeHolder='Discount Percentage' isDisabled={enabled} value={descountPercent}/>
          
    
        <TextArea onChange={handleDescChange} name={"DESCRIPTION"} label="Descripiton" placeHolder='Descripiton' value={desc}/>
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
