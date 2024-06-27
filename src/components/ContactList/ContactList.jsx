import { useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { InfinitySpin } from "react-loader-spinner";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectIsError);

  return (
    <>
      <ul className="divide-y divide-gray-200 mx-auto max-w-md">
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
      {loading && (
        <div className="flex justify-center items-center h-48">
          <InfinitySpin
            visible={true}
            width={80}
            color="#EF4444"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
    </>
  );
};
