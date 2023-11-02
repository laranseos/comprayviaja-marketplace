import { FC } from "react";

const BodyContent: FC = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h5 className="card-header">Ratio Classes: Change your image proportion by just adding class</h5>
              <div className="card-body">
                <h5>If you use image as background than add class ".bg-img" in image and add below class in parent.</h5>
                <h5>.ratio_40 - 40%</h5>
                <h5>.ratio_45 - 45%</h5>
                <h5>.ratio2_1 - 50%</h5>
                <h5>.ratio2_3 - 60%</h5>
                <h5>.ratio3_2 - 66.66%</h5>
                <h5>.ratio_landscape - 75%</h5>
                <h5>.ratio_square - 100%</h5>
                <h5>.ratio_asos - 127.77%</h5>
                <h5>.ratio_portrait - 150%</h5>
                <h5>.ratio1_2 - 200%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
