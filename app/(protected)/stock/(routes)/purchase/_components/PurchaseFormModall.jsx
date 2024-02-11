"use client"

import React , {useState} from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import PurchaseForm from './PurchaseForm'
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import { TbDeviceIpadHorizontalPlus } from 'react-icons/tb';
import {openForm} from "../redux/Purchase.slice"
import { useSelector, useDispatch } from "react-redux";

const PurchaseFormModall = ({row}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
  return (
    <div>
      
        <TbDeviceIpadHorizontalPlus onClick={handleOpenModal} className='text-[25px] text-gray-500' />
        <CustomModal tabs={tabs} isOpen={isModalOpen} onClose={handleCloseModal} heading="Purchase Order"/>

        </div>
  )
}

export default PurchaseFormModall