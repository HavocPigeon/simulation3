const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export default (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case INCREMENT_COUNTER:
      newState.count++;
      return newState;
    case DECREMENT_COUNTER:
      newState.count--;
      return newState;
    default:
      return newState;
  }
};