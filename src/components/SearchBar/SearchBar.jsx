import { useDispatch } from "react-redux";
import s from "./SearchBar.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.searchContainer}>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} className={s.inputSearch} />
    </div>
  );
};
