import MENUITEMS from "@/constant/menu";
import { Back } from "@/constant/constant";
import {Fragment, useState} from 'react';
import MeghaMenu from "./meghamenu";
import DropdownMenu from "./dropdown";

const Sidebar: React.FC = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false)
  const [isOpen, setIsOpen] = useState([]);
  const [isOpenChild, setIsOpenChild] = useState();
  const [isOpenNestedChild, setIsOpenNestedChild] = useState();


  return (
    <nav>
      <div className="main-navbar">
        <div id="main-nav">
          <div className="toggle-nav">
            <i className="fa fa-bars sidebar-bar" onClick={()=>setToggleSideBar(!toggleSideBar)}></i>
          </div>
          <div className={`menu-overlay ${toggleSideBar?"show":""}`}></div>
          <ul className="nav-menu" style={{ right: toggleSideBar ? "0px" : "" }}>
            <li className="back-btn">
              <div
                className="mobile-back text-end"
                onClick={() => setToggleSideBar(!toggleSideBar)}
              >
                <span>{Back}</span>
                <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
              </div>
            </li>
            {MENUITEMS.map((item, i) => {
              return (
                <Fragment key={i}>
                  {item.megaMenu ? (
                    <MeghaMenu item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
                  ) : (
                    <DropdownMenu level={0} item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
                  )}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
