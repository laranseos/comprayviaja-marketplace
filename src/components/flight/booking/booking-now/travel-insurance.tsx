import { TravelInsuranceConst } from "@/constant/constant"
import { FC } from "react"

const TravelInsurance: FC = () => {
    return (
        <div className="review_box">
            <div className="title-top">
                <h5>{TravelInsuranceConst}</h5>
            </div>
            <div className="flight_detail">
                <div className="row">
                    <div className="col-md-12">
                        <div className="boxes">
                            <h6>secure your travel with travel insurance for $25/person</h6>
                            <div className="form-check">
                                <input className="form-check-input radio_animated" type="radio"
                                    name="exampleRadios1" id="exampleRadios1" value="option1" defaultChecked />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    yes, i want to secure my travel with insurance
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input radio_animated" type="radio"
                                    name="exampleRadios1" id="exampleRadios2" value="option2" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    no, i do not want to secure my travel with insurance
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelInsurance