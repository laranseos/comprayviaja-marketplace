import { FC } from "react";

const TopTitleBar:FC = () => {
  return (
    <div className="top-title-bar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hotel_title_section">
              <div className="left-part">
                <h2>italian restro</h2>
                <h6>Fast Food, Cafe, Italian</h6>
              </div>
              <div className="right-part">
                <ul>
                  <li>4.5 rating</li>
                  <li>30 mins</li>
                  <li>$25 for 2</li>
                </ul>
                <h6>9716 Riverside Dr, Mays Landing, NJ 08330</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTitleBar;
