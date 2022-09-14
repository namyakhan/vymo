

const ProductCard = ({title, desc,url}) => {
  return (
   
    <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:justify-between bg-purple lg:w-2/3 lg:py-10 p-5 md:p-10 lg:px-20 rounded-2xl mt-5 md:mt-12 ">
    {/* Left Content */}
     <div className="lg:w-1/2 ">
        <h3>{title}</h3>
        <p className="text-gray-400 font-normal text-[12px] mt-5">
          {desc}
        </p>
   
        <button className="bg-purple border mt-5">See how it works</button>
     </div>
      {/* Right Section */}
     <img
       src={url}
       alt="hero"
       loading="lazy"
       className="h-[200px] xl:h-[300px] hidden md:block"
     />
   </div>
  )
}

export default ProductCard;