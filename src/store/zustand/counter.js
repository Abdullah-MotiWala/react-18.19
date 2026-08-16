import { create } from "zustand";

export const useCounter = create((set)=>({
    count:0,
    increment:()=>{return set((state)=>({count:state.count+1}))},
    decrement:()=>{return set((state)=>({count:state.count-1}))},
    manual:(value)=>{return set((state)=>({count:state.count+value}))},


    // cart:[]
    // update:
    // add:
    // remove:
    // clear:
}))