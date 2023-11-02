import Img from "@/utils/BackgroundImageRatio"
import Policies from "../../common/sections/policies"
import { FC } from "react";

const PoliciesCom:FC = () => {
    return (
        <div data-title="policy" className="slider-image">
            <div className="img-div black-layer">
                <Img src="/assets/images/tour/slider/5.jpg" className="img-fluid bg-img" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
                            <div className="single-section">
                                <div className="description-section">
                                    <div className="privacy-policy description-details">
                                        <div>
                                            <Policies fullSlide={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoliciesCom;