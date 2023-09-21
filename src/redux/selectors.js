import { createSelector } from "@reduxjs/toolkit";

// Селектор для отримання всіх контактів
export const selectAllContacts = (state) => state.contacts;

// Селектор для отримання поточного фільтра
export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = createSelector(
    [selectAllContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter((contact) => 
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);