import React ,{useState}from 'react'

const Tooltip = ({ content, children }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
  
    // console.log("this is log", isTooltipVisible);
    return (
      <div className="group ">
        {isTooltipVisible && (
          <div className="absolute z-10 bg-gray-600  text-white w-fit py-1 px-2 rounded-md text-sm shadow-lg -translate-y-8">
            <div className='text-[10px] '>{content}</div>
          </div>
        )}
        <div
          className="inline-block cursor-pointer"
          onMouseEnter={() => setTooltipVisible(true)}
          onMouseLeave={() => setTooltipVisible(false)}
        >
          {children}
        </div>
      </div>
    );
  };


export default Tooltip