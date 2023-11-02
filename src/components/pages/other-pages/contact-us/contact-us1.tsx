import ContactForm from "@/components/common/booking-form/form5";
import { FC } from "react";
import { GetInTouch } from "@/constant/constant";
import AddressContent from "./common/address";

const ContactContent: FC = () => {
  return (
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="get-in-touch">
              <h3>{GetInTouch}</h3>
              <ContactForm />
            </div>
          </div>
          <div className="col-md-4 contact_right contact_section">
            <AddressContent colClass="col-md-12 col-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactContent;
