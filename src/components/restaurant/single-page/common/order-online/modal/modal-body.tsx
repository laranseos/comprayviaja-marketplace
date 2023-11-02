import { FC, useState } from "react";

interface Option {
  id: string;
  label: string;
  price?: number;
  type: "radio" | "checkbox";
  checked?: boolean;
}

const BodyContent: FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { id: "size1", label: "15 Cm [6 Inches]", type: "radio" },
    { id: "size2", label: "30 Cm [12 Inches]", type: "radio" },
    { id: "cheese", label: "extra cheese", price: 2, type: "checkbox" },
    { id: "jalapeno", label: "jalapeno", price: 5, type: "checkbox" },
    { id: "olive", label: "olive", type: "checkbox" },
    { id: "corn", label: "golden corn", price: 5, type: "checkbox" },
  ]);
  const handleOptionChange = (optionId: string, checked: boolean) => {
    const updatedOptions = options.map((option) => ({
      ...option,
      checked: option.id === optionId ? checked : option.type === "radio" ? false : option.checked,
    }));
    setOptions(updatedOptions);
  };
  return (
    <div className="size-option">
      {["Size", "Extra Toping"].map((groupTitle) => (
        <div key={groupTitle}>
          <h5>{groupTitle}</h5>
          {options
            .filter((option) => (groupTitle === "Size" ? option.type === "radio" : option.type === "checkbox"))
            .map((option,index) => (
              <div className="item" key={index}>
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
                  <div className="form-check">
                    <input className={`form-check-input ${option.type === "radio" ? "radio_animated" : "checkbox_animated"}`} type={option.type} name={option.type === "radio" ? "size" : option.id} id={option.id} checked={option.checked} onChange={(e) => handleOptionChange(option.id, e.target.checked)} />
                    <label className="form-check-label" htmlFor={option.id}>
                      {option.price ? `${option.label} ($${option.price})` : option.label}
                    </label>
                  </div>
                </form>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default BodyContent;
