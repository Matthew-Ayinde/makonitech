import React from "react";

const SingleTestimonial = ({img, title, text}) => {

  return (
    <article className="testify_card">
      <div className="card_img-top">
        <img src={img} alt="" />
      </div>
      <section className="card_body">
        <h5>{title}</h5>
        <p>{text}</p>
      </section>
    </article>
  )
}

export default SingleTestimonial;