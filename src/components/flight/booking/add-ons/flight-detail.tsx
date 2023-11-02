// @ts-nocheck
"use client";
import { FC, useState } from "react";
import { AddInflightMeals, AdditionalBaggage, SelectSeatsConst } from "@/constant/constant";
import Img from "@/utils/BackgroundImageRatio";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import SelectSeats from "./select-seats";
import TravelAddons from "./travel-addons";
import Baggage from "./baggage";

const FlightDetailsContent: FC = () => {
  const [open, setOpen] = useState("1");

  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };
  return (
    <div className="flight_detail default-accordion">
      <div className="row">
        <div className="col-12">
          <Accordion open={open} toggle={toggle} className="accordion addons-according">
            <AccordionItem>
              <AccordionHeader targetId="1">
                {" "}
                <Img src="/assets/images/icon/seat.png" alt="" className="img-fluid " /> {SelectSeatsConst}
              </AccordionHeader>
              <AccordionBody accordionId="1">
                <SelectSeats />
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                <Img src="/assets/images/icon/sandwich.png" alt="" className="img-fluid " /> {AddInflightMeals}
              </AccordionHeader>
              <AccordionBody accordionId="2">
                <TravelAddons />
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                {" "}
                <Img src="/assets/images/icon/suitcase.png" alt="" className="img-fluid" /> {AdditionalBaggage}
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <Baggage />
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsContent;
