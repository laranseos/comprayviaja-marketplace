import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const NotFoundComponent: FC = () => {
  return (
    <>
      <section className="small-section success-section">
        <div className="container">
          <div className="row success-detail mt-0">
            <div className="col">
              <Img src="/assets/images/cab/car/2.png" className="img-fluid " alt="" />
              <h2>oops ! no cars found</h2>
              <p>no cars were found for this route and date combination. modify your search and try again</p>
              <button type="submit" className="btn  btn-solid color1">
                search again
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundComponent;
