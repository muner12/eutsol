'use client'
import React,{useState} from 'react'
import StockGridView from './_components/StockGridView'
import DashboardNav from '../../../../../components/misc/landingNavebar/DashboardNav'
import { GoHome } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import CustomModal from '../../../../../components/misc/custommodal/CustomModal'
import StockForm from './_components/StockForm'

function page() {
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
      label: 'Main',
      content: <div><StockForm /></div>,
    },
    {
      icon: <SlArrowDown className="pl-2 text-md" />,
      label: 'More',
      content: <div>Content for More</div>,
    },
  ];

  return (
    <div className='flex flex-col h-[90vh]'>
        <div>
          <  DashboardNav heading="Stock Order" ptext="This is an example text "/>
        </div>
        <div className='overflow-y-auto w-[95%] mx-auto '>
         <StockGridView />    
        </div>
        <div>
        
        </div>
        <button onClick={handleOpenModal}>Stock order form</button>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} tabs={tabs} heading="Receiving Form" />
    </div>
  )
}

export default page