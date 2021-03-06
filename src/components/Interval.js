import React from 'react';

export default class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 20
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      timeLeft: prevState.timeLeft - 1
    }));
  }

  render() {
    return (
      <div className= 'modal__timer'>
        <p>
        {
          this.state.timeLeft > 9 
          ? 
          '0:' + this.state.timeLeft 
          :
          '0:0' + this.state.timeLeft
        }
        </p>
      </div>
    );
  }
}