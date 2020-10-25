export default (state, {payload}) => {
  let newState = Object.assign({}, state);
  newState.isRequesting = payload;

  return newState;
};
