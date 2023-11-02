import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";

interface IHeadingOneProps {
  content: string;
  highlightItems: {
    iconSrc: string;
    text: string;
  }[];
}

const HeadingOne: FC<IHeadingOneProps> = ({ content, highlightItems }) => {
  return (
    <div className="card-body">
      {content}
      <div className="highlight">
        <ul>
          {highlightItems.map((item, index) => (
            <li key={index}>
              <Img src={item.iconSrc} className="img-fluid" alt="" /> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeadingOne;
