import { FC } from "react";

const VideoBanner: FC = () => {
  return (
    <section className="home_section p-0">
      <div className="home home-70" id="block" style={{ width: "100%" }} data-vide-bg="W/assets/video/city.mp4" data-vide-options="position: left, loop: true">
        <video autoPlay muted loop id="block" className="bg-video" style={{ width: "100%" }}>
          <source src={"/assets/video/city.mp4"} type="video/mp4" />
        </video>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="home-content mix-layout mrg-cls pt-0">
                <div>
                  <h1>splendid spain</h1>
                  <ul className="package-detail">
                    <li>
                      <i className="far fa-calendar-alt"></i>7 days
                    </li>
                    <li>
                      <i className="fas fa-plane"></i>11 dec, 2023
                    </li>
                    <li>
                      <i className="fas fa-download"></i>
                      <a href="#">download pdf</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
