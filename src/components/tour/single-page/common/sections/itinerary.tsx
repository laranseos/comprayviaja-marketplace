// @ts-nocheck  
"use client";
import { FC, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import HeadingOne from "../../tabs/Itinerary/headingOne/page";
import { highlightItems1, highlightItems2, highlightItems3, highlightItems4, highlightItems5, highlightItems6, highlightItems7, highlightItems8 } from "@/data/tour/single-page";


const Itinerary: FC = () => {
  const [open, setOpen] = useState("1");

  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };
  return (
    <div className="menu-part accordion tab-pane " id="itinerary">
      <div id="accordion" className="accordion-plan">
        <Accordion open={open} toggle={toggle} className="dark-accordion">
          <AccordionItem>
            <AccordionHeader targetId="1">Madrid (1 Night)</AccordionHeader>
            <AccordionBody accordionId="1">
              <HeadingOne
                content="Today we proceed to Toledo - declared as World Heritage Site by UNESCO. On arrival we visit the city's most famous monument Santa Maria la Blanca Synagogue. Then we visit Sword factory. Later we leave for Seville"
                highlightItems={highlightItems1}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Madrid – Toledo – Seville (2 Nights)</AccordionHeader>
            <AccordionBody accordionId="2">
              <HeadingOne
                content="Welcome to Madrid - the capital city of Spain. On arrival we enjoy the city orientation tour which includes the Plaza de Espana, Sabatini Garden, Cervantes Statue, Cibeles fountain, Parliament, Puerto del sol. Then visit the Royal Palace and Prado Museum – one of the world's greatest art galleries. From inside."
                highlightItems={highlightItems2}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3"> Seville</AccordionHeader>
            <AccordionBody accordionId="3">
              <HeadingOne
                content="Welcome to Madrid - the capital city of Spain. On arrival we enjoy the city orientation tour which includes the Plaza de Espana, Sabatini Garden, Cervantes Statue, Cibeles fountain, Parliament, Puerto del sol. Then visit the Royal Palace and Prado Museum – one of the world's greatest art galleries. From inside."
                highlightItems={highlightItems3}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Seville – Costa Del Sol – Malaga (1 Night)</AccordionHeader>
            <AccordionBody accordionId="4">
              <HeadingOne
                content="Today we enjoy Seville city tour wherein, we visit the massive cathedral with the Tomb of Christopher Columbus, Moorish Giralda Tower, The Alcázar, a photo stop at Santa Cruz Quarter with flower decked balconies and the Ultramodern expo site - a small scale model of 'Victoria' the first vessel to circumnavigate the globe. Then we visit Metropol Parasol - The largest wooden structure in the world. In the evening we enjoy the Flamenco Show with dinner."
                highlightItems={highlightItems4}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">Malaga – Cordoba – Valencia (1 Night)</AccordionHeader>
            <AccordionBody accordionId="5">
              <HeadingOne
                content="Today we proceed to Cordoba. On arrival we visit Mezquita from inside followed by orientation city tour which includes Roman bridge, Arab waterwheels and Plaza del Potro. Then we leave for Valencia."
                highlightItems={highlightItems5}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">Valencia – Barcelona (2 Nights)</AccordionHeader>
            <AccordionBody accordionId="6">
              <HeadingOne
                content="Today we enjoy orientation city tour which includes Plaza del Mercado, Serranos Towers, Plaza de Ayuntamento and Cathedral of Valencia. Then we visit City of Arts and Sciences- to see the work of the Valencian architect Santiago Calatrava, several of its buildings have become icons in the city. Then we visit Ceramics Museum from inside. Later we proceed to Barcelona. On arrival we visit Poble Espanyol – an open air Archaeological museum and Spanish village showing replicas of characteristic houses from all regions of Spain."
                highlightItems={highlightItems6}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">Barcelona</AccordionHeader>
            <AccordionBody accordionId="7">
              <HeadingOne
                content="Today we enjoy Barcelona city orientation tour which includes Olympic stadium, colourful La Ramblas, Statue of Christopher Columbus and visit Gaudi's Sagrada Familia Cathedral Antoni Gaudí's unfinished masterpiece. Later we take a cable car ride to Montjuic hill which gives a panoramic view of the entire Barcelona city and Tibidado hill. Today evening we enjoy beach front of Barcelona."
                highlightItems={highlightItems7}
              />
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="8"> Departure from Barcelona</AccordionHeader>
            <AccordionBody accordionId="8">
              <HeadingOne
                content="It’s time now to say goodbye to our travel companions. Let us be in contact with each other through email, Facebook, and meet again on one more memorable tour. See you all!!"
                highlightItems={highlightItems8}
              />
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Itinerary;
