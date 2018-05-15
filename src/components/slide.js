import React, { Component } from 'react';

import '../styles/Slide.css';

export default class Slide extends Component{
    render(){
        const { name } = this.props;
        return (
            <div className='slide' >
                {name}
            </div>
        );
    }
}
