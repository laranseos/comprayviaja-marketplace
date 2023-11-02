"use client";
import { RightNavMenuItem, currencyDropDownData, languageDropDownData } from "@/constant/menu";
import { Fragment, useState } from "react";
import Link from "next/link";
import Currency from "./currency";
import Language from "./language";
import { IHeaderRightProps } from "./header-right";

const HeaderRight: React.FC<IHeaderRightProps> = ({ userBgClass }) => {
  const [settingIcon, setSettingIcon] = useState(false)
  return (
    <ul className="header-right">
      {RightNavMenuItem.map((value, i) => (
        <Fragment key={i}>
          {value.title === "currency" && <Currency value={value} />}
          {value.title === "language" && <Language value={value} />}
          {value.title === "user" && (
            <li className={`${userBgClass && userBgClass}`} >
              <Link href="/pages/other-pages/login">
                <i className="fas fa-user"></i>
              </Link>
            </li>
          )}
          {value.title === "setting" && (
            <li className="setting">
              <a href="#js"  onClick={()=>setSettingIcon(!settingIcon)}>
                <i className="fas fa-cog" />
              </a>
              <ul className={`setting-open ${settingIcon ?"show ":""} `}>
                <Currency value={currencyDropDownData} />
                <Language value={languageDropDownData} />
              </ul>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default HeaderRight;
