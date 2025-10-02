import React from "react"
import { assets } from "../../assets/assets"
const Companies = () => {
  return (
    <>
      <div className="pt-20">
        <p className="text-base text-gray-500 text-center">Trusted by learners from</p>
        <div className="flex flex-wrap gap-10 md:gap-16 items-center justify-center mt-5 md:mt-10">
          <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 md:w-28"/>
          <img src={assets.walmart_logo} alt="Walmart" className="w-20 md:w-28"/>
          <img src={assets.accenture_logo} alt="Accenture" className="w-20 md:w-28"/>
          <img src={assets.adobe_logo} alt="Adobe" className="w-20 md:w-28"/>
          <img src={assets.paypal_logo} alt="Paypal" className="w-20 md:w-28"/>
        </div>
      </div>
    </>
  )
}

export default Companies
