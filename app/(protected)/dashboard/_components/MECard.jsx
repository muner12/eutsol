import React from "react";
import GroupCard from "./GroupCards";

function ModuleExpiryCard() {
  return (
    <div className="flex items-center   flex-col">
      <div className="flex items-start justify-center my-2  py-2 flex-col">
        {/* hedder */}
        <div className="flex items-center justify-between w-[93%] m-auto py-2">
          <div className="flex items-center gap-2">
            <div className="w-[3.2rem] h-[3.2rem] p-2  border rounded-md bg-white border-gray-500">
              <img src="icons/time-expiration-icon.svg" alt="img" />
            </div>
            <p className="text-xl font-bold">Module Expiry</p>
          </div>
        </div>
        {/* bottom */}
        <div className="bg-gray-200 rounded-xl py-6 w-[95%] m-auto">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />

            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />

            <GroupCard />
            <GroupCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleExpiryCard;
