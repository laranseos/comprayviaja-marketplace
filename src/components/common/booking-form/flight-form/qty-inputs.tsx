import { FC, useState } from "react";

const QuantityInput: FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleMinusClick = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="input-group">
      <button type="button" className="btn qty-left-minus" data-type="minus" data-field="" tabIndex={0} onClick={handleMinusClick}>
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
      <input type="text" name="quantity" className="form-control input-number qty-input" value={quantity} tabIndex={0} readOnly />
      <button type="button" className="btn qty-right-plus" data-type="plus" data-field="" tabIndex={0} onClick={handlePlusClick}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default QuantityInput;
