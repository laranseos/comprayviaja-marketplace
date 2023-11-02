import { FC } from "react";

const BtnTitle: FC<ILoginPageProps> = ({ title }) => {
  return (
    <div className="card-header">
      <h3 className="font-weight-bold">{title}</h3>
    </div>
  );
};

export default BtnTitle;
