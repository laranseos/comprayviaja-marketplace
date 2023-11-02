"use client";
import Loader from "./loader/page";
import { ReactNode } from "react";
import HeaderRight from "./header/header-right/page";
import Logo from "./header/logo/page";
import Sidebar from "./header/menus/page";
import CoupenCode from "./header/header-right/coupen-code";
import FooterMain from "./footer/page";
import LoaderFood from "./loader/loader-food";
import TapToTop from "./tab-to-top/page";
import PreLoader from "./loader/skelton/pre-loader";
import GoodLoader from "./loader/loader-good-luck";
import LoaderFlight from "./loader/loader-flight";
import CustomizePage from "./customizer/page";
import MapLoader from "./loader/skelton/map-loader";

interface CustomLayoutProps {
  children: ReactNode;
  title?: string;
  logo?: string;
  footerPlace?: boolean;
  userBgClass?: string;
  footer?: string;
  coupon?: boolean;
  hideFooter?: boolean;
  footerClass?: string;
  loader?: string;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children, title, logo, footerPlace, userBgClass, footer, coupon, hideFooter, loader }) => {
  return (
    <>
      {loader === "food" ? (
        <LoaderFood loaderTimeout={5000} />
      ) : loader === "pre" ? (
        <PreLoader loaderTimeout={5000} side={"left"} />
      ) : loader === "right" ? (
        <PreLoader loaderTimeout={5000} side={"right"} />
      ) : loader === "no-sidebar" ? (
        <PreLoader loaderTimeout={5000} side={"no"} />
      ) : loader === "map-loader" ? (
        <MapLoader loaderTimeout={5000} side={"right"} />
      ) : loader === "map-left" ? (
        <MapLoader loaderTimeout={5000} side={"left"} />
      ) : loader === "good" ? (
        <GoodLoader loaderTimeout={5000} />
      ) : loader === "flight" ? (
        <LoaderFlight loaderTimeout={5000} />
      ) : loader === "no" ? (
        ""
      ) : (
        <Loader loaderTimeout={5000} />
      )}
      <header className={title}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="menu">
                <Logo logo={logo} />
                <Sidebar />
                {coupon ? <CoupenCode /> : <HeaderRight userBgClass={userBgClass} />}
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      {!hideFooter && <FooterMain footerType={footer} footerPlaceCom={footerPlace} />}
      <TapToTop />
      <CustomizePage />
    </>
  );
};

export default CustomLayout;
