import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../../redux/contactsOps.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={styles.list}>
        {searchedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.Number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
