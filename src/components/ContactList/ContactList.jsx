import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../../redux/contactsOps.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchedContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log(contacts);

  // const searchedContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filterName.toLowerCase()),
  // );

  //
  // console.log(searchedContacts);

  // const searchedContacts = selectFilteredContacts();
  console.log(selectFilteredContacts);

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
