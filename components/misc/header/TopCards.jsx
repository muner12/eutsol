import React from 'react'

function TopCards({pClassName}) {
  return (
    <div className={`border-2 rounded-lg border-black bg-[#fff] z-20 w-[600px] absolute h-[590px] ${pClassName}`}>
        <div>

        </div>
        <div className='borber-t border-black flex items-center justify-around w-[100%]'>
        <p className='text-lg'>Show More</p>
        </div>
    </div>
  )
}

export default TopCards