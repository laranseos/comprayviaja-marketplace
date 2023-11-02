import { FC } from "react"
import BannerImgComponent from "../common/banner";

const Banner: FC = () => {
    return (
        <section className="home_section p-0">
            <div>
                <BannerImgComponent bannerImg="/assets/images/tour/spain4.jpg" />
            </div>
        </section>
    )
}

export default Banner;