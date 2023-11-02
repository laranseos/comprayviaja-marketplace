import { FC } from "react";
import FlightThree from "@/components/common/booking-form/form3";
import Button from "@/components/common/btn";
import { BookNow, GreatJourneyBegins, Rica } from "@/constant/constant";
import BackgroundDiv from "@/utils/HOC/background-div";
import Link from 'next/link';

const HomeBanner: FC = () => {
  return (
    <section className="cab-section flight-section p-0">
      <BackgroundDiv img={"/assets/images/flights/cloud.png"} divImg="/assets/images/flights/cloud.png" imgWidth={1920} imgHeight={427} displayClass="none" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cab-content">
              <div>
                <div className="top-cls">#{Rica}</div>
                <h2>{GreatJourneyBegins}</h2>
                <h3>with a small step</h3>
                <FlightThree />
                <Link href="/flight/booking/booking-now"><Button btnClass="btn btn-rounded color1" name={BookNow} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
