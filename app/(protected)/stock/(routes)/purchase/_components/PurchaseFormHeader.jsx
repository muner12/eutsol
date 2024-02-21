"use client"
import React , {useEffect} from 'react'
import { BiHide, BiSortAlt2 } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp, IoIosMore, IoIosSearch } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import HeaderDropDown from './FormHeaderDropdown'
import { useSelector, useDispatch } from "react-redux";
import useApiFetch from '../../../../../../customHook/CustomHook'
import {setIssueStatus , setReadyForRStatus} from '../redux/Purchase.slice'


const PurchaseFormHeader = ({suplier}) => {
  let [error, sendRequest] = useApiFetch()

  const dispatch = useDispatch()

  const FormStatus = useSelector((state) => state.PurchaseSlices.FormStatus);
  const data = useSelector((state) => state.PurchaseSlices.postPurchaseOrder)
  const dataDetails = useSelector((state) => state.PurchaseSlices.postPurchaseDetail)

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/PostPurchaseOrder`
  const apiUrlDetails = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/PostPurchaseOrderDetails`
  console.log('check issue status' , data);

  const payload = {
  data:  data[0]
  ,
  action: "InventoryWeb",
  method: "PostPurchaseOrder",
  username: "admin",
  type: "rpc",
  tid: "144"
}  

const payloadDetails = {
  data:  dataDetails
  ,
  action: "InventoryWeb",
  method: "PostPurchaseOrder",
  username: "admin",
  type: "rpc",
  tid: "144"
}    

const token = localStorage.getItem('tokenSession')

const getAllTask = (data) =>{
  // dispatch(setLotList(data.Result))
    }

    const getProdectDetailRes = (data) =>{
console.log('check response' , data);
    }

  const postIssue = () =>{
    console.log('Apply is chulling');
    dispatch(setIssueStatus())
    // if(data[0]?.APPROVED_FLAG == 'Y'){
    //   sendRequest(apiUrl, 'POST', payload, getAllTask, token)
    //   sendRequest(apiUrlDetails, 'POST', payloadDetails, getProdectDetailRes, token)
    // }
    

    // setIsModalOpen(false);
  }

  const postReadyForReceaving = () =>{
    dispatch(setReadyForRStatus())
  }

  useEffect(()=>{
    if(data[0]?.APPROVED_FLAG == 'Y' && data[0]?.COMPLETE_FLAG  == 'N'){
      sendRequest(apiUrl, 'POST', payload, getAllTask, token)
      sendRequest(apiUrlDetails, 'POST', payloadDetails, getProdectDetailRes, token)
    }
    // console.log('check issue status2' , data[0]?.APPROVED_FLAG );

  },[data])

  useEffect(()=>{
    if(data[0]?.APPROVED_FLAG == 'Y' && data[0]?.COMPLETE_FLAG  == 'Y'){
      sendRequest(apiUrl, 'POST', payload, getAllTask, token)
      sendRequest(apiUrlDetails, 'POST', payloadDetails, getProdectDetailRes, token)
       console.log('check issue status2' , data[0] );
    }
   
    // console.log('check issue status3' , data[0] );

  },[data])
  return (
    <div className='flex w-full justify-between  px-2 bg-white py-2 mb-2 rounded-t-md'>
    <div className='  flex w-[40%]  py-2 '>
    <button onClick={postIssue} className={`bg-cyan-600 rounded-md py-2 px-3 w-[150px] text-white ${FormStatus == 'Initiated' ? 'block' : 'hidden'}`}>Issue</button>
      <button onClick={postReadyForReceaving} className={`bg-cyan-600 rounded-md py-2 px-3 w-[150px] text-white ${FormStatus == 'Issued to Vendor' ? 'block' : 'hidden'}`}>Ready to Receiving</button>
      <div className='flex ml-4'>
        <div className='bg-green-400 flex mr-2 p-[2px] h-full'>

        </div>
        <select className='border-b border-b-gray-300 py-1 pr-4 max-w-[170px] shadow-sm outline-none' name="whereHouse" id="whereHouse">
          <option value="volvo">{suplier}</option>
          {/* <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option> */}
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
          {/* <div className='hidden items-center gap-2 lg:flex md:hidden sm:hidden'>
            <BsPersonCircle className='text-[18px]' />
            Person
          </div> */}
          {/* <div className='hidden items-center gap-2 lg:flex md:hidden sm:hidden'>
            <FiFilter className='text-[18px]' />
            Filter
          </div> */}
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

export default PurchaseFormHeader