"use client";

import { useTranslation } from "@/app/i18n/client";
import { RootState } from "@/redux-toolkit/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import useMobileSize from "./useMobileSize";

const MeghaMenu = ({ item, setIsOpen, isOpen }: IMeghaMenuProps) => {
  const mobileSize = useMobileSize();
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const { t } = useTranslation(i18LangStatus);

  return (
    <li className="mega-menu">
      <Link
        onClick={(e) => {
          e.preventDefault();
          const temp = isOpen.slice();
          temp[0] = item.title !== temp[0] && item.title;
          setIsOpen(temp);
        }}
        href={"#javascript"}
        className={`nav-link menu-title ${
          item.title === isOpen[0] ? "active" : ""
        }`}
      >
        {item.title ? t(item.title) : ""}
        {mobileSize && (
          <span className="according-menu">
            {isOpen[0] === item.title ? "-" : "+"}
          </span>
        )}
      </Link>
      <div
        className={`mega-menu-container menu-content ${
          item.title === isOpen[0] ? "d-block" : "d-none"
        }`}
      >
        <div className="container">
          <div className="row">
            {item.children?.map((data, index) => (
              <div className="col mega-box" key={index}>
                {data.children?.map((item1, i) => (
                  <div className="link-section" key={i}>
                    <div
                      className={`submenu-title ${
                        isOpen[1] == item1.title ? "active" : ""
                      }`}
                    >
                      <h5
                        onClick={(e) => {
                          e.preventDefault();
                          const temp = isOpen.slice();
                          temp[1] = item1.title !== temp[1] && item1.title;
                          setIsOpen(temp);
                        }}
                      >
                        {item1.title}
                      </h5>
                      {mobileSize && (
                        <span className="according-menu">
                          {isOpen[1] === item1.title ? "-" : "+"}
                        </span>
                      )}
                    </div>
                    <div
                      className={`submenu-content opensubmegamenu ${
                        mobileSize &&
                        (isOpen[1] == item1.title ? "d-block" : "d-none")
                      }`}
                    >
                      <ul className="list">
                        {item1.children?.map((child, i2) => (
                          <li key={i2}>
                            <Link href={`${child.path}`}>{child?.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MeghaMenu;
