import BirdAnimation from "@/components/common/animation/bird-animation";
import Img from "@/utils/BackgroundImageRatio"
import { FC } from "react";



const BannerImgComponent: FC<IBannerImgprops> = ({ bannerImg, animation }) => {
    return (
        <div className="home home-60">
            <Img src={bannerImg} className="img-fluid bg-img" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="home-content pt-0 mix-layout mrg-cls">
                            <div>
                                <h1>splendid spain</h1>
                                <ul className="package-detail">
                                    <li><i className="far fa-calendar-alt"></i>7 days</li>
                                    <li><i className="fas fa-plane"></i>11 dec, 2023</li>
                                    <li><i className="fas fa-download"></i><a href="#">download pdf</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {animation && <BirdAnimation />}
        </div>
    )
}

export default BannerImgComponent;