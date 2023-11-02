import { FlightDetails } from "@/constant/constant"
import Img from "@/utils/BackgroundImageRatio"
import { FC } from "react"

const FlightDetail: FC = () => {
    return (

        <div className="review_box">
            <div className="title-top">
                <h5>{FlightDetails}</h5>
            </div>
            <div className="flight_detail">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo-sec">
                            <Img src="/assets/images/flights/airlines/1.png"
                                className="img-fluid" alt="" />
                            <span className="title">Egyptair</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="airport-part">
                            <div className="airport-name">
                                <h6>DXB <span>17.00</span></h6>
                                <p>sat, 12 oct 2023</p>
                            </div>
                            <div className="airport-progress">
                                <i className="fas fa-plane-departure float-start"></i>
                                <i className="fas fa-plane-arrival float-end"></i>
                            </div>
                            <div className="airport-name arrival">
                                <h6>CDG <span>17.00</span></h6>
                                <p>sat, 12 oct 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="duration">
                            <div>
                                <h6>20h 45m</h6>
                                <p>1 stop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FlightDetail