import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const ServiceOne: FC<IServiceOneProps> = ({ serviceData }) => {
  return (
    <div className="service_section row">
      {serviceData.map((service: IServiceClassicProps,index) => (
        <div key={index} className="col-lg-4 col-6">
          <div className="service-wrap">
            <div>
              <div className="service-icon">
                <Img src={service.src} className="img-fluid" alt="" />
              </div>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceOne;
