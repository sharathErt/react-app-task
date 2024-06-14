import React from 'react';
import Header from './Componentss/Header';
import HeroSection from './Componentss/HeroSection';
import Services from './Componentss/Services';
import CompaniesTrust from './Componentss/CompaniesTrust';
import Clients from './Componentss/Clients';
import Footer from './Componentss/Footer';
import './App.css';
import DevelopmentSteps from './Componentss/DevelopmentSteps';
import CaseStudies from './Componentss/CaseStudies';

import PeopleWork from './Componentss/PeopleCarousal';
import SoftwareCS from './Componentss/SoftwareBuildings';
import DesignDev from './Componentss/DesignApproach';
import TechStacks from './Componentss/TechStack';
import FeaturedResources from './Componentss/FeaturedResources';
import HireBanner from './Componentss/HireBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <CompaniesTrust />
      <PeopleWork/>
      <CaseStudies/>
      <SoftwareCS/>
      <DesignDev/>
      <TechStacks/>
      <DevelopmentSteps/>
      <FeaturedResources/>
      <HireBanner/>
      <Footer />
      
    </div>
  );
}

export default App;
