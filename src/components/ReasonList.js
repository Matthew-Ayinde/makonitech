import React from "react";

const ReasonList  = ({label, heading, content}) => {

  return (
    <div className="reason_item">
      <header>
        <div class="label">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="107" height="4" viewBox="0 0 107 4">
            <path fill="#484646" d="M0 0h107v4H0z"/>
          </svg>
          <h4>{label}</h4>
        </div>
        <h4 className="reason_item-header">{heading}</h4>
      </header>
      <div className="item_content">
        <span className="placeholders"></span>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ReasonList;