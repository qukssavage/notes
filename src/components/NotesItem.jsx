import clsx from "clsx";
import { editIcon, removeIcon } from "../utils/img";

const NotesItem = ({ note, view }) => {
  const itemTop = clsx("notes__list-item_top", {active: !view})
  return (
    <div className="notes__list-item">
      <div className={itemTop}>
        <h4 className="notes__list-item_top-title">{note.title}</h4>
        <p className="notes__list-item_top-date">{note.date}</p>
      </div>
      <p className="notes__list-itme_desc">
        {note.desc}
      </p>
      <div className="notes__list-item_bottom">
        <button className="notes__list-item_bottom-btn purple">
          <img src={editIcon} alt="" />
          <span>РЕДАКТИРОВАТЬ</span>
        </button>
        <button className="notes__list-item_bottom-btn red">
          <img src={removeIcon} alt="" />
          <span>УДАЛИТЬ</span>
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
