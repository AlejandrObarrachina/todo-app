import React from "react";

const TodoCard = (props) => {
  const { children } = props;
  return (
    <div className="flex sm:p-3 p-2 border border-white border-solid">
      <div className="flex-1">{children}</div>
      <div className="flex gap-3 items-center px-2 duration-300">
        <i className="fa-solid fa-pencil duration-300 hover:rotate-45 cursor-pointer "></i>
        <i className="fa-solid fa-trash-can duration-300 hover:scale-110 cursor-pointer hover:text-red-500"></i>
      </div>
    </div>
  );
};

export default TodoCard;
