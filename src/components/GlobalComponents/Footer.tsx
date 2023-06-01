import React, { Fragment } from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Fragment>
      <section>
        <div className="mb-8 mt-12 w-[95%] lg:w-[85%] mx-auto">
          <div className="flex flex-col justify-between lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="lg:w-[30%]">
              <img src={Logo} alt="" />
              <p className="py-4 text-base">
                Our dedicated team of real estate professionals is committed to
                listening to your needs and understanding your vision. We work
                tirelessly to source properties that stand out from the
                ordinary, boasting unique architectural elements, breathtaking
                views, and captivating interiors
              </p>
            </div>
            <div className="">
              <p className="font-bold text-xl mb-4">Pages</p>
              <ul className="flex flex-col space-y-4">
                <Link to="/pricing">Pricing</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/team">Team</Link>
              </ul>
            </div>
            <div className="">
              <h1 className="font-bold text-xl mb-4">Contact</h1>
              <p className="mb-2">
                55 East Birchwood Ave. Brooklyn, New York 11201
              </p>
              <p className="mb-2">contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
