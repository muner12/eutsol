// import React from 'react'
'use client'
import { BiMessageSquareAdd } from "react-icons/bi";
import CustomModal from '../custommodal/CustomModal'
import PurchaseForm from '../../../app/(protected)/stock/(routes)/purchase/_components/PurchaseForm'
import { GoHome } from "react-icons/go";





import React, { useState , useEffect } from 'react'



const Tooltip = ({ content, children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
   
    
  
    // console.log("this is log", isTooltipVisible);
    return (
      <div className="group ">
        {isTooltipVisible && (
          <div className="absolute z-10 bg-gray-600 text-white w-[170px] p-4 rounded-md text-sm shadow-lg mt-8">
            <div>{content}</div>
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




  function ModalOpen({ data , length , child , Modall , rowIndex  }) {


   

   

  let Comp = Modall
  let [index , setIndex] = useState()


  useEffect(()=>{
    setIndex(rowIndex)
   } , [data])

    return (
      <div className='flex justify-between w-full text-[14px] pl-2 items-center'>
    <div className="flex">  {data} <span className={`ml-2 ${length == 0 && 'hidden'} bg-gray-300 text-gray-500 flex ${child && "hidden"} w-[20px]  text-[12px]  justify-center items-center rounded-sm px-[3px]`}>{length}</span>  </div> 
        <Tooltip content="Open purchase Order Form">
          <div className=' flex items-center px-3 border-l'>
            {/* <BiMessageSquareAdd onClick={handleOpenModal} className='text-[22px] text-gray-500' /> */}
          { Comp &&   <Comp index={index}/>}
          </div>
        </Tooltip>
        {/* <CustomModal tabs={tabs} isOpen={isModalOpen} onClose={handleCloseModal} heading="Purchase Order"/> */}
        
      </div>
    );
  }
  
  export default ModalOpen;