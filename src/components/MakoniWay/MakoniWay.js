import React from "react";
import "./MakoniWay.scss";
import IMG from "../../images/makoniway.svg";
import ScrollAnimation from 'react-animate-on-scroll';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
const MakoniWay = () => {
  return (
    <>
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <div className="makoniway_wrapper">
        <div className="columncontent makoni_header">
          <div className='container'>
              <h1>The Makoni Way</h1>
              <p>
                  Makoni’s expert product design team lives and breathes your concept
                  gaining insights from key stakeholders and the market at large, so
                  you can develop your idea with confidence.
              </p>
            </div>
          </div>
        <div className='container  dividedsection'>
          <div className='makoniway_img'>
            <img src={IMG} alt='IMG' />
          </div>
          <div className='makoniway_contents'>
          <Accordion preExpanded={['a']}>
                  <AccordionItem className="makoniway_content" uuid="a">
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <h2>Analysis and Scoping</h2>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        We weave your objectives, milestones, expectations and budget
                        together to create.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="makoniway_content">
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <h2>UX Research</h2>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        Our QA experts have a special eye for bugs and glitches. They test
                        every pixel.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="makoniway_content">
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <h2>QA Testing</h2>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        We weave your objectives, milestones, expectations and budget
                        together to create.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="makoniway_content">
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <h2>Development</h2>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        Our QA experts have a special eye for bugs and glitches. They test
                        every pixel.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="makoniway_content">
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <h2>App Lifecycle</h2>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        We weave your objectives, milestones, expectations and budget
                        together to create.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="makoniway_content">
                      <AccordionItemHeading>
                          <AccordionItemButton>
                          <h2>Design</h2>
                          </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                      <p>
                        Our QA experts have a special eye for bugs and glitches. They test
                        every pixel.
                      </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </>
  );
};

export default MakoniWay;
