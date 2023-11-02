import { LeaveAComment, PostComment } from "@/constant/constant";
import { FC } from "react";

const LeaveComment: FC = () => {
  return (
    <div className="leave-comment">
      <h4 className="comment">{LeaveAComment}</h4>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <div className="row">
          <div className="form-group col-md-6">
            <input className="form-control" placeholder="Enter Your Name" required={true} type="text" />
          </div>
          <div className="form-group col-md-6">
            <input className="form-control" id="inputEmail4" placeholder="Enter Your Email" required={true} type="email" />
          </div>
          <div className="form-group col-md-12">
            <textarea className="form-control" id="exampleTextarea" placeholder="Leave a Comment" required={true} rows={4}></textarea>
          </div>
        </div>
        <div className="submit-btn">
          <button className="btn btn-solid" type="submit">
            {PostComment}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeaveComment;
