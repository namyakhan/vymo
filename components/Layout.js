import { Objectives } from "../pages/contextProvider";
import ProductItems from "./resuable/ProductItems"
import BrandCards from './resuable/BrandCards'

const Layout = () => {
return (
<div>
{/* HeroSection */}
<div className="gradient container mx-auto py-[10px] px-[10px] lg:px-[50px]  flex flex-col-reverse items-center text-center md:text-left md:flex-row md:items-center md:justify-between pt-8 md:pt-16">
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

{/* Goals */}
<div className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-10 lg:pt-16 ">
<div className="flex flex-col items-center justify-center space-y-5 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-between">
{Objectives.map((objective) => (
        <div
        key={objective.id}
        className=" "
        >
        <img
        src={objective.link}
        alt="hero"
        loading="lazy"
        className="h-6 md:h-8"
        />
        <p className="text-black w-2/3">{objective.name}</p>
        </div>
))}
</div>
</div>

{/* Products */}
<div id="products" className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-16 lg:pt-32">
<div className="flex flex-col items-center justify-center mb-10 lg:mb-12">

<h2>The power of an intelligent </h2>
<h2>Assistant and a Coach</h2>
</div>

<ProductItems/>
</div>

{/* Solutions */}
<div id="solutions" className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-16 lg:pt-32 flex flex-col items-center ">
<div> <h2>Recognized for driving innovation in </h2>
<h2>Sales Engagement</h2></div>
{/* Card 1  */}


<div className=" flex flex-row items-center justify-between bg-[#ffffff] lg:w-2/3 p-5 lg:py-10 lg:px-20 rounded-2xl mt-5 md:mt-12 space-x-5 ">
<button className="bg-aqua py-1 px-2 lg:py-5 lg:px-10 hover:bg-cyan-700">Gartner</button>
<div className="lg:w-3/4">
<h3 className="text-black">Vymo is a Representative Vendor in Gartner’s Sales Engagement Market Guide</h3>
<p className="text-gray-400 font-normal text-[12px] mt-5">
Vymo automatically captures all sales activities so your sellers
don’t have to report them manually. Vymo also helps sellers plan
their schedules so they can engage with customers or partners
intelligently
</p>

<button className=" py-1 px-2 lg:px-5 lg:py-2 bg-blue border mt-5 ">Download Report</button></div>
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

{/* Company */}
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
</div>
)
}

export default Layout