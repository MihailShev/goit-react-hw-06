import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onClick }) {
  return (
    <ul className={css.list_contact}>
      {contacts.map((contact) => (
        <li className={css.item_contact} key={contact.id}>
          <Contact contacts={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
