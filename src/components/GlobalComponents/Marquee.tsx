import React, { Fragment } from "react";
import Logo1 from "../../assets/01.svg";
import Logo2 from "../../assets/02.svg";
import Logo3 from "../../assets/03.svg";
import Logo4 from "../../assets/04.svg";
import Logo5 from "../../assets/05.svg";
import Marquee from "react-fast-marquee";

const Marq = () => {
  return (
    <Fragment>
      <section>
        <div className="mt-12">
          <Marquee autoFill pauseOnHover>
            <div className="flex justify-between space-x-12">
              <img src={Logo1} alt="" className="ml-12 img" />
              <img src={Logo2} alt="" className="img" />
              <img src={Logo3} alt="" className="img" />
              <img src={Logo4} alt="" className="img" />
              <img src={Logo5} alt="" className="img" />
            </div>
          </Marquee>
        </div>
      </section>
    </Fragment>
  );
};

export default Marq;
