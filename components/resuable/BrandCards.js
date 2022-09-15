import React from 'react'

const BrandCards = ({ url, name, desc }) => {
  return (
        <div className="bg-[#ffffff]/10 rounded-2xl p-3 lg:p-6 lg:w-[400px] lg:h-[200px] mt-10 ">
        <img
       src={url}
       alt="hero"
       loading="lazy"
       className="h-10 mb-3"
     />
     <h3 className="font-[400] mb-2">{name}</h3>
     <p className="text-white font-[100] text-[12px]">{desc}</p>
        </div>
  )
}

export default BrandCards