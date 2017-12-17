import { SET_COMPLETE_GOALS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
  case SET_COMPLETE_GOALS:
    const { completeGoals } = action;
    return completeGoals;
  default:
    return state;
  }
};
