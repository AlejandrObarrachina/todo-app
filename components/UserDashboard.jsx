import { useAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import useFetchTodos from "@/hooks/fetchTodos";

const UserDashboard = () => {
  const [addTodo, setAddTodo] = useState(null);
  const [todo, setTodo] = useState("");
  const { userInfo, currentUser } = useAuth();
  const [todoList, setTodoList] = useState({});

  const { todos, loading, error } = useFetchTodos();

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setAddTodo(true);
    }
  }, [userInfo]);

  async function handleAddToDo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todoList).length === 0
        ? 1
        : Math.max(...Object.keys(todoList)) + 1;
    setTodoList({ ...todoList, [newKey]: todo });
    setTodo("");
    const useRef = doc(db, "users", currentUser.uid);
    await setDoc(
      useRef,
      {
        todos: {
          [newKey]: todo,
        },
      },
      { merge: true }
    );
  }

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm:gap-5">
      {addTodo && (
        <div className="flex items-stretch">
          <input
            type="text"
            placeholder="Enter to do"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            className="outline-none p-2 text-base sm:text-lg text-slate-900 flex-1"
          />
          <button
            onClick={handleAddToDo}
            className="w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-base font-medium text-white duration-300 hover:opacity-40"
          >
            ADD
          </button>
        </div>
      )}
      {userInfo && !loading && (
        <>
          {Object.keys(todos).map((todo, i) => {
            return <TodoCard key={i}>{todos[todo]}</TodoCard>;
          })}
        </>
      )}
      {!addTodo && (
        <button
          onClick={() => setAddTodo(true)}
          className="text-cyan-300 border border-solid border-cyan-900 py-2 text-center uppercase font-medium text-lg duration-300 hover:opacity-30 cursor-pointer"
        >
          ADD TODO
        </button>
      )}
    </div>
  );
};

export default UserDashboard;
