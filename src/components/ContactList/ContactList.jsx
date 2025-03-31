import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  const handleDelete = (id) => {
    const deleteAction = deleteContact(id);
    dispatch(deleteAction);
  };
  return (
    <ul className={css.list_contact}>
      {visibleContacts.map((contact) => (
        <li className={css.item_contact} key={contact.id}>
          <Contact contacts={contact} onClick={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
