import CabBookingForm from "@/components/common/booking-form/form4";
import ContactInfo from "@/components/hotels/single-pages/common/sidebar/contact-info";
import { BookYourRide } from "@/constant/constant";
import CarDetailPage from "./car-detail";
import ImageSection from "@/components/common/image-section/image-section";
import { imagesection1, imagesection2, imagesection3 } from "@/data/car/single-page";
import { FC } from "react";

const SingleDetailPage: FC = () => {
  return (
    <section className="single-section small-section bg-inner">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <ImageSection imagesection1={imagesection1} imagesection2={imagesection2} imagesection3={imagesection3} />

            <CarDetailPage />
          </div>
          <div className="col-xl-3 col-lg-4 ">
            <div className="single-sidebar">
              <div className="selection-section flight-search">
                <h4 className="title">{BookYourRide}</h4>
                <div className="flight-search-detail cab-form-input">
                  <CabBookingForm />
                </div>
              </div>
            </div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleDetailPage;
