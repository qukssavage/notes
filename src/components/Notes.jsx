import { useState } from "react";
import { gridIcon, listIcon } from "../utils/img";
import NotesItem from "./NotesItem";
import clsx from "clsx";

const Notes = ({ notes }) => {
  const [view, setView] = useState(true);
  const viewIcon = view ? listIcon : gridIcon;
  const viewSpan = view ? "Список" : "Таблица";
  const classList = clsx("notes__list", { active: !view });
  return (
    <div className="notes">
      <div className="notes__top">
        <h2 className="notes__top-title">Все заметки</h2>
        <button className="notes__top-btn" onClick={() => setView(!view)}>
          <img src={viewIcon} alt="" />
          <span className="notes__top-btn_span">{viewSpan}</span>
        </button>
      </div>
      <div className={classList}>
        {notes.map((note) => (
          <NotesItem key={note.id} note={note} view={view}/>
        ))}
      </div>
    </div>
  );
};

export default Notes;
