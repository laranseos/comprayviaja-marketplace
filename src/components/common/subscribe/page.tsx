import { FC } from "react";
import { OurNews, Subscribe, SubscribeOurNews } from "@/constant/constant";
import Link from "next/link";

const SubscribeOne: FC<ISubscribeOneProps> = ({ classSub }) => {
  return (
    <section className={`subscribe_section medium-section ${classSub && classSub}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="subscribe-detail">
              <div>
                <h2>
                  {SubscribeOurNews} <span>{OurNews}</span>
                </h2>
                <p>Subscribe and receive our newsletters to follow the news about our fresh and fantastic products</p>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="input-section">
              <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" />
              <Link href="/" className="btn btn-solid">{Subscribe}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeOne;
