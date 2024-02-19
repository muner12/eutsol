"use client"
import React , {useState} from 'react'
import DateTimePicker from '../textinput/DatePicker'
import moment from 'moment';

const Tooltip = ({ content, children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
  
    //console.log("this is log", isTooltipVisible);
    return (
      <div className="group ">
        {isTooltipVisible && (
          <div className="absolute z-10 bg-white  w-fit p-4 rounded-md text-sm shadow-lg mt-8">
            {/* <div>{content}</div> */}
            <div className='w-60'><DateTimePicker/></div>
          </div>
        )}
        <div
          className="inline-block cursor-pointer"
          onDoubleClick={() => setTooltipVisible(!isTooltipVisible)}
        //   onMouseLeave={() => setTooltipVisible(false)}
        >
          {children}
        </div>
      </div>
    );
  };

const GridDateCell = ({data}) => {
  const date = moment(data).format("YYYY MMM Do ");  
  return (
    <div className='flex justify-center items-center size-full text-[14px] text-gray-500'>
         <Tooltip content="Add your comment">
        <div>{date}</div>
        </Tooltip>
    </div>
  )
}

export default GridDateCell