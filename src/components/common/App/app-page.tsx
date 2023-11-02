import { FC } from "react";
import { New } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import AppBtn from "../button/app-button";

interface IAppPageProps {
  badge?: boolean;
  whiteClass?: boolean;
  imgData: {
    id: number;
    img: string;
  }[];
}
const AppPage: FC<IAppPageProps> = ({ badge, imgData, whiteClass }) => {
  return (
    <div className="row order-cls">
      <div className="col-lg-5">
        <div className="app-content">
          <div>
            {badge && (
              <div className={`label ${whiteClass && "label-white"}`}>
                <span>{New}</span>
              </div>
            )}

            <h2 className="title">
              The best Cab app
              <span>for your mobile app.</span>
            </h2>
            <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
            <h3>dowload app now...</h3>
            <AppBtn classWhite={whiteClass} />
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="app-image">
          <div>
            {imgData.map((data: { id: number; img: string },index) => (
              <div className="image" key={index}>
                <div className="circle"></div>
                <Img src={data.img} alt="" className="img-fluid " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
