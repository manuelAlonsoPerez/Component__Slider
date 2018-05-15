import React, { Component } from 'react';
import Slider from './containers/slider';

import './styles/DashboardApp.css';

export default class DashboardApp extends Component {
  render() {
    return (
      <div className="dashboard-app">
        <Slider />
      </div>
    );
  }
}
