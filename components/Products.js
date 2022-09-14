import React, { useState } from "react";

import ProductCard from "./ProductCard";


const Products = () => {
        // const [show, setShow] = useState(false);
        // const [showResults, setShowResults] = React.useState(false)
        // const results = () => setShowResults(!showResults)
       
  return (
    <div id="products" className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-16 lg:pt-32 ">
        <div className="flex flex-col items-center justify-center ">

 <h2>The power of an intelligent </h2>
<h2>Assistant and a Coach</h2>
</div>


<div className="flex flex-col items-center justify-center mt-5" >
<ProductCard title="1. Personal Assistant" desc="Vymo automatically captures all sales activities so your sellers don’t have to report them manually. Vymo also helps sellers plan their schedules so they can engage with customers or partners intelligently" url="images/product.svg"/>
<ProductCard title="2. Personal Coach" desc="Vymo understands what makes your best sellers successful and nudges best behaviors proactively to the rest of your team. Vymo also suggests interventions based on insights to improve outcomes." url="images/product2.svg"/>
</div>
{/* Personal Coach */}
{/* <div  onClick={results} className="bg-blue  w-2/3 py-5 px-20 rounded-b-2xl">
{ showResults ? <PersonalCoach /> : null }
<h3>2. Personal Coach</h3>
</div> */}




  
  
   
    </div>
  )
}

export default Products