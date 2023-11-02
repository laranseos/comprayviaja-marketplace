import { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";
import Link from "next/link";

const Error404Content: FC = () => {
  return (
    <section className=" section-b-space bg-inner success-section">
      <div className="container">
        <div className="row success-detail mt-0">
          <div className="col">
            <Img src="/assets/images/icon/failure-icon.png" className="img-fluid" alt="" />
            <h2>404 ! that's an error</h2>
            <p>we are sorry but the page you are looking for doesn't exist or has been removed. please check back later or search again.</p>
            <Link href="/"><button type="submit" className="btn btn-solid color1">
              go to home page
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404Content;
