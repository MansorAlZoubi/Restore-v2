import { createSlice } from "@reduxjs/toolkit";

const getIntitialDarkMode=() =>{
const storedDarkMode=localStorage.getItem('darkMode');
return storedDarkMode?JSON.parse(storedDarkMode):true;

}


export const uiSlice=createSlice({
name:'ui',
initialState:{
    isLoading:false,
    darkMode:getIntitialDarkMode()
},
reducers:{
    startLoading:(state)=>{
        state.isLoading=true;
    },
    stopLoading:(state)=>{
        state.isLoading=false;
    },
    setDarkMode:(state)=> {
         localStorage.setItem('darkMode',JSON.stringify(!state.darkMode));
         state.darkMode= !state.darkMode
    }
}


});
export const{startLoading,stopLoading,setDarkMode}=uiSlice.actions;
