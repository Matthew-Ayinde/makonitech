import React from "react";
import { Link } from "react-router-dom";
import "./Insight.scss";
import img from "../../images/insight1.png";
import img1 from "../../images/insight2.png";
import img2 from "../../images/insight3.png";
import img3 from "../../images/insight4.png";
import img4 from "../../images/insight5.png";
import img5 from "../../images/insight6.png";
import Pagination from "./pagination";

const Insight = () => {
  return (
    <div className='portfolio_wrapper_page'>
      <div className='portfolio_wrapper_hero'>
        <div className='hero_contents'>
          <h1>Insight</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            nisl mauris eu consectetur in odio ut risus. Ut cursus tortor
            viverra viverra nec in lectus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sodales nisl mauris eu consectetur in
            odio ut risus. Ut cursus tortor viverra viverra nec in lectus.
          </p>
        </div>
      </div>

      <div className='sort_clients_contents'>
        <div className='container'>
          <div className='vacancy-wrapper-head add_padding'>
            <div className='vacancy-wrapper-head-group'>
              <label htmlFor='vacancies-filter'>Categories</label>
              <div className='select-wrapper'>
                <select id='vacancies-filter'></select>
              </div>
            </div>
            <div className='vacancy-wrapper-head-group'>
              <label htmlFor='location'>Month</label>
              <div className='select-wrapper'>
                <select id='location'></select>
              </div>
            </div>
            <div className='vacancy-wrapper-head-group'>
              <button>Show All</button>
            </div>
          </div>

          <div className='insight_contents_wrapper'>
            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div>

            {/* <div className='insight_card_contents'>
              <img src={img} alt='img' />
              <div className='insight_card_text_wrapper'>
                <div className='insight_card_text'>
                  <h3>Website Content: A Potent Weapon</h3>
                  <p className='plain-text'>
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit
                    amet,consectetur adipiscing elit, sed do e
                  </p>
                  <p className='plain-text-link'>
                    <Link to='/'>Read more</Link>
                  </p>
                </div>
                <div className='insight_card_footer'>
                  <p className='special-insight'>Posted on August 3,2018</p>
                  <p className='special-insight2'>By Earnest</p>
                </div>
              </div>
            </div> */}

          </div>

          <div className="pagination-insight">
          <Pagination
            containerClassName="pagination"
            pageCount={7}
            activeClassName="paginate-active"
            disabledClassName="paginate-disabled"
            previousClassName="paginate-previous"
            nextClassName="paginate-next"
            marginPagesDisplayed={1}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;
