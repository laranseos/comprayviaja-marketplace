import { MultiCityRoute, NonStopFlights } from "@/constant/constant";
import { FC } from "react";

const SelectRoute: FC = () => {
  return (
    <form className="radio-form" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
      <input id="radio-1" type="radio" name="gender" value="in city" defaultChecked />
      <label htmlFor="radio-1" className="radio-label">
        {MultiCityRoute}
      </label>
      <input id="radio-2" type="radio" name="gender" value="out of city" />
      <label htmlFor="radio-2" className="radio-label">
        {NonStopFlights}
      </label>
    </form>
  );
};

export default SelectRoute;
