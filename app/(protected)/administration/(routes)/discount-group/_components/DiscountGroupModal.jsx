// import React from 'react'
'use client'
import { BiMessageSquareAdd } from "react-icons/bi";

import { GoHome } from "react-icons/go";

import CustomModal from "../../../../../../components/misc/custommodal/CustomModal";


import React, { useState } from 'react'
import PurchaseForm from "../../../../../../components/misc/PurchaseForm";
import DiscountGroupForm from "./DiscountGroupForm";


const Tooltip = ({ content, children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
   
    
  
    // console.log("this is log", isTooltipVisible);
    return (
      <div className="group ">
        {isTooltipVisible && (
          <div className="absolute z-10 bg-gray-600 text-white w-30 p-4 mt-5 rounded-md text-sm shadow-lg  ">
            <div className="">{content}</div>
          </div>
        )}
        <div
          className="inline-block cursor-pointer"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          {children}
        </div>
      </div>
    );
  };




  function DiscountGroupModal({ data , length , child  }) {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  const tabs = [
    { 
      icon: <GoHome/>,
      label: 'Details', content: <div><DiscountGroupForm/></div> },
    { label: 'Audit Log', content: <div>Content for Audit Log</div> },
  ]; 

    return (
      <div className='flex justify-between w-full text-[14px] pl-2 items-center'>
    <div className="flex">  {data}<span className={`ml-2 bg-gray-300 text-gray-500 flex ${child && "hidden"} w-[20px]  text-[12px]  justify-center items-center rounded-sm px-[3px]`}>{length}</span>  </div> 
        <Tooltip content="Open purchase Order Form">
          <div className=' flex items-center px-3 border-l'>
            <BiMessageSquareAdd onClick={handleOpenModal} className='text-[22px] text-gray-500' />
          </div>
        </Tooltip>
      
        <CustomModal tabs={tabs} isOpen={isModalOpen} onClose={handleCloseModal} heading="Discount Group"/>

      </div>
    );
  }
  
  export default DiscountGroupModal;