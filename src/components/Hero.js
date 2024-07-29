import React, { useState, useRef, useEffect } from "react";
// import { Container } from "react-bootstrap";
import Goals from "./Goals";
// import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import HomeVideo from '../images/Homepage-video.mp4';
import 'swiper/swiper.min.css';
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay])
const HomeHero = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

// const Hero = () => {
  // const [selectedTabOne, setSelectedTabOne] = useState(true);
  // const [selectedTabTwo, setSelectedTabTwo] = useState(false);
  // const [selectedTabThree, setSelectedTabThree] = useState(false);
  // const [selectedTabFour, setSelectedTabFour] = useState(false);

  // const handleTabOne = () => {
  //   setSelectedTabOne(true);
  //   setSelectedTabTwo(false);
  //   setSelectedTabThree(false);
  //   setSelectedTabFour(false);
  // };

  // const handleTabTwo = () => {
  //   setSelectedTabOne(false);
  //   setSelectedTabTwo(true);
  //   setSelectedTabThree(false);
  //   setSelectedTabFour(false);
  // };

  // const handleTabThree = () => {
  //   setSelectedTabOne(false);
  //   setSelectedTabTwo(false);
  //   setSelectedTabThree(true);
  //   setSelectedTabFour(false);
  // };

  // const handleTabFour = () => {
  //   setSelectedTabOne(false);
  //   setSelectedTabTwo(false);
  //   setSelectedTabThree(false);
  //   setSelectedTabFour(true);
  // };

  return (
    <>

    <div className="videosection">
          <video
              playsInline
              loop
              muted
              // controls
              alt="All the devices"
              src={"/heroVideo.mp4"}
              ref={videoEl}
              type="video/mp4"
            />
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={pagination}
              className="swiper-wrapper video slideWrappervideo2"
              loop
              autoHeight={true}
              centeredSlides={true}
              autoplay={{
                  delay:13000,
                disableOnInteraction: false,
              }}
            >
            <SwiperSlide>
              <div className="slideItem">
              <h1>Makonitech</h1>
              <p>
                We at Makonitech believe in being the driving force of your
                organisation's digital transformation. Our state-of-the-art cloud
                consultation services enable your businesses to thrive in the
                ever-evolving, the competitive and vulnerable world of information
                technology.
              </p>
              <a href="/contact" className="btn-transparent btn-medium">
                Learn More
              </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideItem">
              <h1>Makonitech</h1>
              <p>
                We at Makonitech believe in being the driving force of your
                organisation's digital transformation. Our state-of-the-art cloud
                consultation services enable your businesses to thrive in the
                ever-evolving, the competitive and vulnerable world of information
                technology.
              </p>
              <a href="/contact" className="btn-transparent btn-medium">
                Learn More
              </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideItem">
              <h1>Makonitech</h1>
              <p>
                We at Makonitech believe in being the driving force of your
                organisation's digital transformation. Our state-of-the-art cloud
                consultation services enable your businesses to thrive in the
                ever-evolving, the competitive and vulnerable world of information
                technology.
              </p>
              <a href="/contact" className="btn-transparent btn-medium">
                Learn More
              </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slideItem">
              <h1>Makonitech</h1>
              <p>
                We at Makonitech believe in being the driving force of your
                organisation's digital transformation. Our state-of-the-art cloud
                consultation services enable your businesses to thrive in the
                ever-evolving, the competitive and vulnerable world of information
                technology.
              </p>
              <a href="/contact" className="btn-transparent btn-medium">
                Learn More
              </a>
              </div>
            </SwiperSlide>
            </Swiper>
        </div>
        <div className='about_tab_contents'>
            <Goals />
          </div>
      {/* <section className='hero'>
        <Container>
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
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
          </ScrollAnimation>
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
        )} */}
    </>
  );
};

export default HomeHero;
