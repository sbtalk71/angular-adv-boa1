import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

interface CounterState{
    count:number;
}

const initialState:CounterState={
    count:0
}

export const counter=signalStore(
    {
        providedIn:'root'
    },
    withState(initialState),
    withMethods((store)=>({
        increment(){
            //db or api call
                patchState(store,{count:store.count()+1})
        },
        decrement(){
            patchState(store,{count:store.count()-1})
        },
        reset(){
            patchState(store,{count:0})
        }
    }))
);