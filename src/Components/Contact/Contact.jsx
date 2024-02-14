import { useDispatch } from "react-redux";
import css from "../Contact/Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        className={css.contactButton}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
