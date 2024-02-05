import React from 'react'

const PurchaseGridCost = ({data}) => {
    function formatNumber(number) {
        return parseFloat(number).toFixed(2);
      }

      const result = formatNumber(data);
  return (
    <div className='w-full flex items-center justify-center '>
        <p className='text-[14px] text-gray-500'>$ {result}</p>
    </div>
  )
}

export default PurchaseGridCost