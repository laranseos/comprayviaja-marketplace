import { Apply } from "@/constant/constant"
import { FC } from "react";

const Coupon: FC = () => {
    return (
        <div className="review_box">
            <div className="flight_detail">
                <div className="promo-section">
                    <div className="form-group mb-0">
                        <label>have a coupon code?</label>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo Code" />
                            <div className="input-group-prepend">
                                <span className="input-group-text">{Apply}</span>
                            </div>
                        </div>
                    </div>
                    <div className="promos">
                        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                            <div className="form-check">
                                <input className="form-check-input radio_animated" type="radio"
                                    name="exampleRadios2" id="exampleRadios3" value="option1"
                                    checked />
                                <div>
                                    <label className="form-check-label title" htmlFor="exampleRadios3">
                                        RICA500
                                    </label>
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        Use RICA50, and get $50 off on first booking
                                    </label>
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input radio_animated" type="radio"
                                    name="exampleRadios2" id="exampleRadios4" value="option2" />
                                <div>
                                    <label className="form-check-label title" htmlFor="exampleRadios4">
                                        FLY10
                                    </label>
                                    <label className="form-check-label" htmlFor="exampleRadios4">
                                        Use FLY10, and get 10% off upto $50 on flight ticket
                                        bookings.
                                    </label>
                                </div>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input radio_animated" type="radio"
                                    name="exampleRadios2" id="exampleRadios5" value="option2" />
                                <div>
                                    <label className="form-check-label title" htmlFor="exampleRadios5">
                                        FLIGHT80
                                    </label>
                                    <label className="form-check-label" htmlFor="exampleRadios5">
                                        Upto 80% Off + Upto 40% Cashback on Flight booking & more +
                                        Extra 10% off via ICICI Cards (10th-13th Oct)
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coupon;