import React, { useEffect } from "react";
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setContacts } from "redux/contactsSlice";
import { setFilter } from "redux/filterSlice";
import { selectFilteredContacts } from "redux/selectors";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import contactsData from "./contacts.json";
import { Section } from "./Section/Section";
import { Header } from "./Header/Header";
import { AppContainer } from "./AppContainer/AppContainer";

export const App = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(setContacts(contactsData));
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    const normalizedFilter = name.toLowerCase();
    const isContactExist = filteredContacts.some(contact => contact.name.toLowerCase() === normalizedFilter);

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    
    const newContact = { name, number, id: nanoid() };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact({ id }));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <AppContainer>
      <Section title="Phone Book">
        <ContactForm addContact={handleAddContact} />
        <Header title="Contacts" />
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </Section>
    </AppContainer>
  );
};