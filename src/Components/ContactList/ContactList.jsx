import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { getvisibleContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const visibleContacts = useSelector(getvisibleContacts);
  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(({ name, id, number }) => (
        <li className={css.contactsItem} key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};
