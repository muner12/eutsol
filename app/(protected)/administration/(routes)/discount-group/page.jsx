import React from 'react'
import DiscountGroupBody from "./_components/DiscountGroupBody";
import  DashboardNav from "../../../../../components/misc/landingNavebar/DashboardNav";
const DiscoutGroup = () => {
  return (
    <div className='h-[88vh]'>
        <div className="lgdesktop:h-[15vh] desktop:h-[20vh] laptop:h-[25vh]  tablet:h-[25vh] h-[25vh]">
      <DashboardNav heading={"Discount Group"} />
      </div>

      <div className="overflow-auto pl-5 lgdesktop:h-[73vh] desktop:h-[68vh] laptop:h-[63vh] tablet:h-[63vh] h-[63vh] w-full ">
        
      <DiscountGroupBody />
      </div>

    </div>
  )
}

export default DiscoutGroup