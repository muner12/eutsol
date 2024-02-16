"use client";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import GridTable from "../../../../../../components/misc/GridTable/GridTable";
import InputTextEut from "../../../../../../components/misc/textinput/InputTextEut";






function SkuModall({ isOpen, onClose, heading }) {
  // const [data, setData] = useState();
  


  if (!isOpen) {
    return null;
  }

  return (
    
    <div className="fixed inset-0 z-30 bg-gray-50 backdrop-blur-sm backdrop-filter bg-opacity-50 opacity-100 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-[90vw] h-auto  mx-auto my-6 border border-gray-200 rounded-lg">
        <div className="bg-white p-4 rounded shadow-lg">
          {/* hedder for modal */}
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-bold">{heading}</h3>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-400 text-lg text-white border px-3 py-2 border-gray-200 rounded-lg"
                onClick={onClose}
              >
                <GrDocumentUpdate />
              </button>
              <button
                className="text-white bg-red-600 border border-gray-200 px-3 text-lg py-2 rounded-lg"
                onClick={onClose}
              >
                <IoIosClose />
              </button>
            </div>
          </div>
          {/* body of modal */}
          <div className="h-[40vh]">
           
      </div>
    </div>
    </div>
    </div>
  );
}

export default SkuModall;
