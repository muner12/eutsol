import React from 'react'

const DiscountGroupStatus = ({data}) => {
  return (
    <div className={`w-full flex items-center justify-center ${data == "Y" ? "bg-green-400" :data == "N" ?  "bg-red-400" : data == "Initiated" ?  "bg-zinc-400" :data == "Void" ? "bg-yellow-400":data == "Ready for Receiving" ? "bg-indigo-500" : ""} `}>
        
        <p className='text-[14px] text-white'>{data && data==="Y"?"Active":"InActive"}</p>
        </div>
  )
}

export default DiscountGroupStatus