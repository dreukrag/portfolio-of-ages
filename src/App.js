import React, { Component } from 'react';
import {WorkExperienceSection, KnoweledgeSection, ContactSection, HomeSection} from './components/Sections'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Main">
        <header>
          <div className="header-container edged-corner__top-right">
            <span>Filipe Alexandre Groh</span>
          </div>
          <div className="header-container__background-deco">
          </div>
          <div className="header-container__background-line">
          </div>
        </header>
        <div className="container-fluid">
          <div className="row">

            <div className="btn-group-vertical side-bar__main">
              <button className="btn btn-default"><span className="glyphicon glyphicon-home"></span></button>
              <button className="btn btn-default"><span className="glyphicon glyphicon-briefcase"></span></button>
              <button className="btn btn-default"><span className="glyphicon glyphicon-education"></span></button>
              <button className="btn btn-default"><span className="glyphicon glyphicon-phone-alt"></span></button>
              <button className="btn btn-default no-border"><span className="glyphicon glyphicon-chevron-down"></span></button>
              <div className="side-bar__main-deco"></div>
            </div>

            

            <HomeSection />
            <WorkExperienceSection />
            <KnoweledgeSection />
            <ContactSection />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
