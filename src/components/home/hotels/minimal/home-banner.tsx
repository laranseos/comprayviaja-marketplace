import { SearchNow, WelcomeToRica } from "@/constant/constant";
import Typewriter from "typewriter-effect";
import SearchMinimal from "./search";
import Img from "@/utils/BackgroundImageRatio";
import Link from 'next/link';

const HomeBanner: React.FC = () => {
  return (
    <section className="home_section mrg-cls p-0">
      <div>
        <div className="home home-long home-full search-bottom black-layer">
          <Img src="/assets/images/hotel/background/9.jpg" className="bg-img img-fluid" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-content d-none d-lg-block banner-center-text">
                  <div>
                    <h4>{WelcomeToRica}</h4>
                    <h1>
                      <Typewriter
                        options={{
                          strings: ["Find Deals On"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                      <span className="txt-rotate" data-period="2000" data-rotate='[ "hotels.", "homes.", "Hostels.", "villas.", "apts." ]'></span>
                    </h1>
                    <Link href="/hotel/single-page/left-sidebar" className="btn btn-solid d-none d-lg-inline-block">
                      {SearchNow}
                    </Link>
                  </div>
                </div>
                <SearchMinimal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBanner;
