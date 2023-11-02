import { FC } from "react";
const ContactForm: FC = () => {
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
      <div className="row">
        <div className="form-group col-md-6">
          <input type="text" className="form-control" id="name" placeholder="first name" required={true} />
        </div>
        <div className="form-group col-md-6">
          <input type="text" className="form-control" id="last-name" placeholder="last name" required={true} />
        </div>
        <div className="form-group col-lg-6">
          <input type="text" className="form-control" id="review" placeholder="phone number" required={true} />
        </div>
        <div className="form-group col-lg-6">
          <input type="text" className="form-control" id="email" placeholder="email address" required={true} />
        </div>
        <div className="form-group col-md-12">
          <textarea className="form-control" placeholder="Write Your Message" id="exampleFormControlTextarea1" rows={6}></textarea>
        </div>
        <div className="col-md-12 submit-btn">
          <button className="btn btn-solid" type="submit">
            Send Your Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
