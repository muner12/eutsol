'use client'
import React,{useState} from 'react'
import ReceivingGridView from './_components/ReceivingGridView'
import DashbordNav from '../../../dashbord/_components/DashbordNav'
import CustomModal from '../../../../../components/misc/custommodal/CustomModal'
import RecievingForm from './_components/ReceivingForm' 
import { GoHome } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const tabs = [
    {
      icon: <GoHome />,
      label: 'Details',
      content: <div><RecievingForm/></div>,
    },
    {
      icon: <SlArrowDown className="pl-2 text-md" />,
      label: 'More',
      content: <div>Content for More</div>,
    },
  ];
  return (
    <div>
        <div>
            <DashbordNav heading="Receiving" ptext=""/>
        </div>
        <div className='p-3'>
      <ReceivingGridView/>
        </div>
        <button onClick={handleOpenModal}>Receiving form</button>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} tabs={tabs} heading="Receiving Form" />
    </div>
  )
}

export default page
