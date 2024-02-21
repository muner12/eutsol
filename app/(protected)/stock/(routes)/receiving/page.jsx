'use client'
import React,{useState} from "react";
import ReceivingGridView from "./_components/ReceivingGridView";
import ReceivingInnerGrid from "./_components/ReceivingInnerGrid";
import DashbordNav from "../../../dashbord/_components/DashbordNav";
import RightDrawer from "../../../../../components/misc/rightdrawer/RightDrawer";
import PurchaseDrawer from '../purchase/_components/PurchaseDrawer'
import { GoHome } from "react-icons/go";
import { SlArrowDown } from "react-icons/sl";

export default function Receiving() {
  const [isDrawer, setIsDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setIsDrawer(true);
  };
   const handleCloseDrawer = () => {
    setIsDrawer(false);
  };
  const tabs = [
    {
      icon: <GoHome />,
      label: 'Details',
      content: <div><PurchaseDrawer btnText="Add New Product"/></div>,
    },
    {
      icon: <SlArrowDown className="pl-2 text-md" />,
      label: 'More',
      content: <div>Content for More</div>,
    },
  ];
  return (
    <div className="h-fit lgdesktop:h-[88vh] desktop:h-[88vh] laptop:h-[85vh] tablet:h-[87vh]">
      <div className="">
        <DashbordNav
          heading="Receiving Order"
          ptext="Welcome to contacts board! here you can store manage all of your contacts "
        />
      </div>
      <div>
        <button onClick={handleOpenDrawer}>
          Open Right Drawer
        </button>
        <RightDrawer isOpen={isDrawer} onClose={handleCloseDrawer} heading="New Purchase" tabs={tabs} />
      </div>
      <div className=" pl-5 h-[75%] w-full">
        <ReceivingGridView />
      </div>
    </div>
  );
}
