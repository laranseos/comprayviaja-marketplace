import { FC } from "react";
import { AppStore, PlayStore } from "@/constant/constant";

interface IAppBtnProps {
  classWhite?: boolean | undefined;
}

const AppBtn: FC<IAppBtnProps> = ({ classWhite }) => {
  return (
    <div className="app-buttons">
      <a href="https://www.apple.com/ios/app-store/" target="_blank" className={`btn btn-curve ${classWhite && "white-btn"}`}>
        <i className="fab fa-apple"></i> {AppStore}
      </a>
      <a href="https://play.google.com/store?hl=en" target="_blank" className="btn btn-curve white-btn">
        <i className="fab fa-android"></i> {PlayStore}
      </a>
    </div>
  );
};

export default AppBtn;
