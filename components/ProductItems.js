import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const ProductItems = () => {

        function Product1(){
                return (
                        <div className="container mx-auto flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between p-5 lg:px-12 ">  <div className="lg:w-1/2 ">
                        <h3>1. Personal Assistant</h3>
                        <p className="text-gray-400 font-normal text-[12px] mt-5">
                        Vymo automatically captures all sales activities so your sellers don’t have to report them manually. Vymo also helps sellers plan their schedules so they can engage with customers or partners intelligently
                        </p>
                   
                        <button className="bg-purple border mt-5 hover:bg-white hover:text-violet">See how it works</button>
                     </div>
                      {/* Right Section */}
                     <img
                       src="images/product.svg"
                       alt="hero"
                       loading="lazy"
                       className="h-[170px] xl:h-[280px] hidden lg:block"
                     />
                   </div>
                )
        }

        function Product2(){
          return (
                  <div className="container mx-auto flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between p-5 lg:px-12 ">  <div className="lg:w-1/2 ">
                  <h3>2. Personal Coach</h3>
                  <p className="text-gray-400 font-normal text-[12px] mt-5">
                  Vymo understands what makes your best sellers successful and nudges best behaviors proactively to the rest of your team. Vymo also suggests interventions based on insights to improve outcomes.
                  </p>
             
                  <button className="bg-purple border mt-5  hover:bg-white hover:text-violet">See how it works</button>
               </div>
                {/* Right Section */}
               <img
                 src="images/product2.svg"
                 alt="hero"
                 loading="lazy"
                 className="h-[170px] xl:h-[280px] hidden lg:block"
               />
             </div>
          )
  }

  return (
        <div className="container mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>{Product1()}</SwiperSlide>
          <SwiperSlide>{Product2()}</SwiperSlide>
         
        </Swiper>
      </div>
  )
}

export default ProductItems;
