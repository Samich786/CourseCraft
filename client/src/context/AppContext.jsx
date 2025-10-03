import { createContext } from "react";
import { dummyCourses, dummyTestimonial } from "../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const AppContext = createContext()
export const AppContextProvider = (props)=>{
    const currency = import.meta.env.VITE_Currency || '$';

    const [allCourses, setAllCourses] = useState([])
    const [ allTestimonials, setAllTestimonials] = useState([])

    useEffect(()=>{
        fetchAllCourses()
    },[])

    useEffect(()=>{
        fetchAllTestimonials()
    },[])

    const fetchAllCourses = async()=>{
        try{
           setAllCourses(dummyCourses)
        }catch(error){
            console.log(error)
        }
    }

    const fetchAllTestimonials = async()=>{
        try{
            setAllTestimonials(dummyTestimonial)
        }catch(error){
            console.log(error)
        }
    }
    const value={
        currency,
        allCourses,
        allTestimonials
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
