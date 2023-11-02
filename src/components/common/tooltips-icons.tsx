import { FC } from "react";

const TooltipIcons: FC = () => {
  return (
    <ul className="d-flex align-items-center justify-content-center">
      <li>
        <img data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="5 Seater" src="/assets/images/cab/icon/seat.png" className="img-fluid " alt="" />
      </li>
      <li>
        <img data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="2 Luggage" src="/assets/images/cab/icon/luggage.png" className="img-fluid " alt="" />
      </li>
      <li>
        <img data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="AC" src="/assets/images/cab/icon/snowflake.png" className="img-fluid " alt="" />
      </li>
      <li>
        <img data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Automatic" src="/assets/images/cab/icon/settings.png" className="img-fluid " alt="" />
      </li>
    </ul>
  );
};

export default TooltipIcons;
