import { ContactList, SearchBar, ContactForm } from "components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-center mt-8 text-3xl font-bold">Contact Directory</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
