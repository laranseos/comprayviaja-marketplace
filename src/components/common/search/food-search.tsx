import { FC } from "react";
import Button from "../btn";
import { FindFood } from "@/constant/constant";

const FoodSearch: FC = () => {
  return (
    <div className="search-panel">
      <div className="search-section">
        <div className="search-box">
          <div className="left-part">
            <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
              <div className="search-body title-hotel">
                <h6>rica</h6>
                <input name="text" placeholder="restaurant" className="form-control" />
              </div>
              <div className="search-body">
                <h6>your location</h6>
                <input type="text" placeholder="enter your location" className="form-control" />
              </div>
              <div className="search-body">
                <h6>search food..</h6>
                <input type="text" placeholder="what are you craving?" className="form-control" />
              </div>
              <div className="search-body btn-search">
                <div className="right-part">
                  <Button btnClass="btn btn-solid color1" name={FindFood} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSearch;
