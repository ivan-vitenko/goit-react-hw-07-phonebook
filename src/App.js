import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
  return (
    <div className="container">
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      {/* {Boolean(contacts.length) && ( */}
      <div className="contacts">
        <Filter />
        <ContactList />
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
