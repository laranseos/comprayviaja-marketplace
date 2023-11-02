import React, { FC, Fragment } from "react";
import Img from "@/utils/BackgroundImageRatio";
import { sections } from "@/data/pages/all-page";
import Link from 'next/link';

const BodyContent: FC = () => {
  return (
    <section className="portfolio-creative small-section ratio_55">
      <div className="container">
        <div className="order-section row m-0">
          {sections.map((data, i) => (
            <Fragment key={i}>
              <div   className=" col-lg-4 p-0">
                <div className="bg-img img-fluid ">
                  <Img src={data.imageSrc} className="img-fluid bg-img" alt="" />
                </div>
              </div>
              <div  className=" col-lg-4 p-0">
                <div className="content-sec center-con">
                  <div>
                    <h3>{data.title}</h3>
                    <p className="font-roboto">{data.description.slice(0, 65)}...</p>
                    <Link href="/pages/blog-pages/left-sidebar" className="btn btn-curve">read more</Link>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
