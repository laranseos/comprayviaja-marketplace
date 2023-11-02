import { FC } from "react";
import FormOne from "@/components/common/booking-form/form1";
import TitleThree from "@/components/common/title/title-three";
import { Rica, Search, WelcomeToRica, Lorem } from "@/constant/constant";

const SearchTrending: FC = () => {
  return (
    <section className="section-b-space pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search_section">
              <TitleThree title={Rica} span={Search} classTitle="title-3 detail-title" subTitle={WelcomeToRica} desc={Lorem} />
              <div className="book-table single-table input-radius-cls">
                <div className="table-form classic-form p-0 tour-trending-form">
                  <FormOne />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTrending;
