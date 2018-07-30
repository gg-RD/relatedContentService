import React from 'react';
import ReactDOM from 'react-dom';

class ShoeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeOneId: 0,
      ShoeTwoId: 0,
      ShoeThreeId: 0,
      ShoeFourId: 0
    }
    this.image = props.image;
    console.log(this.image);
  }
  render () {
    return (
      <div className = 'shoeWidget'>
        
        
        <img className = 'relatedContentImage' src = {this.image} />
        <p className = 'colorsAmountText'> {this.props.colorsAmount} colors <br/>
          ____________________________
          <br/>
          Los Angeles Lakers City Edition (LeBron James) Nike Dri-FIt
          <br/>
          Men's NBA T-Shirt
          <br/>
          $35
         </p>
      </div>
    );
  }
}

export default ShoeWidget;