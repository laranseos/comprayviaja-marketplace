import { BaggagePolicy, CancellationCharges, Information, RescheduleCharges } from "@/constant/constant";
import { FC } from "react";


const InformationPage: FC<IInformationProps> = ({ type }) => {
  return (
    <>
      <div className="review_box">
        <div className="title-top">
          <h5>{Information}</h5>
        </div>
        <div className="flight_detail">
          <div className="row">
            <div className="col-md-12">
              <div className="boxes">
                <h6>{CancellationCharges}</h6>
                <ul>
                  <li>
                    airline fee : <span>$2012</span>
                  </li>
                  <li>This airline allows cancellation only before 2 hrs from departure time.</li>
                </ul>
              </div>
              <div className="boxes">
                <h6>{RescheduleCharges}</h6>
                <ul>
                  <li>
                    airline fee : <span>$2012</span>
                  </li>
                  <li>This airline allows reschedule only before 2 hrs from departure time.</li>
                </ul>
              </div>
              {type === "flight" && (
                <div className="boxes">
                  <h6>{BaggagePolicy}</h6>
                  <ul>
                    <li>
                      Check-in Baggage : <span>15 kg</span>
                    </li>
                    <li>
                      Cabin Baggage: <span>7 kg</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationPage;
