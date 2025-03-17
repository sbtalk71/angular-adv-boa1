import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "./counter.reducers";

const counterFeatureSelector=createFeatureSelector<Counter>('counter');

export const countSelector=createSelector(counterFeatureSelector,(state:Counter)=>state.count);