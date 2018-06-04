import React, {Component} from 'react';
import res_icon from '../images/Resources.png';
import open_book_icon from '../images/Open-Book.png';
import exercise_icon from '../images/Exercise.png';
import analytics_icon from '../images/analytics.png';
import total_time_icon from '../images/Total-Time.png';
import remaining_time_icon from  '../images/Remaining-Time.png';
import last_watched_icon from '../images/Last-Watched.png';
import file_icon from '../images/file.png';
import author_icon from '../images/Author.png';
import level_icon from '../images/Level.png';
import continue_icon from '../images/Continue.png';

import '../styles/HomepageTop.css';

export default class HomepageTop extends Component {

    render(){
        return(
            <div className="homepage-top">  
                <div className="homepage-top-left">
                    <div className="homepage-top-title">
                        <div className="homepage-top-title-content">
                            <div className="homepage-top-title-icon">
                                <img src={res_icon} alt='resources-icon' width="30" height="30"/>   
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
                                <img src={open_book_icon} alt='open-book-icon' width="25" height="25"/>   
                            </div>
                            <div className="homepage-top-option-text">
                                <div>View the course description and content.</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                <img src={exercise_icon} alt='exercise-icon' width="26" height="25" />
                            </div>
                            <div className="homepage-top-option-text">
                                <div>Continue practicing with exercises.</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                <img src={analytics_icon} alt='analytics-icon' width="25" height="25" />
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
                                    <img src={total_time_icon} alt='total-time-icon' width="25" height="25" />
                                </div>
                                <div className="homepage-top-time-text">
                                    <div>Total: 11h 30m</div>
                                </div>
                            </div>
                            <div className="homepage-top-time">
                                <div className="homepage-top-time-icon">
                                    <img src={remaining_time_icon} alt='remaining-time-icon' width="25" height="25" />
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
                                <img src={ last_watched_icon }  alt='last-watched-icon' width="30" height="30" />
                            </div>
                            <div className="homepage-top-title-text">
                                <div>Last Watched: Chapter 3 Branch 2</div>
                            </div>
                        </div>
                        <div className="top-option-bar"></div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                <img src={ file_icon } alt='file-icon' width="25" height="25" />
                            </div>
                            <div className="homepage-top-option-text">
                                <div>JavaSscript: From Zero To Hero</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                <img src={author_icon} alt='author-icon' width="25" height="25" />
                            </div>
                            <div className="homepage-top-option-text">
                                <div>Author Name</div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-top-option">
                        <div className="homepage-top-option-content">
                            <div className="homepage-top-option-icon">
                                <img src={level_icon} alt='level-icon' width="25" height="25" />
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
                                    <img src={continue_icon} alt='continue-icon' width="20" height="20" />
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