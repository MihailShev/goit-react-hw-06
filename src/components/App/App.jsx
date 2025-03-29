import { useEffect, useState } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  // ContactList => Contact
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("save-contacts");

    if (saveContacts !== null) {
      const parseContacts = JSON.parse(saveContacts);
      if (parseContacts.length > 0) {
        return parseContacts;
      }
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const addContact = (contact) => {
    setContacts((prevContact) => {
      return [...prevContact, contact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) =>
      prevContact.filter((contacts) => contacts.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem("save-contacts", JSON.stringify(contacts));
  }, [contacts]);

  // SearchBox
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (newValue) => setFilterValue(newValue);

  const handleReset = () => setFilterValue("");

  const filtervisible = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
      contact.number.includes(filterValue)
  );

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <SearchBox
        onReset={handleReset}
        value={filterValue}
        onChange={handleChange}
      />

      <ContactList contacts={filtervisible} onClick={deleteContact} />
    </>
  );
}

export default App;
