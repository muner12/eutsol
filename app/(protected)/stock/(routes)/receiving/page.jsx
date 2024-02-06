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
    <div className='h-[88vh]'>
        <div>
          <button className='bg-blue-300 p-2'onClick={handleOpenModal}>Receiving form</button>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} tabs={tabs} heading="Receiving Form" />
            <DashbordNav heading="Receiving" ptext="Welcome to contacts board! here you can store manage all of your contacts "/>
        </div>
        <div className='overflow-auto p-3'>
      <ReceivingGridView/>
        </div>
        
    </div>
  )
}

export default page
