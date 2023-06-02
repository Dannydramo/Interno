import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/NotFoundImage.jpg";

const NotFound = () => {
  return (
    <Fragment>
      <section className="overflow-y-hidden max-h-[100vh]">
        <div className="w-[95%] lg:w-[100%] mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="w-[80%] mx-auto lg:pl-24 lg:mx-0 mt-[6rem] lg:mt-[12rem] text-center lg:text-start">
              <div className="xl:w-[70%] lg:ml-24">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[7rem] font-bold">
                  404
                </h1>
                <p className="font-bold text-xl sm:text-2xl lg:text-3xl my-6">
                  We are sorry, but the page you requested was not found
                </p>
                <Link to="/">Back To Home</Link>
              </div>
            </div>
            <div className="mt-20">
              <img src={NotFoundImage} alt="" className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NotFound;
