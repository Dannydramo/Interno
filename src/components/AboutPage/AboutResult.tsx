import React, { Fragment } from "react";
import FinishedImage from "../../assets/Finished.jpg";
import UnFinishedImage from "../../assets/UnFinished.jpg";

const AboutResult = () => {
  return (
    <Fragment>
      <section>
        <div className="my-24 w-[95%] lg:w-[85%] mx-auto">
          <div className="flex flex-col-reverse justify-between md:space-x-8 md:flex-row">
            <div className="md:w-[65%] xl:w-[35%] mt-4 md:mt-0">
              <h1 className="text-4xl font-bold text-[#292F36]">What We Do</h1>
              <p className="text-[#4D5053] text-base my-4">
                At Interno, we are passionate about creating exceptional real
                estate experiences for our clients. With our expertise and
                dedication, we offer a comprehensive range of services designed
                to meet your unique needs and exceed your expectations.
              </p>
              <p className="text-[#4D5053] text-base my-4 hidden xl:block">
                we are committed to delivering exceptional customer service,
                personalized attention, and unmatched professionalism. Our goal
                is to make your real estate journey seamless, successful, and
                rewarding
              </p>
              <button className="text-center text-white py-[0.75rem] my-4 rounded-lg bg-[#292F36] w-[150px] mx-auto">
                Our Concept
              </button>
            </div>
            <div className="">
              {" "}
              <img src={UnFinishedImage} alt="" className="rounded-3xl" />
            </div>
          </div>

          <div className="flex flex-col mt-8 justify-between md:mt-16 md:flex-row">
            <div className="">
              {" "}
              <img src={FinishedImage} alt="" className="rounded-3xl" />
            </div>
            <div className="md:w-[65%] xl:w-[35%] md:ml-12 mt-4 md:mt-0">
              <h1 className="text-4xl font-bold text-[#292F36]">
                The End Result
              </h1>
              <p className="text-[#4D5053] text-base my-4">
                At Interno, we are passionate about creating exceptional real
                estate experiences for our clients. With our expertise and
                dedication, we offer a comprehensive range of services designed
                to meet your unique needs and exceed your expectations.
              </p>
              <p className="text-[#4D5053] text-base my-4 hidden xl:block">
                we are committed to delivering exceptional customer service,
                personalized attention, and unmatched professionalism. Our goal
                is to make your real estate journey seamless, successful, and
                rewarding
              </p>
              <button className="text-center text-white py-[0.75rem] my-4 rounded-lg bg-[#292F36] w-[150px] mx-auto">
                Our Concept
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutResult;
