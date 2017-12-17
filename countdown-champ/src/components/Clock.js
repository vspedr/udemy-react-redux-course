import React, { Component } from 'react';
import '../styles/Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.props.deadline);
    }, 1000);
  }

  leadingZero(number){
    return (number < 10) ? ('0' + number) : number;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 / 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <div className="Clock-days">{`${this.leadingZero(days)} days,`}</div>
        <div className="Clock-hours">{`${this.leadingZero(hours)} hours,`}</div>
        <div className="Clock-minutes">{`${this.leadingZero(minutes)} minutes,`}</div>
        <div className="Clock-seconds">{`${this.leadingZero(seconds)} seconds.`}</div>
      </div>
    );
  }
}

export default Clock;
