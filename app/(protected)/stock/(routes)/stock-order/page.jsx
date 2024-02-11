'use client'
import React,{useState} from 'react'
import StockGridView from './_components/StockGridView'
import DashboardNav from '../../../../../components/misc/landingNavebar/DashboardNav'


function page() {
 


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
        {/* <button onClick={handleOpenModal}>Stock order form</button>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} tabs={tabs} heading="Receiving Form" /> */}
    </div>
  )
}

export default page