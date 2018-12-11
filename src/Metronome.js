import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import click1 from './sounds/click1.wav';
import click2 from './sounds/click2.wav';
import './Metronome.css';

class Metronome extends Component {

  //Initialize constructor with default props I want in state.
  constructor(props) {
    super(props);/**/
    this.state = {
      playing: false,
      count:0,
      bpm:100,
      beatsPerMeasure: 4
    };
    //Audio files for later
    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  } //close constructor



  /*
The reason for using an arrow function is that this will be automatically bound to refer to the Metronome instance, and everything will work nicely.
  */
  handleBpmChange = event => {
    const bpm = event.target.value;

    if (this.state.playing) {
    clearInterval(this.timer);
    //setInerval continuously calls the the 1st fx (passed to it as an arg. The 2nd arg defines the freq at which to call it)
    this.timer = setInterval(this.playClick, (60 / bpm ) * 1000);

    //set the new bpm and reset the beat counter
    this.setState({
      count: 0,
      bpm
    });
  } else {
    //otherwise just update the bpm
    this.setState({ bpm });
  }

  }

  playClick = () =>  {
    const { count, beatsPerMeasure } = this.state;

    //If 1 measure has gone by then play the other sound.
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play(); //The first beat will sound different than the 2nd
    }

    //Keep track of which beat we're on in the measure. Pass set state the remainder of (count+1) /4
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  }

  startStop = () => {
    if(this.state.playing) {
      //Stop the timer
      clearInterval(this.timer);
      this.setState({
        playing: false
      });
      //if the metronome is NOT playing...
    } else {
      //start timer with current BPM (setInterval sets click to be 1 beat in the future)
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
      this.setState({
        count: 0,
        playing: true
      //play a click "immediately" (after setState finishes that is)
    }, this.playClick);
   }
 }//close starStop()



  render() {

    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
         <div className="bpm-slider">
          <div>{bpm} BPM </div>
          <input
            type="range"
            min="60"
            max="240"
            value={bpm}
            onChange={this.handleBpmChange} />
            {/*Add the onClick handler: */}
            <button onClick={this.startStop}>
            {playing ? 'Stop' : 'Start' }
            </button>

         </div>
      </div>
    );
  }
}

export default Metronome;
