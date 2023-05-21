import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64635cbe4dca1a66135b925a.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
     const response = await axios.get("/contacts");
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});
export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
  try {
     const response = await axios.post("/contacts", newContact);
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});
export const deleteContact = createAsyncThunk("contacts/deleteContact ", async (contact, thunkAPI) => {
  try {
     const response = await axios.delete(`/contacts/${contact.id}`);
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});


