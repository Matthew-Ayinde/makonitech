import React from "react";
import SingleTestimonial from "./singleTestimonial";
import { TestimonialData } from "../data/landingPageData";
import group from "../images/group.png";
import presentation from "../images/presentation.png"
import ScrollAnimation from 'react-animate-on-scroll';

const Testimonial = () => {

  return (
    <div className="testimonial">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <header>
          <h3>Testimonial</h3>
        </header>
        <section className="testimonial_content">
          <div className="first_test-row">
            <SingleTestimonial 
              title="Francisco Venâncio, Physiotherapist"
              text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Lorem ipsum amet minim mollit non deserunt ullamco est sit aliqua"
              img={group}
            />
            <article>
              <h4>What Our Customers Are Saying</h4>
            </article>
            <SingleTestimonial 
              title="Francisco Venâncio, Physiotherapist"
              text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Lorem ipsum amet minim mollit 
              non deserunt ullamco est sit aliqua"
              img={presentation}
            />
          </div>
          <div className="second_test-row">
            {
              TestimonialData.map((data, i) => {
                const {title, text, img} = data;
                return (
                  <SingleTestimonial title={title} text={text} img={img} key={i}/>
                )
              })
            }
          </div>  
        </section>
      </ScrollAnimation>
    </div>
  )
}

export default Testimonial;