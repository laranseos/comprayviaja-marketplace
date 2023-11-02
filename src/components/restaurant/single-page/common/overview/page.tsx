import { FC } from "react";

const Overview: FC = () => {
  return (
    <div className="menu-part about tab-pane " id="overview">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="about-sec">
              <h6>Phone number: 09876543210</h6>
            </div>
            <div className="about-sec">
              <h6>cuisine</h6>
              <ul>
                <li>Fast Food</li>
                <li>cafe</li>
                <li>italian</li>
              </ul>
            </div>
            <div className="about-sec">
              <h6>opening hours</h6>
              <ul>
                <li>Monday to Friday: 11.00 a.m. to 11.00 p.m.</li>
                <li>Saturday & Sunday: 10.00 a.m. to 12.00 p.m.</li>
              </ul>
            </div>
            <div className="about-sec">
              <h6>address</h6>
              <ul>
                <li>9716 Riverside Dr, Mays Landing, NJ 08330</li>
                <li>24 Lafayette Drive, Ladson, SC 29456</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="about-sec mt-sm-0 mt-2">
              <h6>facility</h6>
              <ul>
                <li>card accepted</li>
                <li>parking availble</li>
                <li>banquet area</li>
                <li>home delivery</li>
                <li>table booking</li>
                <li>available for events</li>
                <li>game zone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
