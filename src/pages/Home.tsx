import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import HomePageProjects from "../components/HomePage/HomePageProjects";
import Marquee from "../components/GlobalComponents/Marquee";
import Experience from "../components/GlobalComponents/Experience";
import Join from "../components/GlobalComponents/Join";

interface MobileNav {
  open: boolean;
}
const Home = ({ open }: MobileNav) => {
  return (
    <Fragment>
      <Hero open={open} />
      <Marquee />
      <HomePageProjects />
      <Experience />
      <Join />
    </Fragment>
  );
};

export default Home;
