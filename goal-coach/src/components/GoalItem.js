import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setGoals } from '../actions';
import { goalRef, completeGoalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({ email, title });
  }

  render() {
    const { goal, index } = this.props;
    return (
      <div key={index}>
        <strong>{goal.title}</strong>
        <span> submitted by <em>{goal.email}</em></span>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { setGoals })(GoalItem);
