import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6839987e6561b8d882b0fcda.mockapi.io/";

export const getContactsThunk = createAsyncThunk(
  "contacts/get-all",
  async () => {
    const { data } = await axios("Contacts");
    return data;
  },
);
