import { FC } from "react";

interface ITitleProps {
  title: string;
}
const DashboardTitle: FC<ITitleProps> = ({ title }) => {
  return (
    <div className="dashboard-title">
      <h4>{title}</h4>
    </div>
  );
};

export default DashboardTitle;
