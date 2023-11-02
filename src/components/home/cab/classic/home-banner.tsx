import { FC } from "react";
import CabSearch from "@/components/common/search/cab-search";
import { BookYourCab, DifferentLocation, SameLocation } from "@/constant/constant";
import BackgroundDiv from "@/utils/HOC/background-div";

const HomeBanner: FC = () => {
  return (
    <section className="home_section tour_layout slide-1 p-0">
      <div>
        <BackgroundDiv titleClass={"home home-long"} img={"/assets/images/cab/bg.jpg"} divImg="/assets/images/cab/bg.jpg" imgWidth={1905} imgHeight={523} displayClass="none">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-content mix-layout">
                  <div className="bg-transparent">
                    <h1>{BookYourCab}</h1>
                    <h3>rent cab with affordable price with rica cab</h3>
                    <div className="location-option d-flex">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                          {DifferentLocation}
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                          {SameLocation}
                        </label>
                      </div>
                    </div>
                    <CabSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundDiv>
      </div>
    </section>
  );
};

export default HomeBanner;
