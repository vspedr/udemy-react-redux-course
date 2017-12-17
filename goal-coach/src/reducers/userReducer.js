import { SIGNED_IN } from '../constants';

const initialState = {
  email: null
};

export default (state = initialState, action) => {
  switch(action.type) {
  case SIGNED_IN:
    const { email } = action;
    const user = { email };
    return user;
  default:
    return state;
  }
};
