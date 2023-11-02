import { useTranslation } from "@/app/i18n/client";
import { RootState } from "@/redux-toolkit/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import useMobileSize from "./useMobileSize";


const DropdownMenu: React.FC<IDropdownMenuProps> = ({item,level,setIsOpen,isOpen}) => {
  const { i18LangStatus } = useSelector((state: RootState) => state.language);
  const { t } = useTranslation(i18LangStatus,"translation");
  const hasChildren = item.children && item.children.length > 0;
  const itemClass = `level${level}`;
  const subClasses = `${
    itemClass === "level0"? "nav-submenu submenu-content": itemClass === "level1"? "nav-sub-childmenu level1": itemClass === "level2"? "nav-sub-childmenu submenu-content level2": itemClass === "level3"? "nav-sub-childmenu submenu-content level3": ""}`;
    const mobileSize = useMobileSize();

  return (
    <li className={`${itemClass === "level0" ? "dropdown" : ""}`}>
      <Link
        onClick={(e) => {
          if(item.type !== "link"){e.preventDefault()} 
          const temp = isOpen.slice();
          temp[level] = item.title !== temp[level] && item.title;
          setIsOpen(temp);
        }}
        href={item?.type !== "sub" ? `/${i18LangStatus}${item?.path}` : "#js"}
        className={` ${hasChildren ? "nav-link menu-title " : ""} ${isOpen[level] === item.title ? " active" : ""} `}
      >
        {item.title ? t(item.title) : ""}
        {mobileSize && item.type === "sub" && (
          <span className="according-menu">
            {isOpen.includes(item.title) ? "-" : "+"}
          </span>
        )}
        
      </Link>
      {hasChildren && (
        <ul
          className={`${subClasses} ${
            isOpen[level] === item.title ? " d-block" : ""
          } `}
        >
          {item.children?.map((child, index) => (
            <DropdownMenu key={index} item={child} level={level + 1} setIsOpen={setIsOpen} isOpen={isOpen}/>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
