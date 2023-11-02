import { FC, useEffect, useState } from "react";
import { languageOptions, menuItems, settingsOptions } from "./data";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { useTranslation } from "@/app/i18n/client";

interface SelectOption {
  value: string;
  label: string;
}

const SkeletonHeader: FC = () => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const { t } = useTranslation(i18LangStatus);

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <li key={index} className="dropdown">
        <a href={item.link} className="nav-link menu-title">
          {t(item.title)}
        </a>
      </li>
    ));
  };

  const renderSelectOptions = (options: SelectOption[], type: string) => {
    
    if (type === "lang") {
      return options.map((option, index) => (
        <option key={index}  >
          {option.label}
        </option>
      ));
    } else {
      return options.map((option, index) => (
        <option key={index}  >
          {option.label}
        </option>
      ));
    }
  };

  return (
    <header className="inner-page">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="menu">
              <div className="brand-logo">
                <Link href="/">
                  <img src="/assets/images/icon/footer-logo.png" alt="" className="img-fluid" />
                </Link>
              </div>
              <nav>
                <div className="main-navbar">
                  <div>
                    <div className="toggle-nav">
                      <i className="fa fa-bars sidebar-bar"></i>
                    </div>
                    <div className="menu-overlay"></div>
                    <ul className="nav-menu">{renderMenuItems()}</ul>
                  </div>
                </div>
              </nav>
              <ul className="header-right">
                <li className="front-setting">
                  <select>{renderSelectOptions(settingsOptions, "currency")}</select>
                </li>
                <li className="front-setting">
                  <select>{renderSelectOptions(languageOptions, "lang")}</select>
                </li>
                <li className="user user-light">
                  <a href="#">
                    <i className="fas fa-user"></i>
                  </a>
                </li>
                <li className="setting">
                  <a href="#">
                    <i className="fas fa-cog"></i>
                  </a>
                  <ul className="setting-open">
                    <li className="front-setting">
                      <select>{renderSelectOptions(settingsOptions, "currency")}</select>
                    </li>
                    <li className="front-setting">
                      <select>{renderSelectOptions(languageOptions, "lang")}</select>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SkeletonHeader;
