

import DashbordNav from '../../../../../components/misc/landingNavebar/DashbordNav'

import PurchaseBody from './_components/PurchaseBody'
// import PhysicalcountForm from "./_components/PhysicalcountForm";
// import PurchaseForm from "./_components/PurchaseForm"
export default function Purchase() {


  return (
    <div className=" h-[88vh]   ">

      {/* <CustomeForm />   */}
      {/* <PurchaseForm/> */}
      
        <div className="lgdesktop:h-[15vh] desktop:h-[20vh] laptop:h-[25vh]  tablet:h-[25vh] h-[25vh]">
          <DashbordNav heading="Purchase Order" ptext="Welcome to contacts board! here you can store manage all of your contacts " />

        </div>

        <div className="overflow-auto pl-5 lgdesktop:h-[73vh] desktop:h-[68vh] laptop:h-[63vh] tablet:h-[63vh] h-[63vh] w-full ">
          <PurchaseBody />
        </div>
    
    </div>
  );
}
