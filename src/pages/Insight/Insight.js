import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Insight.scss";
import img from "../../images/insight1.png";
// import img1 from "../../images/insight2.png";
// import img2 from "../../images/insight3.png";
// import img3 from "../../images/insight4.png";
// import img4 from "../../images/insight5.png";
// import img5 from "../../images/insight6.png";
import Pagination from "./pagination";
import httpService from "../../utils/axios";
import dateFormatter from "../../utils/dateFormatter";
import isEmpty from "is-empty";
import ScrollAnimation from 'react-animate-on-scroll';

const Insight = () => {
  // const [posts, setPosts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const countPerPage = 9; // set number of posts per page
  const noOfPages =
    Math.floor(display.length / countPerPage) +
    (display.length / countPerPage - Math.floor(display.length / countPerPage) >
    0
      ? 1
      : 0);
  const onPagination = (e) => {
    setActivePage(e.selected);
  };

  useEffect(() => {
    httpService
      .get("/insights")
      .then((response) => {
        // setPosts(response.data.insights);
        setDisplay(response.data.insights);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="portfolio_wrapper_page">
      <div className="portfolio_wrapper_hero">
      <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
        <div className="hero_contents">
          <h1>Insight</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
            viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sodales nisl mauris eu consectetur in
            odio ut risus. Ut cursus tortor viverra viverra nec in lectus.
          </p>
        </div>
        </ScrollAnimation>
      </div>

      <div className="sort_clients_contents">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn" duration={.8} delay={400} animateOnce={true}>
            <div className="vacancy-wrapper-head add_padding">
              <div className="vacancy-wrapper-head-group">
                <label htmlFor="vacancies-filter">Categories</label>
                <div className="select-wrapper">
                  <select id="vacancies-filter"></select>
                </div>
              </div>
              <div className="vacancy-wrapper-head-group">
                <label htmlFor="location">Month</label>
                <div className="select-wrapper">
                  <select id="location"></select>
                </div>
              </div>
              <div className="vacancy-wrapper-head-group">
                <button>Show All</button>
              </div>
            </div>

            <div className="insight_contents_wrapper">
              {display
                .slice(
                  activePage * countPerPage,
                  activePage * countPerPage + countPerPage
                )
                .map((post, i) => (
                  <div key={i} className="insight_card_contents">
                    <img src={img} alt="img" />
                    <div className="insight_card_text_wrapper">
                      <div className="insight_card_text">
                        <h3>{post.title}</h3>
                        <p className="plain-text">
                          {/* Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                          amet,consectetur adipiscing elit, sed do e */}
                        </p>
                        <p className="plain-text-link">
                          <Link to={`/insight/${post.id}`}>Read more</Link>
                        </p>
                      </div>
                      <div className="insight_card_footer">
                        <p className="special-insight">
                          Posted on {dateFormatter(post.createdAt)}
                        </p>
                        {!isEmpty(post.createdBy) && (
                          <p className="special-insight2">
                            By {post.createdBy.firstName}&nbsp;
                            {post.createdBy.lastName[0]}.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="pagination-insight">
              <Pagination
                containerClassName="pagination"
                pageCount={noOfPages}
                activeClassName="paginate-active"
                disabledClassName="paginate-disabled"
                previousClassName="paginate-previous"
                nextClassName="paginate-next"
                marginPagesDisplayed={1}
                onPageChange={onPagination}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Insight;
