"use client"

import React , {useState} from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import PurchaseForm from './PurchaseForm'
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import { TbDeviceIpadHorizontalPlus } from 'react-icons/tb';
import {openForm} from "../redux/Purchase.slice"
import { useSelector, useDispatch } from "react-redux";
import useApiFetch from '../../../../../../customHook/CustomHook'


const PurchaseFormModall = ({index}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let [error, sendRequest] = useApiFetch()

  const data = useSelector((state) => state.PurchaseSlices.postPurchaseOrder)
  const dataDetails = useSelector((state) => state.PurchaseSlices.postPurchaseDetail)

  // console.log('get purchase in apply buuton' , dataDetails);

  const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/PostPurchaseOrder`
  const apiUrlDetails = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}InventoryWeb/PostPurchaseOrderDetails`

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

    const dispatch = useDispatch()
// console.log('modall index' , index);
    const handleOpenModal = () => {
        setIsModalOpen(true);
        dispatch(openForm(index))
        
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const tabs = [
        { 
          icon: <GoHome/>,
          label: 'Details', content: <div><PurchaseForm/></div> },
        { label: 'Audit Log', content: <div>Content for Audit Log</div> },
      ]; 

      const getAllTask = (data) =>{
        // dispatch(setLotList(data.Result))
          }

          const getProdectDetailRes = (data) =>{
console.log('check response' , data);
          }
      const handleApply = () =>{
        console.log('Apply is chulling');
        sendRequest(apiUrl, 'POST', payload, getAllTask, token)
        sendRequest(apiUrlDetails, 'POST', payloadDetails, getProdectDetailRes, token)

        setIsModalOpen(false);

      }


     
       
  return (
    <div>
      
        <TbDeviceIpadHorizontalPlus onClick={handleOpenModal} className='text-[25px] text-gray-500' />
        <CustomModal tabs={tabs} isOpen={isModalOpen} onClose={handleCloseModal} onClickApply={handleApply} heading="Purchase Order"/>

        </div>
  )
}

export default PurchaseFormModall