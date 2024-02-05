// import react from "react";
import PhysicalcountForm from "./_components/PhysicalcountForm";
import DashbordNav from '../../../../../components/misc/landingNavebar/DashbordNav'
import UpdateButton from "../../../../../components/misc/buttons/UpdateButton"
export default function Physicalcount() {
  return (
    <div className=" h-[88vh] ">
 
   
  
  <div className="h-[25%]">
  <DashbordNav heading="Physical Count" ptext="Welcome to Physical Count "/>

  </div>
  <div className="ml-4">
  <UpdateButton label="+ New Count" onClick={""} />
  </div>
  
     <div className="overflow-auto pl-5 h-[75%] w-full ">
     <PhysicalcountForm />
     </div>
     
    </div>
  );
}
