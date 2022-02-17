import React, { Component } from 'react';
import "./App.css";
import Portfolio from './PortfolioContainer/Home/Portfolio' ;
import About from './PortfolioContainer/AboutMe/About';
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from './PortfolioContainer/Testimonial/Testimonial';
import Mywork from './PortfolioContainer/Workes/Mywork';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
 class App extends Component {
  static propTypes = {
  }
  render() {
    return (
      <div id='App'>
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="logo wow slideInLeft"  data-wow-duration="2s" ><span>S</span>omaya </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ">
      <li className="nav-item  ">
        <a className="nav-link home " href='#App' >Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href='#About'>AboutMe</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#Resume'>Resum</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#Testimonial'>Testimonial</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#Mywork'>Works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='#ContactMe'>ContactMe</a>
      </li>
    </ul>
  </div>
</nav>
    </div>

        <Portfolio />
        <About/>
       <Resume/>
      <Testimonial/>
      <Mywork/>
      <ContactMe/>
      </div>
      
    )
  }
}

export default App
