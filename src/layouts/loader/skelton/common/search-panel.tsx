import { FC } from "react";

interface SearchField {
  label: string;
}

const searchFields: SearchField[] = [{ label: "" }, { label: "" }, { label: "" }, { label: "" }];

const SkeletonSearch: FC = () => {
  const renderSearchFields = () => {
    return searchFields.map((field, index) => (
      <div key={index} className="search-body">
        <h6>{field.label}</h6>
        <input className="form-control" />
      </div>
    ));
  };

  return (
    <section className="bg-white pt-0 search-panel">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search-section">
              <div className="search-box">
                <div className="left-part">
                  {renderSearchFields()}
                  <div className="search-body btn-search">
                    <div className="right-part">
                      <div className="ldr-btn"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonSearch;
