import { parallaxData } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import React, { FC } from "react";

const BodyContent: FC = () => {
  return (
    <section className="p-0 parallax-section">
      {parallaxData.map((item: { img: string }, i: number) => (
        <div className="full_banner" key={i}>
          <Img src={item.img} className="img-fluid bg-img" />
        </div>
      ))}
    </section>
  );
};

export default BodyContent;
