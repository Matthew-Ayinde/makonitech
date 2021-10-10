import React, { useState } from "react";
import logo from "../../images/Logo 1.svg";
import logo2 from "../../images/markoni-logo2.svg";
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
  const [subNavContainer, setSubNavContainer] = useState(false);

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const handleCloseSubNav = () => {
    setSubNavContainer(false);
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
  };

  const handleSubNav = () => {
    setSubNavContainer(true);
    setOne(true);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
  };

  const handleSubNavTwo = () => {
    setSubNavContainer(true);
    setOne(false);
    setTwo(true);
    setThree(false);
    setFour(false);
    setFive(false);
  };

  
  const handleSubNavThree = () => {
    setSubNavContainer(true);
    setOne(false);
    setTwo(false);
    setThree(true);
    setFour(false);
    setFive(false);
  };

  const handleSubNavFour = () => {
    setSubNavContainer(true);
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(true);
    setFive(false);
  };

  const handleSubNavFive = () => {
    setSubNavContainer(true);
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(true);
  };

  return (
    <div
      className={subNavContainer ? "nav_bar_wrapper_active" : "nav_bar_wrapper"}
    >
      <div className='nav_bar_container'>
        <div className='nav_logo2'>
          <ul>
            {subNavContainer ? (
              <li>
                <Link to='/' onClick={handleCloseSubNav}>
                  <img src={logo2} alt='' />
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/' onClick={handleCloseSubNav}>
                  <img src={logo} alt='' />
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className='nav_link_wrapper'>
          <ul className='nav_link_con'>
            <li className='who_we_are_item' onClick={handleSubNav}>
              <span className=''>Who we are</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='who_we_are_sub_navs'>{/* <WhoWeAre /> */}</div>
            </li>
            <li className='what_we_do_item' onClick={handleSubNavTwo}>
              <span className=''>What we do</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='what_we_do_sub_navs'>{/* <WhatWeDo /> */}</div>
            </li>
            <li className='industries_item' onClick={handleSubNavThree}>
              <span className=''>Industries and Expertise</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='industries_sub_navs'>{/* <Industires /> */}</div>
            </li>
            <li className='public_item' onClick={handleSubNavFour}>
              <span className=''>Public Service</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='public_sub_navs'>{/* <PublicService /> */}</div>
            </li>
            <li className='portfolio_item' onClick={handleSubNavFive}>
              <span className=''>Portfolio</span>
              <span className='dropdown_icon'>
                <IoIosArrowDown />
              </span>
              <div className='portfolio_sub_navs'>{/* <Portfolio /> */}</div>
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
            <li className='shoot_btn'>Shoot Us A Message</li>
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

      {subNavContainer && (
        <div className='new-nav-sub'>
          {one && (
            <WhoWeAre
              handleSubNav={handleSubNav}
              handleCloseSubNav={handleCloseSubNav}
            />
          )}
          {two && (
            <WhatWeDo
              handleSubNav={handleSubNav}
              handleCloseSubNav={handleCloseSubNav}
            />
          )}
          {three && (
            <Industires
              handleSubNav={handleSubNav}
              handleCloseSubNav={handleCloseSubNav}
            />
          )}
          {four && (
            <PublicService
              handleSubNav={handleSubNav}
              handleCloseSubNav={handleCloseSubNav}
            />
          )}
          {five && (
            <Portfolio
              handleSubNav={handleSubNav}
              handleCloseSubNav={handleCloseSubNav}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
