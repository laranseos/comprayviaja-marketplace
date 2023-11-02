import { FC } from "react";
import Button from "@/components/common/btn";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';
import useTimer from "@/components/common/CountdownComponent";

const Banner: FC = () => {
  const [days, hours, minutes, seconds] = useTimer(new Date("dec 1, 2022 16:37:52").getTime());

  return (
    <section className="food-banner">
      <div className="container">
        <div className="row">
          <div className="offset-lg-5 col-lg-7 offset-md-2 col-md-8">
            <div className="food-content">
              <h3>2023 Special</h3>
              <h2>
                happy hours <span>40% off</span>
              </h2>
              <div className="strip-cls">
                <Img src="/assets/images/restaurant/strip.png" alt="" className="img-fluid " />
                <div className='timer'>
                  <ul>
                    <li>
                      <span id='days'>{days}</span>days
                    </li>
                    <li>
                      <span id='hours'>{hours}</span>Hour
                    </li>
                    <li>
                      <span id='minutes'>{minutes}</span>min
                    </li>
                    <li>
                      <span id='seconds'>{seconds}</span>sec
                    </li>
                  </ul>
                </div>
              </div>
              <div className="buttons">
              <Link href="/restaurant/single-page/classic"><Button btnClass="btn btn-rounded btn-sm color1" name="order now" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
