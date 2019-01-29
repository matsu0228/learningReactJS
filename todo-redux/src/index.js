import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// 1. redux sample
const initialState = {
  task: "",
  tasks: []
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

const store = createStore(tasksReducer);

const addTask = task => ({
  type: "ADD_TASK",
  payload: { task }
});

const inputTask = task => ({
  type: "INPUT_TASK",
  payload: { task }
});

function renderApp(store) {
  ReactDOM.render(<TodoApp store={store} />, document.getElementById("root"));
}

function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input
        type="text"
        onChange={e => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map(function(item, i) {
          return <li key={i}> {item} </li>;
        })}
      </ul>
    </div>
  );
}

//const unsubscribe = store.subscribe(handleChange);
store.subscribe(() => renderApp(store)); //view描画
renderApp(store);

/*

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

*/
