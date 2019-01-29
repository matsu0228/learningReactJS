import React from "react";
import ReactDOM from "react-dom";
import tasksReducer from "./reducers/tasks";
import TodoApp from "./components/TodoApp";
import { createStore } from "redux";

const store = createStore(tasksReducer);

function renderApp(store) {
  ReactDOM.render(<TodoApp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store)); //view描画
renderApp(store);
