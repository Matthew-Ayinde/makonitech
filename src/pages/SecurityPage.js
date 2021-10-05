import React from "react";
import ProblemApproach from "../components/Security/ProblemApproach";
import SecurityHero from "../components/Security/SecurityHero";
import SubNav from "../components/SubNav";
import Result from "../components/Security/ClientResults";
import Help from "../components/Security/Help";

const SecurityPage = () => {

  return (
    <>
      <SecurityHero />
      <SubNav />
      <ProblemApproach />
      <Result />
      <Help />
    </>
  )
}

export default SecurityPage;