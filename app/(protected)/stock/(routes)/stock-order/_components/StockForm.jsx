'use client'
import React,{useState} from "react";
import StockInnerGrid from "./StockInnerGrid";
import StockFormHeader from "./StockFormHeader";
import Tooltip from "../../../../../../components/misc/tooltip/Tooltip";
import InputTextEut from "../../../../../../components/misc/textinput/InputTextEut";

import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";



function StockForm() {
  const [item, setItem] = useState("Working on it");
  const [itemPriority, setItemPriority] = useState("High")
  const getSlect = (e) => {
    setItem(e.target.value)
  }
  return (
    <div className=" w-full flex gap-2 ">
      <div className="relative w-3/4  p-4 bg-white shadow-sm shadow-gray-400 ">
        <StockFormHeader />
        <div className="overflow-x-auto overflow-y-auto min-h-[40vh]">
          <StockInnerGrid />
        </div>
      </div>
      <div className="w-1/4 h-auto p-4 bg-white shadow-sm shadow-gray-400 overflow-auto">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Tooltip content="Edit">
              <MdEdit className="text-[25px] border  bg-purple-200 rounded-lg cursor-pointer p-1 text-purple-500 hover:text-white hover:bg-purple-500" />
            </Tooltip>
            <Tooltip content="Perview">
              <FaRegEye className="text-[25px] rounded-lg border cursor-pointer p-1 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-400" />
            </Tooltip>
            <Tooltip content="Export">
              <HiOutlineDocumentArrowDown className="text-[25px] cursor-pointer rounded-lg border p-1 bg-indigo-100 text-indigo-500 hover:text-white hover:bg-indigo-400" />
            </Tooltip>
          </div>
          <div className='flex items-center flex-col'>
              <p className='H text-gray-800   text-[20px]'>SO0324445</p>
              <p className='H text-gray-500  text-right '>January 24</p>

            </div>
          </div>
           {/* <DropDownInput options={options} /> */}
          {/* <DateTimePicker isDisabled={true} /> */}
          <div className='flex justify-between w-full'>
            <div className='py-4 w-full  '>
              <p className='py-3 text-gray-500 text-[14px]'>Status</p>
              <div className='flex items-center'>

                <div className={`p-1 h-fit w-[30px] rounded-full ${item == "High" ? "bg-orange-600" : item == "Medium" ? "bg-blue-400" : item == "Low" ? "bg-cyan-400" : item == "Working on it" ? "bg-yellow-400" : item == "Done" ? "bg-green-500" : item == "Stuck" ? "bg-red-600" : item == "initiated" ? "bg-zinc-400" : item == "issued" ? "bg-blue-600" : item == "Ready" ? "bg-indigo-500" : ""}`}></div>
                <select className='outline-none' onChange={getSlect}>
                  <option value="Full Transferred |Full Assigned">F T |F A</option>
                  <option value="Initiated">Initiated</option>
                  <option value="NEW">NEW</option>
                  <option value="Full Transferred |Not Assigned">F T |N A</option>
                  <option value="Partial Transferred |Not Assigned">P T |N A</option>
                  <option value="Partial Transferred | Partial Assigned">P T | P A</option>
                </select>
              </div>
            </div>

            <div className='py-4 w-full '>
              <p className='py-3 text-gray-500 text-[14px]'>Priority</p>
              <div className='flex items-center '>

                <div className={`p-1 h-fit w-[30px] rounded-full ${itemPriority == "High" ? "bg-orange-600" : itemPriority == "Medium" ? "bg-blue-400" : itemPriority == "Low" ? "bg-cyan-400" : itemPriority == "Working on it" ? "bg-yellow-400" : itemPriority == "Done" ? "bg-green-500" : itemPriority == "Stuck" ? "bg-red-600" : itemPriority == "initiated" ? "bg-zinc-400" : itemPriority == "issued" ? "bg-blue-600" : itemPriority == "Ready" ? "bg-indigo-500" : ""}`}></div>
                <select className='outline-none' onChange={(e) => setItemPriority(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>

                </select>
              </div>
            </div>
          </div>
          {/* in put fields */}
          <div>
            <InputTextEut label="SO #" placeHolder="SO #" isDisabled={true} />
            <InputTextEut placeHolder="2024-01-30 8:36AM" isDisabled={true} />
            <InputTextEut label="Rec #" placeHolder="Rec #" isDisabled={true} />
            <InputTextEut placeHolder="2024-01-30 8:36AM" isDisabled={true} />
            <InputTextEut
              label="Created By"
              placeHolder="Created By"
              isDisabled={true}
            />
            <InputTextEut
              label="PO Date"
              placeHolder="PO Date"
              isDisabled={true}
            />
            <InputTextEut label="Ref" placeHolder="Ref" isDisabled={true} />
            <InputTextEut
              label="Supplier"
              placeHolder="Supplier"
              isDisabled={true}
            />
            <InputTextEut
              label="Addres"
              placeHolder="Addres"
              isDisabled={true}
            />
            <InputTextEut
              label="Phone #"
              placeHolder="Phone #"
              isDisabled={true}
            />
            <InputTextEut label="Email" placeHolder="Email" isDisabled={true} />
            <InputTextEut label="Notes" placeHolder="Notes" isDisabled={true} />
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default StockForm;
