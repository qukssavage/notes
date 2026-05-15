import { useState } from "react";
import { v4 } from "uuid";

const Modal = ({ closeModal, addNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const add = () => {
    if (title.length > 2 && desc.length > 2) {
      const note = {
        id: v4(),
        title,
        desc,
        date: new Date().toLocaleDateString(),
      };

      addNote(note);
      closeModal();
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="modal">
      <div className="modal__block">
        <h3 className="modal__block-title">Добавить заметку</h3>
        <div className="modal__block-form">
          <label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              type="text"
              placeholder="Content"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <span>Content</span>
          </label>
        </div>
        <div className="modal__block-bottom">
          <button
            className="modal__block-bottom_btn red"
            onClick={() => closeModal()}
          >
            Отмена
          </button>
          <button
            className="modal__block-bottom_btn purple"
            onClick={() => add()}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
