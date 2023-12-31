import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6549482bdd8ebcd4ab246fab.mockapi.io"
export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_,thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (itemId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${itemId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    } 
);


// fetchContacts - одержання масиву контактів (метод GET) запитом. 
// Базовий тип екшену "contacts/fetchAll".

// addContact - додавання контакту (метод POST). 
// Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE).
//  Базовий тип екшену "contacts/deleteContact".