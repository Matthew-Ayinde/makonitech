import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Goals from "./Goals";

const Hero = () => {
  const [selectedTabOne, setSelectedTabOne] = useState(true);
  const [selectedTabTwo, setSelectedTabTwo] = useState(false);
  const [selectedTabThree, setSelectedTabThree] = useState(false);
  const [selectedTabFour, setSelectedTabFour] = useState(false);

  const handleTabOne = () => {
    setSelectedTabOne(true);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
  };

  const handleTabTwo = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(true);
    setSelectedTabThree(false);
    setSelectedTabFour(false);
  };

  const handleTabThree = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(true);
    setSelectedTabFour(false);
  };

  const handleTabFour = () => {
    setSelectedTabOne(false);
    setSelectedTabTwo(false);
    setSelectedTabThree(false);
    setSelectedTabFour(true);
  };

  return (
    <>
      <section className='hero'>
        <Container>
          <div className='hero_content'>
            <div className='hero_info'>
              <h1>Building secure on-prem & cloud environment.</h1>
              <p>
                Defending your users and data, no matter where they are, is a
                more critical job than ever before.
              </p>
            </div>
            <div className='hero_nav'>
              <ul className='hero_nav-list'>
                <li
                  className={
                    selectedTabOne ? "hero_nav-item-active" : "hero_nav-item"
                  }
                  onClick={handleTabOne}
                >
                  Private Equity
                </li>
                <li
                  className={
                    selectedTabTwo ? "hero_nav-item-active" : "hero_nav-item"
                  }
                  onClick={handleTabTwo}
                >
                  Agile Enterprise
                </li>
                <li
                  className={
                    selectedTabThree ? "hero_nav-item-active" : "hero_nav-item"
                  }
                  onClick={handleTabThree}
                >
                  Health Care
                </li>
                <li
                  className={
                    selectedTabFour ? "hero_nav-item-active" : "hero_nav-item"
                  }
                  onClick={handleTabFour}
                >
                  Authomative
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {selectedTabOne && (
        <div className='about_tab_contents'>
          <Goals />
        </div>
      )}
      {selectedTabTwo && (
        <div className='about_tab_contents'>
          <Goals />
        </div>
      )}
      {selectedTabThree && (
        <div className='about_tab_contents'>
          <Goals />
        </div>
      )}
      {selectedTabFour && (
        <div className='about_tab_contents'>
          <Goals />
        </div>
      )}
    </>
  );
};

export default Hero;
