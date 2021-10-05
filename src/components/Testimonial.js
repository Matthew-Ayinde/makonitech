import React from "react";
import SingleTestimonial from "./singleTestimonial";
import { TestimonialData } from "../data/landingPageData";
import group from "../images/group.png";
import presentation from "../images/presentation.png"

const Testimonial = () => {

  return (
    <section className="testimonial">
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
            TestimonialData.map(data => {
              const {title, text, img} = data;
              return (
                <SingleTestimonial title={title} text={text} img={img} />
              )
            })
          }
        </div>  
      </section>
    </section>
  )
}

export default Testimonial;