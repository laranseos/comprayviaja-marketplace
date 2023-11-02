import React, { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";
import { sections } from "@/data/pages/all-page";
import Button from "@/components/common/btn";
import Link from 'next/link';

const BodyContent: FC = () => {
  return (
    <section className="portfolio-creative section-b-space ratio_55 odd-even-con">
      <div className="container">
        {sections.map((section, index) => (
          <div className="row m-0" key={index}>
            <div className={`col-lg-6 p-0 ${section.right ? "order-lg-1" : ""}`}>
              <div className="img-sec wow zoomIn">
                <Img src={section.imageSrc} className="img-fluid bg-img" alt="" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="content-sec wow zoomIn">
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <Link href="/pages/blog-pages/left-sidebar" className="btn btn-curve">read more</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BodyContent;
