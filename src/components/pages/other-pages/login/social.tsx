import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const SocialContent: FC<ILoginPageProps> = ({ title }) => {
  return (
    <div className="login-with">
      <h6>{title} with</h6>
      <div className="login-social row">
        <div className="col">
          <a className="boxes" href="https://www.facebook.com/" target="_blank">
            <Img src="/assets/images/icon/social/facebook.png" className="img-fluid" alt="" />
            <h6>facebook</h6>
          </a>
        </div>
        <div className="col">
          <a className="boxes" href="https://accounts.google.com/" target="_blank">
            <Img src="/assets/images/icon/social/google.png" className="img-fluid" alt="" />
            <h6>google</h6>
          </a>
        </div>
      </div>
      <div className="divider">
        <h6>OR</h6>
      </div>
    </div>
  );
};
export default SocialContent;
