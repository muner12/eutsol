// import { sessionStatus} from "../../../utils/session";
// import { redirect } from "next/navigation";
// if(sessionStatus ===false){
//   redirect('/login')
// }
// import React from "react";
// import ModuleExpiryCard from "./_components/MECard";
// import LatestProductsCard from "./_components/LatestProductsCard";
// import Promotions from "./_components/Promotions";
// import ReceivingListCard from "./_components/ReceivingListCard";
// // import StocksOrderCard from "./_components/OrdersCard"
// import OrdersCard from "./_components/OrdersCard";
// import TopSelling from './_components/TopSelling'
// export default function Dashboard() {
//   return (
//     <div className="grid  gap-4 overflow-x-hidden  grid-cols-1  lg:grid-cols-4 grid-flow-row  p-2 rounded-sm ">
//       {/*TopSellingProductCard section */}
//       <div className=" col-span-2 md:col-span-3 row-span-4  ">
//         <ModuleExpiryCard />
//       </div>
//       {/* side Group cards section */}
//       <div className=" col-span-1   row-span-10  ">
//       <LatestProductsCard/>
//       </div>

//       {/* promotion and receiving */}
//       <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 col-span-1 lg:col-span-3 row-span-4 ">
//  {/* Promotions card section */}
//       <div className=" col-span-1   lg:col-span-2  ">
//         <Promotions />
//       </div>

//       {/*ReceivingListCard section */}
//       <div className=" col-span-1   lg:col-span-2    ">
//         <ReceivingListCard />
//       </div>
//       </div>

//      {/* Orders Card section */}
//       <div className="   row-span-4 h-[450px] border-2 border-black col-span-1 md:col-span-4 ">
//         <OrdersCard />
//       </div>

//        {/* bottom card section */}
//       <div className="   col-span-3    row-span-4 ">
//         <TopSelling />
//       </div>
//     </div>
//   );
// }
import React from "react";
import DashbordNav from "./_components/DashbordNav";
function page() {
  const token = true
  return (
    // 
    <>
    {token &&  <div className="flex flex-col">
      <div>
        <DashbordNav heading="Deals" ptext="This is an example text" />
      </div>
      {/* dash bord */}
      <div className="grid  gap-4 overflow-x-hidden  grid-cols-1  lg:grid-cols-4 grid-flow-row  p-2 rounded-sm">
        {/* 1 */}
        <div className=" h-[450px] border-2 border-black col-span-1 md:col-span-1">
          <img src="/dumy/highlite.png" alt="" className="w-full h-full" />
        </div>
        {/* 2 */}
        <div className=" h-[450px] border-2 border-black col-span-1 md:col-span-1">
          <img src="/dumy/sales.png" alt="" className="w-full h-full" />
        </div>
        {/* 3 */}
        <div className=" h-[450px] border-2 border-black col-span-1 md:col-span-2">
          <img src="/dumy/topselling.png" alt="" className="w-full h-full" />
        </div>
        {/* 4 */}
        <div className=" h-[490px] border-2 border-black col-span-1 md:col-span-3">
          <img src="/dumy/stock-report.png" alt="" className="w-full h-full" />
        </div>

        {/* 5 */}
        <div className=" h-[950px] border-2 row-span-2 border-black col-span-1 md:col-span-1 ">
          <img src="/dumy/shipment.png" alt="" className="w-full h-[70%]" />
          <img src="/dumy/shipment-2.png" alt="" className="w-full h-[60%]" />
        </div>

        {/* 6 */}
        <div className=" h-[450px] border-2 border-black col-span-1 md:col-span-2">
          <img
            src="/dumy/latest-products.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        {/* 7 */}
        <div className=" h-[450px] border-2 border-black col-span-1 md:col-span-1">
          <img src="/dumy/users.png" alt="" className="w-full h-full" />
        </div>

        

        
        {/* 5 */}
        <div className=" h-[470px] border-2 border-black col-span-1 md:col-span-1">
          <img src="/dumy/products.png" alt="" className="w-full h-full" />
        </div>
        {/* 6 */}
        <div className=" h-[470px] border-2 border-black col-span-1 md:col-span-2">
          <img
            src="/dumy/latest-products.png"
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* 5 */}
        <div className=" h-[490px] border-2 border-black col-span-1 md:col-span-4">
          <img src="/dumy/stock-order.png" alt="" className="w-full h-full" />
        </div>
      </div>
      </div>}
    
    
    </>
  );
}

export default page;
