import { useSelector } from "react-redux";
import { ContactItem } from "../ContactItem/ContactItem";
import { InfinitySpin } from "react-loader-spinner";
import {
  selectFilteredContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contactsSlice";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <>
      <ul className="divide-y divide-gray-200 mx-auto max-w-md">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} id={contact.id} />
          ))
        ) : (
          <li className="py-4 text-gray-500 text-center">No contacts found</li>
        )}
      </ul>
      {loading && (
        <div className="flex justify-center items-center h-48">
          <InfinitySpin
            visible={true}
            width={80}
            color="#EF4444" // Adjusted color for InfinitySpin
            ariaLabel="infinity-spin-loading"
          />
        </div>
      )}
      {error && (
        <p className="text-red-500 text-center">Error loading contacts.</p>
      )}
    </>
  );
};
