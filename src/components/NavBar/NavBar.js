import React from "react";
import logo from "../../images/Logo 1.svg";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import "./NavBar.scss";
import WhoWeAre from "../SubNavBarMenu/WhoWeAre/WhoWeAre";
import Industires from "../SubNavBarMenu/Industries/Industires";
import Portfolio from "../SubNavBarMenu/Portfolio/Portfolio";
import PublicService from "../SubNavBarMenu/PublicService/PublicService";
import WhatWeDo from "../SubNavBarMenu/WhatWeDo/WhatWeDo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav_bar_wrapper'>
      <div className='nav_bar_container'>
        <div className=''>
          <ul>
            <li>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </li>
          </ul>
        </div>

        <div className='nav_link_wrapper'>
          <ul className='nav_link_con'>
            <li className='who_we_are_item '>
              <span className=''>Who we are</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='who_we_are_sub_navs'>
                <WhoWeAre />
              </div>
            </li>
            <li className='what_we_do_item'>
              <span className=''>What we do</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='what_we_do_sub_navs'>
                <WhatWeDo />
              </div>
            </li>
            <li className='industries_item'>
              <span className=''>Industries and Expertise</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='industries_sub_navs'>
                <Industires />
              </div>
            </li>
            <li className='public_item'>
              <span className=''>Public Service</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='public_sub_navs'>
                <PublicService />
              </div>
            </li>
            <li className='portfolio_item'>
              <span className=''>Portfolio</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='portfolio_sub_navs'>
                <Portfolio />
              </div>
            </li>
            <li className='insight_item'>
              <span className=''>Insight</span>
              {/* <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span> */}
            </li>
          </ul>
        </div>

        <div className='nav_link_wrapper'>
          <ul className='nav_link_con'>
            <li className='shoot_btn'>
              <button class=''>Shoot Us A Message</button>
            </li>
            <li className='search_link'>
              <span>
                <BiSearch />
              </span>
            </li>
            <li className='en_link'>
              <span class=''>EN</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
