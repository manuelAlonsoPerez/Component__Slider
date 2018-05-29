import React, { Component } from 'react';
import Slider from './containers/slider';
import SearchBar from './containers/search-bar';
import HomepageTop from './containers/homepage-top';

import './styles/DashboardApp.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {    
        families: 
        ["Varela Round:400",
        "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        "Changa One:400,400italic","Exo:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  
    }
});

export default class DashboardApp extends Component {
  render() {
    return (
      <div className="dashboard-app">
        <SearchBar />
        <HomepageTop />
        <Slider />
      </div>
    );
  }
}
