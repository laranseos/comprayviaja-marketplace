"use client";
import { FC } from "react";
import Slider from "react-slick";
import { GalleryConst, Our } from "@/constant/constant";
import TitleComponent from "@/components/common/title/title";
import { slide4 } from "@/components/common/slider-options";
import { gallery } from "@/data/home/hotel/hotel-data";
import Button from "@/components/common/btn";
import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";

const Gallery: FC<IGalleryPageProps> = ({ title }) => {
  return (
    <section className={`ratio3_2 ${title ? "" : "pt-0"}`}>
      <div className="container-fluid">
        <TitleComponent title={Our} subTitle={GalleryConst} span={GalleryConst} titleClass={"title-3"} />
        <div className="row">
          <div className="col p-0">
            <div className="slide-4 no-arrow">
              <Slider {...slide4}>
                {gallery.map((image: IGalleryProps,index) => (
                  <div key={index}>
                    <div className="gallery-box">
                      <div className="gallery-img">
                        <div className="overlay"></div>
                        <Img src={image.src} alt="" className="img-fluid bg-img" />
                      </div>
                      <div className="gallery-content">
                        <h5>{image.title}</h5>
                        <Link href="/pages/portfolio/grid-2-title" className="btn btn-solid">{image.btn}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
