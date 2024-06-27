import s from "./ContactItem.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { ContactIcon } from "lucide-react";
import { PhoneCallIcon } from "lucide-react";
export const ContactItem = ({ contact: { number, name, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <div>
        <p>
          <ContactIcon />
          {name}
        </p>
        <p>
          <PhoneCallIcon />
          {number}
        </p>
      </div>

      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={s.button__delete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
