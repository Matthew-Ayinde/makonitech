import React from 'react'
import tabImg from '../../../../../images/tab-image.png'
import './CsrTab.scss'

const CsrTabContent = () => {
    return (
      <section className="csr_tab-container">
        <div>
          <img src={tabImg} alt="" />
        </div>
        <div className="csr_text-area">
          <h3 className="csr-header">Our responsibility</h3>
          <p className="csr_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            <br /> Exercitation veniam consequat sunt do amet sint. Velit
            officia consequat duis enim velit mollit Exercitation veniam
            consequat sunt
          </p>
          <p className="csr_text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt do amet sint. Velit officia consequat duis
            enim velit mollit.
          </p>
          <p className="csr_text">
            Exercitation veniam consequat sunt Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit Exercitation veniam consequat sunt
          </p>
        </div>
      </section>
    );
}

export default CsrTabContent
