"use client";
import Animation from "@/components/common/animation/animation";
import { slide3 } from "@/components/common/slider-options";
import TitleThree from "@/components/common/title/title-three";
import { OurTeam } from "@/constant/constant";
import { teamMembers } from "@/data/pages/all-page";
import Img from "@/utils/BackgroundImageRatio";
import { FC } from "react";
import Slider from "react-slick";

const OurTeamContent: FC = () => {
  return (
    <section className="team-section animated-section section-b-space">
      <Img src="/assets/images/cab/grey-bg.jpg" alt="" className="img-fluid bg-img" />
      <Animation />
      <div className="container">
        <TitleThree classTitle={"title-1"} title="rica" subTitle={OurTeam} />
        <div className="row">
          <div className="col">
            <Slider {...slide3} className="team-slider no-arrow">
              {teamMembers.map((member, index) => (
                <div key={index}>
                  <div className="team-box">
                    <div className="img-part">
                      <img src={member.image} className="img-fluid" alt="" />
                    </div>
                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <h6>{member.role}</h6>
                    </div>
                    <div className="team-social">
                      <a href="https://accounts.google.com/" target="_blank" className="social-box">
                        <img src="/assets/images/icon/social/google.png" className="img-fluid" alt="" />
                      </a>
                      <a href="https://twitter.com/" target="_blank" className="social-box">
                        <img src="/assets/images/icon/social/twitter.png" className="img-fluid" alt="" />
                      </a>
                      <a href="https://www.facebook.com/" target="_blank" className="social-box">
                        <img src="/assets/images/icon/social/facebook.png" className="img-fluid" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamContent;
