import React from "react";
import "./TabContent.scss";
import img1 from "../../../../images/public-one.svg";
import img2 from "../../../../images/public-two.svg";
import img3 from "../../../../images/public-three.svg";
import img4 from "../../../../images/details-img.svg";

const TabContent = () => {
  return (
    <div className='tab_container'>
      <div className='tab_wrapper'>
        <div className='tab_content_wrapper'>
          <div className='single_content'>
            <h2>Government and Public Sector</h2>
            <p>
              Governments, development partners and non-governmental
              organisations are facing many evolving operational and strategic
              challenges. Our public sector team
            </p>
          </div>
          <div className='single_content'>
            <img src={img1} alt='' />
          </div>
          <div className='single_content'>
            <img src={img2} alt='' />
          </div>
          <div className='single_content'>
            <img src={img3} alt='' />
          </div>
        </div>
      </div>

      <div className='show_counts'>
        <div className='single_count'>
          <h1>50</h1>
          <p>Use cases accross 3 regions</p>
        </div>
        <div className='single_count'>
          <h1>2020</h1>
          <p>Most visited sales platform</p>
        </div>
        <div className='single_count'>
          <h1>5</h1>
          <p>Star ratings on app store</p>
        </div>
      </div>

      <div className='details'>
        <div className='details_img'>
          <img src={img4} alt='img' className='img-fluid' />
        </div>
        <div className='details_contents'>
          <div className='single_details'>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <h3>Brooklyn Simmons</h3>
            <span>CEO, Cloudfift</span>
          </div>
          <div className='single_details'>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <h3>Marvin McKinney</h3>
            <span>Lead product Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
