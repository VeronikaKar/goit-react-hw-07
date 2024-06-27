import { useDispatch } from "react-redux";
import s from "./SearchBar.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useState } from "react";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const filterValue = event.target.value;
    setQuery(filterValue);
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={s.searchContainer}>
      <p>Find contacts by name</p>
      <div className={s.inputContainer}>
        <input
          type="text"
          onChange={handleChange}
          className={s.inputSearch}
          placeholder="Search contacts..."
          value={query}
        />
      </div>
    </div>
  );
};
