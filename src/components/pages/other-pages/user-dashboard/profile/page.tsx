import { userSection } from "@/data/pages/all-page";
import React, { FC, useState } from "react";
import EditProfile from "./EditProfile";
import EmailModalShow from "./EmailModalShow";
import PhoneModalShow from "./PhoneModalShow";
import PasswordModalShow from "./PasswordModalShow";

const Profile: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const toggle = () => setModalOpen(!modalOpen);
  const multipleToggleHandle = (name: string) => {
    name === "email address"
      ? setEmailModal(!emailModal)
      : name == "phone no"
      ? setPhoneModal(!phoneModal)
      : setPasswordModal(!passwordModal);
  };
  return (
    <>
      {userSection.map((section: Section,index) => (
        <div key={index} className="dashboard-box"   >
          <div className="dashboard-title">
            <h4>{section.title}</h4>
            {section.title === "Profile" && <span onClick={toggle}>edit</span>}
          </div>
          <div className="dashboard-detail">
            <ul>
              {section.details.map((detail,i2) => (
                <li key={i2}>
                  <div className="details">
                    <div className="left">
                      <h6>{detail.label}</h6>
                    </div>
                    <div className="right">
                      {detail.editable ? (
                        <>
                          <h6>{detail.value}</h6>
                          <span
                            onClick={() => multipleToggleHandle(detail.label)}
                          >
                            edit
                          </span>
                        </>
                      ) : (
                        <h6>{detail.value}</h6>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <EditProfile open={modalOpen} toggle={toggle} />
      <EmailModalShow open={emailModal} toggle={multipleToggleHandle} />
      <PhoneModalShow open={phoneModal} toggle={multipleToggleHandle} />
      <PasswordModalShow open={passwordModal} toggle={multipleToggleHandle} />
    </>
  );
};

export default Profile;
