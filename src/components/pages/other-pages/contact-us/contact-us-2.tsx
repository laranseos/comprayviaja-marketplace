import ContactForm from "@/components/common/booking-form/form5";
import { FC } from "react";
import { GetInTouch } from "@/constant/constant";
import AddressContent from "./common/address";
import GoogleMapComponent from "@/components/common/map/google-map";

const ContactContent2: FC = () => {
  return (
    <>
      <section className="contact_section small-section pb-0">
        <div className="container">
          <div className="row">
            <AddressContent colClass="col-lg-3 col-sm-6" />
          </div>
        </div>
      </section>
      <section className="small-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="get-in-touch">
                <h3>{GetInTouch}</h3>
                <ContactForm />
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-map">
                <GoogleMapComponent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactContent2;
