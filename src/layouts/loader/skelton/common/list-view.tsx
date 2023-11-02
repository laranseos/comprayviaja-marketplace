const SkeletonList = () => {
  const renderListItems = () => {
    const items = [];
    const numProducts = 6;
    for (let i = 0; i < numProducts; i++) {
      items.push(
        <div key={i} className="list-box col-12 grid-item">
          <div className="list-img"></div>
          <div className="list-content">
            <div>
              <h5></h5>
              <p></p>
              <div className="rating"></div>
              <div className="facility-icon">
                <div className="facility-box"></div>
                <div className="facility-box"></div>
                <div className="facility-box"></div>
                <div className="facility-box"></div>
              </div>
              <div className="price">
                <span></span>
                <p className="mb-0"></p>
              </div>
              <div className="book-now d-none d-sm-block"></div>
            </div>
          </div>
        </div>,
      );
    }
    return items;
  };

  return <div className="list-view row content grid">{renderListItems()}</div>;
};

export default SkeletonList;
