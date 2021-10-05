import React from "react";
import { Link } from "react-router-dom";

const FooterLink = ({title, links}) => {

  return (
    <div>
      <header className="sublink_header">
        <h4>{title}</h4>
      </header>
      <ul className="footer_list">
        {
          links.map(link => {
            const {page, url} = link;
            return (
              <li className="footer_item">
                <Link to={url} className="footer_link">{page}</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default FooterLink