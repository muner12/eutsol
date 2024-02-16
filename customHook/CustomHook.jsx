'use client'


import React, { useState } from 'react'

function useApiFetch() {

    let [errorMessage, setErrorMessage] = useState()
    function sendHttpRequest(url, method , payload = null, action , accessToken = null) {
        fetch(url, {
            method: method,
            body: JSON.stringify(payload),
            // headers: {
            //     'Content-Type': 'application/json'
            // }
         
            headers: {
                'Content-Type': 'application/json',
                ...(accessToken && { 'Authorization': `Bearer ${accessToken}` }), // Add the Authorization header if accessToken is provided
              },       
                         
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                action(data);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
        
    }

    return [errorMessage, sendHttpRequest]
}

export default useApiFetch






// import { useState, useEffect } from 'react';

// const fetch = (url, method = 'GET', payload = null, accessToken = null) => {

//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const headers = {
//           'Content-Type': 'application/json',
//         };

//         if (accessToken) {
//           headers['Authorization'] = `Bearer ${accessToken}`;
//         }

//         const options = {
//           method,
//           headers,
//           body: payload ? JSON.stringify(payload) : null,
//         };

//         const response = await fetch(url, options);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const contentType = response.headers.get('content-type');
//         if (contentType && contentType.includes('application/json')) {
//           const result = await response.json();
//           setData(result);
//         } else {
//           // Handle non-JSON responses (if needed)
//           setData(null);
//         }
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, loading, error };
// };

// export default fetch;

