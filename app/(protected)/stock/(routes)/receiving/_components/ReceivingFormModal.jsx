"use client"

import React , {useState} from 'react'
// import { BiMessageSquareAdd } from "react-icons/bi";
import { GoHome } from "react-icons/go";
// import PurchaseForm from '../../../../../../components/misc/PurchaseForm'
import ReceivingForm from './ReceivingForm'
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import { TbDeviceIpadHorizontalPlus } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { openForm } from '../redux/receivingSlices';

const ReceivingFormModal = ({index}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
 const dispatch = useDispatch();
// console.log('Receiving modal index' , index);
    const handleOpenModal = () => {
        setIsModalOpen(true);
         dispatch(openForm(index));
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const tabs = [
        { 
          icon: <GoHome/>,
          label: 'Details', content: <div><ReceivingForm/></div> },
        { label: 'More', content: <div>Content for More</div> },
      ]; 
  return (
    <div>
      
        <TbDeviceIpadHorizontalPlus onClick={handleOpenModal} className='text-[25px] text-gray-500' />
        <CustomModal tabs={tabs} isOpen={isModalOpen} onClose={handleCloseModal} heading="Receiving Order"/>

        </div>
  )
}

export default ReceivingFormModal