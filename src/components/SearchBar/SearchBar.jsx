import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    dispatch(changeFilter(filterValue));
    toast.success(`Filter changed to: ${filterValue}`);
  };

  return (
    <div className={s.container}>
      <Toaster />
      <p className={s.label}>Find contacts by name</p>
      <input type="text" onChange={handleChange} className={s.input} />
    </div>
  );
};
