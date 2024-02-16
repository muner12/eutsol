"use client"

import React , {useState} from 'react'
import { GoHome } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";
import CustomModal from '../../../../../../components/misc/custommodal/CustomModal'
import StockForm from './StockForm'
import AudtLogGrid from './AudtLogGrid'
import {openForm} from "../redux/stockSlice"
import {  useDispatch } from "react-redux";
import { TbDeviceIpadHorizontalPlus } from 'react-icons/tb';

const StockFormModall = ({index}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch()
    const handleOpenModal = () => {
        setIsModalOpen(true);
        dispatch(openForm(index))
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };

      const tabs = [
        {
          icon: <GoHome />,
          label: 'Main',
          content: <div><StockForm /></div>,
        },
        {
          icon: <SlArrowDown className="pl-2 text-md" />,
          label: 'More',
          content: <div> <AudtLogGrid /></div>,
        },
      ]; 
  return (
    <div>
        <TbDeviceIpadHorizontalPlus onClick={handleOpenModal} className='text-[25px] text-gray-500' />
        <CustomModal tabs={tabs} isOpen={isModalOpen} onClose={handleCloseModal} heading = "Stock Order"/>

        </div>
  )
}

export default StockFormModall