import { FC } from "react";

const ButtonGroupPage: FC = () => {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-header">
          <h3 className="font-weight-bold">Button group</h3>
        </div>
        <div className="card-body">
          <div className="btn-group">
            <a href="#" className="btn btn-primary active" aria-current="page">
              Active link
            </a>
            <a href="#" className="btn btn-primary">
              Link
            </a>
            <a href="#" className="btn btn-primary">
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGroupPage;
