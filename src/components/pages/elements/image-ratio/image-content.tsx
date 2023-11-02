import TitleThree from "@/components/common/title/title-three";
import { imageUrls } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const ImageContent: FC<IImageContentProps> = ({ classTitle }) => {
  return (
    <section className={`portfolio-section bg-white ${classTitle}`}>
      <div className="container default-image-ratio">
        <TitleThree classTitle="title-1" title="image ratio" subTitle={`ratio - "ratio2_3"`} />
        <div className="row content grid zoom-gallery">
          {imageUrls.map((imageUrl, index) => (
            <div className="grid-item wow zoomIn col-lg-3 col-sm-6" key={index}>
              <div className="overlay">
                <div className="portfolio-image">
                  <a href="#">
                    <Img src={imageUrl} alt="" className="img-fluid bg-img" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageContent;
