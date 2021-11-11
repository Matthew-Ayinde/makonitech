import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Industries from "./pages/Industries/Industries";

import Aerospace from "./pages/Industries/industrypages/Aerospace/Aerospace";
import CloudSecurityPage from "./pages/Security/CloudSecurityPage";
import SecurityProtectionPage from "./pages/Security/SecurityProtectionPage";
import CloudAssessments from "./pages/Security/CloudAssessments";
import ZeroTrustNetwork from "./pages/Security/ZeroTrustNetwork";
import FirewallManagment from "./pages/Security/FirewallManagment";
import VulnerabilityManagement from "./pages/Security/VulnerabilityManagement";
import DatabaseMigration from "./pages/Security/DatabaseMigration";
import DataMigration from "./pages/Security/DataMigration";
import ServerMigration from "./pages/Security/ServerMigration";
import BusinessContinuityPlanning from "./pages/Security/BusinessContinuityPlanning";
import ApplicationMigration from "./pages/Security/ApplicationMigration";
import DataBackup from "./pages/Security/DataBackup";
import OngoingMaintenance from "./pages/Security/OngoingMaintenance";
import DevOpsBuildout from "./pages/Security/DevOpsBuildout";
import ApplicationDiscovery from "./pages/Security/Vulnerability Management";
import DevOpsSecurityOperations from "./pages/Security/DevOpsSecurityOperations";
import BigDataAnalytics from "./pages/Security/BigDataAnalytics";
import AutomobileMobility from "./pages/Industries/industrypages/AutomobileMobility/AutomobileMobility";
import ConsumerProducts from "./pages/Industries/industrypages/ConsumerProducts/ConsumerProducts";
import EnergyAndNaturalResources from "./pages/Industries/industrypages/EnergyAndNaturalResources/EnergyAndNaturalResources";
import FinancialServices from "./pages/Industries/industrypages/FinancialServices/FinancialServices";
import ForestProducts from "./pages/Industries/industrypages/ForestProducts/ForestProducts";
import Careers from "./pages/Careers/Careers";
import ContactPage from "./pages/Contact";
import About from "./pages/About/About";
import PAL from "./pages/About/PAL/PAL";
import Csr from "./pages/About/CSR/CSR";
import HowWeWork from "./pages/About/HowWeWork/HowWeWork";

import CareerSignup from "./pages/CareerSignup";
// import ProfilePage from "./pages/Profile";
import OurCommitment from "./pages/About/OurCommitment/OurCommitment";
import PublicSectorAfrica from "./pages/PublicSector/PublicSectorAfrica";
import PublicSectorEurope from "./pages/PublicSector/PublicSectorEurope";
import PublicSectorUsa from "./pages/PublicSector/PublicSectorUsa";
import PublicSectorMiddleEast from "./pages/PublicSector/PublicSectorMiddleEast";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import CareerSignin from "./pages/CareerSignin";
import RecommendedJobs from "./pages/RecommendedJobs/RecommendedJobs";
import MeetOurTeam from "./pages/MeetOurTeam/MeetOurTeam";
import Portfolio from "./pages/Porfolio/Portfolio";
import Insight from "./pages/Insight/Insight";

import PortfolioDetails from "./pages/Porfolio/PortfolioDetails";
import PartnersAffiliation from "./pages/PartnersAffiliation/PartnersAffiliation";
import InsightDetails from "./pages/InsightDetails/InsightDetails";
import CareerDetails from "./pages/CareerDetails/CareerDetails";
import Header from "./components/ui/header";
import Assurance from "./components/Assurance";
import Footer from "./components/Footer";
// import Layout from "./Layout/Layout";

