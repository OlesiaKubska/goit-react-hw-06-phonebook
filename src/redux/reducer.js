import { createSlice } from '@reduxjs/toolkit';

// Контакти ред'юсер
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
        state.push(action.payload);
        },
        deleteContact: (state, action) => {
        return state.filter(contact => contact.id !== action.payload.id);
        },
        setContacts: (state, action) => {
        return action.payload;
        }
    }
});

// Фільтр ред'юсер
const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        setFilter: (state, action) => action.payload,
    }
});

export const { addContact, deleteContact, setContacts } = contactsSlice.actions;
export const { setFilter } = filterSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;