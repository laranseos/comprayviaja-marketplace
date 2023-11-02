import { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link'

const ComingSoonContent: FC = () => {
  return (
    <div className="coming-soon ripple-effect">
      <Img src="/assets/images/inner-pages/coming-soon.jpg" alt="" className="img-fluid bg-img" />
      <div className="object">
        <div className="object-rope"></div>
        <div className="object-shape">
          Coming <span className="soon">Soon</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="offset-lg-4 col-lg-4 offset-md-3 col-md-6">
            <div className="coming-soon-detail">
              <div>
                <div className="logo">
                  <Link href="/home/cab/modern">
                    <Img src="/assets/images/icon/footer-logo.png" alt="" className="img-fluid" />
                  </Link>
                </div>
                <h2>Will be Opening Soon!</h2>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()} className="theme-form w-100">
                  <input type="text" name="password" id="name" className="form-control" autoFocus={true} placeholder="Enter your email address" />
                  <div className="col-md-12">
                    <div className="actions">
                      <button type="button" className="btn btn-solid">
                        notify me
                      </button>
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
export default ComingSoonContent;
