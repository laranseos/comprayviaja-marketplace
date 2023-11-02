import { FC } from "react";
import { tabsTitleData } from "@/data/hotels/single-page";
import SpecialImage from "../common/sections/special-img";
import BookInfo from "./sidebar/book-info";
import ContactInfo from "./sidebar/contact-info";
import WeatherInfo from "./sidebar/weather-info";
import HotelBannerDetail from "../hotel-detail-banner/page";
import TabDescription from "../tab-description/description";
import ThumbnailSlider from "@/components/common/elements/thumbnail-slider";
import { thumbnailImgData } from "@/data/hotels/single-page";
import { imagesection1, imagesection2, imagesection3 } from "@/data/hotels/single-page";

import Description from "../classic/sticky-description-section/description";
import ImageSection from "@/components/common/image-section/image-section";

const SinglePageSection: FC<ISinglePageSectionProps> = ({ detail, side, tab, thumbnail }) => {
  return (
    <section className="single-section xs-section bg-inner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {detail && (
              <div className="hotel_title_section">
                <HotelBannerDetail />
              </div>
            )}
          </div>
          <div className={`col-xl-3 col-lg-4 ${side === "right" ? "order-1" : ""}`} id="booking">
            <div className="sticky-cls">
              <BookInfo />
              <ContactInfo />
              <WeatherInfo />
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <ImageSection imagesection1={imagesection1} imagesection2={imagesection2} imagesection3={imagesection3} />
            {thumbnail && <ThumbnailSlider images={thumbnailImgData} />}
            {tab ? (
              <div className="description-section tab-section">
                <TabDescription tabsData={tabsTitleData} class1="menu-top" />
              </div>
            ) : (
              <Description />
            )}
            <SpecialImage />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SinglePageSection;
