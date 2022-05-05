// CSR - Corporate Social Responsibility

import React from "react";
import Carousel from "react-elastic-carousel";
import AboutHero from "../../../components/Hero/AboutHero/AboutHero";
import AboutTab from "../../../components/Tab/AboutTab/AboutTab";
import "./Csr.scss";
import imgOne from "../../../images/rectangle3.png";
import imgThree from "../../../images/rectangle4.png";
import imgTwo from "../../../images/rectangle2.png";
import secImg from "../../../images/group-img.png";
import CsrTabContent from "../../../components/Tab/AboutTab/AboutTabContent/Csr/CsrTab";
import ScrollAnimation from 'react-animate-on-scroll';

const Csr = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ];

  return (
    <div>
      
      <AboutHero
        title="Corporate Social Responsibility"
        heroImageIndex="bg_styles--4"
      />
      <AboutTab />
      <CsrTabContent />

      {/* Section: What we do */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <section className="section_one">
        <div className="dark_bg">
              <img src={secImg} alt="" />
          <div>
            <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
              <div className="project_header">
                <h4 style={{ color: "white" }}>What we do</h4>
              </div>
              <div className="sec_one-grid">
                <div>
                  <h6>Lorem ipsum</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur pellentesque risus viverra elementum. Ut
                    scelerisque fermentum, velit duis eu odio est vel.
                  </p>
                </div>
                <div>
                  <h6>Lorem ipsum</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur pellentesque risus viverra elementum. Ut
                    scelerisque fermentum, velit duis eu odio est vel.
                  </p>
                </div>
                <div>
                  <h6>Lorem ipsum</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur pellentesque risus viverra elementum. Ut
                    scelerisque fermentum, velit duis eu odio est vel.
                  </p>
                </div>
                <div>
                  <h6>Lorem ipsum</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur pellentesque risus viverra elementum. Ut
                    scelerisque fermentum, velit duis eu odio est vel.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* section: projects */}
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <section className="project_section">
          <div className="project_header">
            <h4>Projects</h4>
          </div>
          <div className="project_cards">
            <Carousel
             enableAutoPlay 
             autoPlaySpeed={13000}
              easing="cubic-bezier(1,.15,.55,1.54)"
              tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
              transitionMs={700}
              breakPoints={breakPoints}
              focusOnSelect={true}
              className="project_carousel"
            >
              <div className="card">
                <img src={imgOne} alt="rectangle3" />
                <h6>Reach Out In Chicago</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                  nisi ac. Aliquam dolor Write email to u
                </p>
              </div>
              <div className="card">
                <img src={imgTwo} alt="" />
                <h6> School reach Out In Chicago</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                  nisi ac. Aliquam dolor Write email to u
                </p>
              </div>
              <div className="card">
                <img src={imgThree} alt="rectangle4" />
                <h6>Lorem ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                  nisi ac. Aliquam dolor Write email to u
                </p>
              </div>
              <div className="card">
                <img src={imgTwo} alt="rectangle4" />
                <h6>Lorem ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                  nisi ac. Aliquam dolor Write email to u
                </p>
              </div>
              <div className="card">
                <img src={imgThree} alt="rectangle4" />
                <h6>Lorem ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                  nisi ac. Aliquam dolor Write email to u
                </p>
              </div>
              <div className="card">
                <img src={imgOne} alt="rectangle4" />
                <h6>Lorem ipsum</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  cras nunc, ut sapien sapien, pretium aenean. A odio enim sed dui
                  nisi ac. Aliquam dolor Write email to u
                </p>
              </div>
            </Carousel>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Csr;
