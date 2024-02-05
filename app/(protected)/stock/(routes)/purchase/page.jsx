
import react from "react";
import DashbordNav from '../../../../../components/misc/landingNavebar/DashbordNav'
import GridTable from '../../../../../components/misc/GridTable/GridTable'
import PurchaseBody from './_components/PurchaseBody'
// import PhysicalcountForm from "./_components/PhysicalcountForm";
// import PurchaseForm from "./_components/PurchaseForm"
export default function Purchase() {


  return (
    <div className=" h-[88vh]  ">

      {/* <CustomeForm />   */}
      {/* <PurchaseForm/> */}
      
        <div className="h-[25%]">
          <DashbordNav heading="Purchase Order" ptext="Welcome to contacts board! here you can store manage all of your contacts " />

        </div>

        <div className="overflow-auto pl-5 h-[75%] w-full ">
          <PurchaseBody />
        </div>
    
    </div>
  );
}
