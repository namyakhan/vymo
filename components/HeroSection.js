import React from "react";

const HeroSection = () => {
  return (
    <div className="  gradient container mx-auto py-[10px] px-[10px] lg:px-[50px]  flex flex-col-reverse items-center text-center md:text-left md:flex-row md:items-center md:justify-between pt-8 md:pt-16 ">
      {/* Right Side */}
      <div className="md:w-1/2">
        <h1>Conventional CRMs are insufficient</h1>
        <p>
          What you need is an intelligent sales frontend that helps you drive
          interventions across the customer lifecycle to improve outcomes.
        </p>
        <button className="px-5 mt-5 md:mt-8">See how Vymo can help</button>
      </div>
      {/* Left Side */}

      <div className="flex flex-row justify-end lg:relative">
        <img
          src="images/hero.svg"
          alt="hero"
          loading="lazy"
          className="w-[250px] md:w-[350px] xl:w-[500px]"
        />
        <div className="hidden absolute  text-white bottom-px left-1/2 -translate-x-1/2 -translate-y-1/2 card xl:flex xl:flex-row xl:items-center px-5 py-2">
          <img src="images/window.svg" alt="hero" loading="lazy" className="" />
          <div>
            <button className="text-[8px] px-2 py-0 font-[100] ">
              To drive sales productivity bottom up
            </button>
            <p className="text-[10px] text-white font-[100]">
              Free between 2 - 4 PM? Meet Acme Solutions (Gold Partner)✨
            </p>
          </div>
        </div>
        <img
          src="images/plane.png"
          alt="hero"
          loading="lazy"
          className="hidden lg:block h-[100px] absolute z-10 right-0 "
        />
      </div>
    
    </div>
  );
};

export default HeroSection;
