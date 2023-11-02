import { FC } from "react";
import Image from "next/image";
import BannerContent from "./banner-content";

const Banners: FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="place-image">
            <Image src="/assets/images/flights/place.png" alt="" className="img-fluid wow zoomIn" width={691} height={533} />
            <div className="animation-place">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className={index % 2 === 0 ? "cloud-r" : "cloud-l"}>
                  <Image src={`/assets/images/flights/banner/${index}.png`} alt="" className="img-fluid wow zoomIn" height={60} width={85} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1">
          <BannerContent />
        </div>
      </div>
    </div>
  );
};

export default Banners;
