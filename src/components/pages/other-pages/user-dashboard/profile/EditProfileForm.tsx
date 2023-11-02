import React from "react";

const EditProfileForm = () => {
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}> 
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="first">first name</label>
          <input
            type="text"
            className="form-control"
            id="first"
            placeholder="first name"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last">last name</label>
          <input
            type="text"
            className="form-control"
            id="last"
            placeholder="last name"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="gender">gender</label>
          <select id="gender" className="form-control">
            <option selected>Choose...</option>
            <option>female</option>
            <option>male</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label>birthday</label>
          <div
            role="wrapper"
            className="gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group"
          >
            <input
              className="form-control"
              placeholder="18 april"
              id="datepicker"
              data-type="datepicker"
              data-guid="797974df-8e47-e42e-3caf-112ae40e83f8"
              data-datepicker="true"
              role="input"
            />
            <span className="input-group-append" role="right-icon">
              <button
                className="btn btn-outline-secondary border-left-0"
                type="button"
              >
                <i className="gj-icon">event</i>
              </button>
            </span>
          </div>
        </div>
        <div className="form-group col-12">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-group col-md-5">
          <label htmlFor="inputCity">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <select id="inputState" className="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputZip">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
