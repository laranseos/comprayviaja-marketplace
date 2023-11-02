import { FC } from "react";

const Policy: FC = () => {
  return (
    <div className="about menu-part tab-pane fade" id="policy">
      <div className="about-sec">
        <h6>Payment Policy</h6>
        <ul>
          <li>Initial deposit – INR. 1, 00,000 per person at the time of booking.</li>
          <li>1st part payment 50% of the tour cost at least 60 days prior departure.</li>
          <li>Balance payment 30 days prior departure.</li>
        </ul>
      </div>
      <div className="about-sec">
        <h6>Cancellation Policy</h6>
        <ul>
          <li>Deposit of INR 1,00,000 per person is non-refundable in any case once booking is confirmed.</li>
          <li>45 Days to 60 days prior to departure – 50% of the total tour cost.</li>
          <li>30 to 44 Days prior to departure 75 % of the tour cost.</li>
          <li>Within 30 days of departure 100% of the tour cost.</li>
        </ul>
      </div>
      <div className="about-sec">
        <h6>Important Terms and Conditions</h6>
        <ul>
          <li>All travelers have to carry their own passports, tickets, forex & any other important documents. It is recommended to leave passport photocopy at your resident, office & carry one copy while travelling.</li>
          <li>Passengers having excess baggage over 20 kgs per person in check in baggage & 07 kgs in hand luggage are liable to pay excess baggage charge directly at airport.</li>
          <li>Any sightseeing not mentioned in the itinerary will have to be paid directly.</li>
          <li>For the convenience of passengers the itinerary may be amended.</li>
          <li>Flight cost and availability are subject to change at time of actual booking.</li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
