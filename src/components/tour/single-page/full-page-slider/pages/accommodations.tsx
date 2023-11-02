import { AppDispatch, RootState } from "@/redux-toolkit/store";
import { getTourData } from "@/redux-toolkit/tour-api";
import Img from "@/utils/BackgroundImageRatio"
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accommodations from "../../common/sections/accommodations";

const AccommodationsCom: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.tour);

    useEffect(() => {
        dispatch(getTourData());
    }, [dispatch]);


    return (
        <div data-title="accommodations" className="slider-image">
            <div className="img-div black-layer">
                <Img src="/assets/images/tour/slider/4.jpg" className="img-fluid bg-img" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1 tour-full-slider">
                            <div className="single-section">
                                <div className="description-section">
                                    <div className="description-details accommodations-default">
                                        <div>
                                            <Accommodations data={data} fullSlide={true} />
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

export default AccommodationsCom;