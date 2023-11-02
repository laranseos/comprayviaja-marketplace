import { FC } from "react";
import Img from "@/utils/BackgroundImageRatio";
import Button from "../btn";
import Link from 'next/link';

const HomeBanner: FC = () => {
  return (
    <section className="order-food-section  pt-0">
      <Img src="/assets/images/restaurant/background/1.jpg" className="bg-img img-fluid" alt="" />
      <div className="order-food">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="book-table section-b-space p-0 single-table">
                <h3>The food you love, delivered with care</h3>
                <div className="table-form">
                  <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                    <div className="row w-100">
                      <div className="form-group col-md-4">
                        <input type="text" placeholder="enter your location" className="form-control" />
                      </div>
                      <div className="form-group col-md-5">
                        <input type="text" placeholder="what are you craving?" className="form-control" />
                      </div>
                      <div className="search col-md-3">
                        <Link href="/restaurant/listing/grid-view/grid-2" className="btn btn-rounded color1">find food</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
