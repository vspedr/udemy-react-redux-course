import { combineReducers } from 'redux';
import user from './userReducer';
import goals from './goalsReducer';
import completeGoals from './completeGoalsReducer';

export default combineReducers({
  user,
  goals,
  completeGoals
});
