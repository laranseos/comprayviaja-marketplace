import { PoliciesConst } from "@/constant/constant";
import { FC } from "react";

const Policies: FC<IRoomProps> = ({ tab }) => {
  return (
    <div className="desc-box" id="policy">
      <h4 className="content-title">policies</h4>
      {tab && <h4 className="content-title">{PoliciesConst}</h4>}
      <div className="menu-part policy page-section">
        <p>Check-in: 2.00 PM, Check-out: 12.00 PM</p>
        <p>The primary guest must be at least 18 years of age to check into this hotel.</p>
        <p>It is mandatory for guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person above the age of 18 staying at the hotel. The identification proofs accepted are Aadhar Card, Driving License, Voter ID Card, and Passport. Without Original copy of valid ID the guest will not be allowed to check-in.</p>
        <p>Local ID proof & Pan card will not be acceptable as ID proof.</p>
        <p>Unless mentioned, the tariff does not include charges for optional room services (such as telephone calls, room service, mini bar, snacks, laundry extra bed etc.). In case, such additional charges are levied by the hotel(s), we shall not be held responsible for it.</p>
        <p>Personal food and beverages are strictly not permitted on the hotel premises.</p>
        <p>The hotel shall not be responsible for any loss of or damage to your personal belongings.In case any damage is done to the hotel property by guests during their stay, it will be the sole accountability of the guest.</p>
        <p>No charge for children below 6 years and the extra cost will be applicable for availing an extra bed in a double occupancy room. </p>
        <p>Should any action by a guest be deemed inappropriate by the hotel, or if any inappropriate behavior is brought to the attention of the hotel, the hotel reserves the right, after the allegations have been investigated, to take action against the guest.</p>
        <p>We would love to host you but in case your plans change, our simple cancellation process makes sure you receive a quick confirmation and fast refunds. Our standard check-in time is 12 noon and you can check-in any time after that till your reservation is valid.</p>
        <p>Pets are not allowed in the hotel premises.</p>
      </div>
    </div>
  );
};

export default Policies;
