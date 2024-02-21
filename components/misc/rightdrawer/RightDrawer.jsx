"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const RightDrawer = ({ isOpen, onClose, tabs, heading, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) {
    return null;
  }
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-y-0 right-0 z-50">
            <div className="absolute inset-y-0 right-0 w-[40vh] tablet:w-[70vw] laptop:w-[60vw] desktop:w-[55vw] lgdesktop:w-[50vw] bg-white shadow-md shadow-gray-400">
              {/* heading and cross icon */}
             <div className="flex flex-col">
  <div className="pl-6 pt-2 flex items-center mb-2">
    <button
      className="text-gray-600 hover:bg-gray-200 rounded-md"
      onClick={onClose}
    >
      <RxCross1 className="p-1 text-2xl" />
    </button>
    {heading && (
      <div className="pl-3">
        <h1 className="H text-gray-400">{heading}</h1>
      </div>
    )}
  </div>
</div>



              {/* Drawer content */}
              <div className="pl-6">
                <div className="flex flex-col">
                  {/* tabs and buttons  */}
                  {tabs && (
                    <>
                      <div className="flex">
                        {tabs.map((tab, index) => (
                          <React.Fragment key={index}>
                            <button
                              className={`flex items-center pb-1 ${
                                activeTab === index
                                  ? "border-b-2 border-[#007f9b] hover:bg-gray-100 rounded-sm text-[#6B7280]"
                                  : " text-[#6B7280] hover:bg-gray-100 rounded-sm"
                              }`}
                              onClick={() => handleTabClick(index)}
                            >
                              {tab.icon && (
                                <span className="mr-2">{tab.icon}</span>
                              )}
                              {tab.label}
                            </button>
                            {index !== tabs.length - 1 && (
                              <span className="border-l mx-2 h-5 bg-gray-300"></span>
                            )}
                          </React.Fragment>
                        ))}
                        <div className="ml-auto flex space-x-1 mb-2">
                          {/* Add your buttons here */}
                          <button className="bg-[#6DB4B3] text-white text-xs px-4 py-2  rounded-sm">
                            Apply
                          </button>
                        </div>
                      </div>
                      {/* hr line */}
                      <hr className="w-auto border border-gray-300" />
                      {/* drawer body */}
                      <div className="  overflow-auto  h-[85vh]  ">
                        <div className="rounded-sm p-2 ">
                          {tabs[activeTab].content}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightDrawer;
