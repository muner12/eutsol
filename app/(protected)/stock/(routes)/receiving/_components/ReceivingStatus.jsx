import React from 'react'

const ReceivingStatus = ({data}) => {
  return (
    <div className={`w-full flex items-center justify-center ${data == "IN PROCESS" ? "bg-green-400" :data == "NEW" ?  "bg-cyan-400" : data == "NEW" ?  "bg-zinc-400" :data == "Void" ? "bg-yellow-400":data == "RE-STOCKED" ? "bg-indigo-400" :data == "Reversed" ? "bg-slate-400":""} `}>
        <p className='text-[14px] text-white'>{data}</p>
        </div>
  )
}

export default ReceivingStatus