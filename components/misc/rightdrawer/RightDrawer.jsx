import React from 'react';

const RightDrawer = ({ isOpen, toggleDrawer ,children}) => {
  return (
    <div>
      {isOpen && (
        <>
          <div className="fixed inset-y-0 right-0 z-50">
            <div className="absolute inset-y-0 right-0 w-[40vh] tablet:w-[70vw] laptop:w-[60vw] desktop:w-[55vw] lgdesktop:w-[50vw] bg-white shadow-md shadow-gray-400">
              {/* Drawer content */}
              <div className="p-4">Right Drawer Content</div>
              <div className="p-4">{children}</div>

            </div>
          </div>
          {/* <button className="fixed inset-y-0 left-0 z-40 w-full bg-black opacity-50" onClick={toggleDrawer}></button> */}
        </>
      )}
    </div>
  );
};

export default RightDrawer;
