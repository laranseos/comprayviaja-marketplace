import GalleryOne from "@/components/common/gallery/gallery-one";
import TitleComponent from "@/components/common/title/title";
import { GalleryConst, Our } from "@/constant/constant";
import { galleryOneData } from "@/data/home/tour/tour-data";
import { FC } from "react";

const Gallery: FC<IGalleryPageProps> = ({ title }) => {
  return (
    <>
      <section className={`gallery-section ${title ? "" : "pt-0"}`}>
        {title && <TitleComponent title={Our} subTitle={GalleryConst} span={GalleryConst} titleClass={"title-3"} />}
        <div className="container-fluid p-0">
          <div className="row zoom-gallery m-0">
            <div className="col-2 p-0">
              <GalleryOne galleryData={galleryOneData.galleryOne} />
            </div>
            <div className="col-3 p-0">
              <GalleryOne galleryData={galleryOneData.galleryTwo} />
            </div>
            <div className="col-2 p-0">
              <GalleryOne galleryData={galleryOneData.galleryThree} />
            </div>
            <div className="col-5 p-0">
              <GalleryOne galleryData={galleryOneData.galleryFour} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
