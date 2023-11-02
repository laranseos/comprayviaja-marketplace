"use client";
import { FC } from "react";
import SliderFive from "@/components/common/slider-components/slide5";
import TitleComponent from "@/components/common/title/title";
import { Blog, TravelGuide } from "@/constant/constant";
import { travelData } from "@/data/home/hotel/hotel-data";

const BlogComponent: FC<IBlogComponentProps> = ({ classTitle, title }) => {
  return (
    <section className={classTitle}>
      <div className="container">
        {title && <TitleComponent title={Blog} subTitle={TravelGuide} titleClass="title-1" />}
        <SliderFive slideData={travelData} round={true} iconColor={true} />
      </div>
    </section>
  );
};

export default BlogComponent;
