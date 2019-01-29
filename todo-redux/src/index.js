import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// 1. redux sample
const initialState = {
  tasks: []
};

function addTasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function handleChange() {
  console.log("called handleChange()", store.getState());
  //{
  //tasks:['Storeを学ぶ']
  //}
}

const addTask = task => ({
  type: "ADD_TASK",
  payload: { task }
});

const store = createStore(addTasksReducer);
const unsubscribe = store.subscribe(handleChange);

store.dispatch(addTask("learning of Store"));
console.log(store.getState());

// 2. reset sample
function resetReducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_TASK":
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}
// このときはstateの変化はない
store.replaceReducer(resetReducer);
const resetTask = () => ({
  type: "RESET_TASK"
});
// dispatchしたらstate変化
store.dispatch(resetTask());

// 3.unscbscribeしたら、handleChange()がcallされない
console.log("unscbscribe sample");
unsubscribe();
store.replaceReducer(addTasksReducer);
store.dispatch(addTask("learning of Store"));
