"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  mouseEvnt,
  stockPageEvnt,
  salesPageEvnt,
  AdministrationPageEvnt,
  SecurityPageEvnt,
} from "../../../redux/slidebar/slidebar.slice";
import Colaps from "./Colaps";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdAllInbox,
  MdSecurity,
  MdOutlineLogout,
} from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsAlexa, BsMenuButtonFill } from "react-icons/bs";
//import { TbDeviceIpadMinus } from "react-icons/tb";

const Sidebar = () => {
  const dispatch = useDispatch();

  const [sideBarWidth, setSideBarWidth] = useState(false);

  const mouseEvntState = useSelector((state) => state.mouseEvnt.mouseEvntState);
  const stockList = useSelector((state) => state.mouseEvnt.stockPage);
  const salesList = useSelector((state) => state.mouseEvnt.salesPage);
  const stockListState = useSelector((state) => state.mouseEvnt.stocklistState);
  const salesListState = useSelector((state) => state.mouseEvnt.saleslistState);
  const AdministrationlistState = useSelector(
    (state) => state.mouseEvnt.AdministrationlistState
  );
  const securitylistState = useSelector(
    (state) => state.mouseEvnt.securitylistState
  );
  const SecurityList = useSelector((state) => state.mouseEvnt.SecurityPage);
  const AdminList = useSelector((state) => state.mouseEvnt.AdministrationPage);
  const slectedSection = useSelector((state) => state.mouseEvnt.slectedSection);

  // console.log('AdministrationlistState chulling', AdministrationlistState);

  const toggleCollapse = (page) => {
    
    if (page == "stock") {
      if (stockListState == true) {
        dispatch(stockPageEvnt(false));
      } else {
        dispatch(stockPageEvnt(true));
      }
    }
    if (page == "sales") {
      if (salesListState == true) {
        dispatch(salesPageEvnt(false));
      } else {
        dispatch(salesPageEvnt(true));
      }
    }
    if (page == "Administration") {
      if (AdministrationlistState == true) {
        dispatch(AdministrationPageEvnt(false));
      } else {
        dispatch(AdministrationPageEvnt(true));
      }
    }
    if (page == "Security") {
      if (securitylistState == true) {
        dispatch(SecurityPageEvnt(false));
      } else {
        dispatch(SecurityPageEvnt(true));
      }
    }
  };

  const mouseevt = () => {
    dispatch(mouseEvnt(true));
  };

  const mouseLeave = () => {
    dispatch(mouseEvnt(false));
  };
  const route = usePathname();
  const showsidebar = route == '/login' ? false : true;
  return (
    <div className={`${showsidebar ? '' :"hidden"}`}>
      <div className=" z-10 bg-[#E1EFF2] lg:flex  md:flex  sm:flex  hidden   ">
        <div
          onMouseEnter={mouseevt}
          onMouseLeave={mouseLeave}
          className={`h-[100vh] pt-[10vh] bg-white   top-0 left-0 bottom-0    `}
        >
          <div
            className={`   ${
              (mouseEvntState == true && sideBarWidth == false) ||
              sideBarWidth == true
                ? "w-[250px]"
                : " w-[10px] "
            }  h-[80vh] overflow-y-auto  overflow-x-hidden  rounded-t-lg  bg-white  transition-all duration-700 `}
          >
            <div className="w-full  p-5 ">
              <div className="">
                <div className={` flex cursor-pointer  min-w-[210px] `}>
                  {/* <svg width="30" height="30" viewBox="0 0 24 24" fill="#0000FF" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="9" height="9" rx="2" fill="#0000FF"></rect><rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="#0000FF"></rect><rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="#0000FF"></rect><rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="#0000FF"></rect></svg> */}
                  <div
                    className={` group  flex  items-center w-full  text-gray-500 hover:bg-indigo-100 rounded-md py-1 px-2 `}
                  >
                    {/* <MdNavigateNext className="text-[22px]  " /> */}
                    <LuLayoutDashboard className="text-[20px] mr-2 group-hover:text-indigo-500" />
                    <p
                      className={`font-bold text-[14px] group-hover:text-indigo-500 `}
                    >
                      Dashboard
                    </p>
                  </div>
                </div>
                <div className={`my-[25px]  `}>
                  <p className={`font-bold h-[25px] text-gray-300  `}>Pages</p>
                </div>
                <div>
                  <div
                    onClick={() => toggleCollapse("stock")}
                    className="mb-[15px] text-gray-500 flex ml-2 "
                  >
                    {/* <svg width="30" height="30" viewBox="0 0 24 24" fill={`${stockListState == false ? "#0000FF" : "none"}`} xmlns="http://www.w3.org/2000/svg"><path d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`} ></path><path d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path><path opacity="0.3" d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path></svg> */}
                    <MdAllInbox
                      className={` text-[25px]  mr-2 group-hover:text-indigo-500 ${
                        slectedSection.section == "Stock"
                          ? "text-indigo-500"
                          : ""
                      } `}
                    />
                    <div className="w-full">
                      <Colaps
                        ListState={stockListState}
                        toggleCollapse={toggleCollapse}
                        mouseEvntState={mouseEvntState}
                        List={stockList}
                        title={"Stock"}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    onClick={() => toggleCollapse("sales")}
                    className="mb-[25px] text-gray-500 flex ml-2 "
                  >
                    {/* <svg width="30" height="30" viewBox="0 0 24 24" fill={`${stockListState == false ? "#0000FF" : "none"}`} xmlns="http://www.w3.org/2000/svg"><path d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`} ></path><path d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path><path opacity="0.3" d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path></svg> */}
                    <BsAlexa
                      className={` text-[25px]  mr-2 group-hover:text-indigo-500 ${
                        slectedSection.section == "Sales"
                          ? "text-indigo-500"
                          : ""
                      } `}
                    />
                    <div className="w-full">
                      <Colaps
                        ListState={salesListState}
                        toggleCollapse={toggleCollapse}
                        mouseEvntState={mouseEvntState}
                        List={salesList}
                        title={"Sales"}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    onClick={() => toggleCollapse("Administration")}
                    className="mb-[25px] text-gray-500 flex ml-2 "
                  >
                    {/* <svg width="30" height="30" viewBox="0 0 24 24" fill={`${stockListState == false ? "#0000FF" : "none"}`} xmlns="http://www.w3.org/2000/svg"><path d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`} ></path><path d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path><path opacity="0.3" d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path></svg> */}
                    <BsMenuButtonFill
                      className={` text-[25px]  mr-2 group-hover:text-indigo-500 ${
                        slectedSection.section == "Administration"
                          ? "text-indigo-500"
                          : ""
                      } `}
                    />
                    <div className="w-full">
                      <Colaps
                        ListState={AdministrationlistState}
                        toggleCollapse={toggleCollapse}
                        mouseEvntState={mouseEvntState}
                        List={AdminList}
                        title={"Administration"}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    onClick={() => toggleCollapse("Security")}
                    className="mb-[25px] text-gray-500 flex ml-2 "
                  >
                    {/* <svg width="30" height="30" viewBox="0 0 24 24" fill={`${stockListState == false ? "#0000FF" : "none"}`} xmlns="http://www.w3.org/2000/svg"><path d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`} ></path><path d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path><path opacity="0.3" d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z" fill={`${stockListState == false ? "#0000FF" : "currentColor"}`}></path></svg> */}
                    <MdSecurity
                      className={` text-[25px]  mr-2 group-hover:text-indigo-500 ${
                        slectedSection.section == "Security"
                          ? "text-indigo-500"
                          : ""
                      } `}
                    />
                    <div className="w-full">
                      <Colaps
                        ListState={securitylistState}
                        toggleCollapse={toggleCollapse}
                        mouseEvntState={mouseEvntState}
                        List={SecurityList}
                        title={"Security"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center h-[8vh] bg-white  ${
              (mouseEvntState == true && sideBarWidth == false) ||
              sideBarWidth == true
                ? " w-[250px] "
                : " w-[0px] "
            } overflow-hidden transition-all duration-700 `}
          >
            <div className="flex justify-center items-center h-[50px] bg-indigo-100 w-[80%] rounded-lg py-2 px-3 text-indigo-500 font-semibold ">
              <MdOutlineLogout className="text-[20px]" />
              <p>Sign out</p>
            </div>
          </div>
        </div>
        <div className={` -translate-x-3 mt-[13vh] h-fit w-[10px] `}>
          <span className="    ">
            {sideBarWidth ? (
              <MdNavigateBefore
                onClick={() => setSideBarWidth(false)}
                className="text-[22px] rounded-full border hover:bg-indigo-100 bg-gray-50 hover:text-indigo-500 cursor-pointer border-gray-300  text-gray-500   "
              />
            ) : (
              <MdNavigateNext
                onClick={() => setSideBarWidth(true)}
                className="text-[22px] rounded-full border hover:bg-indigo-100 bg-gray-50 hover:text-indigo-500 cursor-pointer border-gray-300  text-gray-500  "
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
