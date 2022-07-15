import React from "react";
//(priority: {todo.priority})
/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo(todo) {
  console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}");
  console.log("the todo object is ..... ", todo);
  return (
      <div className="Todo">
        <div><b>{todo.title}</b> <small></small></div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
