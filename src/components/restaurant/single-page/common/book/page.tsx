import { FC } from "react";

const BookPage: FC = () => {
  return (
    <div className="menu-part tab-pane" id="book">
      <div className="table-book">
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
          <div className="row form-group">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col-sm-6">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div className="col-sm-6">
              <input type="number" className="form-control" placeholder="Phone No:" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input id="datetimepicker" className="form-control" placeholder="Choose Date & Time" />
            </div>
            <div className="col-sm-6">
              <input type="number" className="form-control" placeholder="Person" />
            </div>
          </div>
          <div className="text-end">
            <a href="#" className="btn btn-solid">
              submit
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookPage;
