import React, { Fragment } from "react";
import Quote from "../../assets/Quotes.svg";

const AboutHero = () => {
  return (
    <Fragment>
      <section>
        <div className="p-4 bg-[url(./assets/AboutBg.svg)] bg-no-repeat bg-cover bg-center min-h-[60vh]"></div>
        <img src={Quote} alt="" className="p-4 block mx-auto my-16" />
      </section>
    </Fragment>
  );
};

export default AboutHero;
