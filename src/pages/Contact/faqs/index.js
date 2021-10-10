import React from "react";
import "./styles.scss";

const faqs = () => {
  const collapseToggler = (e) => {
    e.currentTarget.nextSibling.classList.toggle("faq-show");
    e.currentTarget.querySelector("i").classList.toggle("fa-minus");
    e.currentTarget.querySelector("i").classList.toggle("fa-plus");
  };

  return (
    <section className="contact-faq">
      <div className="contact-faq__wrapper">
        <div className="faq-left">
          <p>FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <ul className="faq-lists">
            <li>
              <button onClick={collapseToggler}>
                <span>What is Makonitech group about?</span>{" "}
                <i className="fas fa-plus"></i>
              </button>
              <div className="faq-answer">
                <p>
                  We not only figure out the experience and write the code, but
                  we give advice on the product development right from start.
                  Our goal is to contribute to a thriving business
                </p>
              </div>
            </li>
            <li>
              <button onClick={collapseToggler}>
                <span>How can I enroll?</span> <i className="fas fa-plus"></i>
              </button>
              <div className="faq-answer">
                <p>
                  We not only figure out the experience and write the code, but
                  we give advice on the product development right from start.
                  Our goal is to contribute to a thriving business
                </p>
              </div>
            </li>
            <li>
              <button onClick={collapseToggler}>
                <span>How can I enroll?</span> <i className="fas fa-plus"></i>
              </button>
              <div className="faq-answer">
                <p>
                  We not only figure out the experience and write the code, but
                  we give advice on the product development right from start.
                  Our goal is to contribute to a thriving business
                </p>
              </div>
            </li>
            <li>
              <button onClick={collapseToggler}>
                <span>How can I enroll?</span> <i className="fas fa-plus"></i>
              </button>
              <div className="faq-answer">
                <p>
                  We not only figure out the experience and write the code, but
                  we give advice on the product development right from start.
                  Our goal is to contribute to a thriving business
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="faq-right">
          <div className="faq-right__img">
            <span className="wink-emoji">
              <img
                alt=""
                src={require("../../../images/wink-emoji.svg").default}
              />
            </span>
            <img
              alt=""
              src={require("../../../images/faq-right.png").default}
            />
            <span className="heart">
              <img
                alt=""
                src={require("../../../images/heart.svg").default}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default faqs;
