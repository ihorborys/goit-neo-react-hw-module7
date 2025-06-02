import { createSlice } from "@reduxjs/toolkit";
import { getContactsThunk } from "./contactsOps.js";
// import defaultContacts from "../../src/components/defaultContacts.json";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(getContactsThunk.rejected, (state, payload) => {
        state.error = payload.error.message;
        // console.log("state.error", state.error);
        // console.log(payload.error);
        // state.error = true;
        state.loading = false;
      });
  },
});

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
// });

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
