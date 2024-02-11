import React from 'react'

const DiscountGroupStatus = ({data}) => {
  return (
    <div className={`w-full flex items-center justify-center ${data == "Y" ? "bg-green-200" :data == "N" ?  "bg-red-200" : data == "Initiated" ?  "bg-zinc-400" :data == "Void" ? "bg-yellow-400":data == "Ready for Receiving" ? "bg-indigo-500" : ""} `}>
        
        <p className='text-[14px] text-white'>{data && data==="Y"?"Active":"Deactive"}</p>
        </div>
  )
}

export default DiscountGroupStatus