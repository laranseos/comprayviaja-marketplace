import Button from "@/components/common/btn";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <section className="small-section success-section">
      <div className="container">
        <div className="row success-detail mt-0">
          <div className="col">
            <Img src="/assets/images/restaurant/serving-dish.png" className="img-fluid" alt="" />
            <h2>oops ! no food or restaurant found</h2>
            <p>We can’t find anything related to your search. Try a different search.</p>
            <Button btnClass="btn  btn-solid color1" name="search again" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
