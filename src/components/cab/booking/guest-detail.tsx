import Button from "@/components/common/btn";
import { FC } from "react";

const GuestDetailPage: FC = () => {
  return (
    <div className="guest-detail">
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <div className="form-group">
          <div className="row">
            <div className="col first-name">
              <label>first name</label>
              <input type="text" id="firstName" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <label>last name</label>
              <input type="text" id="lastName" className="form-control" placeholder="Last name" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">
            Booking confirmation will be sent to this email ID.
          </small>
        </div>
        <div className="form-group">
          <label>contact info</label>
          <input id="mobile-no" type="tel" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">special request</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder=""></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">have a coupon code?</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo Code" />
            <div className="input-group-prepend" />
            <span className="input-group-text">apply</span>
          </div>
        </div>
        <div className="submit-btn">
          <Button name="proceed to pay" btnClass="btn btn-solid" />
        </div>
      </form>
    </div>
  );
};

export default GuestDetailPage;
