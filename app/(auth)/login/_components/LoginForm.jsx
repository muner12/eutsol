"use client"
import Image from "next/image";
import React, { useState , useEffect} from "react";
import useApiFetch from '../../../../customHook/CustomHook'
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import {setUser} from '../../../../redux/user/userSlice'
import {setSharedVariable} from '../../../session'

// let bool = false;

 const LoginForm = () => {
  const dispatch = useDispatch()

    const [check,setCheck]= useState (false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage , setErrorMessage] = useState(null)
    const apiUrl = `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}usermanagement/login`;
    const payload = {
          username: "",
          password: ""
         }
  

    let [error , sendRequest] =  useApiFetch()

    function getAllTask(data){

        localStorage.setItem('tokenSession', data.access_token );
        //to check if user is log in
        let  mCheck = data? true : false
        dispatch(setUser(mCheck));
        setCheck(mCheck)
        setSharedVariable(mCheck)
        // console.log('check in get all' , check);
        setErrorMessage(error)
            }

// useEffect(()=>{
//     sendRequest()
// },[])

    const handleLogin = () => {
    
        payload.username = username;
        payload.password = password;
        
        sendRequest(apiUrl , 'POST' , payload , getAllTask)
    };
    // const lt =  localStorage.getItem('tokenSession');
    // console.log('token',lt)

// console.log('check in login' , check);
let bool = useSelector((state)=>state.user.user);
// console.log('check in login user' , bool);
if(check){
    bool = check;
    redirect('/dashboard')
}

    return (
        <>
            <div className="h-full  bg-gray-200 dark:bg-gray-900">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12">
                        <div className="w-full  xl:w-3/4 lg:w-11/12 flex shadoe shadow-md shadow-gray-600">
                            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover "
                            >
                                <img src="/login/bg-12.png" className="" />
                            </div>
                            <div className="w-full lg:w-7/12 bg-white p-10 ">

                                <form className="flex-col text-center mx-auto  ">
                                    <Image
                                        src="/login/nc-logo.png"
                                        height={120}
                                        width={170}
                                        className="block mx-auto mb-5"
                                    />
                                    <label htmlFor="username" className="block text-left text-[#222222] font-light lg:ml-20 mb-2 text-sm ">
                                        Username<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="pl-5 w-full h-[50px] rounded-full mb-3 sm:w-full md:w-96 lg:w-120 xl:w-160 border  focus:border-blue-200 focus:outline-none text-sm  shadow-md shadow-blue-100 bg-gray-200"
                                        placeholder="Please Enter Your Username"
                                        type="email"
                                        name="email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        autoFocus
                                    />
                                    <label htmlFor="password" className="block text-left text-[#222222] font-light ml-20 mb-2 text-sm ">
                                        Password<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="pl-5 w-full h-[50px] rounded-full mb-3 sm:w-full md:w-96 lg:w-120 xl:w-160 border  focus:border-blue-200 focus:outline-none text-sm  shadow-md shadow-blue-100 bg-gray-200"
                                        placeholder="Please Enter Your Password"
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />


                                    <div className="flex items-center justify-between lg:px-20 mb-3 md:mb-5">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                id="flexCheckIndeterminate"
                                            />
                                            <label
                                                className="text-[#222222] font-light ml-2 text-sm"
                                                htmlFor="flexCheckIndeterminate"
                                            >
                                                Remember me
                                            </label>
                                        </div>

                                        <a
                                            href="#"
                                            className="text-[#222222] font-light ml-2 text-sm hover:text-[#0377BD]"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-br from-[#0377bd] to-[#035e93] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-100 font-medium rounded-lg text-md h-10 w-80 px-5 py-2.5 mb-3 md:mb-5  shadow-md shadow-blue-500"
                                        onClick={handleLogin}
                                    >

                                        Let's Start
                                     
                                    </button>

                                    <div className="text-center mt-5 text-[#222222] font-light text-xs px-20">
                                        <p className="text-muted font-weight-lighter mb-3">
                                            If you have forgotten your password or if you are
                                            experiencing a problem, please contact support.
                                        </p>
                                        <p className="text-muted font-weight-lighter">
                                            Warehouse Distribution Management v1.0.03 <br />

                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm






