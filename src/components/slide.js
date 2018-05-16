import React, { Component } from 'react';

import '../styles/Slide.css';

export default class Slide extends Component{
    render(){
        const { name } = this.props;
        // return (
        //     <div classNameName='slide' >
        //         {name}
        //     </div>
        // );
        return (
            <div className='slide'>
                <div className="laptop-card card-style-three">
                    <div className="laptop-card-bar blue-bar"></div>    
                    <div className="laptop-card-center">
                        <div>{name}</div>
                        <div className="laptop-card-author">
                            {/* <img src="images/author-sign.png" width="20" height="20" className="laptop-card-icon"> */}
                            <div>Instructor</div>
                        </div>
                    </div>
                    <a href="#" className="laptop-card-button blue-button w-inline-block">
                        <div>More</div>
                    </a>
                </div>
            </div>
        );
    }
}

