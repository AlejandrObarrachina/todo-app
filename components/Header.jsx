import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 text-white flex items-center justify-between bg-inherit border-b border-solid border-white p-4 ">
        <h1 className="text-3xl select-none uppercase sm:text-6xl">
          To Do List
        </h1>
        <i
          onClick={() => setOpenModal(true)}
          className="fa-sharp fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-50 cursor-pointer"
        ></i>
      </div>
    </>
  );
};
