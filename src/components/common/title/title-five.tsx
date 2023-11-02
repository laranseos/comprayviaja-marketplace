import { FC } from "react";

interface ITitleFiveProps {
  title: string;
  subTitle: string;
}
const TitleFive: FC<ITitleFiveProps> = ({ title, subTitle }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <h6>{subTitle}</h6>
    </div>
  );
};

export default TitleFive;
