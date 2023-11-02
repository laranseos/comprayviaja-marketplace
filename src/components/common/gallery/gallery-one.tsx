"use client";
import { FC, useEffect, useState } from "react";
import Rating from "../rating";
import { Gallery, Item } from "react-photoswipe-gallery";
interface GalleryData {
  id: number;
  img: string;
  title: string;
}

interface GalleryOneProps {
  galleryData: GalleryData[];
}

const GalleryOne: FC<GalleryOneProps> = ({ galleryData }) => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setDisplay(false);
    setTimeout(() => setDisplay(true), 500);
  }, [galleryData]);
  if (!display) {
    return <div style={{ height: "60vh" }}></div>;
  }
  return (
    <>
      <Gallery>
        {galleryData.map((data: GalleryData,key) => (
          <Item original={data.img} width="1200" height="800" key={key}>
            {({ ref, open }) => (
              <div className="gallery_box" key={data.id} ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open}>
                <div className="gallery-img">
                  <div className="overlay"></div>
                  <img src={data.img} alt="" className="img-fluid w-100" />
                </div>
                <div className="gallery-content">
                  <h3>{data.title}</h3>
                  <Rating />
                </div>
                <div className="view-cls">
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            )}
          </Item>
        ))}
      </Gallery>
    </>
  );
};

export default GalleryOne;
