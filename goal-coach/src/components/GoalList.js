import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setGoals } from '../actions';
import { goalRef } from '../firebase';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      const goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
      });
      this.props.setGoals(goals);
    });
  }

  render() {
    return(
      <div>
        {this.props.goals.map(
          (goal, index) => <GoalItem key={index} goal={goal} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  goals: state.goals
});

export default connect(mapStateToProps, { setGoals })(GoalList);
