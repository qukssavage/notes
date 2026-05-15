import { useState } from "react";
import { backIcon, resetIcon, searchIcon } from "../utils/img";

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <header className="header">
      <div className="header__nav">
        {show ? (
          <>
            <button className="header__nav-lang">RU</button>
            <h1 className="header__nav-title">Заметки</h1>
            <button
              className="header__nav-search"
              onClick={() => setShow(false)}
            >
              <img src={searchIcon} alt="" />
            </button>
          </>
        ) : (
          <>
            <button className="header__nav-back" onClick={() => setShow(true)}>
              <img src={backIcon} alt="" />
            </button>
            <input
              type="text"
              className="header__nav-input"
              placeholder="Поиск..."
            />
            <button className="header__nav-reset">
              <img src={resetIcon} alt="" />
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
