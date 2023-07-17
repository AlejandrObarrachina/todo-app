import React from "react";

const TodoCard = (props) => {
  const {
    children,
    edit,
    handleAddEdit,
    edditedValue,
    setEdittedValue,
    index,
    todoKey,
    handleEditTodo,
    handleDelete,
    handleIsDone,
  } = props;

  return (
    <div className="flex sm:p-3 p-2 border border-white border-solid relative">
      <div className="flex-1 flex">
        {!(edit === todoKey) ? (
          <>{children} </>
        ) : (
          <input
            className="bg-inherit text-white p-2 outline-none flex-1"
            value={edditedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
          />
        )}
      </div>
      <div className="flex gap-3 items-center px-2 duration-300">
        {edit === todoKey ? (
          <i
            onClick={handleEditTodo}
            className="fa-sharp fa-solid fa-check duration-300 hover:text-green-600 cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={handleAddEdit(todoKey)}
            className="fa-solid fa-pencil duration-300 hover:rotate-45 cursor-pointer "
          ></i>
        )}

        <i
          onClick={handleDelete(todoKey)}
          className="fa-solid fa-trash-can duration-300 hover:scale-110 cursor-pointer hover:text-red-500"
        ></i>
        <input type="checkbox" name="isDone" id="done" />
      </div>
    </div>
  );
};

export default TodoCard;
