import { useId } from "react";

import css from "./SearchBox.module.css";

function SearchBox({ onReset, value, onChange }) {
  const filterId = useId();

  return (
    <form className={css.box}>
      <label htmlFor={filterId}>Find contacts dy name or number</label>

      <input
        className={css.input}
        id={filterId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        name="filterValue"
      />

      <button className={css.button} onClick={onReset} type="button">
        Clear
      </button>
    </form>
  );
}
export default SearchBox;
