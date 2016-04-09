import React from "react";
import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";




export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    console.log("count: ", TodoStore.listenerCount("change"));
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  createTodo() {
    TodoActions.createTodo(Date.now());
  }

  render() {
      const {todos} = this.state;

      const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      });

      return (
        <div>
          <button class="btn btn-primary" onClick={this.reloadTodos.bind(this)}>Reload</button> | <button class="btn btn-success" onClick={this.createTodo.bind(this)}>Create</button>
          <h1>Todos</h1>
          <ul>{TodoComponents}</ul>
        </div>
      );
    }
  }
