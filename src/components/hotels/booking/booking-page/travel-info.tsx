import { Apply, ContactInfo, EmailAddress, FirstName, LastName, PayNow, SpecialRequest, TravellerInformation } from "@/constant/constant";
import { RootState } from "@/redux-toolkit/store";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const TravelInfo: FC = () => {
  const { push } = useRouter();
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const payBtn = () => {
    push(`${i18LangStatus}/hotel/booking/checkout`);
  };
  return (
    <div className="col-lg-7">
      <div className="guest-detail">
        <h2>{TravellerInformation}</h2>
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
          <div className="form-group">
            <div className="row">
              <div className="col first-name">
                <label>{FirstName}</label>
                <input type="text" id="firstName" className="form-control" placeholder="First name" />
              </div>
              <div className="col">
                <label>{LastName}</label>
                <input type="text" id="lastName" className="form-control" placeholder="Last name" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>{EmailAddress}</label>
            <input type="email" className="form-control" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">
              Booking confirmation will be sent to this email ID.
            </small>
          </div>
          <div className="form-group">
            <label>{ContactInfo}</label>
            <input id="mobile-no" type="tel" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">{SpecialRequest}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="e.g.. early check-in, airport transfer"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">have a coupon code?</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo Code" />
              <div className="input-group-prepend">
                <span className="input-group-text">{Apply}</span>
              </div>
            </div>
          </div>
          <div className="submit-btn">
          <Link href="/hotel/booking/checkout"><button className="btn btn-solid" type="button" onClick={payBtn}>
              {PayNow}
            </button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TravelInfo;
