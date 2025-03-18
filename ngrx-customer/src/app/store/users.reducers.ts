import { createReducer, on } from "@ngrx/store";
import { User } from "../user";
import { addUser } from "./customers.actions";

export interface UserState{
    users:User[]
}

const initialState:UserState={
    users:[]
}

export const userReducer=createReducer(
    initialState,
    on(addUser,(state,{user})=>({...state,users:[...state.users,user]}))
);