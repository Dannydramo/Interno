import React, { Fragment } from "react";

const Pricing = () => {
  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/FaqBg.svg)] bg-no-repeat relative bg-cover bg-center min-h-[60vh]">
          <p className="absolute bottom-0 rounded-t-2xl bg-white px-8 justify-center flex-col items-center min-w-[290px] mx-auto block py-6 font-bold text-2xl ">
            Pricing
          </p>
        </div>

        <div className="mb-8 mt-12 w-[95%] lg:w-[85%] mx-auto">
          <div className="grid gap-4 lg:grid-cols-3 my-8 items-center w-full text-[#292F36]">
            <div className="p-8 bg-[#F4F0EC] rounded-3xl text-sm text-center w-[100%]  sm:w-[400px] mx-auto lg:w-[100%]">
              <h1 className="text-xl font-bold mb-4">Design advices</h1>
              <p className="font-bold text-lg">
                $<span className="text-6xl">29</span>
              </p>
              <p className="font-bold text-base">/month</p>
              <ul className="flex flex-col space-y-4 text-base my-4 text-[#4D5053]">
                <li>General living space advices</li>
                <li>Rennovation advices</li>
                <li>Interior design advices</li>
                <li>Furniture reorganization</li>
                <li>Up to 5 hours meetings</li>
              </ul>
              <button className="text-center text-white py-4 my-4 rounded-lg bg-[#CDA274] w-[170px] mx-auto">
                Get Started
              </button>
            </div>
            <div className="p-8 bg-[#F4F0EC] rounded-3xl text-sm text-center w-[100%]  sm:w-[400px] mx-auto lg:w-[100%]">
              <h1 className="text-xl font-bold mb-4">Complete interior</h1>
              <p className="font-bold text-lg ">
                $<span className="text-6xl text-[#CDA274]">39</span>
              </p>
              <p className="font-bold text-base">/month</p>
              <p className="text-center text-white py-3 my-4 rounded-full bg-[#292F36] w-[90%] mx-auto">
                Most Popular Plans
              </p>
              <ul className="flex flex-col space-y-4 text-base my-4 text-[#4D5053]">
                <li>Complete home redesign</li>
                <li>Interior and exterior works</li>
                <li>Kitchen design</li>
                <li>Garages organization</li>
                <li>Modular interior planning</li>
              </ul>
              <button className="text-center text-white py-4 my-4 rounded-lg bg-[#292F36] w-[170px] mx-auto">
                Get Started
              </button>
            </div>
            <div className="p-8 bg-[#F4F0EC] rounded-3xl text-sm text-center w-[100%]  sm:w-[400px] mx-auto lg:w-[100%]">
              <h1 className="text-xl font-bold mb-4">Furniture design</h1>
              <p className="font-bold text-lg">
                $<span className="text-6xl">59</span>
              </p>
              <p className="font-bold text-base">/month</p>
              <ul className="flex flex-col space-y-4 text-base my-4 text-[#4D5053]">
                <li> Furniture for living room</li>
                <li>Furniture refurbishment</li>
                <li> Sofas and amchairs</li>
                <li>Tables and chairs</li>
                <li> Kitchens</li>
              </ul>
              <button className="text-center text-white py-4 my-4 rounded-lg bg-[#CDA274] w-[170px] mx-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Pricing;
