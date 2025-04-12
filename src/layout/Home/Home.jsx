import React from "react";
import AgentSection from "../../components/AgentSection";
import CompanyProfile from "../../components/CompanyProfile";
import Customers from "../../components/Customers";
import Footer from "../../components/Footer/Footer";
import OurServices from "../../components/OurServices";
import RecentHouses from "../../components/Houses/RecentHouses";
import Specialists from "../../components/Specialists";
import SubFooter from "../../components/Footer/SubFooter";
import SurroundingHomes from "../../components/SurroundingHomes";
import Trend from "../../components/Trend";
import SubHeader from "../../components/Header/SubHeader";

const Home = () => {
  return (
    <>

      <SubHeader/>
      <Header />
      <RecentHouses />
      <SurroundingHomes />
      <OurServices />
      <AgentSection />
      <CompanyProfile />
      <Specialists />
      <Trend />
      <Customers />
      <Footer />
      <SubFooter />
    </>
  );
};

export default Home;
