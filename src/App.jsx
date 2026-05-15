import { useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import Modal from "./components/Modal";
import { editIcon } from "./utils/img";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 345,
      title: "title 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate rerum nemo dignissimos reprehenderit distinctio qui?",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 45,
      title: "title 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate rerum nemo dignissimos reprehenderit distinctio qui?",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 23,
      title: "title 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate rerum nemo dignissimos reprehenderit distinctio qui?",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const addNoteHandler = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Notes notes={notes} />
      </div>
      <button className="addBtn" onClick={() => openModalHandler()}>
        <img src={editIcon} alt="" />
      </button>
      {isModalOpen && (
        <Modal closeModal={closeModalHandler} addNote={addNoteHandler} />
      )}
    </>
  );
};

export default App;
