
"use client"
import React from 'react';
import { useState } from 'react';
import TextInput from '../../../../../../components/misc/textinput/TextInput'
import { Formik, Field, Form, ErrorMessage ,onSubmit} from 'formik';
import * as Yup from 'yup';
import UpdateButton from '../../../../../../components/misc/buttons/UpdateButton';
import DropDownInput from '../../../../../../components/misc/textinput/DropdownInput';
import DropDown from '../../../../../../components/misc/textinput/DropDown';
import { BiHome, } from "react-icons/bi";
import { FaEye,FaPrint,IoIosArrowForward } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { TableData } from './TableData';

const option= [

  {
  label:"count",
  value:"count"
  },
  {
    label:"counts",
  value:"counts"
  }
]

const PhysicalcountForm = () => {
 
    return (
        
      <div className="grid grid-cols-3 grid-flow-row max-auto w-screen mt-2 bg-white  shadow-md gap-4 rounded-lg overflow-auto">
  {/* Left div (70% width) */}
  <div className="col-span-2 w-70 overflow-auto">
 
    <div className="flex items-center gap-1 p-2 mt-2 ">
      <UpdateButton label="+ New Count" onClick={""} /> <DropDownInput options={option} />
     
    </div>
   <TableData />
  </div>

  {/* Right div (30% width) */}
  <div className="flex w-30 space-between flex-col mb-12 ">
      {/* First Row */}
      <div className='flex items-center mb-2'>
        <span className='p-2 pt-1 bg-blue-100 border-2 border-blue-600 rounded-lg'>Edit</span>
        <span className='flex items-center p-2 pt-1  border-2 border-gray-400 ml-1 rounded-lg space-x-2'>
          <FaEye />
          <span>Preview</span>
        </span> <span className=''><FaFileAlt className="w-8 h-8 " /></span>
        <span className='ml-20'>
          <h1 className='text-black'>PC0323145</h1>
          <p>January 2024</p>
        </span>
      </div>

      
      <div className='mt-6'>
        <div className='flex items-center mb-6'>
        <BiHome /><span className=' ml-2'>Overview</span><span className='ml-2'>|</span> <span className='ml-2'> History</span>
      </div>
      <div  className='mt-6 flex flex-col w-96'>
      <UpdateButton label="Generate Physical Count      " onClick={""} />
      </div>
      <div  className='mt-6 flex flex-col w-96'>
        <span>Status</span>
        
        <UpdateButton label="Work In Progress      " onClick={""} />
      </div>
      <div  className='mt-6 flex flex-col w-96'>
        <span>Priorty</span>
        <UpdateButton label="Work In Progress      " onClick={""} />
      </div>
      <div  className='mt-6 flex flex-col w-96'>
      <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input type='checkbox' className='border-1 solid-gray' />
                <label htmlFor="count" className="block text-gray-600">Exclude Blank</label>
              </div>
              
              <div className="flex items-center gap-2">
                <input type='checkbox' className='border-1 solid-gray' />
                <label htmlFor="count" className="block text-gray-600">Exclude Empty Rows</label>
              </div>
            </div>
      </div>
      <div  className='mt-6 flex flex-col w-96'>
      <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input type='checkbox' className='border-1 solid-gray' />
                <label htmlFor="count" className="block text-gray-600"> Blank Physical</label>
              </div>
              
              <div className="flex items-center gap-2">
                <input type='checkbox' className='border-1 solid-gray' />
                <label htmlFor="count" className="block text-gray-600">Include Expiry</label>
              </div>
            </div>
      </div>
      <div  className='mt-6 flex flex-col w-96'>
        <textarea className=' border-2 border-gray-600' name="Notes" id="" placeholder='Notes' 
        cols="30" rows="5" />
      </div>
      <div  className='flex mt-6  flex-row w-96'>
        <label>Completed By</label><TextInput  />
      </div>
      {/* <div  className='mt-6 flex flex-row w-96'>
        <label>Completion Date </label><TextInput  />
      </div>
      <div  className='mt-6 flex  items-center flex-col w-96'>
        <label>Signature</label><textarea className=' border-2 border-gray-600' name="Notes" id="" placeholder='Notes' 
        cols="30" rows="2" />
      </div> */}
        {/* Your additional content for the second row */}
      </div>
    </div>
</div>

    
    );
};

export default PhysicalcountForm;

