import { FC } from "react";

const BtnBlock: FC = () => {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <h3 className="font-weight-bold">Button block</h3>
        </div>
        <div className="card-body">
          <div className="btn-group-showcase d-grid">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Block level button
            </button>
            <button type="button" className="btn btn-secondary btn-lg btn-block ms-0">
              Block level button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnBlock;
