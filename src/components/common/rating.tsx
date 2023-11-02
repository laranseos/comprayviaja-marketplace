import React, { FC } from "react";

interface IRateingProps {
  rang?: string
}

const Rating: FC<IRateingProps> = ({ rang }) => {
  return (
    <div className="rating">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="far fa-star"></i>
      {rang && <span>{rang}</span>}
    </div>
  );
};

export default Rating;
