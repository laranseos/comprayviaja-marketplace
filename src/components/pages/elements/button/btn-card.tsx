import { FC } from "react";
import ButtonGroup from "./btn-group";
import BtnTitle from "./btn-title";

const ButtonCard: FC<IButtonCardProps> = ({ data, title, colClass }) => {
  return (
    <div className={colClass}>
      <div className="card">
        <BtnTitle title={title} />
        <div className="card-body">
          <ButtonGroup buttons={data} />
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
