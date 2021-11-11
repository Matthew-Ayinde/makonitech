import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Nav from "../nav";
import Logo from "../../../images/Logo 1.svg";
import Logo2 from "../../../images/markoni-logo2.svg";

const Header = ({ isOpen, clicked }) => {
  const [isDropOpen, setDropOpen] = useState(false);

  const [bgChange, setBgChange] = useState(false);

  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${bgChange || isOpen ? styles.bgDark : ""}`}
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {/* <Link to="/"> */}
          <Link to='/' 
          // className={`${isDropOpen ? styles.lightLogo : ""}`}
          >
            {/* <Logo /> */}
            {/* <img src={Logo} alt="" /> */}
          </Link>
          {/* </Link> */}

          {isDropOpen  ? (
                <Link to='/'>
                  <img src={Logo2} alt='' />
                </Link>
            ) : (
                <Link to='/'>
                  <img src={Logo} alt='' />
                </Link>
            )}
        </div>

        <Nav
          isDrop={isDropOpen}
          isOpen={isOpen}
          clicked={(payload) => dropHandler(payload)}
        />

        <div className={styles.hamburgerBtn}>
          <button
            type='button'
            aria-label='navigation button'
            onClick={clicked}
            className={`hamburger hamburger--boring ${
              isOpen ? "is-active" : ""
            }`}
          >
            <span className='hamburger-box'>
              <span className='hamburger-inner'></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
