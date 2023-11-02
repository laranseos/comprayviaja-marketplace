import Rating from "@/components/common/rating";
import Img from "@/utils/BackgroundImageRatio";
import HotelBannerDetail from "../hotel-detail-banner/page";

const HomeBanner = () => {
  return (
    <section className="hotel-single-section pt-0">
      <Img src="/assets/images/single-hotel/bg-2.jpg" className="bg-img bg-bottom img-fluid" alt="" />
      <div className="hotel-title-section">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <HotelBannerDetail />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
