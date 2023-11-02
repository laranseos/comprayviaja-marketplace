"use client"
import { FC } from "react";

interface INewLatterProps {
  titleClass: string;
}
const NewsLatterContent: FC<INewLatterProps> = ({ titleClass }) => {
  return (
    <div className={titleClass}>
      <div className="newsletter-sec">
        <div>
          <h4 className="title">always first</h4>
          <p>Be the first to find out latest tours and exclusive offers and get 15% off your first booking.</p>
          <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
            <input type="email" id="email1" className="form-control" placeholder="Enter your email" />
            <div className="button">
              <a href="#" className="btn btn-solid ">
                be the first
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLatterContent;
