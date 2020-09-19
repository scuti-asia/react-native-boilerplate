import defaultState from '../stateDefinitions';
import IS_REQUESTING from './isRequesting';
import UPDATE_ME from './updateMe';

const reducers = {
  IS_REQUESTING,
  UPDATE_ME
};

export default (state = defaultState, action = {}) => {
  if (reducers[action.type] === undefined) {
    return state;
  }
  return reducers[action.type](state, action);
};
