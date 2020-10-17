const redux = require("redux");
const store = redux.createStore;

const BuyBook = "Buy Book";

const intialState = {
  numberOfbooks: 10,
};

function BuyBook() {
  return {
    type: BuyBook,
    info: "My First Redux Code",
  };
}
const reducer = (state = intialState, action) => {
  if (action.type === "Buy Book") {
    return {
      numberOfbooks: numberOfbooks + 1,
    };
  } else {
    return state;
  }
};
asdasdasdasdasdasdad;
