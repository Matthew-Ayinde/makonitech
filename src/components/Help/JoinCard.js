import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";
const JoinCard = ({icons, title, text, more}) => {

  return (
    <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
      <article className="team_card">
        <header>
          <img src={icons[0]} alt="" />
          <h4>{title}</h4>
        </header>
        <div className="card_content">
          <p>
            {text}
          </p>
        </div>
        <div className="">
          <Link to="/careers" className="card_footer">
            <p>{more}</p>
            <img src={icons[1]} alt="" />
          </Link>
        </div>
      </article>
    </ScrollAnimation>

  )
}

export default JoinCard;