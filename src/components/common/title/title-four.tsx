import { FC } from "react";

interface ITitleFourProps {
  title: string;
  subTitle: string;
}
const TitleFour: FC<ITitleFourProps> = ({ title, subTitle }) => {
  return (
    <div className="title-1">
      <span className="title-label">{title}</span>
      <h2 className="text-white">{subTitle}</h2>
    </div>
  );
};

export default TitleFour;
