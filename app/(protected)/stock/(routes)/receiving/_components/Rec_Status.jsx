"use client"
import React, { useState } from 'react'
import Tooltip from '../../../../../../components/misc/GridTable/GridTooltip'


const RecStatusCell = ({ data }) => {
    //   console.log("Receiving status",data)
    return (
        <div className='w-full '>

            <div className={`${data == "RE-STOCKED" ? "bg-cyan-500" : ""} h-full w-full text-white flex items-center justify-center text-center`}>
                
                <Tooltip content={data} >
                    <p className='py-1 text-[14px] text-white'>{data}</p>
                  
                </Tooltip>
                
            </div>
        </div>
    )
}

export default RecStatusCell