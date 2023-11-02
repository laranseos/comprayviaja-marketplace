import { FC } from "react";
import Rating from "@/components/common/rating";
import TitleComponent from "@/components/common/title/title";
import { Deals, TopDeals } from "@/constant/constant";
import { topDealsData } from "@/data/home/hotel/hotel-data";
import Img from "@/utils/BackgroundImageRatio";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import Link from "next/link";

const TopDealsComponent: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <section className="process-steps section-b-space bg-white">
      <div className="container">
        <TitleComponent title={Deals} subTitle={TopDeals} titleClass="title-1" />
        <div className="step-bg ratio_square">
          <div className="row popular-section">
            {topDealsData.map((item: ITopDealsProps,index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="step-box">
                  <div className="popular-box">
                    <div className="popular_img">
                      <Img src={item.img} alt="" className="bg-img" />
                    </div>
                    <div className="special-content">
                      <Link href="/hotel/single-page/info-tab">
                        <h5>
                          {item.title}{" "}
                          <span>
                            <i className="fas fa-map-marker-alt"></i> {item.location}
                          </span>
                        </h5>
                      </Link>
                      <div className="bottom-section">
                        <Rating rang="26412 review" />
                        <div className="price">
                          <del>
                            {symbol}
                            {(currencyValue * item.price).toFixed(0)}
                          </del>
                          <span>
                            {symbol}
                            {(currencyValue * item.discount).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDealsComponent;
