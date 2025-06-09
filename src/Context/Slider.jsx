import { createContext, useEffect, useState } from "react";
import { data } from "../data";

export const SliderContext=createContext({
    slice:0
})

export function SliderFunction({children}){
    const [slice,setslice]=useState(0)
    useEffect(()=>{
        const Timeout=setTimeout(()=>{
            handelNext()
        },6000)
        return()=>{
            clearTimeout(Timeout)
        }
    },[slice])
    function handelNext(){
        setslice(prev=>{
            if(prev===data.length -1){
                return prev=0
            }else if(prev !==data.length -1 ){
                return prev=prev+1
            }
        })
    }

    function hadnelPrev(){
        setslice(prev=>{
            if(prev===0){
                return prev=data.length -1
            }else {
                return prev=prev-1
            }
        })
    }
    const SliceValue={
        slice,
        handelNext,
        hadnelPrev
    }
    return <SliderContext.Provider value={SliceValue}>{children}</SliderContext.Provider>
}