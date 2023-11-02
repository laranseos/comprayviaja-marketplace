import { FC } from "react";

const SkeletonFilter: FC = () => {
  const filterItems = (count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(<li key={i}></li>);
    }
    return items;
  };

  const gridViews = [
    { layout: "product-2-layout-view", filters: 2 },
    { layout: "product-3-layout-view", filters: 3 },
  ];

  return (
    <div className="filter-panel">
      <div className="left-filter">
        <div className="respon-filter-btn">
          <h6></h6>
          <span className="according-menu"></span>
        </div>
        <div className="filters respon-filter-content filter-button-group">
          <ul>{filterItems(4)}</ul>
        </div>
      </div>
      <div className="right-panel">
        <div className="collection-grid-view">
          <ul>
            {gridViews.map((view, index) => (
              <li key={index}>
                <a href="#" className={view.layout}>
                  <ul className="filter-select">{filterItems(view.filters)}</ul>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkeletonFilter;
