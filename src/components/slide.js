import React, { Component } from 'react';

import '../styles/Slide.css';

export default class Slide extends Component{
    render(){
        const { name } = this.props;
        // return (
        //     <div classNameNameName='slide' >
        //         {name}
        //     </div>
        // );
        return (
            <div data-w-id="8040c34d-672d-2bab-7887-12e5921793fe" className="homepage-card">
                <div data-w-id="c060c302-695f-fbd5-b18d-41505927cbf5" className="homepage-card-details">
                    <div className="homepage-card-element">
                        <div className="homepage-card-icon">
                            {/* <img src="images/File.png" width="25" height="25"> */}
                        </div>
                        <div className="homepage-card-chapter">
                            <div>Chapter 3: ReactJs</div>
                        </div>
                        <div className="homepage-card-text-course">
                            <div>{name}</div>
                        </div>
                    </div>
                </div>
                <div data-w-id="2aebe25e-b406-f0ae-0574-59dba074b126"  className="homepage-card-continue">
                    <div className="homepage-card-continue-button">
                        <div className="homepage-card-continue-text">
                            <div>Continue</div>
                        </div>
                        <div className="homepage-card-continue-icon">
                            {/* <img src="images/Continue.png" width="20" height="20"> */}
                        </div>
                    </div>
                    <div className="homepage-card-author">by Magnus Lysfjord</div>
                    <div className="card-bar"></div>
                    <div className="homepage-card-level">Intermediate</div>
                </div>
                <div className="homepage-card-progress">
                    <div>40%</div>
                    <div className="homepage-card-progress-bar">
                        <div data-w-id="8ce6c62e-f017-0d1d-8153-678a35351e6e" className="homepage-card-progress-bar-fill"></div>
                    </div>
                </div>
            </div>
        );
    }
}

