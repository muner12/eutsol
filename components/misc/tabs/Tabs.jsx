import React, { useState } from 'react';


const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="w-full mx-auto p-2">
  <div className="flex">
    {tabs.map((tab, index) => (
      <React.Fragment key={index}>
        <button
          className={`flex items-center rounded-sm hover:bg-gray-200 ${index === activeTab ? 'border-b-2 border-[#007f9b]' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
           <span className={index === 1 ? 'pl-2 pr-2' : ''}>{tab.label}</span>
        </button>
        {index < tabs.length - 1 && <div className="border-l border-gray-200 h-8 mx-2"></div>}
        
      </React.Fragment>
    ))}
    
  </div>
<hr className='w-auto  border border-gray-300' />
  <div className="mt-4 bg-white w-auto">{tabs[activeTab].content}</div>
</div>

    );
};

export default Tabs;

// method to call

// const tabs = [
//   { 
//     icon: <GoHome/>,
//     label: 'Promotions', content: <div>Content for Promotions</div> },

//   { label: 'Audit Log', content: <div>Content for Audit Log</div> },
// ];
//  <Tabs tabs={tabs} />