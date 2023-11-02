import Img from "@/utils/BackgroundImageRatio"
import Review from "../../common/sections/review"
import { FC } from "react"

const ReviewCom: FC = () => {
    return (
        <div data-title="review" className="slider-image">
            <div className="img-div black-layer">
                <Img src="/assets/images/tour/slider/3.jpg" className="img-fluid bg-img" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
                            <div className="single-section">
                                <div className="description-section">
                                    <div className=" description-details">
                                        <div>
                                            <Review fullSlide={true} />
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

export default ReviewCom