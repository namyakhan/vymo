import React from 'react'

const Resources = () => {
  return (
    <div id="resources" className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-16 lg:pt-20 mb-20">
      <div className="flex flex-col items-center text-center lg:flex lg:flex-row lg:items-center lg:justify-around lg:text-left">
        <div className="lg:w-1/2">
          <h2 className="text-[20px] lg:[25px] lg:text-left">Download Sales Insights from USA’s Top Insurance Leaders </h2>
<h6 className="text-[12px] mb-5 mt-2 ">We reached out to USA’s top insurance leaders for a 360 degree view on the industry, what every leader’s top priorities should be, and opportunities for improvement.</h6>
<button>Check it out here</button></div>

     
      <img
          src="images/laptop.svg"
          alt="hero"
          loading="lazy"
          className="h-[200px] lg:h-[300px]"
        />
         </div>
    </div>
  )
}

export default Resources