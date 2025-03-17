import { createReducer,on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export interface Counter{
    count:number;
}
const initialState:Counter={count:0}

export const counterReducer=createReducer(
    initialState,
    on(increment,(state:Counter)=>({...state,count:state.count+1})),
    on(decrement,(state:Counter)=>({...state,count:state.count-1})),
    on(reset,(state:Counter)=>({...state,count:0}))
);