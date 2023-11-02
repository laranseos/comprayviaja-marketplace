"use client";
import { FC, Fragment, useEffect, useState } from "react";
import { imageBoxData } from "@/data/hotels/single-page";
import Img from "@/utils/BackgroundImageRatio";
import { Gallery, Item } from "react-photoswipe-gallery";

interface IBannerDataProps {
  id: number;
  bigImg: string;
  smallImg: {
    img1: string;
    img2: string;
  }[];
}

const Banner: FC = () => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
    setTimeout(() => setDisplay(true), 500);
  }, [imageBoxData]);
  if (!display) {
    return <div style={{ height: "60vh" }}></div>;
  }

  return (
    <section className="pt-0 ratio2_3 zoom-gallery overlay-hover">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <Gallery>
            {imageBoxData.map((data: IBannerDataProps,index) => (
              <Fragment key={index}>
                <Item original={data.bigImg} width="1200" height="800">
                  {({ ref, open }) => (
                    <div className="col-md-6 p-0" ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open}>
                      <Img src={data.bigImg} className="img-fluid bg-img" alt="" />
                    </div>
                  )}
                </Item>
                {data.smallImg.map((smallData, i) => (
                  <div className="col-md-3 col-6 p-0" key={i}>
                    <Item original={smallData?.img1} width="1200" height="800">
                      {({ ref, open }) => (
                        <span ref={ref} onClick={open}>
                          <Img src={smallData.img1} className="img-fluid bg-img" alt="" />
                        </span>
                      )}
                    </Item>
                    <Item original={smallData?.img2} width="1200" height="800">
                      {({ ref, open }) => (
                        <span ref={ref} onClick={open}>
                          <Img src={smallData.img2} className="img-fluid bg-img" alt="" />
                        </span>
                      )}
                    </Item>
                  </div>
                ))}
              </Fragment>
            ))}
          </Gallery>
        </div>
      </div>
    </section>
  );
};

export default Banner;
