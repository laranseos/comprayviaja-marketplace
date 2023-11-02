import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

interface IImgBannerProps {
  classSection: string;
  img: string;
}
const Banner: FC<IImgBannerProps> = ({ classSection, img }) => {
  return (
    <section className={classSection}>
      <Img src={img} className="bg-img img-fluid " alt="" />
    </section>
  );
};

export default Banner;
