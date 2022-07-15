import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import ToDoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  console.log("++++++++++++++++++++++++++++++++++++++++++");
  console.log( initialTodos , 'todoapp component' )
  const [todos, setTodos] = useState(initialTodos);
  const initialFormData = {title: "",
  description: "",
  priority: 1,}

  /** add a new todo to list */
  function create(formData) {
    const newTodo = {};
    newTodo["id"] = uuid();
    newTodo["title"] = formData.title;
    newTodo["description"] = formData.description;
    newTodo["priority"] = formData.priority;
    setTodos((todos) => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo, formData) {
    //original >> updatedTodo = {id:456, title:..., ..., ...}
    //formData = {id:123, title:..., ..., .. }
    console.log('updated to do original: ', updatedTodo, '&&&&&formdata', formData)
    updatedTodo = {...formData, id: uuid()}; 
    remove(updatedTodo.id);
    console.log(updatedTodo, 'NEW UPDATED TO DO *************');
    setTodos((todos) => [...todos, updatedTodo]);
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleSave(title, description, priority) {
    create(title, description, priority);
  }
  console.log("==========================================");
  console.log("todos: ", todos, "and length", todos.length);

  //TODO: look into handlesave func, currently defined in editabletodo
  return (
    <main className="TodoApp">
      <div className="row">
      <div className="col-md-6">
          {todos.length > 0 && (
            <EditableTodoList todos={todos} update={update} remove={remove} />
          )}
          {todos.length === 0 && (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        {todos.length > 0 && (
          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <ToDoForm handleSave={handleSave} initialFormData={initialFormData} />
            </section>
          </div>
        )}
      </div>
    </main>
  );
}

export default TodoApp;
