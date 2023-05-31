import React, { Fragment } from "react";
import Line from "../../assets/Line.svg";

const Experience = () => {
  return (
    <Fragment>
      <section className="bg-[#F4F0EC] my-16">
        <div className=" w-[95%] md:w-[80%] lg:w-[75%] xl:w-[65%] mx-auto">
          <div className="flex items-center flex-row text-base justify-between py-8 space-x-4 sm:space-y-0">
            <div className="text-center">
              <h1 className="text-2xl text-[#CDA274] sm:text-3xl md:text-4xl font-bold mb-1">
                12
              </h1>
              <p className="text-base text-[#4D5053]">Years of experience</p>
            </div>
            <img src={Line} alt="" className="h-[80px] hidden sm:block" />
            <div className="text-center">
              <h1 className="text-2xl text-[#CDA274] sm:text-3xl md:text-4xl font-bold mb-1">
                85
              </h1>
              <p className="text-base text-[#4D5053]">Sucess Project</p>
            </div>
            <img src={Line} alt="" className="h-[80px] hidden sm:block" />
            <div className="text-center">
              <h1 className="text-2xl text-[#CDA274] sm:text-3xl md:text-4xl font-bold mb-1">
                15
              </h1>
              <p className="text-base text-[#4D5053]">Active Project</p>
            </div>
            <img src={Line} alt="" className="h-[80px] hidden sm:block" />
            <div className="text-center">
              <h1 className="text-2xl text-[#CDA274] sm:text-3xl md:text-4xl font-bold mb-1">
                95
              </h1>
              <p className="text-base text-[#4D5053]">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
