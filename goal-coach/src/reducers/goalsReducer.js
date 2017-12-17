import { SET_GOALS } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
  case SET_GOALS:
    const { goals } = action;
    return goals;
  default:
    return state;
  }
};
