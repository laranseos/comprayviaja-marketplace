import { About } from "@/constant/constant";
import Link from 'next/link';

const AboutComponent: React.FC = () => {
  return (
    <div className="col-xl-2 col-md-3">
      <div className="footer-space">
        <div className="footer-title">
          <h5>{About}</h5>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li>
                <Link href="/pages/other-pages/about-us-1">about us</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/login">login</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/register">register</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/user-dashboard">terms & co.</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/user-dashboard">privacy</Link>
              </li>
              <li>
                <Link href="https://support.pixelstrap.com/">support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
