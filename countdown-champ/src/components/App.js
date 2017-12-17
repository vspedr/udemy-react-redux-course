import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import Clock from './Clock';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    };
  };

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  handleInputChange(event) {
    this.setState({ newDeadline: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            className="Deadline-input"
            onChange={event => this.handleInputChange(event)}
            placeholder="new date" />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
