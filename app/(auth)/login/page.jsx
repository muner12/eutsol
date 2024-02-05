import React from "react";
import LoginSidebar from "./_components/LoginSidebar";
import LoginForm from "./_components/LoginForm";
import LoginPage from "./_components/LoginPage"
export default function Login() {
    return (
        <>
            <div className="">
                <div className=" item-center justify-center">
                    {/* <LoginForm /> */}
                    <LoginPage />
                </div>

            </div>


            {/* <div className="flex w-full">
                <div className="hidden sm:block md:block xs:block w-1/4 ">
                    <LoginSidebar />
                </div>
                <div className="w-full sm:w-3/4 flex items-center justify-center">
                    <LoginForm />
                </div>
            </div> */}

            {/* <div className="flex h-full bg-[url('/login/sc-home1-bg.png')] bg-cover w-full">
                
                <div className="hidden sm:block  h-full">
                    <LoginSidebar />
                </div>

                
                <div className="flex-1 flex items-center justify-center">
                    <LoginForm />
                </div>
            </div> */}

        </>
    );
}
