import React from 'react'

const Solutions = () => {
  return (
    <div id="solutions" className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-16 lg:pt-32 flex flex-col items-center ">
     <div> <h2>Recognized for driving innovation in </h2>
<h2>Sales Engagement</h2></div>
 {/* Card 1  */}


        <div className=" flex flex-row items-center justify-between bg-[#ffffff] lg:w-2/3 p-5 lg:py-10 lg:px-20 rounded-2xl mt-5 md:mt-12 space-x-5 ">
        <button className="bg-aqua py-1 px-2 lg:py-5 lg:px-10">Gartner</button>
        <div className="lg:w-3/4">
                <h3 className="text-black">Vymo is a Representative Vendor in Gartner’s Sales Engagement Market Guide</h3>
        <p className="text-gray-400 font-normal text-[12px] mt-5">
          Vymo automatically captures all sales activities so your sellers
          don’t have to report them manually. Vymo also helps sellers plan
         their schedules so they can engage with customers or partners
         intelligently
        </p>
   
        <button className=" py-1 px-2 lg:px-5 lg:py-2 bg-blue border mt-5">Download Report</button></div>
</div>
{/* Card 2 */}

<div className="flex flex-row items-center justify-between bg-grayish lg:w-2/3 lg:py-10 lg:px-20 p-5  rounded-b-2xl space-x-10 lg:space-x-0 ">
        <div className="flex flex-col items-center ">  <img
          src="images/deepika.svg"
          alt="hero"
          loading="lazy"
          className=" h-8 lg:h-12 "
        />
       
       <p className="text-black text-[8px] lg:text-[12px] mt-1">Deepika Sharma</p>
       <p className="text-[8px] lg:text-[12px]">CEO Gartner</p></div>

<p className="text-gray-400 font-normal text-[10px] lg:text-[12px] mt-5 lg:w-3/4">  “We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations. In 8 weeks we have got complete visibility into every individual’s productivity and capability.”</p>
</div>
</div>
       

  )
}

export default Solutions