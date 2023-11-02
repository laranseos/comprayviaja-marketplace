"use client";
import Animation1 from "@/components/common/animation/animation-1";
import Img from "@/utils/BackgroundImageRatio";
import SocialContent from "./social";
import { FC } from "react";
import RegisterForm from "@/components/common/booking-form/form7";
import LoginForm from "@/components/common/booking-form/form6";

const LoginPage: FC<ILoginPageProps> = ({ title }) => {
  return (
    <section className="section-b-space dark-cls animated-section">
      <Img src="/assets/images/cab/grey-bg.jpg" alt="" className="img-fluid bg-img" />
      <Animation1 />
      <div className="container">
        <div className="row">
          <div className="offset-lg-3 col-lg-6 offset-sm-2 col-sm-8 col-12">
            <div className="account-sign-in">
              <div className="title">
                <h3>{title}</h3>
              </div>
              <SocialContent title={title} />
              {title === "sign up" ? <RegisterForm /> : <LoginForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
