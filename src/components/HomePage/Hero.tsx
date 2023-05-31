import React, { Fragment } from "react";
import CreativeImg from "../../assets/creative.svg";

interface MobileNav {
  open: boolean;
}

const Hero: React.FC<MobileNav> = ({ open }) => {
  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/HeroBg.svg)] bg-no-repeat bg-cover bg-center min-h-[100vh]">
          <div
            className={`w-[95%] duration-500 ease-linear mx-auto ${
              open ? "mt-[21rem]" : "mt-[10rem]"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[#292F36]">
              Let Your Home Be Unique
            </h1>
            <p className="text-center my-4 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] mx-auto text-[#4D5053] text-base">
              Let your home be a reflection of your unique style and
              personality. At our real estate agency, we believe in celebrating
              individuality and helping you find a home that is truly
              one-of-a-kind.
            </p>
            <button className="text-center flex flex-col justify-center items-center text-white py-4 my-4 rounded-lg bg-[#292F36] w-[170px] mx-auto">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-24 w-[95%] lg:w-[85%] xl:w-[75%] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1]">
                We Create The Art Of Stylish Living Stylishly
              </h1>
              <p className="my-6 text-base">
                At our agency, we go beyond simply helping you find a house or
                apartment. We are dedicated to transforming properties into
                stylish homes that inspire and delight. Our team of experienced
                professionals understands the importance of creating a living
                environment that not only meets your practical needs but also
                sparks joy and provides a sense of tranquility.
              </p>
              <p className="my-6 text-base">
                From luxurious penthouses to cozy family homes, we offer a
                diverse range of properties that are meticulously selected for
                their exceptional design and architectural features. We work
                closely with homeowners and developers who share our passion for
                creating spaces that elevate everyday living.
              </p>
              <button className="text-center text-white py-4 my-4 rounded-lg bg-[#292F36] w-[170px] mx-auto">
                Get Free Estimate
              </button>
            </div>
            <div className="lg:w-[44%]">
              <img
                src={CreativeImg}
                alt=""
                className="rounded-3xl lg:h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
