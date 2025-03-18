import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./users.reducers";


export const userStateFeatureSelector=createFeatureSelector<UserState>('userState');

export const usersSelector=createSelector(userStateFeatureSelector,(state:UserState)=>state.users);