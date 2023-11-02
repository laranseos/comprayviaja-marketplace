import { FC } from "react";
import { Discover } from "@/constant/constant";
import Link from 'next/link'

const AboutDetails: FC = () => {
  return (
    <div className="about-text">
      <div>
        <h5>
          <span>new</span> offer...
        </h5>
        <h3>call us to Book a taxi</h3>
        <h2>(964) 444-9000</h2>
        <p>The operator will call back immediately and report the cost of travel.. </p>
        <Link href="/pages/other-pages/contact-us-2" className="btn btn-curve btn-lower">
          {Discover}
        </Link>
      </div>
    </div>
  );
};

export default AboutDetails;
