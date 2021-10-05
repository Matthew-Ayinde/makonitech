import React from "react";
import logo from "../images/Logo 1.svg"

const Nav = () => {

  return (
    <nav className="nav_bar">
      <div className="nav_header">
        <img src={logo} alt="" />
      </div>
      <div className="nav-list_container">
        <ul className="nav_list">
          <li className="nav_item">
            <button className="nav_btn">
              Who we are
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
          <li className="nav_item">
            <button className="nav_btn">
              What we do
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
          <li className="nav_item">
            <button className="nav_btn">
              Industries and Expertise
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
          <li className="nav_item">
            <button className="nav_btn">
              Public Service
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
          <li className="nav_item">
            <button className="nav_btn">
              Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav_btn">
              Insight
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div className="nav_right_container">
        <ul className="nav_right-list">
          <li className="nav_right-item">
            <button class="btn cta-btn">Shoot Us A Message</button>
          </li>
          <li className="nav_right-item">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" height="18" viewBox="0 0 18 18">
                <path stroke="#fff" stroke-width="2" d="M7.4 13.8A6.4 6.4 0 1 0 7.4 1a6.4 6.4 0 0 0 0 12.8Z"  clip-rule="evenodd"/>
                <path stroke="#fff" stroke-width="2" d="M11.95 11.95 17 17"/>
              </svg>
            </span>
          </li>
          <li className="nav_right-item">
            <button class="nav_right-btn">
              EN
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="12" height="8" viewBox="0 0 12 8">
                <path fill="#fff" d="M1 2.08 6 7.1l5-5L9.84.9 6 4.74 2.17.9.99 2.08Z"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;