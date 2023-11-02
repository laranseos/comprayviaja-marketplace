"use client";
import React from "react";
import ContactUs from "./contact-us";
import About from "./about";
import Location from "./location";
import Links from "./links";
import Updates from "./updates";
import TopPlace from "./top-place";

const FooterContent: React.FC<IFooterComponentProps> = ({ place }) => {
  return (
    <>
      <div className="footer section-b-space section-t-space">
        <div className="container">
          <div className="row order-row">
            <ContactUs />
            <About />
            {place ? <TopPlace /> : <Location />}
            <Links />
            <Updates />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
