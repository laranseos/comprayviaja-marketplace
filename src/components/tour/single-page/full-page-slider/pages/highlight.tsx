import Img from "@/utils/BackgroundImageRatio";
import AboutSec from "../../common/sections/high-light.tsx/about-sec";
import { FC } from 'react';

const Highlight:FC = () => {
    return (
        <div data-title="highlight" className="slider-image">
            <div className="img-div black-layer">
                <Img src="/assets/images/tour/slider/1.jpg" className="img-fluid bg-img" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
                            <div className="single-section">
                                <div className="description-section">
                                    <div className=" description-details">
                                        <div>
                                            <div className="menu-part about">
                                                <div>
                                                    <h2 className="mb-3">highlight</h2>
                                                    <AboutSec />
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

export default Highlight;