import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import throttle from 'lodash.throttle';
import classNames from 'classnames';
import Slide from '../components/slide';
import data from '../data.json';
import scrollTo from '../scrollToAnimate';
import '../styles/Slider.css';

export default class Slider extends Component{

    constructor(props){
        super(props);
        this.state = {
            numOfSlidesToScroll: 4,
            allTheWayLeft: false,
            allTheWayRight: false,
            maxViewportWidth: 0
        };
        this.setViewportWidth = this.setViewportWidth.bind(this);
        this.onResize = this.onResize.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
        this.animatingLeft = false;
        this.animatingRight = false;
        this.throttleResize = throttle(this.onResize, 250);
        this.throttleScroll = throttle(this.onScroll, 250);
        this.handleLeftNav = this.handleLeftNav.bind(this);
        this.handleRightNav = this.handleRightNav.bind(this);
        this.checkAllTheWayOver = this.checkAllTheWayOver.bind(this);
    }

    

    componentDidMount(){
        this.setViewportWidth();
        this.checkNumOfSlidesToScroll();
        this.checkAllTheWayOver();
        window.addEventListener('resize', this.throttleResize);
        window.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.throttleResize);
        window.removeEventListener('keydown', this.onKeydown);
    }

    setViewportWidth(){
        let viewportWidth = window.innerWidth;
        viewportWidth = viewportWidth * 0.9 - (viewportWidth * 0.9 % 4);
        this.setState({ maxViewportWidth: viewportWidth});
    }

    checkNumOfSlidesToScroll(){
        let numOfSlidesToScroll ;

        if ( window.innerWidth <= 800 ) {
            numOfSlidesToScroll = 'full';
        } else if ( window.innerWidth > 800 && window.innerWidth <= 1100){
            numOfSlidesToScroll = 4;
        } else if ( window.innerWidth >1100){
            numOfSlidesToScroll = 4;
        }
       if ( this.state.numOfSlidesToScroll !== numOfSlidesToScroll ){
            //console.log('in here', numOfSlidesToScroll);
            this.setState ({
                numOfSlidesToScroll
            });
       }
    }

    checkAllTheWayOver(){
        const { sliderViewport } = this.refs;
        // If  scrollLeft === 0 HIDE button LEFT
        let allTheWayLeft = false;

        if ( sliderViewport.scrollLeft === 0 ){
            allTheWayLeft = true;
        }
        if( this.state.allTheWayLeft !==  allTheWayLeft ){
            this.setState( { allTheWayLeft: allTheWayLeft } );
        }

        // If scrollLeft + lengthOfViewPortOffsetWidth === real length of viewport  HIDE button RIGHT
        let allTheWayRight = false;
        let amountScrolled = sliderViewport.scrollLeft;
        let viewportLength = sliderViewport.clientWidth;
        let totalWidthOfSlider = sliderViewport.scrollWidth;
        if( amountScrolled +  viewportLength === totalWidthOfSlider ){
            allTheWayRight = true;
        }
        if( this.state.allTheWayRight !==  allTheWayRight ){
            this.setState( { allTheWayRight: allTheWayRight  } );
        }
    }

    widthAndTimeToScroll(){
        const { sliderViewport } = this.refs;
        let numOfSlidesToScroll = this.state.numOfSlidesToScroll;
        if( numOfSlidesToScroll === 'full' ){
            return{
                widthToScroll: sliderViewport.offsetWidth,
                timeToScroll: 400
            }
        } else {
            //let widthOfSlide = 120; HARDCODED
            //let widthOfSlide = document.querySelector('.slide').offsetWidth; USING DOCUMENT from js
            let widthOfSlide = findDOMNode(this.slide).offsetWidth;
            let timeToMoveOneSlide = 400;
            return{
                widthToScroll: numOfSlidesToScroll * widthOfSlide ,
                timeToScroll:  Math.min( ( numOfSlidesToScroll * timeToMoveOneSlide ), 500)
            }
        }
    }

    onResize(){
        this.setViewportWidth();
        this.checkNumOfSlidesToScroll();
    }

    onScroll(event){
        this.checkAllTheWayOver();
    } 

    onKeydown(event){
        const { keyCode } = event;
        let leftArrow = keyCode === 37;
        let rightArrow = keyCode === 39;
    
        if ( leftArrow && !this.state.allTheWayLeft ){
            if ( !this.animatingLeft ){
                this.animatingLeft = true;
                this.handleLeftNav().then( () => {
                    this.animatingLeft = false; 
                });
            }
            
        } else if ( rightArrow && !this.state.allTheWayRight ){
            if ( !this.animatingRight){
                this.animatingRight = true;
                this.handleRightNav().then( () => {
                    this.animatingRight = false;
                });
            }
        }
    }

    // This syntax allows us to define the function without binding: 
    //    handleLeftNav = (event) => {
    //       console.log('Left nav clicked',this);
    //    }

    handleLeftNav(event){
        const { sliderViewport } = this.refs;
        let { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
        let newPosition = sliderViewport.scrollLeft - widthToScroll;

        var promise = scrollTo({
            element: sliderViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft',
            callback: this.checkAllTheWayOver,
            context: this
        });
        return promise;
    }

    handleRightNav(event){
        const { sliderViewport } = this.refs;
        let { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
        let newPosition = sliderViewport.scrollLeft + widthToScroll;

        var promise = scrollTo({
            element: sliderViewport, 
            to: newPosition, 
            duration: timeToScroll, 
            scrollDirection: 'scrollLeft',
            callback: this.checkAllTheWayOver,
            context: this
        });
        return promise;        
    }

    renderSlides(){
        return (
            data.map( (state) => {
                return(
                    <Slide 
                        name = {state.name}
                        key = {state.abbreviation}
                        ref = { compSlide => this.slide = compSlide }
                    />
                );
            })
        );
    }

    render(){
        const { allTheWayLeft, allTheWayRight } = this.state;
        const navClasses = classNames({
            'slider-nav': true
        });
        const leftNavClasses = classNames({
            'slider-left-nav': true,
            'slider-nav-disable': allTheWayLeft
        }, navClasses);
        const rightNavClasses = classNames({
            'slider-right-nav': true,
            'slider-nav-disable': allTheWayRight
        }, navClasses);

       

        return(
            <div 
                className='slider-container'
                style={{width:this.state.maxViewportWidth}}
            >
                <button 
                    className = { leftNavClasses }
                    onClick = { this.handleLeftNav }
                    >
                        &#60;
                </button>
                <div 
                    className = 'slider-viewport' 
                    ref = 'sliderViewport'
                    onScroll = { this.throttleScroll } 
                    >
                        { this.renderSlides() }
                </div> 
                <button 
                    className = { rightNavClasses }
                    onClick = { this.handleRightNav }
                    >
                        &#62;
                </button>
            </div>
        );
    }
}