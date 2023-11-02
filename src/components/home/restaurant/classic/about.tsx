import { FC } from "react";
import TitleComponent from "@/components/common/title/title";
import { HistoryOf, Lorem, OurRestaurant, Restaurant } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import Button from "@/components/common/btn";
import Link from 'next/link';

const About: FC = () => {
  return (
    <section className="about_section section-b-space">
      <div className="container">
        <TitleComponent title={HistoryOf} titleClass="title-3 rounded" subTitle={OurRestaurant} span={Restaurant} />
        <div className="row">
          <div className="col-lg-6">
            <div className="about_img">
              <div className="side-effect">
                <span></span>
              </div>
              <Img src="/assets/images/restaurant/about.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about_content">
              <div>
                <h5>
                  special couple <span>dinner</span> offer.....
                </h5>
                <h2>rica restaurant</h2>
                <p>{Lorem}..</p>
                <div className="about_bottom">
                  <Link href="/pages/other-pages/about-us-1"><Button btnClass="btn btn-rounded color1" name="Read More" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
