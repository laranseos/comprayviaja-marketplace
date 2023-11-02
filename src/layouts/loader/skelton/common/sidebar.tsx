import { FC } from "react";

interface SearchField {
  label: string;
}

const searchFields: SearchField[] = [{ label: "" }, { label: "" }, { label: "" }, { label: "" }];

const SkeletonSearch: FC = () => {
  const renderSearchFields = () => {
    return searchFields.map((field, index) => (
      <div key={index} className="filter-block">
        <div className="collection-collapse-block open">
          <h6>{field.label}</h6>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <div className="form-check collection-filter-checkbox">
                <input className="form-check-input" />
                <label className="form-check-label"></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="left-sidebar">
      <div className="search-bar">
        <input />
      </div>
      <div className="middle-part collection-collapse-block open">
        <a href="#" className="section-title collapse-block-title">
          <h5></h5>
        </a>
        <div className="collection-collapse-block-content ">{renderSearchFields()}</div>
      </div>
    </div>
  );
};

export default SkeletonSearch;
