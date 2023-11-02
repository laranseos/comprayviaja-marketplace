import { FC } from "react";
import Button from "@/components/common/btn";
import { BookTable } from "@/constant/constant";
import BackgroundDiv from "@/utils/HOC/background-div";
import Img from "@/utils/BackgroundImageRatio";
import SmokeEffect from "./smoke-effect";
import Link from 'next/link';

const HomeBanner: FC = () => {
  return (
    <section className="home_section restaurant-home-section p-0 ">
      <BackgroundDiv img={"/assets/images/restaurant-bg.png"} divImg="/assets/images/restaurant-bg.png" titleClass="home" displayClass="none" imgWidth={1920} imgHeight={1074}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="smoke-effect">
                <SmokeEffect />
                {/* <canvas id="canvas"></canvas> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-content food_content">
                <div className="shadow-none">
                  <h4>2020 Special</h4>
                  <h1>bite me !</h1>
                  <div className="book-table section-b-space p-0 single-table">
                    <div className="table-form">
                      <form >
                        <div className="row w-100">
                          <div className="form-group col p-0">
                            <input type="text" className="form-control" placeholder="Person" />
                            <Img src="/assets/images/icon/user.png" className="img-fluid" alt="" />
                          </div>
                        </div>
                        <Link href="/restaurant/booking/checkout"><Button btnClass="btn btn-rounded color1" name={BookTable} /></Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundDiv>
    </section>
  );
};

export default HomeBanner;
