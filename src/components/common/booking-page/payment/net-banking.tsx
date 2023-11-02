import { FC, SetStateAction, useState } from "react";
import SuccessBtn from "@/components/hotels/booking/checkout/payment-section/success-btn";
import { netBankingOptions, options } from "@/data/hotels/booking";

const NetBanking: FC = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].id);

  const handleOptionChange = (event: { target: { id: SetStateAction<string> } }) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div className="card-body">
      <form className="wallet-section" onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
        <h6>select popular banks</h6>
        <div className="row">
          {netBankingOptions.map((option,index) => (
            <div className="form-check col-md-6" key={index}>
              <input className="form-check-input radio_animated" type="radio" name="exampleRadios1" id={option.id} value={option.value} checked={selectedOption === option.id} onChange={handleOptionChange} />
              <label className="form-check-label" htmlFor={option.id}>
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="net-b">select bank</label>
          <select id="net-b" className="form-control">
            <option>Choose Bank...</option>
            {netBankingOptions.map((option,index) => (
              <option key={index}>{option.label}</option>
            ))}
          </select>
        </div>
        <SuccessBtn />
      </form>
    </div>
  );
};

export default NetBanking;
