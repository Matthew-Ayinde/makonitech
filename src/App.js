import { Route, Switch, } from 'react-router-dom';
import Nav from '../src/components/Nav'
import './App.css';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import Assurance from './components/Assurance';
import NavBar from './components/NavBar/NavBar';
import WhoWeAre from './components/SubNavBarMenu/WhoWeAre/WhoWeAre';
import CloudSecurityPage from './pages/Security/CloudSecurityPage';
import SecurityProtectionPage from './pages/Security/SecurityProtectionPage';
import CloudAssessments from './pages/Security/CloudAssessments';
import ZeroTrustNetwork from './pages/Security/ZeroTrustNetwork';
import FirewallManagment from './pages/Security/FirewallManagment';
import VulnerabilityManagement from './pages/Security/VulnerabilityManagement';
import DatabaseMigration from './pages/Security/DatabaseMigration'
import DataMigration from './pages/Security/DataMigration'
import ServerMigration from './pages/Security/ServerMigration';
import BusinessContinuityPlanning from './pages/Security/BusinessContinuityPlanning';
import ApplicationMigration from './pages/Security/ApplicationMigration';
import DataBackup from './pages/Security/DataBackup';
import OngoingMaintenance from './pages/Security/OngoingMaintenance';
import DevOpsBuildout from './pages/Security/DevOpsBuildout';
import ApplicationDiscovery from './pages/Security/Vulnerability Management';
import DevOpsSecurityOperations from './pages/Security/DevOpsSecurityOperations';
import BigDataAnalytics from './pages/Security/BigDataAnalytics';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <NavBar />
      {/* <WhoWeAre /> */}
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/cloud-assessments">
          <CloudAssessments/>
        </Route>
        <Route path='/zero-trust-network'>
          <ZeroTrustNetwork />
        </Route>
        <Route path="/firewall-managment">
          <FirewallManagment />
        </Route>
        <Route path="/vulnerability-management">
          <VulnerabilityManagement />
        </Route>
        <Route path="/data-migration">
          <DataMigration />
        </Route>
        <Route path="/database-migration">
          <DatabaseMigration />
        </Route>
        <Route path="/server-migration">
          <ServerMigration />
        </Route>
        <Route path="/application-migration">
          <ApplicationMigration />
        </Route>
        <Route path="/business-continuity-planning">
          <BusinessContinuityPlanning />
        </Route>
        <Route path="/application-discovery">
          <ApplicationDiscovery />
        </Route>
        <Route path="/data-backup">
          <DataBackup />
        </Route>
        <Route path="/ongoing-maintenance">
          <OngoingMaintenance />
        </Route>
        <Route path="/devops-buildout">
          <DevOpsBuildout />
        </Route>
        <Route path="/devops-security-operations">
          <DevOpsSecurityOperations />
        </Route>
        <Route path="/big-data-analytics">
          <BigDataAnalytics />
        </Route>
        {/* <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route>
        <Route path="/security-detection">
          <CloudSecurityPage />
        </Route>
        <Route path="/security-protection">
          <SecurityProtectionPage />
        </Route> */}
        
      </Switch>
      <Assurance />
      <Footer />
    </div>
  );
}

export default App;
