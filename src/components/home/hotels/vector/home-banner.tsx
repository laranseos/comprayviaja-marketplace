import SeachVector from "./SearchVector";
import Img from "@/utils/BackgroundImageRatio";

const HomeBanner: React.FC = () => {
  return (
    <section className="home_section p-0">
      <div className="home home-padding">
        <Img src="/assets/images/flights/banner.jpg" className="bg-img img-fluid" alt="" />
        <div className="animation-bg">
          <div className="container custom-container mix-layout-section">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <SeachVector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
