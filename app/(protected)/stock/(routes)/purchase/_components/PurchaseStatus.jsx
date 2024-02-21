import React from 'react'

const PurchaseStatus = ({data , index , rowData}) => {

  // console.log('custom comp data' , index , rowData);
  return (
    <div className={`w-full flex items-center justify-center ${data == "Completed" ? "bg-green-400" :data == "Issued to Vendor" ?  "bg-cyan-400" : data == "Initiated" ?  "bg-zinc-400" :data == "Void" ? "bg-yellow-400":data == "Ready for Receiving" ? "bg-indigo-500" : data == 'Partially Ready for Receiving' ? "bg-slate-400" : ""} `}>
        
        <p className='text-[14px] text-white'>{data}</p>
        </div>
  )
}

export default PurchaseStatus