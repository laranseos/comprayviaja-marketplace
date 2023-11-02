import { UsefulLinks } from "@/constant/constant";
import Link from 'next/link';

const Links: React.FC = () => {
  return (
    <div className="col-xl-2 col-md-3 order-cls">
      <div className="footer-space">
        <div className="footer-title">
          <h5>{UsefulLinks}</h5>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li>
                <Link href="/home/hotels/classic">home</Link>
              </li>
              <li>
                <Link href="/home/cab/modern">our vehical</Link>
              </li>
              <li>
                <Link href="/pages/element-pages/video">latest video</Link>
              </li>
              <li>
                <Link href="/pages/element-pages/service">services</Link>
              </li>
              <li>
                <Link href="/tour/booking/booking-page">booking deal</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/contact-us-1">emergency call</Link>
              </li>
              <li>
                <Link href="/pages/element-pages/app">mobile app</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
