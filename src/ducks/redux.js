import { combineReducers, createStore } from 'redux';


//reducer

export const activateGreet = Greet => ({
  type: 'ACTIVATE_Greet',
  Greet,
});

export const closeGreet = () => ({
  type: 'CLOSE_Greet',
});

export const Greet = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_Greet':
      return action.Greet;
    case 'CLOSE_Greet':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  Greet,
});

// store

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