function App() {
  const [open, setOpen] = useState(false);

  const router = useLocation();

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className='App'>

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);

          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <Switch>
        <Route path='/career/signin'>
          <CareerSignin />
        </Route>

        <Route path='/career/signup'>
          <CareerSignup />
        </Route>

        <Route path='/career/savedjobs'>
          <SavedJobs />
        </Route>

        <Route path='/career/recommendedjobs'>
          <RecommendedJobs />
        </Route>

        <Route path='/career/meet-our-team'>
          <MeetOurTeam />
        </Route>

        {/* <Layout> */}
        <Route path='/' exact>
          <LandingPage />
        </Route>

        <Route path='/insight' exact>
          <Insight />
        </Route>

        <Route path='/portfolio' exact>
          <Portfolio />
        </Route>

        <Route path='/portfolio-details' exact>
          <PortfolioDetails />
        </Route>

        <Route path='/public-sector-africa' exact>
          <PublicSectorAfrica />
        </Route>

        <Route path='/public-sector-europe' exact>
          <PublicSectorEurope />
        </Route>

        <Route path='/public-sector-usa' exact>
          <PublicSectorUsa />
        </Route>

        <Route path='/public-sector-middle-east' exact>
          <PublicSectorMiddleEast />
        </Route>

        <Route path='/industries' exact>
          <Industries />
        </Route>

        <Route path='/csr' exact>
          <Csr />
        </Route>

        <Route path='/pal' exact>
          <PAL />
        </Route>

        <Route path='/about' exact>
          <About />
        </Route>

        <Route path='/how_we_work' exact>
          <HowWeWork />
        </Route>

        <Route path='/our_commitment' exact>
          <OurCommitment />
        </Route>

        <Route path='/aerospace' exact>
          <Aerospace />
        </Route>

        <Route path='/consumer-products' exact>
          <ConsumerProducts />
        </Route>

        <Route path='/energy-and-natural-resources' exact>
          <EnergyAndNaturalResources />
        </Route>

        <Route path='/financial-services' exact>
          <FinancialServices />
        </Route>

        <Route path='/automobile-and-mobility' exact>
          <AutomobileMobility />
        </Route>

        <Route path='/forest-products' exact>
          <ForestProducts />
        </Route>

        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>

        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>

        <Route path='/cloud-assessments'>
          <CloudAssessments />
        </Route>

        <Route path='/zero-trust-network'>
          <ZeroTrustNetwork />
        </Route>

        <Route path='/firewall-managment'>
          <FirewallManagment />
        </Route>

        <Route path='/vulnerability-management'>
          <VulnerabilityManagement />
        </Route>

        <Route path='/data-migration'>
          <DataMigration />
        </Route>

        <Route path='/database-migration'>
          <DatabaseMigration />
        </Route>

        <Route path='/server-migration'>
          <ServerMigration />
        </Route>

        <Route path='/application-migration'>
          <ApplicationMigration />
        </Route>

        <Route path='/business-continuity-planning'>
          <BusinessContinuityPlanning />
        </Route>

        <Route path='/application-discovery'>
          <ApplicationDiscovery />
        </Route>

        <Route path='/data-backup'>
          <DataBackup />
        </Route>

        <Route path='/ongoing-maintenance'>
          <OngoingMaintenance />
        </Route>

        <Route path='/devops-buildout'>
          <DevOpsBuildout />
        </Route>

        <Route path='/devops-security-operations'>
          <DevOpsSecurityOperations />
        </Route>

        <Route path='/big-data-analytics'>
          <BigDataAnalytics />
        </Route>
        <Route path='/careers'>
          <Careers />
        </Route>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>
        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>
        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>
        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>
        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>
        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>
        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>
        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>
        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>
        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>
        <Route path='/security-protection'>
          <SecurityProtectionPage />
        </Route>
        <Route path='/security-detection'>
          <CloudSecurityPage />
        </Route>

        <Route path='/contact'>
          <ContactPage />
        </Route>

        <Route path='/careers'>
          <Careers />
        </Route>

        {/* <Route path='/profile'>
          <ProfilePage />
        </Route> */}

        

        

        

        <Route path='/partners-affiliation'>
          <PartnersAffiliation />
        </Route>

        <Route path='/insight/insight-details'>
          <InsightDetails />
        </Route>

        <Route path='/career/career-details'>
          <CareerDetails />
        </Route>
        {/* </Layout> */}
      </Switch>

      <Assurance />

      <Footer />
    </div>
  );
}

export default App;
