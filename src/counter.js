import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './counter.css';
//import './counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      count:0
    };
  }

  incrementCount = event => {
    //const count = event.target.value;
    //console.log(count);
    this.setState({ count });
    count++;
  }

  render() {

    const { count } = this.state;

    return(
      <div className="counter">
      <div className="counterButton">
        <div> { count } count </div>
        <button
        onClick={this.incrementCount}>
           +
        </button>
        <div>{ count } 2nd count </div>
      </div>
      </div>
    );
  }
} //close counter

export default Counter;
