import { FC } from "react";
import Link from 'next/link'
import CountdownComponent from "@/components/common/CountdownComponent";
import Button from "@/components/common/btn";
import Img from "@/utils/BackgroundImageRatio";
import useTimer from "@/components/common/CountdownComponent";

const ComingSoonContent3: FC = () => {
  const [days, hours, minutes, seconds] = useTimer(new Date("dec 1, 2022 16:37:52").getTime());

  return (
    <div className="coming-soon cab-section flight-section">
      <Img src="/assets/images/inner-pages/coming-soon2.jpg" alt="" className="img-fluid bg-img" />
      <div className="cloud">
        <Img src="/assets/images/flights/cloud.png" alt="" className="bg-img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6">
            <div className="coming-soon-detail">
              <div>
                <div className="logo">
                  <Link href="/home/cab/modern">
                    <Img src="/assets/images/icon/footer-logo.png" alt="" className="img-fluid" />
                  </Link>
                </div>
                <h2>Will be Opening Soon!</h2>
                <div className="timer">
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
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()} className="theme-form">
                  <input type="text" name="password" placeholder="Enter your email" id="name" className="form-control" autoFocus={false} />
                  <div className="col-md-12">
                    <div className="actions">
                      <Button btnClass="btn btn-solid btn-pill" name="notify me" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonContent3;