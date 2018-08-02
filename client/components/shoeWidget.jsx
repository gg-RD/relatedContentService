import React from 'react';
import ReactDOM from 'react-dom';

class ShoeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }
  togglehHover () {
    this.setState({
      'selected': !this.state.selected
    })
  }
  render () {
    let shoeWidgetStyle = {
        'height': '353px',
        'width': '245px'
    }
    let shoeWidgetHighlightedStyle = {
        'border': '1px solid lightgrey',
        'height': '353px',
        'width': '245px'
    }
    let relatedContentImageStyle = {
      "width": "220px",
      "height": "220px",
      "marginTop": "10px",
      "marginLeft": "15px",
      "marginRight": "10px"
    }
    let colorsAmountTextStyle = {
      'marginLeft': '15px',
      'marginTop': '8px',
      'marginBottom': '0px'
    }
    let underlineTextStyle = {
      'marginLeft': '15px',
      'marginTop': '0px',
      'marginBottom': '0px',
      'color': 'lightgrey'
    }
    let nameTextStyle = {
      'marginLeft': '15px',
      'marginTop': '0px',
      'marginBottom': '0px',
      'fontFamily': 'Helvetica',
      'fontSize': '12px',
      'fontWeight': 'bold',
      'fontStyle': 'normal',
      'color': '#222222',
    }
    let categoryTextStyle = {
      'marginLeft': '15px',
      'marginTop': '0px',
      'marginBottom': '0px',
      'color': '#e5e5e5',
      'fontFamily': 'Helvetica',
      'fontSize': '13px',
      'fontWeight': 'lighter',
      'color': 'darkgrey'
    }
    let priceTextStyle = {
      'marginLeft': '15px',
      'marginTop': '0px',
      'marginBottom': '0px',
      'color': '#e5e5e5',
      'fontFamily': 'Helvetica',
      'fontSize': '13px',
      'fontWeight': 'lighter',
      'color': 'darkgrey'
    }


    if (this.state.selected === false) {
      return (
        <div className = 'shoeWidget' style = {shoeWidgetStyle} onMouseEnter = {this.togglehHover.bind(this)} onMouseLeave = {this.togglehHover.bind(this)}>
          <img className = 'relatedContentImage' src = {this.props.image} style = {relatedContentImageStyle}/>
          <p className = 'colorsAmountText' style = {colorsAmountTextStyle}> {this.props.colorsAmount} colors </p>
          <p style = {underlineTextStyle}> ––––––––––––––––––––––––––––</p>
          <p style = {nameTextStyle}> {this.props.name} </p>
          <p style = {categoryTextStyle}> {this.props.category} </p>
          <p style = {priceTextStyle}>${this.props.price} </p>
        </div>
      );
    } else {
      return (
        <div className = 'shoeWidget' style = {shoeWidgetHighlightedStyle} onMouseEnter = {this.togglehHover.bind(this)} onMouseLeave = {this.togglehHover.bind(this)}>
          <img className = 'relatedContentImage' src = {this.props.image} style = {relatedContentImageStyle}/>
          <p className = 'colorsAmountText' style = {colorsAmountTextStyle}> {this.props.colorsAmount} colors </p>
          <p style = {underlineTextStyle}> –––––––––––––––––––––––––––– </p>
          <p style = {nameTextStyle}> {this.props.name} </p>
          <p style = {categoryTextStyle}> {this.props.category} </p>
          <p style = {priceTextStyle}>${this.props.price} </p>
        </div>
      );
    }
  }
}

export default ShoeWidget;