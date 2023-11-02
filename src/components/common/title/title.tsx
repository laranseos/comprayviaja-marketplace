import { FC } from "react";

interface ITitleProps {
  title: string;
  subTitle: string;
  titleClass?: string;
  span?: string;
  h2Class?: string;
}

const TitleComponent: FC<ITitleProps> = ({ title, subTitle, titleClass, span, h2Class }) => {
  return (
    <div className={titleClass}>
      <span className="title-label">{title}</span>
      <h2 className={`${h2Class && h2Class}`}>
        {subTitle}
        {span && <span>{span}</span>}
      </h2>
    </div>
  );
};

export default TitleComponent;
