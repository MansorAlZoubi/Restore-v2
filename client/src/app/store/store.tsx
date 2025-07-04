import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorapi } from "../../features/about/errorapi";

export function configureTheStore(){
    return legacy_createStore(counterReducer)
}
export const store=configureStore({
 reducer:{
    [catalogApi.reducerPath]:catalogApi.reducer,
    [errorapi.reducerPath]:errorapi.reducer,
    counter:counterSlice.reducer,
    ui:uiSlice.reducer,

 },
 middleware:(getDefaulMiddleware)=>
    getDefaulMiddleware().concat(catalogApi.middleware,errorapi.middleware)   
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()