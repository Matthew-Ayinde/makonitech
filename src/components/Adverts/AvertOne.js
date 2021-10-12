import React from "react";
import { Link } from "react-router-dom";
import "./AdvertOne.scss";

const AdvertOne = () => {
  return (
    <div className='advertone_wrapper'>
      <div className='advertOne_content'>
        <h1 className="sols">Ready To Realise Your Product<br /> Vission?</h1>
        <h1 className="soss">Ready To Realise Your Product Vission?</h1>
        <p>
          <Link>Shoot Us A Message</Link>
        </p>
      </div>
    </div>
  );
};

export default AdvertOne;
