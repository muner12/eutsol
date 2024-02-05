// pages/login.js
"use client"
import { useState } from 'react';
// import axios from 'axios'; 
import LoginForm from './LoginForm';
import React from 'react';

const LoginPage = () => {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  
  // const handleLogin = async (credentials) => {
    
    // try {
    //   // Make API call to authenticate user
    //   //const response = await axios.post(`${cdnPath}usermanagement/login`, credentials);

    //   // Assuming the API returns a token on success
    //   //const { token, username } = response.data;

    //   // Store the token (e.g., in localStorage or a secure cookie)
    //   localStorage.setItem('authToken', token);

    //   // Set the logged-in user
    //   setLoggedInUser(username);
    // } catch (error) {
    //   // Handle authentication failure
    //   console.error('Authentication failed', error);
    // }
  // };



  return (
    <div>
      
        <> 
          <LoginForm />
        </>
     
    </div>
  );
};

export default LoginPage;
