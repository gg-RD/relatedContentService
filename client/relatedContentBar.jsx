import React from 'react';
import ReactDOM from 'react-dom';
import ShoeWidget from './components/shoeWidget.jsx';
import axios from 'axios';

class RelatedContentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      structuralImgs: ['./pictures/leftArrow.png', './pictures/rightArrow.png'],
      carouselNumber: 0,
      displayImgs: ['./pictures/lakersCityEditionLebronShirt.png', './pictures/lebronIconEditionShirt.png', './pictures/appleWatchNike+Series3.png', './pictures/nikeAirForce1.png'],
      colors: [['color1', 'color2', 'color3'], ['color1'], ['color1', 'color2'], ['color1', 'color2', 'color3']]
    }
  }
  get () {
    axios.get('/shoes').then((data)=> {
      console.log(data);
      //set the state in here
    })
  }
  slideCarouselLeft () {
    console.log('you moved left');
    if (this.state.carouselNumber >= 1) {
      this.setState({
        structuralImgs: this.state.structuralImgs,
        carouselNumber: this.state.carouselNumber-1,
        displayOne: this.state.displayOne,
        displayTwo: this.state.displayTwo,
        displayThree: this.state.displayThree,
        displayFour: this.state.displayFour
      });
    } // implement to update display imgs
  }
  slideCarouselRight () {
    console.log('you moved right');
    if (this.state.carouselNumber <= 2) {
      this.setState({
        structuralImgs: this.state.structuralImgs,
        carouselNumber: this.state.carouselNumber+1,
        displayOne: this.state.displayOne,
        displayTwo: this.state.displayTwo,
        displayThree: this.state.displayThree,
        displayFour: this.state.displayFour
      });
    }
    this.get();
  }
  render () {
    if (this.state.carouselNumber === 0) {
      return (
        <div>
          <h3 id = 'youMayAlsoLike'> YOU MAY ALSO LIKE </h3>
          <div id = 'related'>
            <div id = 'relatedContentLeftArrow'>
            </div>
            <div id = 'relatedContentCarousel'>
              <ShoeWidget image = {this.state.displayImgs[0]} colorsAmount = {2}/>
              <ShoeWidget image = {this.state.displayImgs[1]} colorsAmount = {1}/>
              <ShoeWidget image = {this.state.displayImgs[2]} colorsAmount = {3}/>
              <ShoeWidget image = {this.state.displayImgs[3]} colorsAmount = {2}/>
            </div>
            <div id = 'relatedContentRightArrow' >
              <img  className = 'arrow' src = {this.state.structuralImgs[1]} onClick = {this.slideCarouselRight.bind(this)}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.carouselNumber === 1) {
      return (
        <div>
          <h3 id = 'youMayAlsoLike'> YOU MAY ALSO LIKE </h3>
          <div id = 'related'>
            <div id = 'relatedContentLeftArrow'>
              <img  className = 'arrow' src = {this.state.structuralImgs[0]} onClick = {this.slideCarouselLeft.bind(this)}/>
            </div>
            <div id = 'relatedContentCarousel'>
              <ShoeWidget />
              <ShoeWidget />
              <ShoeWidget />
              <ShoeWidget />
            </div>
            <div id = 'relatedContentRightArrow'>
              <img  className = 'arrow' src = {this.state.structuralImgs[1]} onClick = {this.slideCarouselRight.bind(this)}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.carouselNumber === 2) {
      return (
        <div>
          <h3 id = 'youMayAlsoLike'> YOU MAY ALSO LIKE </h3>
          <div id = 'related'>
            <div id = 'relatedContentLeftArrow'>
              <img  className = 'arrow' src = {this.state.structuralImgs[0]} onClick = {this.slideCarouselLeft.bind(this)}/>
            </div>
            <div id = 'relatedContentCarousel'>
              <ShoeWidget />
              <ShoeWidget />
              <ShoeWidget />
              <ShoeWidget />
            </div>
            <div id = 'relatedContentRightArrow'>
              <img  className = 'arrow' src = {this.state.structuralImgs[1]} onClick = {this.slideCarouselRight.bind(this)}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.carouselNumber === 3) {
      return (
        <div>
          <h3 id = 'youMayAlsoLike'> YOU MAY ALSO LIKE </h3>
          <div id = 'related'>
            <div id = 'relatedContentLeftArrow'>
              <img  className = 'arrow' src = {this.state.structuralImgs[0]} onClick = {this.slideCarouselLeft.bind(this)}/>
            </div>
            <div id = 'relatedContentCarousel'>
              <ShoeWidget />
              <ShoeWidget />
              <ShoeWidget />
              <ShoeWidget />
            </div>
            <div id = 'relatedContentRightArrow'>
            </div>
          </div>
        </div>
      );
    }
  }
}

window.RelatedContentBar = RelatedContentBar;