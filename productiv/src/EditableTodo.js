import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  console.log({ todo, update, remove }, 'editabletodo component' )

  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    if (isEditing) {
      setIsEditing(false);
    }
    else {
      setIsEditing(true);
    }
  }

  /** Call remove fn passed to this. */
  // TODO: unsure about this parameter in remove func call
  function handleDelete() {
    remove(todo.id);
   }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    toggleEdit();
    update(todo, formData);

   }

  return (
      <div className="EditableTodo">

                {isEditing === true && <TodoForm handleSave={handleSave}
                                                 initialFormData={todo}/>}


                {isEditing === false &&
                <div className="mb-3">
                  <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo todo={todo}/>
                </div>
                }
      </div>
  );
}

export default EditableTodo;
