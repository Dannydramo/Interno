import React, { Fragment } from "react";

const Join = () => {
  return (
    <Fragment>
      <section>
        <div className="mb-16 w-full sm:w-[90%] lg:w-[85%] mx-auto bg-[#292F36] py-8 sm:rounded-[3rem]">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
            Wanna join the interno?
          </h1>
          <p className="text-center my-4 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto text-white text-base">
            It is a long established fact will be distracted.
          </p>
          <button className="text-center flex flex-col justify-center items-center text-white py-4 my-4 rounded-lg bg-[#CDA274] w-[170px] mx-auto">
            Get Started
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Join;
