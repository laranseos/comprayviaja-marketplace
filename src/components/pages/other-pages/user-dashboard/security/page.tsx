import { FC } from "react";
import Button from "@/components/common/btn";
import DashboardTitle from "../common/dashboard-title";

const Security: FC = () => {
  return (
    <div className="dashboard-box">
      <DashboardTitle title={"delete your accont"} />
      <div className="dashboard-detail">
        <div className="delete-section">
          <p>
            Hi <span className="text-bold">Mark Enderess</span>,
          </p>
          <p>we are sorry to here you would like to delete your account.</p>
          <p>
            <span className="text-bold">note:</span>
          </p>
          <p>deleting your account will permanently remove your profile, personal settings, and all other associated information. once your account is deleted, you will be logged out and will be unable to log back in.</p>
          <p>if you understand and agree to the above statement, and would still like to delete your account, than click below</p>
          <Button btnClass="btn btn-solid" name="delete my account" />
        </div>
      </div>
    </div>
  );
};

export default Security;
