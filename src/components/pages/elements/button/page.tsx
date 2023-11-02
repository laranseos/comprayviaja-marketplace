import { bootstrapButtons, buttonOutline, buttonSearch, buttonSizes, buttonTags, roundedButtons, themeButtons, whiteBlackButtons } from "@/data/pages/all-page";
import React from "react";
import ButtonGroupPage from "./group";
import ButtonCard from "./btn-card";
import BtnBlock from "./btn-block";

const BodyContent: React.FC = () => {
  return (
    <section className="container section-b-space">
      <div className="container btn-cards">
        <div className="row">
          <ButtonCard title="Theme buttons" data={themeButtons} colClass="col-lg-6" />
          <ButtonCard title="Rounded buttons" data={roundedButtons} colClass="col-lg-6" />
          <ButtonCard title="White & black buttons" data={whiteBlackButtons} colClass="col-lg-6" />
          <ButtonCard title="Button tags" data={buttonTags} colClass="col-lg-6" />
          <ButtonCard title="Button text Sizes" data={buttonSizes} colClass="col-sm-12" />
          <ButtonCard title="Bootstrap button" data={bootstrapButtons} colClass="col-sm-12" />
          <ButtonCard title="Button Outline" data={buttonOutline} colClass="col-sm-12" />
          <BtnBlock />
          <ButtonGroupPage />
        </div>
      </div>
    </section>
  );
};

export default BodyContent;
