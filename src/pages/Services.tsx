import React, { Fragment } from "react";
import ServiceHero from "../components/ServicePage/ServiceHero";
import HowWeWork from "../components/ServicePage/HowWeWork";
import Join from "../components/GlobalComponents/Join";

const Services = () => {
  return (
    <Fragment>
      <ServiceHero />
      <HowWeWork />
      <Join />
    </Fragment>
  );
};

export default Services;
