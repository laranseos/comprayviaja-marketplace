import React, { FC } from "react";

interface ITextSplitProps {
  text: string;
}

const TextSplit: FC<ITextSplitProps> = ({ text }) => {
  return (
    <div>
      {text.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default TextSplit;
