export default (state, {payload}) => {
  let newState = Object.assign({}, state);
  console.log(payload.me)
  newState.me = payload.me;

  return newState;
};
