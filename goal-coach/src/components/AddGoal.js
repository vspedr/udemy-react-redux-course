import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onInputChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  addGoal() {
    const { title } = this.state;
    const { email } = this.props.user;
    goalRef.push({ email, title });
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input type="text"
            placeholder="Add goal"
            className="form-control"
            onChange={event => this.onInputChange(event)}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
          Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(AddGoal);
