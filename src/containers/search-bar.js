import React, { Component } from 'react';

import scicode_icon from '../images/Logo.png';
import '../styles/SearchBar.css';

export default class SearchBar extends Component{

    render(){
        return (
            <div className="nav-top">
                <div className="nav-search">
                    <div className="form-block-search w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="form-search">
                            <input type="text" className="form-input-field w-input" maxLength="256" name="field" data-name="Field" placeholder="Search" id="field" />
                        </form>
                        <div className="w-form-done">
                            <div> Thank you! Your submission has been received! </div>
                        </div>
                        <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
                <div className="nav-logo">
                    <div className="nav-logo-text">
                        <div>Sci-Code</div>
                    </div>
                    <div className="nav-logo-icon">
                        <img src={scicode_icon} alt='scicode-icon' width="25" height="25"/>          
                    </div>
                </div>
            </div>

        );
    }
}