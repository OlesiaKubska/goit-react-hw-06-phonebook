import { nanoid } from 'nanoid';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: "",
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.contacts.push(action.payload);
            },
            prepare: (name, number) => ({
                payload: {
                    name,
                    number,
                    id: nanoid(),
                }
            }),
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        setContacts: (state, action) => {
            state.contacts = action.payload;
        }
    },
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;