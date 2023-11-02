import { FC } from "react";
import { ThebestFoodapp } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import AppBtn from "@/components/common/button/app-button";

const AppFood: FC = () => {
  return (
    <section className="app-section pt-0 app-right-sec">
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-md-6 p-0">
            <div className="app-content">
              <div>
                <h2 className="title">{ThebestFoodapp}</h2>
                <p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.</p>
                <h3>dowload app now...</h3>
                <AppBtn />
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 position-relative">
            <div className="app-image">
              <Img src="/assets/images/restaurant/app.jpg" className="img-fluid  bg-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFood;
