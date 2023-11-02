import SuccessBtn from "@/components/hotels/booking/checkout/payment-section/success-btn";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const DebitCard:FC = () => {
  return (
    <div className="card-body" id="example-collapse-text">
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">name on card</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="number">card number</label>
          <input type="text" className="form-control" id="number" />
          <Img src="/assets/images/creditcards.png" alt="" className="img-fluid" />
        </div>
        <div className="row">
          <div className="form-group col-md-4">
            <label htmlFor="month">month</label>
            <select id="month" className="form-control">
              <option>Month...</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="year">year</label>
            <select id="year" className="form-control">
              <option>Year...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="cvv">cvv</label>
            <input type="password" maxLength={4} className="form-control" id="cvv" />
            <Img src="/assets/images/cvv.png" className="img-fluid" alt="" />
          </div>
        </div>
        <SuccessBtn />
      </form>
    </div>
  );
};

export default DebitCard;
