import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import firebaseApp from '../firebase';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return(
      <div>
        <h3>GoalCoach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(App);
