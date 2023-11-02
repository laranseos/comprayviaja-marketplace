import { FC } from "react";

const Gallery: FC = () => {
  return (
    <div className="menu-part tab-pane" id="gallery">
      <div className="container-fluid p-0 ratio3_2">
        <div className="row  zoom-gallery">
          <div className="col-lg-4 col-sm-6">
            <div className="overlay">
              <a href="/assets/images/restaurant/environment/1.jpg">
                <div className="overlay-background">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <img src="/assets/images/restaurant/environment/1.jpg" alt="" className="img-fluid  bg-img" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="overlay">
              <a href="/assets/images/restaurant/environment/2.jpg">
                <div className="overlay-background">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <img src="/assets/images/restaurant/environment/2.jpg" alt="" className="img-fluid  bg-img" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="overlay">
              <a href="/assets/images/restaurant/environment/3.jpg">
                <div className="overlay-background">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <img src="/assets/images/restaurant/environment/3.jpg" alt="" className="img-fluid  bg-img" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="overlay">
              <a href="/assets/images/restaurant/environment/4.jpg">
                <div className="overlay-background">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <img src="/assets/images/restaurant/environment/4.jpg" alt="" className="img-fluid  bg-img" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="overlay">
              <a href="/assets/images/restaurant/environment/5.jpg">
                <div className="overlay-background">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <img src="/assets/images/restaurant/environment/5.jpg" alt="" className="img-fluid  bg-img" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="overlay">
              <a href="/assets/images/restaurant/environment/6.jpg">
                <div className="overlay-background">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <img src="/assets/images/restaurant/environment/6.jpg" alt="" className="img-fluid  bg-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
