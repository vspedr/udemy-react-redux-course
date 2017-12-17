import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
  addReminder,
  deleteReminder,
  clearReminders
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  clearReminders() {
    this.props.clearReminders();
  }

  renderReminders() {
    const { reminders } = this.props;
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              </div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          ))
        }
      </ul>
    );
  }

  handleInputChange(event) {
    this.setState({ text: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ dueDate: event.target.value });
  }

  render() {
    return(
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.handleInputChange(event)}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.handleDateChange(event)}
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addReminder() }
            >
              Add Reminder
            </button>
          </div>
        </div>
        {this.renderReminders()}
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.clearReminders() }
        >
          Clear Reminders
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reminders: state
});

export default connect(
  mapStateToProps,
  { addReminder, deleteReminder, clearReminders }
)(App);
