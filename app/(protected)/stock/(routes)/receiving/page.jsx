'use client'
import React,{useState} from "react";
import ReceivingGridView from "./_components/ReceivingGridView";
import DashbordNav from "../../../dashbord/_components/DashbordNav";
import RightDrawer from "../../../../../components/misc/rightdrawer/RightDrawer";

export default function Receiving() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="h-fit lgdesktop:h-[88vh] desktop:h-[88vh] laptop:h-[85vh] tablet:h-[87vh]">
      <div className="">
        <DashbordNav
          heading="Receiving Order"
          ptext="Welcome to contacts board! here you can store manage all of your contacts "
        />
      </div>
      <div>
        <button onClick={toggleDrawer}>
          {isDrawerOpen ? "Close" : "Open"} Right Drawer
        </button>
        <RightDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} >
           <p>This is the content of the drawer.</p>
        </RightDrawer>
      </div>
      <div className="overflow-auto pl-5 h-[75%] w-full">
        <ReceivingGridView />
      </div>
    </div>
  );
}
