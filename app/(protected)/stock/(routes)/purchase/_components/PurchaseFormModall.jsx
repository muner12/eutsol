"use client"

import React , {useState} from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import PurchaseForm from '../../../../../../components/misc/PurchaseForm'
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import { TbDeviceIpadHorizontalPlus } from 'react-icons/tb';

const PurchaseFormModall = ({index}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

console.log('modall index' , index);
    const handleOpenModal = () => {
        setIsModalOpen(true);
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