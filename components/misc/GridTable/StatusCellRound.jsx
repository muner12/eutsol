import React from 'react'
import { FaCheck } from "react-icons/fa6";
const AgStatusCellRound = (props) => {

    const data = props.valueFormatted ? props.valueFormatted : props.value;
    const total = props.data.total;
    return (
        <div className=' grid grid-cols-2 '>
            <div className='w-full bg-slate-700'>
                h
                <div className={`${data == "Completed" ? "bg-green-400" : data == "in Progress" ? "bg-yellow-400" : data == 'Stuck' ? "bg-red-400" : ""} p-1 w-full `}><FaCheck /> j </div>
            </div>
            <span className=''>{data}</span>
        </div>
    )
}

export default AgStatusCellRound