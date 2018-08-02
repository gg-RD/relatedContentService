import React from 'react';
import ReactDOM from 'react-dom';
import ShoeWidget from './components/shoeWidget.jsx';
import axios from 'axios';

class RelatedContentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      structuralImgs: ['./pictures/leftArrow.png', './pictures/rightArrow.png'],
      carouselNumber: 0,
      displayImgs: [],
      categories: [],
      prices: [],
      names: [],
      colors: [[], [], [], []]
    }
    this.get(0);
  }
  hover () {
    
  }
  get (direction) { // direction = 1 (going right) || 0 || -1 (going left)
    var context = this;
    axios.get('/shoes', {
      params: {
        shoeId: context.state.id
      }
    }).then((data)=> {
        let newData = data.data.slice((this.state.carouselNumber+direction)*4, ((this.state.carouselNumber+direction)*4) + 4);
        var displayImgs = [];
        var colors = [];
        var categories = [];
        var names = [];
        var prices = [];
        for (var i =0; i < newData.length; i++) {
          displayImgs.push(newData[i].image);
          colors.push(newData[i].colors);
          prices.push(newData[i].price);
          names.push(newData[i].name);
          categories.push(newData[i].category);
        }

        this.setState({
          id: context.state.id,
          structuralImgs: context.state.structuralImgs,
          carouselNumber: context.state.carouselNumber + direction,
          displayImgs: displayImgs,
          prices: prices,
          categories: categories,
          names: names,
          colors: colors
        });
      //set the state in here
    });
  }
  slideCarouselLeft () {
    console.log('you moved left');
    if (this.state.carouselNumber >= 1) {
      this.get(-1)
    } // implement to update display imgs
  }
  slideCarouselRight () {
    console.log('you moved right');
    if (this.state.carouselNumber <= 1) {
      this.get(1);
    }
  }
  render () {
    //Styles
    let relatedStyle = {
      'width': '1190px',
      'display': 'flex',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    let relatedContentCarouselStyle = {
      'display': 'flex',
      'flexDirection': 'row',
      'width': '100%'
    }
    let youMayAlsoLikeStyle = {
      'display': 'flex',
      'justifyContent': 'center',
      'fontFamily': 'Helvetica',
      'fontSize': '16px',
      'fontWeight': 'bold',
      'fontStyle': 'normal',
      'color': '#222222',
    }
    let arrowStyle = {
      'height': '16px',
      'width': '12px'
    }
    let relatedContentLeftArrowStyle = {
      'display': 'flex',
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'justifyContent': 'center',
      'width': '13.515%'

    }
    let relatedContentRightArrowStyle = {
      'display': 'flex',
      'marginTop': 'auto',
      'marginBottom': 'auto',
      'justifyContent': 'center',
      'width': '11.90%'
    }
    if (this.state.carouselNumber === 0) {

      console.log(this.state)
      return (
        <div>
          <h3 id = 'youMayAlsoLike' style = {youMayAlsoLikeStyle}> YOU MAY ALSO LIKE </h3>
          <div id = 'related' style = {relatedStyle}>
            <div id = 'relatedContentLeftArrow' onClick = {this.get.bind(this)} style = {relatedContentLeftArrowStyle}>
            </div>
            <div id = 'relatedContentCarousel' style = {relatedContentCarouselStyle}>
              <ShoeWidget image = {this.state.displayImgs[0]} price = {this.state.prices[0]} name = {this.state.names[0]} category = {this.state.categories[0]} colorsAmount = {this.state.colors[0].length} />
              <ShoeWidget image = {this.state.displayImgs[1]} price = {this.state.prices[1]} name = {this.state.names[1]} category = {this.state.categories[1]} colorsAmount = {this.state.colors[1].length} />
              <ShoeWidget image = {this.state.displayImgs[2]} price = {this.state.prices[2]} name = {this.state.names[2]} category = {this.state.categories[2]} colorsAmount = {this.state.colors[2].length} />
              <ShoeWidget image = {this.state.displayImgs[3]} price = {this.state.prices[3]} name = {this.state.names[3]} category = {this.state.categories[3]} colorsAmount = {this.state.colors[3].length} />
            </div>
            <div id = 'relatedContentRightArrow' onClick = {this.slideCarouselRight.bind(this)} style = {relatedContentRightArrowStyle}>
              <img  className = 'arrow' src = {this.state.structuralImgs[1]}  style = {arrowStyle}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.carouselNumber === 1) {
      console.log(this.state)
      return (
        <div>
          <h3 id = 'youMayAlsoLike' style = {youMayAlsoLikeStyle}> YOU MAY ALSO LIKE </h3>
          <div id = 'related' style = {relatedStyle}>
            <div id = 'relatedContentLeftArrow' style = {relatedContentLeftArrowStyle} onClick = {this.slideCarouselLeft.bind(this)}>
              <img  className = 'arrow' src = {this.state.structuralImgs[0]} style = {arrowStyle}/>
            </div>
            <div id = 'relatedContentCarousel' style = {relatedContentCarouselStyle}>
              <ShoeWidget image = {this.state.displayImgs[0]} price = {this.state.prices[0]} name = {this.state.names[0]} category = {this.state.categories[0]} colorsAmount = {this.state.colors[0].length}/>
              <ShoeWidget image = {this.state.displayImgs[1]} price = {this.state.prices[1]} name = {this.state.names[1]} category = {this.state.categories[1]} colorsAmount = {this.state.colors[1].length}/>
              <ShoeWidget image = {this.state.displayImgs[2]} price = {this.state.prices[2]} name = {this.state.names[2]} category = {this.state.categories[2]} colorsAmount = {this.state.colors[2].length}/>
              <ShoeWidget image = {this.state.displayImgs[3]} price = {this.state.prices[3]} name = {this.state.names[3]} category = {this.state.categories[3]} colorsAmount = {this.state.colors[3].length}/>
            </div>
            <div id = 'relatedContentRightArrow' onClick = {this.slideCarouselRight.bind(this)} style = {relatedContentRightArrowStyle}>
              <img  className = 'arrow' src = {this.state.structuralImgs[1]} style = {arrowStyle}/>
            </div>
          </div>
        </div>
      );
    } else if (this.state.carouselNumber === 2) {
      console.log(this.state)
      return (
        <div>
          <h3 id = 'youMayAlsoLike' style = {youMayAlsoLikeStyle}> YOU MAY ALSO LIKE </h3>
          <div id = 'related' style = {relatedStyle}>
            <div id = 'relatedContentLeftArrow' style = {relatedContentLeftArrowStyle} onClick = {this.slideCarouselLeft.bind(this)}>
              <img  className = 'arrow' src = {this.state.structuralImgs[0]} style = {arrowStyle}/>
            </div>
            <div id = 'relatedContentCarousel' style = {relatedContentCarouselStyle}>
              <ShoeWidget image = {this.state.displayImgs[0]} price = {this.state.prices[0]} name = {this.state.names[0]} category = {this.state.categories[0]} colorsAmount = {this.state.colors[0].length}/>
              <ShoeWidget image = {this.state.displayImgs[1]} price = {this.state.prices[1]} name = {this.state.names[1]} category = {this.state.categories[1]} colorsAmount = {this.state.colors[1].length}/>
              <ShoeWidget image = {this.state.displayImgs[2]} price = {this.state.prices[2]} name = {this.state.names[2]} category = {this.state.categories[2]} colorsAmount = {this.state.colors[2].length}/>
              <ShoeWidget image = {this.state.displayImgs[3]} price = {this.state.prices[3]} name = {this.state.names[3]} category = {this.state.categories[3]} colorsAmount = {this.state.colors[3].length}/>
            </div>
            <div id = 'relatedContentRightArrow' style = {relatedContentRightArrowStyle}>
            </div>
          </div>
        </div>
      );
    }
  }
}

window.RelatedContentBar = RelatedContentBar;