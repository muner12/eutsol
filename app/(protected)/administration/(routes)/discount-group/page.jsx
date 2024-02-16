import React from 'react'
import DiscountGroupBody from "./_components/DiscountGroupBody";
import  DashboardNav from "../../../../../components/misc/landingNavebar/DashboardNav";
const DiscoutGroup = () => {
  return (
    <div className='w-full mt-30'>
      <div className='h-[25%]'>
      <DashboardNav heading={"Discount Group"} />
      </div>

      <div className='overflow-auto pl-5 h-[75%] w-full'>
        
      <DiscountGroupBody />
      </div>

    </div>
  )
}

export default DiscoutGroup