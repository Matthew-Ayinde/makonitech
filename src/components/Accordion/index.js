import React, { useState } from "react";
import "./styles.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import accordionIconClosed from "../../images/accordion-icon.svg";
import accordionIconOpen from "../../images/accordion-btn-open.svg";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export const Items = [
  {
    heading: "Engineering Team",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    heading: "Smart Team",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    heading: "Custom Software Development",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

export default function AccordionComponent() {
  const [openIcon, setOpenIcon] = useState(true);

  const toggleIcon = () => {
    setOpenIcon(!openIcon);
  };
  return (
    <div className="accordion__wrap">
      <Accordion allowZeroExpanded>
        {Items.map((item) => (
          // uuid is auto-generated
          <AccordionItem className="accordion__item" key={item.uuid}>
            <AccordionItemHeading className="accordion__heading">
              <AccordionItemButton
                className="accordion__button"
                onClick={() => toggleIcon}
              >
                <h5>{item.heading}</h5>
                {openIcon ? (
                  <img src={accordionIconClosed} alt="accordion-icon" />
                ) : (
                  <img src={accordionIconOpen} alt="accordion-icon" />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel">
              <p>{item.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
