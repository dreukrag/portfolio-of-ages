import React, { Component } from 'react';
import { WorkExperienceSection, KnoweledgeSection, ContactSection, HomeSection } from './components/Sections'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/HeaderComponent'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <HomeSection />
        <WorkExperienceSection />
        <KnoweledgeSection />
        <ContactSection />
      </div>
    );
  }
}

export default App;
