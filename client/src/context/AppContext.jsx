import { createContext } from "react";
import { dummyCourses } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext()
export const AppContextProvider = (props)=>{
    const currency = import.meta.env.VITE_Currency || '$';

    const [allCourses, setAllCourses] = useState([])

    useEffect(()=>{
        fetchAllCourses()
    },[])

    const fetchAllCourses = async()=>{
        try{
           setAllCourses(dummyCourses)
        }catch(error){
            console.log(error)
        }
    }
    const value={
        currency,
        allCourses
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
