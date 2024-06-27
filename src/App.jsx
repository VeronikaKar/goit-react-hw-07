import { ContactList, SearchBar, ContactForm } from "components";


const App = () => {
  return (
    <div>
      <h1>Contact Directory</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
