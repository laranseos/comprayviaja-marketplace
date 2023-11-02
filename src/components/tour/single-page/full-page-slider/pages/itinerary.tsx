import Img from "@/utils/BackgroundImageRatio";
import Itinerary from "../../common/sections/itinerary";
import { FC } from 'react';

const ItineraryCom: FC = () => {
    return (
        <div data-title="itinerary" className="slider-image">
            <div className="img-div black-layer">
                <Img src="/assets/images/tour/slider/2.jpg" className="img-fluid bg-img" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
                            <div className="single-section">
                                <div className="description-section">
                                    <div className=" description-details">
                                        <div>
                                            <div className="menu-part accordion default-accordion full-slider-accordion">
                                                <div>
                                                    <h2 className="mb-3">itinerary</h2>
                                                    <Itinerary />
                                                </div>
                                            </div>
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

export default ItineraryCom;