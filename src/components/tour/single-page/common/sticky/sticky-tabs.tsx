import React, { FC, Fragment } from "react";

interface IStickyTabProps {
  fix: boolean;
  menuItems: {
    id: string;
    title: string;
  }[];
}

const StickyTabs: FC<IStickyTabProps> = ({ fix, menuItems }) => {
  return (
    <Fragment>
      <div className={`menu-top ${fix ? "sticky" : ""}`} id="navigation">
        <div className="container">
          <ul className="nav">
            {menuItems.map((menuItem,index) => (
              <li key={index} className={menuItem.id === "high-light" ? "active" : ""}>
                <a className="" href={`#${menuItem.id}`}>
                  {menuItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default StickyTabs;
