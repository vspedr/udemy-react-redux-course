import React, { Component } from 'react';

class CompleteGoalItem extends Component {
  render() {
    const { goal, index } = this.props;
    return (
      <div key={index}>
        <strong>{goal.title}</strong>
        <span> completed by <em>{goal.email}</em></span>
      </div>
    );
  }
}

export default CompleteGoalItem;
