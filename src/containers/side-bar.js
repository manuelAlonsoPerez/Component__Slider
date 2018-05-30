import React, { Component } from 'react';
import account_photo_icon from '../images/Account-Photo.png';
import profile_icon from '../images/Profile.png';
import settings_icon from '../images/settings.png';
import notifications_icon from '../images/Notifications.png';
import dashboard_icon from '../images/Dashboard.png';
import library_icon from '../images/Library.png';
import catalog_icon from '../images/Catalog.png';
import at_icon from '../images/At.png';
import help_icon from '../images/Help.png';

import '../styles/SideBar.css';

export default class Sidebar extends Component{

    constructor(props){
        super(props);
        this.state = {
            sidebarHovered: false
        };
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }

    mouseOver(){
        this.setState({ sidebarHovered: true });
    }

    mouseOut(){
        this.setState({ sidebarHovered: false });
    }

    render(){
        return(
            <div 
                data-w-id="f0f1ff5c-1c6d-41cd-40d6-baed621366fb" 
                className="nav-left"
                onMouseEnter = {this.mouseOver}
                onMouseLeave = {this.mouseOut}>
                { !this.state.sidebarHovered ?
                    <div className='nav-account-empty'></div>
                    :
                    <div data-w-id="8901711b-d2d1-bc40-7e76-7a4484e7e728" 
                        className="nav-account">
                        <div className="nav-account-details">
                            <img src={account_photo_icon} alt='account-photo-icon' width="80" height="80" className="nav-account-photo" /> 
                            <div className="nav-account-name">Student Name</div>
                            <div className="nav-account-email">studentname@gmail.com</div>
                        </div>
                        <div className="nav-account-buttons">
                            <div className="nav-account-button">
                                <img src={profile_icon}  alt='profile-icon' width="25" height="25" />
                            </div>
                            <div className="nav-account-button">
                                <img src={settings_icon} alt='settings-icon' width="25" height="25" />
                            </div>
                            <div className="nav-account-button">
                                <img src={notifications_icon} alt='notifications-icon' width="25" height="25" />
                            </div>
                        </div>
                    </div>
            
                }
               
                <div className="nav-option"> 
                    <div className="nav-option-text">
                        <div>Dashboard</div>
                    </div>
                    <div className="navbar-option-icon">
                        <img src={dashboard_icon } alt='dashboard-icon ' width="25" height="25" /> 
                    </div>
                </div>
                <div className="nav-option">
                    <div className="nav-option-text">
                        <div>My Library</div>
                    </div>
                    <div className="navbar-option-icon">
                        <img src={library_icon} alt='library-icon' width="25" height="25"/> 
                    </div>
                </div>
                <div className="nav-option">
                    <div className="nav-option-text">
                        <div>Catalog</div>
                    </div>
                    <div className="navbar-option-icon">
                        <img src={catalog_icon} alt='catalog-icon' width="25" height="25" />
                    </div>
                </div>
                <div className="nav-option">
                    <div className="nav-option-text">
                        <div>Contact Us</div>
                    </div>
                    <div className="navbar-option-icon">
                        <img src={at_icon} alt='at-icon' width="25" height="25" /> 
                    </div>
                </div>
                <div className="nav-option">
                    <div className="nav-option-text">
                        <div>Help</div>
                    </div>
                    <div className="navbar-option-icon">
                        <img src={help_icon} alt='help-icon' width="25" height="25" />
                    </div>
                </div>
            </div>
        );
    }
}