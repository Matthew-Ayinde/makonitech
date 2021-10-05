import React from "react";

const JoinCard = ({icons, title, text, more}) => {

  return (
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
      <div className="card_footer">
        <p>{more}</p>
        <img src={icons[1]} alt="" />
      </div>
    </article>
  )
}

export default JoinCard;