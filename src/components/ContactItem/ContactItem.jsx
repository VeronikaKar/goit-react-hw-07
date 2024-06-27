import { deleteContact } from "../../redux/operations.js";
import { useDispatch } from "react-redux";
import { ContactIcon, PhoneCallIcon } from "lucide-react";
import s from "./ContactItem.module.css";

export const ContactItem = ({ contact: { number, name, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={s.item}>
      <div>
        <p className={s.text}>
          <ContactIcon />
          {name}
        </p>
        <p className={s.text}>
          <PhoneCallIcon />
          {number}
        </p>
      </div>
      <button
        type="button"
        onClick={handleDeleteContact}
        className={s.button__delete}
      >
        Delete
      </button>
    </li>
  );
};
