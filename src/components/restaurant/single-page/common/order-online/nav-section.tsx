import React, { FC, useState } from "react";

const NavSection: FC<NavSectionProps> = ({ links }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderNavLink = (link: NavLink) => {
    if (link.sublinks && link.sublinks.length > 0) {
      return (
        <li key={link.label}>
          <a className="nav-link" href={link.href}>
            {link.label}
          </a>
          <nav className="nav nav-pills flex-column">
            {link.sublinks.map((sublink,index) => (
              <a className="nav-link ms-3" href={sublink.href} key={index}>
                {sublink.label}
              </a>
            ))}
          </nav>
        </li>
      );
    } else {
      return (
        <li key={link.label}>
          <a className="nav-link" href={link.href}>
            {link.label}
          </a>
        </li>
      );
    }
  };

  const filteredLinks = links.filter((link) => link.label.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <nav id="order-menu" className="order-menu">
      <div className="search-bar">
        <div className="search">
          <input type="text" placeholder="Search Dishes.." value={searchValue} onChange={handleSearchChange} />
          <i className="fas fa-search"></i>
        </div>
      </div>
      <nav className="nav nav-pills flex-column">
        <ul>{filteredLinks.map((link) => renderNavLink(link))}</ul>
      </nav>
    </nav>
  );
};

export default NavSection;
