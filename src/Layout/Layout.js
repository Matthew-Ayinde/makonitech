import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Assurance from "../components/Assurance";
import Footer from "../components/Footer";
import Header from "../components/ui/header";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const router = useLocation();

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");

    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <React.Fragment>
      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <div className="navigationWrapper">
        <main>{children}</main>
      </div>

      <Assurance />

      <Footer />
    </React.Fragment>
  );
};
export default Layout;
