// slices/dataSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


//base url
let url=process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL
let token=localStorage.getItem('tokenSession');

//update discountGroup data

export const updateDiscountGroup =createAsyncThunk("discountGroup/update",async(data)=>{

try {
  let newdata={
    data: data,
    action: "Administration",
    method: "PostDiscountGroup",
    username: "testuser",
    type: "rpc",
    tid: "144"
}
  const response=await fetch(url+"Administration/PostDiscountGroup",{
    method: 'POST',
    body:JSON.stringify(newdata),
    headers:{
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response.json();
} catch (error) {
  
}
 

});

export const validateCode =createAsyncThunk("validateCode/get",async(data)=>{

  try {
   
    const response=await fetch(url+"InventoryWeb/GetCodeUniqueValidation",{
      method: 'POST',
      body:JSON.stringify(data),
      headers:{
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    return response.json();
  } catch (error) {
    
  }
   
  
  });

const DiscountGroupSlice = createSlice({
  name: 'data',
  initialState: {
    // Define your initial state
    data:[],
    formData: [],
    prevFormData:[],
    loading: false,
    error: null,
    code:''
  },
  reducers: {
    setFormData(state, action) {
        console.log(action.payload);
      state.formData=action.payload;
      state.prevFormData.push(action.payload);
      if(state.prevFormData.length > 10){
        state.prevFormData.shift();
      }
    },
    updateforRefresh(state, action) {
      state.data.push(action.payload);
    },
    setValidCode(state,action){
      state.code.push(action.payload);
      if(state.code.length>30){
        state.code.shift();
      }
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(updateDiscountGroup.pending,(state)=>{
      state.loading=true;
    })
    .addCase(updateDiscountGroup.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
    })
    .addCase(updateDiscountGroup.rejected,(state)=>{
      state.loading=false;
    }) //validateCode fn sate
    .addCase(validateCode.pending,(state)=>{
      state.loading=true;
    })
    .addCase(validateCode.fulfilled,(state,action)=>{
      state.loading=false;
      state.code=action.payload;
    })
    .addCase(validateCode.rejected,(state)=>{
      state.loading=false;
    })
  }

});

export const { setFormData,updateforRefresh,setValidCode,} = DiscountGroupSlice.actions;
export default DiscountGroupSlice
