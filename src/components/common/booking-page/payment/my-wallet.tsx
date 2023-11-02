import { FC, useState } from "react";
import SuccessBtn from "@/components/hotels/booking/checkout/payment-section/success-btn";
import { SelectYourWallet } from "@/constant/constant";
import { options } from "@/data/hotels/booking";

const MyWallet: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="card-body">
      <form className="wallet-section" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <h6>{SelectYourWallet}</h6>
        <div className="row">
          {options.map((option,index) => (
            <div className="form-check col-md-6" key={index}>
              <input className="form-check-input radio_animated" type="radio" name="exampleRadios2" id={option.id} value={option.value} checked={selectedOption === option.id} onChange={handleOptionChange} />
              <label className="form-check-label" htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <SuccessBtn />
      </form>
    </div>
  );
};

export default MyWallet;
