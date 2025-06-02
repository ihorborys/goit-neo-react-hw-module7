import styles from "./Contact.module.css";
import { LuUser } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteSelectedContact = (contactId) => {
    dispatch(deleteContact(contactId));
    console.log(contactId);
  };

  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className={styles.listItemIconContainer}>
            <LuUser className={styles.listItemIcon} size="16" />
          </p>
          <p>{name}</p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listItemIconContainer}>
            <LuPhone className={styles.listItemIcon} size="16" />
          </p>
          <p>{number}</p>
        </li>
      </ul>
      <button
        className={styles.listItemButton}
        type="submit"
        onClick={() => {
          deleteSelectedContact(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
