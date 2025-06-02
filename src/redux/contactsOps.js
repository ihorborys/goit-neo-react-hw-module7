import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6839987e6561b8d882b0fcda.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const { data } = await axios("Contacts");
  return data;
});

export const addContact = createAsyncThunk("contacts/addContact", async () => {
  const { data } = await axios.post("Contact");
  return data;
});

// export const deleteContact = createAsyncThunk("contacts/deleteContact, async () => {
//   const { data } = await axios("Contacts");
//   return data;
// });
