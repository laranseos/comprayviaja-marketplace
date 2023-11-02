import { FC } from "react";
import Button from "@/components/common/btn";
import { Subscribe } from "@/constant/constant";
import { subscribeData } from "@/data/home/flight/flight-data";
import BackgroundSection from "@/utils/HOC/background-section";
import Link from 'next/link';

const SubscribeComp: FC = () => {
  return (
    <BackgroundSection titleClass="subscribe-footer zig-zag-effect" img="/assets/images/flights/footer-bg.jpg" imgWidth={1519} imgHeight={128} position={"center"}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="service-left">
              <ul>
                {subscribeData.map((data: ISubscribeDataProps,index) => (
                  <li key={index}>
                    <div className="service-box">
                      <div className="icon">{data.svg}</div>
                      <div className="detail">
                        <div>
                          <h5>{data.title}</h5>
                          <p>{data.contact}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-right">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" />
                <div className="input-group-append">
                  <Link href="/" className="btn btn-subscribe">Subscribe</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default SubscribeComp;
