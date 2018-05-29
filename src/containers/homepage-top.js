import React, {Component} from 'react';

import '../styles/HomepageTop.css';

export default class HomepageTop extends Component {

    render(){
        return(
            <div className="homepage-top">  
                <div className="homepage-top-left">
                    <div className="homepage-top-title">
                        <div className="homepage-top-title-content">
                            <div className="homepage-top-title-icon">
                                {/* <img src="images/Resources.png" width="30" height="30"> */}
                            </div>
                            <div className="homepage-top-title-text">
                                <div>Resources</div>
                            </div>
                        </div>
                        <div className="top-option-bar"></div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                {/* <img src="images/Open-Book.png" width="25" height="25"> */}
                            </div>
                            <div className="homepage-top-option-text">
                                <div>View the course description and content.</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                {/* <img src="images/Exercise.png" width="26" height="25"> */}
                            </div>
                            <div className="homepage-top-option-text">
                                <div>Continue practicing with exercises.</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                {/* <img src="images/Analytics.png" width="25" height="25"> */}
                            </div>
                            <div className="homepage-top-option-text">
                                <div>Visualize your detailed analytics.</div>
                            </div>
                        </div>
                        <div className="top-option-bar"></div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-time">
                                <div className="homepage-top-time-icon">
                                    {/* <img src="images/Total-Time.png" width="25" height="25"> */}
                                </div>
                                <div className="homepage-top-time-text">
                                    <div>Total: 11h 30m</div>
                                </div>
                            </div>
                            <div className="homepage-top-time">
                                <div className="homepage-top-time-icon">
                                    {/* <img src="images/Remaining-Time.png" width="25" height="25"> */}
                                </div>
                                <div className="homepage-top-time-text">
                                    <div>Remaining: 4h 20m</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-top-right">
                    <div className="homepage-top-title">
                        <div className="homepage-top-title-content">
                            <div className="homepage-top-title-icon">
                                {/* <img src="images/Last-Watched.png" width="30" height="30"> */}
                            </div>
                            <div className="homepage-top-title-text">
                                <div>Last Watched: Chapter 3 Name</div>
                            </div>
                        </div>
                        <div className="top-option-bar"></div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                {/* <img src="images/File.png" width="25" height="25"> */}
                            </div>
                            <div className="homepage-top-option-text">
                            <   div>JavaScript: From Zero To Hero</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                {/* <img src="images/Author.png" width="25" height="25"> */}
                            </div>
                            <div className="homepage-top-option-text">
                                <div>Author Name</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                {/* <img src="images/Level.png" width="25" height="25"> */}
                            </div>
                            <div className="homepage-top-option-text">
                                <div>Intermediate</div>
                                <div className="level-blocks w-clearfix">
                                    <div className="level-block level-block-full"></div>
                                    <div className="level-block level-block-full"></div>
                                    <div className="level-block"></div>
                                </div>
                            </div>
                        </div>
                        <div className="top-option-bar"></div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-continue">
                                <div className="homepage-top-continue-text">
                                    <div>Continue</div>
                                </div>
                                <div className="homepage-top-continue-icon">
                                    {/* <img src="images/Continue.png" width="20" height="20"> */}
                                </div>
                            </div>
                            <div className="image-progress">
                                <div className="image-progress-full"></div>
                            </div>
                            <div className="image-percentage">
                                <div>33%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}