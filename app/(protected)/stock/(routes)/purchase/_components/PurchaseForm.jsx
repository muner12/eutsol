'use client'
import React, { useState, useEffect } from 'react'

import ModalOpen from '../../../../../../components/misc/GridTable/ModalOpen'

import InputTextEut from '../../../../../../components/misc/textinput/InputTextEut'
import TextArea from '../../../../../../components/misc/textinput/TextArea'
import Tooltip from '../../../../../../components/misc/tooltip/Tooltip'

import { MdEdit } from 'react-icons/md'
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import TooltipStatus from './PurchaseTooltip'
import PurchaseGrid from './PurchaseGrid'
import PurchaseFormHeader from './PurchaseFormHeader'
import useApiFetch from '../../../../../../customHook/CustomHook'
import { useSelector, useDispatch } from "react-redux";
import { updatePurchaseNotes ,  subGridset , setPurchaseDetails , setUpdatePurchaseDetail , setUpdatePurchaseOrder , setLotList , setProductOrederUpdate} from '../redux/Purchase.slice'
import moment from 'moment';

// import TooltipStatus from './PurchaseTooltip'


// import PhoneNumber from './GridTable/PhoneNumber'

const PurchaseForm = () => {

  const [formData, setFormData] = useState()
  const [item, setItem] = useState("Working on it");
  const [itemPriority, setItemPriority] = useState("High")
  let [error, sendRequest] = useApiFetch()
  const [inputValue, setInputValue] = useState('');
  const [phone, setPhone] = useState('');
  const [email ,setEmail] = useState()
  const [notes , setNotes] = useState()
  // console.log('data-=-=-=-=-=-', formData);


  const dispatch = useDispatch()


  const rowId = useSelector((state) => state.PurchaseSlices.formIndex)
  const postPurchaseOrder = useSelector((state) => state.PurchaseSlices.postPurchaseOrder)

console.log('check postPurchaseOrder' , postPurchaseOrder);
  // console.log('row Id ' , rowId);

  const payloadLot = {
    data: {
      PURORD_ID: rowId,
    },
    action: "InventoryWeb",
    method: "GetPurchaseLotList",
    type: "rpc",
    tid: "144",
  };

  const payload = {
    data: {
      PURORD_ID: rowId
    },
    action: "InventoryWeb",
    method: "GetPurchaseOrder",
    type: "rpc",
    tid: "144",
    username: "admin"
  }
  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetPurchaseOrder`
  const apiUrlLot = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/GetPurchaseLotList`;

  const token = localStorage.getItem('tokenSession')

  // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNjkzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNzA5NDc0ODQwLCJpc3MiOiJwcmVjaXNldGVjLmNhIiwiYXVkIjoicHJlY2lzZXRlYy5jYSJ9._B2objEkiNbmbdcXdHjNtlqCq-RkzcCln65W9cBFQzY"

  function getAllTask(data) {

    // console.log('check data ====' , data);

    dispatch(subGridset(data.Result.INV_PURCHASE_ORDER_DETAILS_WV))
    dispatch(setPurchaseDetails(data.Result.INV_PURCHASE_ORDERS_WV[0]))
    setFormData(data.Result.INV_PURCHASE_ORDERS_WV[0])
    setInputValue(data.Result.INV_PURCHASE_ORDERS_WV[0]?.REFERENCE_NUMBER)
    setPhone(data.Result.INV_PURCHASE_ORDERS_WV[0]?.PHONE_1)
    setEmail(data.Result.INV_PURCHASE_ORDERS_WV[0]?.EMAIL)
    setNotes(data.Result.INV_PURCHASE_ORDERS_WV[0]?.NOTES)
    
    

    const getorderFilter = data.Result.INV_PURCHASE_ORDERS_WV.map((items)=>{
      const {
        APPROVED_FLAG,
        COMPLETE_FLAG,
        ETA_DATE,
        FNZ_FLAG,
        FNZ_USE_ID,
        NOTES,
        PO_DATE,
        PREPARED_DATE,
        PURORD_ID,
        REFERENCE_NUMBER,
        TERMS_CONDITION,
        USE_ID_APRVD_BY,
        USE_ID_COMPT_BY,
        USE_ID_PREPARED_BY,
        VEN_ID,
        VOID_FLAG,
        VOID_NOTES,
        WAR_ID,



      } = items

      return  {
        APPROVED_FLAG,
        COMPLETE_FLAG,
        ETA_DATE,
        FNZ_FLAG,
        FNZ_USE_ID,
        NOTES,
        PO_DATE,
        PREPARED_DATE,
        PURORD_ID,
        REFERENCE_NUMBER,
        TERMS_CONDITION,
        USE_ID_APRVD_BY,
        USE_ID_COMPT_BY,
        USE_ID_PREPARED_BY,
        VEN_ID,
        VOID_FLAG,
        VOID_NOTES,
        WAR_ID,
      }
    })

    const getFilter = data.Result.INV_PURCHASE_ORDER_DETAILS_WV.map((items)=>{
   const   {
        PURORDDET_ID,
        PURORD_ID,
        PAR_ID,
        // UOM_REORDER,
        DESCRIPTION,
        CATALOG_NUMBER,
        QUANTITY,
        DELETED_FLAG,
        WORORD_ID,
        COST,
        USE_ID,
        LOT_NUMBER,
        // EXPIRY_DATE,
        QUARANTINE_FLAG,
        READY_FOR_RECEIVING_FLAG,
        INVPARLOT_ID,
        VENDOR_QUANTITY,
        // NON_STOCK_ITEM_PURCHASE_ORDER_FLAG
      } = items

      return  {
        PURORDDET_ID,
        PURORD_ID,

        PAR_ID,

        // UOM_REORDER,

        DESCRIPTION,

        CATALOG_NUMBER,

        QUANTITY,

        DELETED_FLAG,

        WORORD_ID,

        COST,

        USE_ID,

        LOT_NUMBER,

        // EXPIRY_DATE,

        QUARANTINE_FLAG,

        READY_FOR_RECEIVING_FLAG,

        INVPARLOT_ID,

        VENDOR_QUANTITY,

        // NON_STOCK_ITEM_PURCHASE_ORDER_FLAG
      }
    })
dispatch(setUpdatePurchaseDetail(getFilter ))
dispatch(setUpdatePurchaseOrder(getorderFilter))

    // setErrorMessage(error)
  }

  const getAllLot = (data) =>{
dispatch(setLotList(data.Result))
  }
  useEffect(() => {
    sendRequest(apiUrl, 'POST', payload, getAllTask, token)

    sendRequest(apiUrlLot, "POST", payloadLot, getAllLot, token);


  }, []);
  // console.log('==== log item ====',item);
  // 

  const getSlect = (e) => {
    setItem(e.target.value)
  }


  const date = moment(formData?.PO_DATE).format("MMM Do ");

    const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChangePhone = (e) =>{
    setPhone(e.target.value)
  }

  const handleInputChangeNotes = (e) =>{
    setNotes(e.target.value)

    dispatch(updatePurchaseNotes(e.target.value))
  }
  return (
    <div className=' bg-gray-100 rounded-lg'>

      <div className='gap-2 flex  p-3 rounded-lg  '>

        <div className='  border  lg:w-[70%] md:w-[60%] sm:w-[50%] rounded-md   ' >


          <PurchaseFormHeader suplier={formData?.SUPPLIER} />
          <div className='w-full h-[85%]  bg-white overflow-auto  pb-2'>
            <div className=' bg-white   mt-2 pl-2  '>
              {/* <GridTable head={head} row={row} setHead={setHead} /> */}
              <PurchaseGrid />
            </div>
          </div>
        </div>

        <div className='px-4 border  bg-white lg:w-[30%] md:w-[40%] sm:w-[50%]  rounded-md shadow-md shadow-gray-200 py-5'  >
          <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
              <Tooltip content='Edit'>
                <MdEdit className='text-[30px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500' />
              </Tooltip>
              <Tooltip content='Perview'>
                <FaRegEye className='text-[30px] rounded-lg border cursor-pointer p-1 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-400' />
              </Tooltip>
              <Tooltip content='Export'>
                <HiOutlineDocumentArrowDown className='text-[30px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400' />
              </Tooltip>
            </div>

            <div className=''>
              <p className='H text-gray-800   text-[20px]'>{formData?.PO_NUMBER}</p>
              <p className='H text-gray-500  text-right '>{date}</p>

            </div>
          </div>
          {/* <DropDownInput options={options} /> */}
          {/* <DateTimePicker isDisabled={true} /> */}

          {/*status dropdown*/}


          {/* <div className='flex justify-between w-full'>
            <div className='py-4 w-full  '>
              <p className='py-3 text-gray-900 text-[14px]'>Status</p>
              <div className='flex items-center'>

                <div className={`p-1 h-[30px] mr-2 rounded-full ${item == "High" ? "bg-orange-600" : item == "Medium" ? "bg-blue-400" : item == "Low" ? "bg-cyan-400" : item == "Working on it" ? "bg-yellow-400" : item == "Done" ? "bg-green-500" : item == "Stuck" ? "bg-red-600" : item == "initiated" ? "bg-zinc-400" : item == "issued" ? "bg-blue-600" : item == "Ready" ? "bg-indigo-500" : ""}`}></div>
                <select className='outline-none text-[16px]' onChange={getSlect}>
                  <option value="Working on it">Working on it</option>
                  <option value="Done">Done</option>
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
          </div> */}



          <div className='w-full mt-4'>
            <div className='w-full bg-yellow-400 text-white flex justify-center items-center font-semibold py-2 rounded-md'>
              <TooltipStatus content='Working on it'>

                <p>
                  Working on it

                </p>
              </TooltipStatus>

            </div>
          </div>
          <div className='w-full mt-2'>
            <div className='w-full bg-orange-500 text-white flex justify-center items-center font-semibold rounded-md py-2'>
              <TooltipStatus content='High'>

                <p>
                  High
                </p> 
              </TooltipStatus>

            </div>
          </div>



          
          <InputTextEut label="Phone #" placeHolder='Phone #' initialValue={formData?.PHONE_1} value={phone}  onChange={handleInputChangePhone} isDisabled={true} />
        
          <InputTextEut label="Ref" placeHolder='Ref' initialValue={formData?.REFERENCE_NUMBER} value={inputValue} onChange={handleInputChange} isDisabled={false} />
         
          <InputTextEut label="Email" placeHolder='Email' initialValue={formData?.EMAIL} value={email}  isDisabled={true} />

          <TextArea label="Comments" initialValue={formData?.NOTES} onChange={handleInputChangeNotes} value={notes} placeHolder='Comments' />
          {/* <TextInput label="Phone #" isDisabled={true} /> */}
          {/* <TextInput label="Fax" isDisabled={true} />
          <TextInput label="Email" isDisabled={true} /> */}


          {/* // <TextInput label="Name"/> */}

        </div>
      </div >
    </div>
  )
}

export default PurchaseForm
