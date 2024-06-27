import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";
export const ContactList = () => {
  const items = useSelector(selectContacts);
  const { name } = useSelector(selectNameFilter);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <ul className="list-none p-0 my-5">
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
