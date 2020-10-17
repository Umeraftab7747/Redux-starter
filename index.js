const redux = require("redux");
const createStore = redux.createStore;
const reducerCombine = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const intialStateBook = {
  // state
  numberOfbooks: 10,
};
const intialStatePen = {
  // state

  numberOfpens: 115,
};

function BuyBook() {
  return {
    //   Actions
    type: "Buy Book",
    payload: "My First Redux Code",
  };
}

function BuyPen() {
  return {
    //   Actions
    type: "Buy Pen",
    payload: "My Second Redux Code",
  };
}

const reducerBook = (state = intialStateBook, action) => {
  // StatePlay
  if (action.type === "Buy Book") {
    return {
      ...state,
      numberOfbooks: state.numberOfbooks + 3,
    };
  } else {
    return state;
  }
};
const reducerPen = (state = intialStatePen, action) => {
  // StatePlay
  if (action.type === "Buy Pen") {
    return {
      ...state,
      numberOfpens: state.numberOfpens - 4,
    };
  } else {
    return state;
  }
};

const reducer = reducerCombine({
  book: reducerBook,
  pen: reducerPen,
});
const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      console.log("middleware", result);
      return result;
    };
  };
};

const store = createStore(reducer, applyMiddleWare(logger));
console.log("inital state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Update state", store.getState());
});
store.dispatch(BuyBook());
store.dispatch(BuyBook());
store.dispatch(BuyPen());
store.dispatch(BuyPen());
store.dispatch(BuyPen());
unsubscribe();
