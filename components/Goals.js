import React from "react";

const Goals = () => {
  let Objectives = [
    {
      name: "Turn systems of records into systems of insight",
      link: "images/line-chart.svg",
    },

    {
      name: "Drive targeted interventions, improve outcomes ",
      link: "images/trophy.svg",
    },
    {
      name: "Leverage data across the customer lifecycle",
      link: "images/database.svg",
    },
    
  ];

  return (
    <div className="container mx-auto py-[10px] px-[10px] lg:px-[50px] pt-10 lg:pt-16 ">
      <div className="flex flex-col items-center justify-center space-y-5 lg:space-y-0 lg:flex lg:flex-row lg:items-center lg:justify-between">
        {Objectives.map((objective) => (
          <div
            key={objective.name}
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
  );
};

export default Goals;
