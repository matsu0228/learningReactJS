import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: "default todo",
          id: 0
        }
      ],
      uniqued: 1
    };

    // bindすることで、ほかコンポーネントからApp.jsのstateが参照される
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo(title) {
    const { tasks, uniqueId } = this.state;
    tasks.push({
      title,
      id: uniqueId
    });
    this.setState({
      tasks,
      uniqueId: uniqueId + 1
    });
  }
  resetTodo() {
    this.setState({
      tasks: []
    });
  }

  render() {
    return (
      <div>
        <h1>TODOApp</h1>
        <button onClick={this.resetTodo}>リセット</button>
        {/*renderメソッドではこの行だけ追加*/}

        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
