import { FC } from "react";
import { flights } from "@/data/flight/sidebar";
import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";

const BookingPanel: FC = () => {
  const renderFlightDetails = () => {
    return flights.map((flight, index) => (
      <div className="col-md-4 d-md-block d-none" key={index}>
        <div className="detail-bar">
          <div className="detail-wrap">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="logo-sec">
                  <Img src={flight.airlineLogo} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-md-6 d-md-block d-none">
                <div className="airport-part">
                  <div className="airport-name">
                    <h4>{flight.departureTime}</h4>
                    <h6>{flight.departureAirport}</h6>
                  </div>
                  <div className="airport-progress">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                  <div className="airport-name arrival">
                    <h4>{flight.arrivalTime}</h4>
                    <h6>{flight.arrivalAirport}</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="price">
                  <div>
                    <h4>{flight.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const calculateGrandTotal = () => {
    return flights.reduce((total, flight) => total + parseInt(flight.price.slice(1)), 0);
  };

  return (
    <div className="book_panel flight-detail-sec">
      <div className="container">
        <div className="row">
          {renderFlightDetails()}
          <div className="col-md-4 col-12">
            <div className="grand-total">
              <h5 className="total">
                grand total : <span>${calculateGrandTotal()}</span>
              </h5>
              <Link href="/flight/booking/booking-now" className="btn btn-solid color1">
                book now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPanel;
