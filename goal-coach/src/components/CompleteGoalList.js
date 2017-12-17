import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeGoalRef } from '../firebase';
import { setCompleteGoals } from  '../actions';
import CompleteGoalItem from './CompleteGoalItem';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snap => {
      const completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });
      });
      this.props.setCompleteGoals(completeGoals);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {this.props.completeGoals.map(
          (goal, index) => <CompleteGoalItem key={index} goal={goal} />
        )}
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          ClearAll
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  completeGoals: state.completeGoals
});

export default connect(
  mapStateToProps,
  { setCompleteGoals }
)(CompleteGoalList);
