import React, { useState } from "react";
import PropTypes from "prop-types";
// import Tabs from '../../../components/misc/tabs/Tabs';
import Tabs from "../../../components/misc/tabs/Tabs";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

// import { PiDotsThreeBold } from "react-icons/pi";
import { TbDots } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

const ModalWithTabs = ({
  heading,
  tagline,
  tabs,
  isOpen,
  onOpenModal,
  onCloseModal,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="p-2">
      {/* Trigger to open the modal */}
      <button
        onClick={onOpenModal}
        className="text-blue-500 hover:underline"
      ></button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onCloseModal}
          ></div>
          <div className="bg-white  h-[700px] w-[97%] p-2 mt-4 rounded-md z-10 relative">
            {/* Header with white background */}
            <div className="bg-white p-2 rounded-md flex justify-between ">
              {/* Left content div */}
              <div className=" px-2 flex flex-col">
                {/* H1 element for the title */}
                <h2 className="H px-2 text-lg font-bold mb-2">{heading}</h2>
                {/* Tagline */}
                <p className="px-2 text-gray-700">{tagline}</p>
                {/* Tabs */}
                <Tabs tabs={tabs} />
              </div>

              {/* Right content div for icons */}
              <div className="flex space-x-2  justify-end ml-auto">
                <SlArrowDown
                  className="p-2 text-[1.7rem] font-bold border border-gray-200 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={onCloseModal}
                />
                <SlArrowUp
                  className="p-2 text-[1.7rem] font-bold border border-gray-200 text-gray-700 rounded-md hover:bg-gray-200"
                  onClick={onCloseModal}
                />
                <TbDots
                  className="p-2 text-[1.7rem] font-extrabold text-gray-500 rounded-md hover:bg-gray-200"
                  onClick={onCloseModal}
                />
                <RxCross1
                  onClick={onCloseModal}
                  className="p-2 text-gray-700 text-[1.8rem] rounded-md hover:bg-gray-200 cursor-pointer"
                />
              </div>
            </div>
            <div className="mt-4 bg-white w-auto">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ModalWithTabs.propTypes = {
  heading: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ModalWithTabs;

// **********Method to call the modal on parent screen************

// const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };
// const tabs = [
//   {
//     icon: <GoHome/>,
//     label: 'Promotions', content: <div>Content for Promotions</div> },
//   { label: 'Audit Log', content: <div>Content for Audit Log</div> },
// ];

// ******************after return()************

//     <button onClick={handleOpenModal} className="text-blue-500 hover:underline">
//         Open Modal
//       </button>

{
  /* <ModalWithTabs
        heading="Your Modal Heading"
        tagline="This is a modal example with tabs."
        tabs={tabs}
        isOpen={isModalOpen}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
        
      /> */
}
