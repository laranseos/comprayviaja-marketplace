import { socialIconData } from "@/data/hotels/single-page";
import { FC } from 'react';

const ContactInfo: FC = () => {
  return (
    <div className="single-sidebar">
      <h6 className="contact-title">contact info</h6>
      <p className="address">
        {" "}
        <i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        <i className="fas fa-phone-alt"></i> 123 254 121
      </p>
      <a href="#">
        <p>
          <i className="fas fa-envelope"></i> Contact@seaview.com
        </p>
      </a>
      <div className="social-box">
        <ul>
          {socialIconData.map((data) => (
            <li key={data.id}>
              <a href={data.link} target="_blank">
                <i className={data.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom_sec">
        <h6>check-in : 2:00 PM</h6>
        <h6>check-out : 12:00 PM</h6>
      </div>
    </div>
  );
};

export default ContactInfo;
