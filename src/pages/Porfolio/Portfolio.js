import React from "react";
import "./Portfolio.scss";
import SortClients from "./SortClients/SortClients";
import { useHistory } from "react-router-dom";

const Portfolio = () => {
  const history = useHistory();

  return (
    <div className="portfolio_wrapper_page">
      <div className="portfolio_wrapper_hero">
        <div className="hero_contents">
          <h1>Our Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
            viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sodales nisl mauris eu consectetur in
            odio ut risus. Ut cursus tortor viverra viverra nec in lectus.
          </p>

          <span
            className="port_cta_btn"
            onClick={() => history.push("/contact")}
          >
            Shoot Us A Message
          </span>
        </div>
      </div>
      <SortClients />
    </div>
  );
};

export default Portfolio;
