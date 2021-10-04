import React from "react";
import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <div className='sub_nav'>
      <ul className='sub_nav-list'>
        <li className='sub_nav-item'>
          <Link className='sub_nav-link'>Overview</Link>
        </li>
        <li className='sub_nav-item'>
          <Link className='sub_nav-link'>Client Result</Link>
        </li>
        <li className='sub_nav-item'>
          <Link className='sub_nav-link'>How we can help</Link>
        </li>
        <li className='sub_nav-item'>
          <Link className='sub_nav-link'>Insights</Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNav;
