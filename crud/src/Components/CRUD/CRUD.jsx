import React, {  useState } from "react";
import AddTodo from "./AddTodo";
import ReadTodo from "./ReadTodo";

export default function CRUD() {
  //  let list = [];

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [action, setAction] = useState(false);

  const [currentItem, setCurrentItem] = useState(null);

  function addItem(userDetails) {
    userDetails.id = todoList.length + 1;
    setTodoList([...todoList, userDetails]);


    localStorage.setItem(
      "todoList",
      JSON.stringify([...todoList, userDetails])
    );
  }

  function handleClickDelete(id) {
    setTodoList(todoList.filter((e) => e.id !== id));
    localStorage.setItem(
      "todoList",
      JSON.stringify(todoList.filter((e) => e.id !== id))
    );
  }

  function editData(item) {
    setAction(true);
    setCurrentItem(item);
  }
  function updateItem(UpdateTodo) {
    setTodoList(
      todoList.map((e) => {
        if (e.id === UpdateTodo.id) {
          return UpdateTodo;
        } else {
          return e;
        }
      })
    );
    setAction(false);
    setCurrentItem(null);
    localStorage.setItem(
      "todoList",
      JSON.stringify(
        todoList.map((e) => {
          if (e.id === UpdateTodo.id) {
            return UpdateTodo;
          } else {
            return e;
          }
        })
      )
    );
  }

  return (
    <>
    {/* <Navbar /> */}
      <AddTodo
        addItem={addItem}
        currentItem={currentItem}
        updateItem={updateItem}
        action={action}
        setAction={setAction}
        todoList ={todoList}
      />

      <ReadTodo
        todoList={todoList}
        handleClickDelete={handleClickDelete}
        editData={editData}
      />


    </>
  );
}
