import { UserSvg } from "@/data/svg/page-svg";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const UserDetail: FC = () => {
  return (
    <div className="profile-top">
      <div className="profile-image">
        <Img src="/assets/images/avtar/1.jpg" className="img-fluid" alt="" />
        <a className="profile-edit" href="#">
          <UserSvg />
        </a>
      </div>
      <div className="profile-detail">
        <h5>mark enderess</h5>
        <h6>+91 123 - 456 - 7890</h6>
        <h6>mark.enderess@mail.com</h6>
      </div>
    </div>
  );
};

export default UserDetail;
