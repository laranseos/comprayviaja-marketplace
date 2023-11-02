import { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";

const NotFound: FC = () => {
  return (
    <section className="bg-inner small-section success-section">
      <div className="container">
        <div className="row success-detail mt-0">
          <div className="col">
            <Img src="/assets/images/flights/plane.png" className="img-fluid" alt="" />
            <h2>oops ! no flight found</h2>
            <p>no flights were found for this route and date combination. modify your search and try again</p>
            <button type="submit" className="btn  btn-solid color1">
              search again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
