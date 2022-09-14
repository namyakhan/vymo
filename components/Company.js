import React from 'react'
import BrandCards from './BrandCards'

const Company = () => {

     
  return (
   
       <div id="company" className="container mx-auto  px-[10px] lg:px-[50px]  pt-16 lg:pt-32  bg-violet mt-24 pb-16 lg:pb-0">
        <div className="flex flex-col items-center h-full w-full ">
        <h2 className="text-white">Turnkey Integrations with  </h2>
        <h2 className="text-white lg:pb-5">your sales tech stack </h2>
        <p>Get up and running in months weeks!</p>
        </div>
       <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-4 xl:grid xl:grid-cols-3 xl:gap-4 lg:mt-10 px-[20px] lg:px-[50px]">
        <BrandCards url="images/msoffice.svg" name="Office 365" desc="Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites"/>
        <BrandCards url="images/google.svg" name="Google Suite " desc="Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites"/>
        <BrandCards url="images/teams.svg" name="MS Teams" desc="Vymo improves your team’s efficiency by auto-detecting and auto-logging all your team’s sales communication"/>
        <BrandCards url="images/azure.svg" name="Azure Active Directory" desc="The following enterprise single sign-on (SSO) services come integrated with Vymo out-of-the-box."/>
        <BrandCards url="images/salesforce.svg" name="Office 365" desc="Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites"/>
        <BrandCards url="images/webex.svg" name="WebEx" desc="Vymo improves your team’s efficiency by auto-detecting and auto-logging all your team’s sales communication"/></div>
        <div class="relative">
        <img
          src="images/frame.svg"
          alt="hero"
          loading="lazy"
          className="hidden lg:block object-fill"
        />
      
       <button className="hidden lg:block absolute py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">See how Vymo can help</button>
       </div>
      
 </div>

 
   
       
 
  )
}

export default Company