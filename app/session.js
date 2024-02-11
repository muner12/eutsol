// let sessionStatus = false;
// console.log('shared able t',sessionStatus);
// export const getSharedVariable = () => sessionStatus;
// export const setSharedVariable = (value) => { sessionStatus = value; };

 

export const sessionStatus = ()=>{
    const token = localStorage.getItem('tokenSession');
    console.log('This is token',token);
    let  check = !!token ? false : true;
    console.log(check);
    return check; 
};