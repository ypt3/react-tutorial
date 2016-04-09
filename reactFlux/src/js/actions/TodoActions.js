import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"})
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 898989898,
        text: "Go Shopping again",
        complete: false
      },
      {
        id: 1232783829,
        text: "Play all the Bill",
        complete: true
      },
    ]});

    if (false) {
      dispatcher.dispatch({type: "FETCH_TODOS_ERROR"})
    }
  }, 1000);
}
